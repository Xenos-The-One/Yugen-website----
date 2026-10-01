import { Link, useParams } from 'react-router-dom'
import { Seo, faqJsonLd } from '../components/Seo'
import { Button, CheckList, Container, Eyebrow, Glow, Reveal, SectionHeading } from '../components/ui'
import { Backdrop, CtaBand, FaqSection, RevealLine, Steps } from '../components/sections'
import { MockFor } from '../components/mocks'
import { ServiceIcon } from '../components/ServiceIcon'
import { serviceBySlug, services } from '../content/services'
import { site } from '../content/site'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = serviceBySlug(slug)
  if (!s) return <NotFound />
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={s.name}
        description={`${s.short} ${s.intro}`.slice(0, 158)}
        path={`/services/${s.slug}`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.name,
            description: s.intro,
            provider: { '@type': 'ProfessionalService', name: site.name, url: site.url },
          },
          faqJsonLd(s.faqs),
        ]}
      />

      <section className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
        <Backdrop />
        <Container className="relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>{s.eyebrow}</Eyebrow>
            </Reveal>
            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              <RevealLine delay={0.05}>{s.headline[0]}</RevealLine>
              <RevealLine delay={0.15}>
                <span className="text-gradient">{s.headline[1]}</span>
              </RevealLine>
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{s.intro}</p>
            </Reveal>
            <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-4">
              <Button to={site.bookingUrl}>Book a Strategy Call</Button>
              <Button to="/pricing" variant="ghost">See Pricing</Button>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="relative">
            <Glow className="inset-10 bg-jade/15" />
            <div className="relative">
              <MockFor kind={s.mock} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading center={false} eyebrow="What You Get" title="Everything Included" accent={`in ${s.name}.`} />
          <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-surface/60 p-8">
            <CheckList items={s.bullets} />
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="The Process" title="How We" accent="Deliver." />
          <div className="mt-14">
            <Steps steps={s.process} />
          </div>
        </Container>
      </section>

      <FaqSection faqs={s.faqs} />

      <section className="pb-24">
        <Container>
          <Reveal>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Pairs well with</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-jade/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-jade/10 text-jade">
                  <ServiceIcon name={o.icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold">{o.name}</span>
                  <span className="block text-sm text-white/50">{o.short}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
