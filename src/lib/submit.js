// Posts a form to the site's own /api/contact function, which emails it over SMTP.
export async function submitForm(form, fields) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form, fields }),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.error || `Form failed (${res.status})`)
  }
}
