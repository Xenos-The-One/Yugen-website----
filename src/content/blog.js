import aiAndSeo from './posts/ai-and-seo'
import contentAndWebsites from './posts/content-and-websites'
import leadsAndGrowth from './posts/leads-and-growth'
import { site } from './site'

export const author = {
  name: site.founder.name,
  role: 'Founder, Yugen Systems',
  bio: `${site.founder.name} is the founder of Yugen Systems, helping businesses get found on Google and in AI search, and building the websites, content and automated lead systems that turn that visibility into booked customers.`,
}

export const categories = [
  'All',
  'AI Search',
  'SEO',
  'Content',
  'Websites',
  'Lead Capture',
  'Automation',
  'Paid Ads',
  'Reputation',
  'Marketing',
  'Our Service',
]

const PUBLISHED = '2026-10-01T12:00:00'

const readTime = (content) => {
  const words = content.join(' ').split(/\s+/).length
  return `${Math.max(2, Math.round(words / 200))} min read`
}

export const posts = [...aiAndSeo, ...contentAndWebsites, ...leadsAndGrowth].map((p) => ({
  ...p,
  metaTitle: `${p.title} | Yugen Systems`,
  image: `/blog/${p.slug}.svg`,
  date: PUBLISHED,
  readTime: readTime(p.content),
}))
