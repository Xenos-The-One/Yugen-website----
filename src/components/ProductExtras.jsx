import { Head } from 'vite-react-ssg'
import { ArrowRight } from 'lucide-react'
import { CardGrid, Chips, ClosingCta, Faqs, Section, SectionHeading } from '@/components/LandingParts'
import { breadcrumbJsonLd, faqJsonLd, providerRef } from '@/components/Seo'
import { productExtras } from '@/content/productExtras'
import { serviceDetails } from '@/content/serviceDetails'
import { industryBySlug } from '@/content/industries'
import { posts } from '@/content/blog'
import { site } from '@/content/site'

// Service detail, FAQ, related trades and related reading for the bottom of a product page, plus its Service schema.
export function ProductExtras({ path }) {
  const p = productExtras[path]
  if (!p) return null
  const d = serviceDetails[path]
  const trades = p.trades.map((slug) => industryBySlug[slug]).filter(Boolean)
  const reading = p.posts.map((slug) => posts.find((x) => x.slug === slug)).filter(Boolean)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: p.name,
      url: `${site.url}${path}`,
      provider: providerRef,
      ...(d && { description: d.explainer.paragraphs[0] }),
      areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    },
    faqJsonLd(p.faqs),
    breadcrumbJsonLd([['Products', '/products'], [p.name, path]]),
  ]
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      {d && (
        <>
          <Section>
            <SectionHeading title={d.explainer.title} accent={d.explainer.accent} />
            <div className="max-w-3xl mx-auto space-y-5 text-lg text-white/70 leading-relaxed">
              {d.explainer.paragraphs.map((t) => (
                <p key={t.slice(0, 40)}>{t}</p>
              ))}
            </div>
          </Section>
          <Section alt>
            <SectionHeading title="What's" accent="included" />
            <CardGrid items={d.included} columns="md:grid-cols-2 lg:grid-cols-3" />
          </Section>
          <Section>
            <SectionHeading title="How it" accent="works" />
            <CardGrid items={d.steps} columns="md:grid-cols-2 lg:grid-cols-4" />
          </Section>
          {d.timeline && (
            <Section alt>
              <SectionHeading title="What to" accent="expect" />
              <CardGrid items={d.timeline} columns="md:grid-cols-3" />
            </Section>
          )}
          <Section>
            <p className="max-w-3xl mx-auto text-center text-lg text-white/70 leading-relaxed">
              {d.pricing}{' '}
              <a href="/pricing" className="text-primary font-bold hover:underline">
                See full pricing
              </a>
            </p>
          </Section>
        </>
      )}
      <Section alt>
        <SectionHeading title="Common" accent="questions" />
        <Faqs faqs={p.faqs} />
      </Section>
      {trades.length > 0 && (
        <Section>
          <SectionHeading title="Popular with" accent="trades like yours" />
          <Chips items={trades.map((t) => t.name)} hrefs={trades.map((t) => `/industries/${t.slug}`)} />
        </Section>
      )}
      {reading.length > 0 && (
        <Section alt>
          <SectionHeading title="Related" accent="reading" />
          <CardGrid
            columns={reading.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}
            items={reading.map((r) => ({ title: r.title, text: r.excerpt, href: `/blog/${r.slug}` }))}
          />
          <div className="text-center mt-10">
            <a href="/pricing" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              See pricing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Section>
      )}
      <ClosingCta
        title={`Put ${p.name} to work`}
        text="Book a free strategy call. We'll look at how you handle leads today and show you exactly what we'd set up."
      />
    </>
  )
}
