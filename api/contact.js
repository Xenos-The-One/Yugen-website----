// Vercel serverless function: emails contact + onboarding form submissions via Resend.
// Env: RESEND_API_KEY (required), CONTACT_TO, RESEND_FROM (a sender on a domain verified in Resend).

const TO = process.env.CONTACT_TO || 'thailer@yugensystem.com'
const FROM = process.env.RESEND_FROM || 'Yugen Systems Website <forms@yugensystem.com>'
const FORMS = { contact: 'New website inquiry', onboarding: 'New client onboarding' }
const MAX_FIELD = 5000

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.RESEND_API_KEY) return res.status(500).json({ error: 'Email is not configured' })

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
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111"><h2 style="margin:0 0 12px">${escape(FORMS[form])}</h2><table style="border-collapse:collapse;width:100%;max-width:640px">${rows}</table></div>`
  const text = entries.map(([k, v]) => `${k}: ${v || '-'}`).join('\n')

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: email, subject: `${FORMS[form]} - ${who}`, html, text }),
  })
  if (!r.ok) {
    console.error('Resend error', r.status, await r.text())
    return res.status(502).json({ error: 'Could not send email' })
  }
  return res.status(200).json({ ok: true })
}
