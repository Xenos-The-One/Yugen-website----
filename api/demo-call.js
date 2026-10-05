// Twilio voice webhook for the missed-call demo line. The caller hears about three rings that
// nobody answers, the call ends, and they get the text a contractor's customer would receive.
// In Twilio, point both of the demo number's voice webhooks (HTTP POST) here:
//   "A call comes in"     https://www.raindropmarketing.ca/api/demo-call
//   "Call status changes" https://www.raindropmarketing.ca/api/demo-call
import { isFromTwilio, sendSms, twiml } from './_lib/notify.js'
import { site } from '../src/content/site.js'

// Plain ASCII keeps this in cheaper GSM-7 SMS segments.
const DEMO_TEXT =
  `Hi, this is ${site.name}. Sorry we missed your call! ` +
  "This is our missed-call demo: it's the text your customers would get from your business seconds after you miss their call. " +
  `Want it set up for you? Book a free call at ${site.url} or reply here. Reply STOP to opt out.`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!isFromTwilio(req)) return res.status(403).end()

  // Status callback: send the text once the call has ended, even if they hung up mid-ring.
  if (req.body?.CallStatus === 'completed') {
    const caller = req.body?.From
    if (caller && /^\+\d{8,15}$/.test(caller)) {
      try {
        await sendSms(caller, DEMO_TEXT)
      } catch (err) {
        console.error('Demo text failed', err)
      }
    }
    return res.status(204).end()
  }

  return twiml(res, `<Play>${site.url}/ringback.wav</Play><Hangup/>`)
}
