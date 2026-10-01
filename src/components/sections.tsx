import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Button, CheckList, Container, Eyebrow, Glow, Reveal, SectionHeading } from './ui'
import { ServiceIcon, type IconName } from './ServiceIcon'
import { site, testimonials } from '../content/site'

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-backdrop absolute inset-0" />
      <Glow className="-top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 bg-jade/15" />
      <Glow className="top-40 -left-40 h-[380px] w-[380px] bg-iris/15" />
    </div>
  )
}

export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function RevealLine({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-2">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function PageHero({ eyebrow, title, accent, body, cta = true }: { eyebrow: string; title: string; accent: string; body: string; cta?: boolean }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
      <Backdrop />
      <Container className="relative text-center">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-5xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          <RevealLine delay={0.05}>{title}</RevealLine>
          <RevealLine delay={0.15}>
            <span className="text-gradient">{accent}</span>
          </RevealLine>
        </h1>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{body}</p>
        </Reveal>
        {cta && (
          <Reveal delay={0.4} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to={site.bookingUrl}>Book a Strategy Call</Button>
          </Reveal>
        )}
      </Container>
    </section>
  )
}

export function Marquee({ items, reverse = false }: { items: ReactNode[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask flex overflow-hidden">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0" aria-hidden={i >= items.length || undefined}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialMarquee() {
  if (testimonials.length === 0) return null
  const card = (t: (typeof testimonials)[number]) => (
    <figure className="w-[340px] rounded-2xl border border-white/10 bg-surface p-6">
      <blockquote className="text-white/80">“{t.quote}”</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold">{t.name}</span> <span className="text-white/40">· {t.role}</span>
      </figcaption>
    </figure>
  )
  return (
    <section className="py-24">
      <SectionHeading eyebrow="Client Results" title="Businesses Grow With" accent="Yūgen" />
      <div className="mt-14 space-y-4">
        <Marquee items={testimonials.map(card)} />
        <Marquee items={[...testimonials].reverse().map(card)} reverse />
      </div>
    </section>
  )
}

export function FeatureBlock({
  eyebrow,
  title,
  accent,
  body,
  bullets,
  cta,
  to,
  mock,
  flip = false,
}: {
  eyebrow: string
  title: string
  accent: string
  body: string
  bullets: string[]
  cta: string
  to: string
  mock: ReactNode
  flip?: boolean
}) {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-jade">{eyebrow}</p>
        <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
          <br />
          <span className="text-gradient">{accent}</span>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-white/60">{body}</p>
        <div className="mt-7">
          <CheckList items={bullets} />
        </div>
        <Button to={to} variant="ghost" className="mt-9">{cta}</Button>
      </Reveal>
      <Reveal delay={0.15} className={`relative ${flip ? 'lg:order-1' : ''}`}>
        <Glow className="inset-10 bg-jade/10" />
        <div className="relative">{mock}</div>
      </Reveal>
    </div>
  )
}

export function IconCard({ icon, title, body, delay = 0 }: { icon: IconName; title: string; body: string; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-3xl border border-white/10 bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-jade/40 hover:bg-surface">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-jade/10 text-jade transition-colors group-hover:bg-jade group-hover:text-ink">
          <ServiceIcon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-white/55">{body}</p>
      </div>
    </Reveal>
  )
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08} className="h-full">
          <div className="relative h-full rounded-3xl border border-white/10 bg-surface/60 p-7">
            <span className="font-display text-5xl font-extrabold text-white/[0.07]">0{i + 1}</span>
            <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-white/55">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-surface/60">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold sm:px-8"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {f.q}
            <Plus className={`h-5 w-5 shrink-0 text-jade transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 leading-relaxed text-white/60 sm:px-8">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export function FaqSection({ faqs, title = 'Questions,', accent = 'Answered.' }: { faqs: { q: string; a: string }[]; title?: string; accent?: string }) {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          center={false}
          eyebrow="Got Questions?"
          title={title}
          accent={accent}
          body="Everything you need to know about working with Yūgen. Still curious? Ask us on a call."
        />
        <Reveal delay={0.1}>
          <FaqAccordion faqs={faqs} />
        </Reveal>
      </Container>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface px-6 py-20 text-center sm:px-12">
        <Glow className="-top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 bg-jade/25" />
        <Glow className="-bottom-40 right-0 h-80 w-80 bg-iris/20" />
        <div className="grid-backdrop absolute inset-0 opacity-60" />
        <div className="relative">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Ready to Be <span className="text-gradient">Found First?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
            We'll walk you through what we'd build for your business, where your leads are leaking, and what it would take to fix it. No pressure, no long-term contracts.
          </p>
          <Button to={site.bookingUrl} className="mt-10">Book Your Strategy Call</Button>
        </div>
      </Reveal>
    </section>
  )
}
