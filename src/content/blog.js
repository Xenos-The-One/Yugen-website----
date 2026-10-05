import aiAndSeo from './posts/ai-and-seo'
import contentAndWebsites from './posts/content-and-websites'
import leadsAndGrowth from './posts/leads-and-growth'
import { site } from './site'

export const author = {
  name: site.founder.name,
  role: 'Founder, Raindrop Marketing',
  bio: `${site.founder.name} is the founder of Raindrop Marketing, helping businesses get found on Google and in AI search, and building the websites, content and automated lead systems that turn that visibility into booked customers.`,
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

// Publish dates, roughly one post a week.
const published = {
  'what-is-ai-seo': '2026-03-10',
  'speed-to-lead': '2026-03-19',
  'local-seo-guide': '2026-03-25',
  'website-that-converts': '2026-03-31',
  'missed-call-text-back': '2026-04-09',
  'google-business-profile-optimization': '2026-04-15',
  'how-ai-assistants-choose-businesses': '2026-04-21',
  'how-often-should-a-business-blog': '2026-04-29',
  'google-reviews-and-ai-search': '2026-05-07',
  'website-speed-costs-customers': '2026-05-12',
  'schema-markup-explained': '2026-05-20',
  'automated-follow-up': '2026-05-26',
  'keyword-research-for-small-business': '2026-06-04',
  'ai-website-chat-vs-contact-forms': '2026-06-10',
  'google-ai-overviews-explained': '2026-06-16',
  'content-strategy-when-you-are-busy': '2026-06-25',
  'google-ads-vs-seo': '2026-06-30',
  'technical-seo-basics': '2026-07-08',
  'signs-your-website-needs-a-rebuild': '2026-07-16',
  'what-is-llms-txt': '2026-07-22',
  'database-reactivation': '2026-07-28',
  'how-long-does-seo-take': '2026-08-06',
  'ai-written-content-that-ranks': '2026-08-12',
  'track-ads-to-revenue': '2026-08-18',
  'internal-linking-strategy': '2026-08-26',
  'are-email-newsletters-worth-it': '2026-09-03',
  'ai-seo-vs-traditional-seo': '2026-09-08',
  'how-to-choose-a-marketing-agency': '2026-09-16',
  'updating-old-content': '2026-09-22',
  'what-you-get-with-raindrop': '2026-10-01',
}

const readTime = (content) => {
  // Image lines don't count toward reading time.
  const words = content.filter((l) => !l.startsWith('![')).join(' ').split(/\s+/).length
  return `${Math.max(2, Math.round(words / 200))} min read`
}

export const posts = [...aiAndSeo, ...contentAndWebsites, ...leadsAndGrowth].map((p) => ({
  ...p,
  metaTitle: `${p.title} | Raindrop Marketing`,
  image: `/blog/img/${p.slug}-cover.webp`,
  date: `${published[p.slug]}T12:00:00`,
  readTime: readTime(p.content),
})).sort((a, b) => b.date.localeCompare(a.date))
