import { Head } from 'vite-react-ssg'
import { ArrowRight } from 'lucide-react'
import { CardGrid, Chips, ClosingCta, Faqs, Section, SectionHeading } from '@/components/LandingParts'
import { faqJsonLd } from '@/components/Seo'
import { productExtras } from '@/content/productExtras'
import { industryBySlug } from '@/content/industries'
import { posts } from '@/content/blog'
import { site } from '@/content/site'

// FAQ, related trades and related reading for the bottom of a product page, plus its Service schema.
export function ProductExtras({ path }) {
  const p = productExtras[path]
  if (!p) return null
  const trades = p.trades.map((slug) => industryBySlug[slug]).filter(Boolean)
  const reading = p.posts.map((slug) => posts.find((x) => x.slug === slug)).filter(Boolean)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: p.name,
      url: `${site.url}${path}`,
      provider: { '@type': 'ProfessionalService', name: site.name, url: site.url },
      areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    },
    faqJsonLd(p.faqs),
  ]
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
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
