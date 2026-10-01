import { site } from '@/content/site'

// Emails the form to site.formRecipient through FormSubmit's AJAX endpoint; throws if it isn't delivered.
export async function submitForm(subject, fields) {
  const payload = Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : v || '-']),
  )
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.formRecipient)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...payload,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _replyto: fields.Email,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || `Form failed (${res.status})`)
}
