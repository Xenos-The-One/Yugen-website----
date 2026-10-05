// Twilio voice webhook for the missed-call demo line. Calls ring the founder's mobile
// (LEAD_ALERT_PHONE) for RING_SECONDS; if nobody picks up, the caller gets the text a
// contractor's customer would receive. Without LEAD_ALERT_PHONE it plays recorded ringing instead.
// Point the demo number's "A call comes in" webhook (HTTP POST) at https://www.raindropmarketing.ca/api/demo-call
import { waitUntil } from '@vercel/functions'
import { isFromTwilio, sendSms, twiml } from './_lib/notify.js'
import { site } from '../src/content/site.js'

// Short enough that the call ends before most voicemail greetings pick up; an answered
// voicemail counts as answered and no text would be sent.
const RING_SECONDS = 15
// Length of public/ringback.wav, used only when there is no phone to forward to.
const RINGBACK_MS = 14000

// Plain ASCII keeps this in cheaper GSM-7 SMS segments.
const DEMO_TEXT =
  `Hi, this is ${site.name}. Sorry we missed your call! ` +
  "This is our missed-call demo: it's the text your customers would get from your business seconds after you miss their call. " +
  `Want it set up for you? Book a free call at ${site.url} or reply here. Reply STOP to opt out.`

const isPhone = (n) => typeof n === 'string' && /^\+\d{8,15}$/.test(n)

async function textCaller(caller) {
  try {
    await sendSms(caller, DEMO_TEXT)
  } catch (err) {
    console.error('Demo text failed', err)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!isFromTwilio(req)) return res.status(403).end()

  const caller = req.body?.From
  const forwardTo = process.env.LEAD_ALERT_PHONE

  // Twilio calls back here when the forwarded call ends; text them unless it was answered.
  if (req.body?.DialCallStatus) {
    if (req.body.DialCallStatus !== 'completed' && isPhone(caller)) await textCaller(caller)
    return twiml(res, '<Hangup/>')
  }

  if (isPhone(forwardTo)) {
    return twiml(
      res,
      `<Dial timeout="${RING_SECONDS}" action="${site.url}/api/demo-call" method="POST"><Number>${forwardTo}</Number></Dial>`,
    )
  }

  if (isPhone(caller)) waitUntil(new Promise((r) => setTimeout(r, RINGBACK_MS)).then(() => textCaller(caller)))
  return twiml(res, `<Play>${site.url}/ringback.wav</Play><Hangup/>`)
}
