export type MockKey = 'campaign' | 'rank' | 'ai' | 'content' | 'lead' | 'site' | 'ads'

export type Service = {
  slug: string
  name: string
  short: string
  eyebrow: string
  headline: [string, string]
  intro: string
  bullets: string[]
  process: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  mock: MockKey
  icon: 'Megaphone' | 'Search' | 'Sparkles' | 'PenTool' | 'Zap' | 'LayoutTemplate' | 'Target'
}

export const services: Service[] = [
  {
    slug: 'ai-seo',
    name: 'AI SEO',
    short: 'Get cited by ChatGPT, Perplexity and Google AI Overviews.',
    eyebrow: 'Generative Engine Optimization',
    headline: ['Be the Answer', 'AI Recommends.'],
    intro:
      'Buyers now ask AI before they ask Google. We structure your brand, content and authority signals so answer engines understand who you are, trust you and name you when your customers ask.',
    bullets: [
      'AI visibility audit across ChatGPT, Perplexity, Gemini and AI Overviews',
      'Entity and schema markup so models understand your business',
      'Answer-first content built to be quoted and cited',
      'llms.txt, structured FAQs and citation-worthy data pages',
      'Monthly AI share-of-voice tracking against competitors',
    ],
    process: [
      { title: 'Audit', body: 'We prompt the major AI engines with the questions your buyers ask and record who gets named.' },
      { title: 'Structure', body: 'Schema, entity data and site architecture so machines can read your expertise.' },
      { title: 'Publish', body: 'Answer-first pages and proof assets designed to earn citations.' },
      { title: 'Track', body: 'We measure mentions and citations monthly and double down on what moves.' },
    ],
    faqs: [
      { q: 'How is AI SEO different from regular SEO?', a: 'Traditional SEO earns a ranking in a list of links. AI SEO earns a mention inside the answer itself. The foundations overlap, but AI engines weigh clear entities, structured data and quotable, specific content much more heavily.' },
      { q: 'Can you guarantee ChatGPT will mention us?', a: 'No one can honestly guarantee that. What we can do is measure your current visibility, fix what is holding you back and report on citation share every month so you see the trend.' },
    ],
    mock: 'ai',
    icon: 'Sparkles',
  },
  {
    slug: 'seo',
    name: 'SEO',
    short: 'Technical, on-page and local SEO that compounds every month.',
    eyebrow: 'Search Engine Optimization',
    headline: ['Rank Where', 'Buyers Search.'],
    intro:
      'We fix the technical issues holding your site back, target the keywords that actually convert and build the local and topical authority that pushes you up the page and keeps you there.',
    bullets: [
      'Full technical audit and fixes: speed, indexing, Core Web Vitals',
      'Keyword strategy mapped to revenue, not vanity traffic',
      'Google Business Profile and local map pack optimization',
      'On-page optimization and internal linking',
      'Monthly rank, traffic and lead reporting',
    ],
    process: [
      { title: 'Audit', body: 'Crawl, technical health, competitors and keyword gaps.' },
      { title: 'Fix', body: 'We ship the technical and on-page fixes first for the fastest wins.' },
      { title: 'Build', body: 'Content and authority built around the terms that bring buyers.' },
      { title: 'Report', body: 'Rankings, traffic and leads in one clear monthly report.' },
    ],
    faqs: [
      { q: 'How long does SEO take?', a: 'Technical fixes can move rankings within weeks. Competitive terms usually take three to six months. We report monthly so you can see momentum from the start.' },
      { q: 'Do you do local SEO?', a: 'Yes. Google Business Profile, citations, reviews and location pages are part of every plan for businesses that serve a local area.' },
    ],
    mock: 'rank',
    icon: 'Search',
  },
  {
    slug: 'content',
    name: 'Content Creation',
    short: 'AI-assisted, human-edited content at a pace you can sustain.',
    eyebrow: 'Content Creation & Generation',
    headline: ['Content That', 'Works While You Sleep.'],
    intro:
      'Blogs, service pages, social posts and email: we combine AI generation with human editing and your brand voice so you publish consistently without it sounding like everyone else.',
    bullets: [
      'Long-form articles and service pages built for search and AI',
      'Social media posts and short-form video scripts',
      'Brand voice guide so every piece sounds like you',
      'Original images and on-brand graphics',
      'Editorial calendar planned around your keywords',
    ],
    process: [
      { title: 'Voice', body: 'We capture how you talk, sell and explain your work.' },
      { title: 'Plan', body: 'A calendar mapped to keywords, seasons and offers.' },
      { title: 'Create', body: 'AI drafts, human editors refine, you approve.' },
      { title: 'Distribute', body: 'Published to your site, socials and email on schedule.' },
    ],
    faqs: [
      { q: 'Is the content just AI-generated?', a: 'AI does the heavy lifting on research and drafting. Every piece is edited by a person against your voice guide and fact-checked before it goes live.' },
      { q: 'Who owns the content?', a: 'You do. Everything we create for you is yours to keep.' },
    ],
    mock: 'content',
    icon: 'PenTool',
  },
  {
    slug: 'lead-systems',
    name: 'Automated Lead Systems',
    short: 'Instant replies, missed-call text back and auto-booking.',
    eyebrow: 'Speed to Lead',
    headline: ['Every Lead Answered.', 'Instantly.'],
    intro:
      'Leads go cold in minutes. Our systems reply to every form, chat and missed call in seconds, qualify the lead and put them on your calendar, even at 2am.',
    bullets: [
      'AI website chat that answers questions and books appointments',
      'Missed-call text back so callers never move on to a competitor',
      'Automated SMS and email follow-up sequences',
      'Review requests after every completed job',
      'Database reactivation campaigns for past customers',
    ],
    process: [
      { title: 'Map', body: 'We map every way leads reach you today and where they leak.' },
      { title: 'Build', body: 'Chat, SMS, email and calendar connected into one flow.' },
      { title: 'Train', body: 'The AI learns your services, pricing rules and FAQs.' },
      { title: 'Optimize', body: 'We review conversations and tighten the scripts monthly.' },
    ],
    faqs: [
      { q: 'Will the AI say the wrong thing to customers?', a: 'It only works from the answers you approve, and it hands off to a person whenever a question falls outside them.' },
      { q: 'Does it work with my current calendar and phone?', a: 'In most cases, yes. We connect to common calendars and can keep your existing business number.' },
    ],
    mock: 'lead',
    icon: 'Zap',
  },
  {
    slug: 'websites',
    name: 'Website Generation',
    short: 'Fast, conversion-built websites, launched in days.',
    eyebrow: 'Websites',
    headline: ['Websites Built', 'to Convert.'],
    intro:
      'We generate and hand-tune fast, mobile-first websites with SEO and lead capture built in from day one. No bloated templates, no six-month timelines.',
    bullets: [
      'Custom design that matches your brand',
      'Built for speed, Core Web Vitals and mobile',
      'SEO and AI-search structure baked in',
      'Lead forms, chat and booking wired to your follow-up',
      'Hosting, updates and security handled for you',
    ],
    process: [
      { title: 'Brief', body: 'Your goals, offers, brand and the competitors to beat.' },
      { title: 'Generate', body: 'We produce the structure and copy fast with AI.' },
      { title: 'Refine', body: 'Designers and editors polish every page by hand.' },
      { title: 'Launch', body: 'Live, tracked and connected to your lead system.' },
    ],
    faqs: [
      { q: 'How fast can you launch?', a: 'Most small business sites launch within one to two weeks of the kickoff call.' },
      { q: 'Can I edit the site myself?', a: 'Yes. You can request changes from us any time, or we can set you up to make simple edits yourself.' },
    ],
    mock: 'site',
    icon: 'LayoutTemplate',
  },
  {
    slug: 'ads',
    name: 'Paid Ads',
    short: 'Google, Meta and local ads managed for return, not reach.',
    eyebrow: 'Paid Advertising',
    headline: ['Ads That Pay', 'for Themselves.'],
    intro:
      'We run Google, Meta and Local Services ads tied directly to booked appointments, so every dollar is measured against revenue, not impressions.',
    bullets: [
      'Google Search, Performance Max and Local Services Ads',
      'Meta (Facebook and Instagram) lead and retargeting campaigns',
      'Landing pages built for each campaign',
      'Conversion tracking down to the booked appointment',
      'Weekly optimization and clear spend reporting',
    ],
    process: [
      { title: 'Target', body: 'Offers, audiences and the keywords with buying intent.' },
      { title: 'Launch', body: 'Campaigns, creative and landing pages go live together.' },
      { title: 'Track', body: 'Every lead traced back to the ad that produced it.' },
      { title: 'Scale', body: 'We move budget to what books and cut what does not.' },
    ],
    faqs: [
      { q: 'What should my ad budget be?', a: 'It depends on your market and goals. We recommend a starting budget on the strategy call and only scale once cost per lead is proven.' },
      { q: 'Do I own the ad accounts?', a: 'Yes. Accounts are set up in your name, so the data and history stay with you.' },
    ],
    mock: 'ads',
    icon: 'Target',
  },
  {
    slug: 'marketing',
    name: 'Marketing Strategy',
    short: 'One plan connecting search, content, ads and follow-up.',
    eyebrow: 'Full-Funnel Marketing',
    headline: ['One System.', 'Every Channel.'],
    intro:
      'Most businesses run five disconnected tools and hope. We build one growth plan where search, content, ads, email and follow-up feed each other, and we report on it in plain English.',
    bullets: [
      'Growth audit and 90-day marketing roadmap',
      'Offer and positioning work so you stand out',
      'Email and SMS campaigns to past customers',
      'Social media management',
      'One dashboard for leads, bookings and revenue',
    ],
    process: [
      { title: 'Diagnose', body: 'Where your leads come from today and what each costs.' },
      { title: 'Plan', body: 'A 90-day roadmap ranked by expected return.' },
      { title: 'Execute', body: 'We run the channels and keep them connected.' },
      { title: 'Review', body: 'A monthly call on results and the next priorities.' },
    ],
    faqs: [
      { q: 'Do I need every service?', a: 'No. We start with the channels that will pay back fastest for your business and add others only when they make sense.' },
      { q: 'Who will I work with?', a: 'A dedicated strategist who knows your account, backed by our specialists for SEO, content and ads.' },
    ],
    mock: 'campaign',
    icon: 'Megaphone',
  },
]

export const serviceBySlug = (slug?: string) => services.find((s) => s.slug === slug)
