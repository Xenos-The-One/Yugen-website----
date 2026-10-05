// FAQs, related trades and related posts shown at the bottom of each product page.
// Keep answers to facts stated on the pricing, product and blog pages.

const lead = 'Included in the Lead & Review System at $297/month, alongside AI website chat, missed call text back, automated follow-up, the all-in-one inbox and automated review requests.'

export const productExtras = {
  '/products/ai-seo': {
    name: 'AI SEO',
    faqs: [
      {
        q: 'Can you guarantee ChatGPT will recommend my business?',
        a: "No one honestly can. AI assistants decide for themselves and their answers change from person to person and day to day. What we can do is make your business clear, consistent and well supported across the web, and track how often you're mentioned every month.",
      },
      {
        q: "What's included?",
        a: 'Visibility tracking in ChatGPT, Gemini and Perplexity, schema and entity optimization, AI search optimization of your key pages, competitor tracking across AI answers and a monthly report on where you are cited. It is part of our Growth ($1,497/month) and Authority ($2,497/month) packages.',
      },
      {
        q: 'How long until AI assistants start mentioning us?',
        a: 'Some quick wins come from fixing your listings and key pages. After that, expect steady improvement over months as reviews, content and mentions on other sites build up.',
      },
      {
        q: 'Is AI SEO different from regular SEO?',
        a: 'It builds on it. Most of the work overlaps, with extra emphasis on consistent business details everywhere, content that answers questions directly and mentions on other trusted sites.',
      },
    ],
    trades: ['remodeling', 'hvac', 'roofing'],
    posts: ['what-is-ai-seo', 'how-ai-assistants-choose-businesses', 'schema-markup-explained'],
  },
  '/products/local-seo': {
    name: 'SEO & Local SEO',
    faqs: [
      {
        q: 'What does local SEO include?',
        a: 'Google Business Profile optimization, local citation building and management, keyword-optimized service pages and monthly performance reporting.',
      },
      {
        q: 'How long does it take to rank on Google Maps?',
        a: 'It depends on your competition, how long your site and profile have been live, and your reviews. Most businesses see steady progress over several months rather than overnight jumps.',
      },
      {
        q: 'Do I need a storefront address to show up on Maps?',
        a: "No. Service-area businesses that visit customers can hide their address on Google Business Profile and still rank for the areas they serve.",
      },
      {
        q: 'Which package includes it?',
        a: 'Local SEO and Google Business Profile work is part of our Growth ($1,497/month) and Authority ($2,497/month) packages, each with a $1,000 one-time setup.',
      },
    ],
    trades: ['plumbing', 'hvac', 'roofing'],
    posts: ['local-seo-guide', 'google-business-profile-optimization', 'keyword-research-for-small-business'],
  },
  '/products/content-creation': {
    name: 'Content Creation',
    faqs: [
      {
        q: 'How much content do you publish?',
        a: 'Growth includes 4 SEO blogs, 2 newsletters and 5 existing page optimizations a month. Authority includes 10+ blogs and 6+ newsletters a month with ongoing page optimization. Content on its own, without a full SEO package, is quoted individually.',
      },
      {
        q: 'Do I have to write anything?',
        a: 'No. We plan, write and publish it for you, built around the keywords your customers actually search.',
      },
      {
        q: 'Who owns the content if I cancel?',
        a: 'You do. Your website and all the content we wrote for you stay with you.',
      },
      {
        q: 'Does content help with AI search too?',
        a: 'Yes. AI assistants build answers from pages that answer questions clearly and directly, which is exactly how we write.',
      },
    ],
    trades: ['remodeling', 'landscaping', 'windows-doors'],
    posts: ['how-often-should-a-business-blog', 'content-strategy-when-you-are-busy', 'updating-old-content'],
  },
  '/products/functional-website': {
    name: 'Functional Website',
    faqs: [
      {
        q: 'How much does a website cost?',
        a: 'A basic website is $300 to $500 one-time. Bigger or custom builds with more pages, features and integrations are quoted separately.',
      },
      {
        q: 'How long does it take?',
        a: 'Most sites are live in 7 to 10 days after you fill out a short onboarding form.',
      },
      {
        q: 'Do I own the website?',
        a: 'Yes. Your domain and website stay with you, even if you cancel.',
      },
      {
        q: 'Is SEO included?',
        a: 'Every site is built with on-page SEO fundamentals, speed optimization and mobile-first design. Ongoing SEO is available through our Growth and Authority packages.',
      },
    ],
    trades: ['electricians', 'painting', 'general-contractors'],
    posts: ['website-that-converts', 'website-speed-costs-customers', 'signs-your-website-needs-a-rebuild'],
  },
  '/products/paid-ads': {
    name: 'Paid Ads',
    faqs: [
      {
        q: 'Which platforms do you run?',
        a: 'Google and Meta (Facebook and Instagram) campaigns, each with a landing page matched to the campaign.',
      },
      {
        q: 'How do I know the ads are working?',
        a: 'Every campaign has conversion tracking down to the lead, and you get clear monthly reporting on spend and results.',
      },
      {
        q: 'How is it priced?',
        a: "Paid ads are quoted individually based on your goals, on their own or alongside one of our packages. Tell us what you need and we'll send a clear price.",
      },
      {
        q: 'Should I run ads or invest in SEO?',
        a: 'Ads bring leads quickly while you pay; SEO builds leads that keep coming. Many contractors use ads to fill the schedule while SEO grows.',
      },
    ],
    trades: ['roofing', 'concrete-paving', 'pest-control'],
    posts: ['google-ads-vs-seo', 'track-ads-to-revenue'],
  },
  '/products/all-in-one-inbox': {
    name: 'All-in-One Inbox',
    faqs: [
      {
        q: 'Which messages come into the inbox?',
        a: 'SMS, email, website chat, Facebook Messenger and Instagram DMs, all in one place.',
      },
      {
        q: 'Can my team use it?',
        a: 'Yes. You can assign conversations to team members so every lead has an owner.',
      },
      {
        q: 'Can I reply from my phone?',
        a: "Yes. We'll show you how to manage leads and run the whole system from your phone at handover.",
      },
      { q: 'What does it cost?', a: lead },
    ],
    trades: ['plumbing', 'electricians', 'hvac'],
    posts: ['ai-website-chat-vs-contact-forms', 'automated-follow-up', 'speed-to-lead'],
  },
  '/products/missed-call-text-back': {
    name: 'Missed Call Text Back',
    faqs: [
      {
        q: 'Which number do the texts come from?',
        a: "The same number the customer dialled, so they know who's texting. Usually your existing business number is forwarded to the system or moved over to it.",
      },
      {
        q: 'Can I change the message?',
        a: 'Yes. The text is fully customizable, and replies land in your all-in-one inbox.',
      },
      {
        q: 'Does it work after hours?',
        a: 'Yes. It works 24/7, including weekends and holidays.',
      },
      { q: 'What does it cost?', a: lead },
    ],
    trades: ['plumbing', 'hvac', 'pest-control'],
    posts: ['missed-call-text-back', 'speed-to-lead'],
  },
  '/products/one-click-marketing': {
    name: 'One Click Marketing',
    faqs: [
      {
        q: 'What kind of campaigns can I send?',
        a: 'Seasonal offers, maintenance reminders and referral promotions by email, SMS or both, using pre-written templates.',
      },
      {
        q: 'Can I legally text and email past customers?',
        a: "In Canada, CASL generally lets you contact customers who bought from you in the last two years, as long as every message identifies your business and includes an easy way to opt out. Every campaign we send does both.",
      },
      {
        q: 'How is it priced?',
        a: 'Email and SMS campaigns, seasonal offers and database reactivation are quoted individually, on their own or alongside a package.',
      },
    ],
    trades: ['hvac', 'landscaping', 'pool-services'],
    posts: ['database-reactivation', 'are-email-newsletters-worth-it'],
  },
  '/products/review-system': {
    name: '5 Star Review System',
    faqs: [
      {
        q: 'Is it against Google’s rules to ask for reviews?',
        a: "No. Asking is fine. What Google prohibits is offering incentives or only asking happy customers. Our system sends the same review request to every customer after every job.",
      },
      {
        q: 'What if a customer had a bad experience?',
        a: "Every customer can reply to you privately as well as leave a public review. Hearing about a problem early gives you the chance to make it right, and a thoughtful public reply builds trust too.",
      },
      {
        q: 'Do reviews help with AI search?',
        a: 'Yes. Detailed reviews that mention the service and the city are some of the strongest evidence AI assistants use when recommending a business.',
      },
      { q: 'What does it cost?', a: lead },
    ],
    trades: [],
    posts: ['google-reviews-and-ai-search'],
  },
}
