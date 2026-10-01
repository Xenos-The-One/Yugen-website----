import { site } from '@/content/site'

// Sends form data to site.formEndpoint (Formspree-style JSON endpoint) or, if none is set, opens an email.
export async function submitForm(subject, fields) {
  if (site.formEndpoint) {
    const res = await fetch(site.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: subject, ...fields }),
    })
    if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`)
    return
  }
  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v || '-'}`)
    .join('\n')
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
