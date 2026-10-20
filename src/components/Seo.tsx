import { Head } from 'vite-react-ssg'
import { site } from '../content/site'

type Props = {
  title: string
  description: string
  path: string
  jsonLd?: object | object[]
  // Long titles (blog posts) skip the " | Raindrop Marketing" suffix so search results don't cut them off.
  brand?: boolean
  // Site-relative social share image; defaults to the brand card.
  image?: string
  type?: 'website' | 'article'
}

export function Seo({ title, description, path, jsonLd, brand = true, image = '/og-image.png', type = 'website' }: Props) {
  const url = `${site.url}${path}`
  const fullTitle = path === '/' || !brand ? title : `${title} | ${site.name}`
  return (
    <Head>
      <html lang="en-CA" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  )
}

const sameAs = [site.googleBusinessProfile, ...Object.values(site.social)].filter(Boolean)
const orgId = `${site.url}/#organization`
const address = { '@type': 'PostalAddress', ...site.address }
const founderId = `${site.url}/about#founder`

// Reference to the business from Service and article schema on other pages.
export const providerRef = { '@type': 'ProfessionalService', '@id': orgId, name: site.name, url: site.url, address }

export const founderJsonLd = {
  '@type': 'Person',
  '@id': founderId,
  name: site.founder.name,
  jobTitle: 'Founder',
  worksFor: { '@id': orgId },
  url: `${site.url}/about`,
  ...(site.founder.photo && { image: `${site.url}${site.founder.photo}` }),
  ...(site.founder.sameAs.length && { sameAs: site.founder.sameAs }),
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { '@id': orgId },
  inLanguage: 'en-CA',
}

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': orgId,
  name: site.name,
  url: site.url,
  email: site.email,
  address,
  ...(site.phoneHref && { telephone: site.phoneHref.replace('tel:', '') }),
  founder: founderJsonLd,
  areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  // Keep in sync with the Google Business Profile hours.
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '20:00',
  },
  logo: `${site.url}/raindrop-mark.png`,
  image: `${site.url}/og-image.png`,
  ...(sameAs.length && { sameAs }),
  description:
    'Raindrop Marketing builds AI-driven growth systems: SEO, AI search optimization, content, websites, ads and automated lead follow-up.',
  knowsAbout: ['AI SEO', 'Search Engine Optimization', 'Content Marketing', 'Lead Generation', 'Web Design', 'Paid Advertising'],
}

export function breadcrumbJsonLd(items: [name: string, path: string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'] as [string, string], ...items].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${site.url}${path}`,
    })),
  }
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
