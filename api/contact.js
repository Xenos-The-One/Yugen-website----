// Vercel serverless function: emails contact + onboarding form submissions from your own
// Google Workspace mailbox over SMTP.
// Env: SMTP_USER (e.g. thailer@raindropmarketingcom.com), SMTP_PASS (a Google app password),
// optional CONTACT_TO, SMTP_HOST, SMTP_PORT.
import { emailConfigured, sendEmail } from './_lib/notify.js'

const FORMS = { contact: 'New website inquiry', onboarding: 'New client onboarding' }
const MAX_FIELD = 5000

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!emailConfigured()) return res.status(500).json({ error: 'Email is not configured' })

  const { form, fields } = req.body || {}
  if (!FORMS[form] || !fields || typeof fields !== 'object') return res.status(400).json({ error: 'Invalid form' })

  // Honeypot field from the contact form: people never see it, so a value means a bot. Pretend success.
  if (fields.company_url) return res.status(200).json({ ok: true })

  const entries = Object.entries(fields)
    .filter(([k]) => k !== 'company_url')
    .slice(0, 30)
    .map(([k, v]) => [String(k).slice(0, 80), (Array.isArray(v) ? v.join(', ') : String(v ?? '')).slice(0, MAX_FIELD)])
  const get = (key) => entries.find(([k]) => k === key)?.[1] || ''
  const email = get('Email')
  if (!get('Name') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Name and a valid email are required' })

  try {
    await sendEmail({ subject: `${FORMS[form]} - ${get('Business') || get('Name')}`, heading: FORMS[form], rows: entries, replyTo: email })
  } catch (err) {
    console.error('SMTP send failed', err)
    return res.status(502).json({ error: 'Could not send email' })
  }
  return res.status(200).json({ ok: true })
}
