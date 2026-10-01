import { useState, type FormEvent } from 'react'
import { CalendarCheck, Mail, Phone } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Reveal } from '../components/ui'
import { PageHero } from '../components/sections'
import { site } from '../content/site'
import { services } from '../content/services'

const field =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-jade/60'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!site.formEndpoint) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Strategy call request')}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo title="Contact" description="Book a free strategy call with Yugen Systems. We'll show you where your leads are leaking and what we'd build to fix it." path="/contact" />
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your"
        accent="Growth System."
        body="Tell us a little about your business and we'll reach out to schedule a free 30-minute strategy call."
        cta={false}
      />
      <section className="pb-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-4">
            {[
              { icon: CalendarCheck, title: 'Free strategy call', body: '30 minutes, no pressure, no obligation.' },
              { icon: Mail, title: 'Email', body: site.email, href: `mailto:${site.email}` },
              { icon: Phone, title: 'Phone', body: site.phone },
            ].map(({ icon: Icon, title, body, href }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-jade/10 text-jade">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  {href ? <a href={href} className="text-white/60 hover:text-jade">{body}</a> : <p className="text-white/60">{body}</p>}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            {status === 'sent' ? (
              <div className="rounded-3xl border border-jade/40 bg-surface p-10 text-center">
                <p className="font-display text-2xl font-bold">Thanks, we got it.</p>
                <p className="mt-2 text-white/60">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Your name" className={field} />
                  <input name="business" placeholder="Business name" className={field} />
                  <input name="email" type="email" required placeholder="Email" className={field} />
                  <input name="phone" type="tel" placeholder="Phone" className={field} />
                </div>
                <input name="website" placeholder="Website (if you have one)" className={field} />
                <select name="interest" defaultValue="" className={field}>
                  <option value="" disabled>What are you most interested in?</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name} className="bg-surface">{s.name}</option>
                  ))}
                  <option value="Not sure" className="bg-surface">Not sure yet</option>
                </select>
                <textarea name="message" rows={4} placeholder="Tell us about your goals" className={field} />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-white py-3.5 font-bold text-ink transition-colors hover:bg-jade disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Request My Strategy Call'}
                </button>
                {status === 'error' && (
                  <p className="text-center text-sm text-red-400">Something went wrong. Please email us at {site.email}.</p>
                )}
              </form>
            )}
          </Reveal>
        </Container>
      </section>
    </>
  )
}
