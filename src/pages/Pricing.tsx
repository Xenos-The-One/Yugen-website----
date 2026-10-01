import { Seo } from '../components/Seo'
import { Button, CheckList, Container, Reveal } from '../components/ui'
import { CtaBand, FaqSection, PageHero } from '../components/sections'
import { site } from '../content/site'
import { homeFaqs } from '../content/home'

// Placeholder pricing: replace `price` values once tiers are set.
const tiers = [
  {
    name: 'Foundation',
    price: 'Custom',
    blurb: 'Get found and stop losing leads.',
    features: ['Conversion-built website', 'Local SEO & Google Business Profile', 'Missed-call text back', 'AI website chat', 'Monthly report'],
  },
  {
    name: 'Growth',
    price: 'Custom',
    blurb: 'Rank, get cited by AI and follow up automatically.',
    features: ['Everything in Foundation', 'SEO + AI SEO', 'Monthly content program', 'Automated SMS & email follow-up', 'Review generation system'],
    featured: true,
  },
  {
    name: 'Full System',
    price: 'Custom',
    blurb: 'Every channel, run as one system.',
    features: ['Everything in Growth', 'Google & Meta ads management', 'Database reactivation campaigns', 'Dedicated strategist', 'Bi-weekly strategy calls'],
  },
]

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Simple month-to-month plans for SEO, AI SEO, content, ads, websites and automated lead systems. No long-term contracts."
        path="/pricing"
      />
      <PageHero
        eyebrow="Pricing"
        title="Simple Plans."
        accent="No Long-Term Contracts."
        body="Every business is different, so we quote after a quick strategy call. Here's what each plan includes."
        cta={false}
      />
      <section className="pb-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  t.featured ? 'border-jade/50 bg-surface shadow-[0_0_80px_-30px] shadow-jade' : 'border-white/10 bg-surface/60'
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-jade px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold">{t.name}</h2>
                <p className="mt-1 text-white/55">{t.blurb}</p>
                <p className="mt-6 font-display text-4xl font-extrabold">{t.price}</p>
                <p className="text-sm text-white/40">month to month</p>
                <div className="mt-8 flex-1">
                  <CheckList items={t.features} />
                </div>
                <Button to={site.bookingUrl} variant={t.featured ? 'primary' : 'ghost'} className="mt-10 w-full">
                  Get a Quote
                </Button>
              </div>
            </Reveal>
          ))}
        </Container>
        <Container>
          <Reveal className="mt-8 rounded-3xl border border-dashed border-white/15 p-6 text-center text-white/60">
            Need just one service, like a new website or an ads campaign? Every service is also available on its own.
          </Reveal>
        </Container>
      </section>
      <FaqSection faqs={homeFaqs} />
      <CtaBand />
    </>
  )
}
