// Shared helpers for the serverless functions. Files under api/_lib are not deployed as endpoints.
// Env:
//   SMTP_USER, SMTP_PASS (Google app password), optional CONTACT_TO, SMTP_HOST, SMTP_PORT
//   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM (e.g. +12892771815)
//   LEAD_ALERT_PHONE (your mobile, e.g. +14375550123) for lead and demo-reply texts
import crypto from 'node:crypto'
import nodemailer from 'nodemailer'

export const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export const emailConfigured = () => Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)

// Emails a table of [label, value] rows to the site owner.
export async function sendEmail({ subject, heading, rows, replyTo }) {
  const { SMTP_USER, SMTP_PASS } = process.env
  const port = Number(process.env.SMTP_PORT || 465)
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
  const html = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;white-space:nowrap">${escape(k)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escape(v || '-')}</td></tr>`,
    )
    .join('')
  await transport.sendMail({
    from: `"Raindrop Marketing Website" <${SMTP_USER}>`,
    to: process.env.CONTACT_TO || SMTP_USER,
    ...(replyTo && { replyTo }),
    subject,
    text: rows.map(([k, v]) => `${k}: ${v || '-'}`).join('\n'),
    html: `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111"><h2 style="margin:0 0 12px">${escape(heading)}</h2><table style="border-collapse:collapse;width:100%;max-width:640px">${html}</table></div>`,
  })
}

// Sends a text from the Twilio number through Twilio's REST API.
export async function sendSms(to, body) {
  const { TWILIO_ACCOUNT_SID: sid, TWILIO_AUTH_TOKEN: token, TWILIO_FROM: from } = process.env
  if (!sid || !token || !from) throw new Error('Twilio is not configured')
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }),
  })
  if (!res.ok) throw new Error(`Twilio send failed (${res.status}): ${await res.text()}`)
}

// Checks X-Twilio-Signature so only Twilio can trigger texts from the webhooks.
// https://www.twilio.com/docs/usage/webhooks/webhooks-security
export function isFromTwilio(req) {
  const token = process.env.TWILIO_AUTH_TOKEN
  const signature = req.headers['x-twilio-signature']
  if (!token || !signature) return false
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const url = `https://${host}${req.url}`
  const params = req.body && typeof req.body === 'object' ? req.body : {}
  const data = Object.keys(params)
    .sort()
    .reduce((acc, k) => acc + k + params[k], url)
  const expected = crypto.createHmac('sha1', token).update(Buffer.from(data, 'utf-8')).digest('base64')
  const a = Buffer.from(expected)
  const b = Buffer.from(String(signature))
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

export const twiml = (res, inner = '') =>
  res.setHeader('Content-Type', 'text/xml').status(200).send(`<?xml version="1.0" encoding="UTF-8"?><Response>${inner}</Response>`)
