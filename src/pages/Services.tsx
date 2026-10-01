import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Reveal } from '../components/ui'
import { CtaBand, PageHero } from '../components/sections'
import { ServiceIcon } from '../components/ServiceIcon'
import { services } from '../content/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="AI SEO, SEO, content creation, automated lead systems, website generation, paid ads and marketing strategy, all run as one connected growth system."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Everything You Need to"
        accent="Grow, Connected."
        body="Pick one service or let us run the whole system. Either way, every piece is built to turn attention into booked revenue."
      />
      <section className="pb-24">
        <Container className="space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0.04 * i}>
              <Link
                to={`/services/${s.slug}`}
                className="group grid items-center gap-6 rounded-3xl border border-white/10 bg-surface/60 p-7 transition-all hover:border-jade/40 hover:bg-surface md:grid-cols-[auto_1fr_auto] md:p-9"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-jade/10 text-jade transition-colors group-hover:bg-jade group-hover:text-ink">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade">{s.eyebrow}</p>
                  <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{s.name}</h2>
                  <p className="mt-2 max-w-2xl text-white/55">{s.intro}</p>
                </div>
                <ArrowRight className="hidden h-6 w-6 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-jade md:block" />
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
