// Vercel serverless function: emails contact + onboarding form submissions from your own
// Google Workspace mailbox over SMTP.
// Env: SMTP_USER (e.g. thailer@yugensystem.com), SMTP_PASS (a Google app password),
// optional CONTACT_TO, SMTP_HOST, SMTP_PORT.
import nodemailer from 'nodemailer'

const FORMS = { contact: 'New website inquiry', onboarding: 'New client onboarding' }
const MAX_FIELD = 5000

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_USER || !SMTP_PASS) return res.status(500).json({ error: 'Email is not configured' })

  const { form, fields } = req.body || {}
  if (!FORMS[form] || !fields || typeof fields !== 'object') return res.status(400).json({ error: 'Invalid form' })

  const entries = Object.entries(fields)
    .slice(0, 30)
    .map(([k, v]) => [String(k).slice(0, 80), (Array.isArray(v) ? v.join(', ') : String(v ?? '')).slice(0, MAX_FIELD)])
  const get = (key) => entries.find(([k]) => k === key)?.[1] || ''
  const email = get('Email')
  if (!get('Name') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Name and a valid email are required' })

  const who = get('Business') || get('Name')
  const rows = entries
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;white-space:nowrap">${escape(k)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escape(v || '-')}</td></tr>`,
    )
    .join('')

  const port = Number(process.env.SMTP_PORT || 465)
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transport.sendMail({
      from: `"Yugen Systems Website" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `${FORMS[form]} - ${who}`,
      text: entries.map(([k, v]) => `${k}: ${v || '-'}`).join('\n'),
      html: `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111"><h2 style="margin:0 0 12px">${escape(FORMS[form])}</h2><table style="border-collapse:collapse;width:100%;max-width:640px">${rows}</table></div>`,
    })
  } catch (err) {
    console.error('SMTP send failed', err)
    return res.status(502).json({ error: 'Could not send email' })
  }
  return res.status(200).json({ ok: true })
}
