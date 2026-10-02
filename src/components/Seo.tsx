import { Head } from 'vite-react-ssg'
import { site } from '../content/site'

type Props = {
  title: string
  description: string
  path: string
  jsonLd?: object | object[]
}

export function Seo({ title, description, path, jsonLd }: Props) {
  const url = `${site.url}${path === '/' ? '' : path}`
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  )
}

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  email: site.email,
  ...(site.phoneHref && { telephone: site.phoneHref.replace('tel:', '') }),
  founder: { '@type': 'Person', name: site.founder.name },
  areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  ...(Object.values(site.social).some(Boolean) && { sameAs: Object.values(site.social).filter(Boolean) }),
  description:
    'Yugen Systems builds AI-driven growth systems: SEO, AI search optimization, content, websites, ads and automated lead follow-up.',
  knowsAbout: ['AI SEO', 'Search Engine Optimization', 'Content Marketing', 'Lead Generation', 'Web Design', 'Paid Advertising'],
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
