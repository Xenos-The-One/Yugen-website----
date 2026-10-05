// Twilio messaging webhook for the demo number: forwards replies to the founder by text and email.
// Twilio handles STOP/START/HELP opt-outs itself; those keywords aren't forwarded.
// Point the demo number's "A message comes in" webhook (HTTP POST) at https://www.raindropmarketing.ca/api/demo-sms
import { emailConfigured, isFromTwilio, sendEmail, sendSms, twiml } from './_lib/notify.js'

const OPT_KEYWORDS = /^(stop|stopall|unsubscribe|cancel|end|quit|start|unstop|help)$/i

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!isFromTwilio(req)) return res.status(403).end()

  const from = String(req.body?.From || '')
  const body = String(req.body?.Body || '').trim().slice(0, 1000)
  if (!body || OPT_KEYWORDS.test(body)) return twiml(res)

  const jobs = []
  if (process.env.LEAD_ALERT_PHONE) jobs.push(sendSms(process.env.LEAD_ALERT_PHONE, `Demo line reply from ${from}: ${body}`.slice(0, 600)))
  if (emailConfigured()) {
    jobs.push(
      sendEmail({
        subject: `Demo line reply from ${from}`,
        heading: 'Reply to the missed-call demo text',
        rows: [
          ['From', from],
          ['Message', body],
        ],
      }),
    )
  }
  const results = await Promise.allSettled(jobs)
  results.filter((r) => r.status === 'rejected').forEach((r) => console.error('Demo reply forward failed', r.reason))
  return twiml(res)
}
