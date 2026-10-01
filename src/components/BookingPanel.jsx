import { CalendarDays, Mail, Video } from 'lucide-react'
import { site } from '@/content/site'

// Only the full appointment-schedule URL can be iframed; short calendar.app.google links refuse framing.
function embedUrl(url) {
  if (!/calendar\.google\.com\/calendar\/appointments\//.test(url)) return null
  const u = new URL(url)
  u.searchParams.set('gv', 'true')
  return u.toString()
}

export function BookingPanel({ frameClassName = '' }) {
  const url = site.bookingUrl
  const embed = url ? embedUrl(url) : null

  if (embed) {
    return (
      <div className={`w-full overflow-hidden bg-white ${frameClassName}`}>
        <iframe title="Book a Google Meet call" src={embed} style={{ width: '100%', height: '100%', minHeight: '720px', border: 'none' }} />
      </div>
    )
  }

  return (
    <div className="w-full min-h-[380px] flex flex-col items-center justify-center text-center gap-6 p-8 sm:p-12">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
        <Video className="w-8 h-8" />
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-white">30-Minute Strategy Call on Google Meet</h3>
      <p className="text-white/60 text-lg max-w-md">
        {url
          ? "Pick a time that works for you. You'll get a Google Meet link in your calendar invite."
          : "Email us with a little about your business and we'll send a Google Meet invite within one business day."}
      </p>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold px-10 h-16 text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all"
        >
          <CalendarDays className="w-5 h-5" /> Pick a Time
        </a>
      ) : (
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent('Strategy call')}`}
          className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold px-10 h-16 text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all"
        >
          <Mail className="w-5 h-5" /> Email {site.email}
        </a>
      )}
    </div>
  )
}
