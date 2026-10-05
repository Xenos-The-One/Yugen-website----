// Twilio voice webhook for the missed-call demo line. The caller hears about three rings that
// nobody answers, the call ends, and they get the text a contractor's customer would receive.
// Point the demo number's "A call comes in" webhook (HTTP POST) at https://www.raindropmarketing.ca/api/demo-call
import { waitUntil } from '@vercel/functions'
import { isFromTwilio, sendSms, twiml } from './_lib/notify.js'
import { site } from '../src/content/site.js'

// Matches the length of public/ringback.wav, so the text lands as the ringing stops.
const RING_MS = 14000

// Plain ASCII keeps this in cheaper GSM-7 SMS segments.
const DEMO_TEXT =
  `Hi, this is ${site.name}. Sorry we missed your call! ` +
  "This is our missed-call demo: it's the text your customers would get from your business seconds after you miss their call. " +
  `Want it set up for you? Book a free call at ${site.url} or reply here. Reply STOP to opt out.`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!isFromTwilio(req)) return res.status(403).end()

  const caller = req.body?.From
  if (caller && /^\+\d{8,15}$/.test(caller)) {
    // Keeps the function alive after responding so the text goes out once the rings finish.
    waitUntil(
      new Promise((r) => setTimeout(r, RING_MS))
        .then(() => sendSms(caller, DEMO_TEXT))
        .catch((err) => console.error('Demo text failed', err)),
    )
  }
  return twiml(res, `<Play>${site.url}/ringback.wav</Play><Hangup/>`)
}
