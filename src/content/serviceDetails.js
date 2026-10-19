// Long-form detail for the main service pages: an explainer, what's included, how it works and what to
// expect. Rendered by ProductExtras above the FAQs. Keep claims to what the pricing page and plans state.

export const serviceDetails = {
  '/products/ai-seo': {
    explainer: {
      title: 'What an AI SEO agency',
      accent: 'actually does',
      paragraphs: [
        'AI SEO, also called generative engine optimization (GEO), is the work of making your business easy for AI assistants to understand, trust and recommend. When a homeowner in Toronto asks ChatGPT, Gemini, Perplexity or Google’s AI Overviews who to call for a furnace replacement or a kitchen renovation, the answer names only a handful of businesses. AI SEO is how you become one of them.',
        'AI assistants build those answers from what they can find and verify about you: your website, your Google Business Profile, directory listings, reviews and mentions on other trusted sites. If your services, service area and contact details are vague or inconsistent, the AI either skips you or describes you wrong. If they are clear, consistent and backed up by real customers, you become the safe recommendation.',
        'As a Toronto AI SEO agency, we build on proven local SEO rather than replacing it. Most of what helps you rank on Google also helps you get cited by AI. We add the AI-specific layer on top: structured data and entity optimization, pages written to answer the questions homeowners actually ask, and monthly tracking of where AI assistants mention you and your competitors.',
      ],
    },
    included: [
      { title: 'AI visibility tracking', text: 'We check how ChatGPT, Gemini and Perplexity answer the questions your customers ask, and report every month on where you are named and where competitors are named instead.' },
      { title: 'Schema and entity optimization', text: 'Structured data that tells search engines and AI exactly who you are, what you do, where you work and how to reach you, kept consistent with your listings.', href: '/blog/schema-markup-explained' },
      { title: 'Answer-first page optimization', text: 'Your key service pages rewritten so the direct answer comes first: what you do, where, for whom, at what kind of price and how fast.' },
      { title: 'Consistent business details everywhere', text: 'Name, phone, services and service area aligned across your website, Google Business Profile, Bing Places, Apple Business Connect and directories.', href: '/products/local-seo' },
      { title: 'Content that earns citations', text: 'Monthly SEO blog posts built around real homeowner questions, so AI tools have something specific and trustworthy to quote.', href: '/products/content-creation' },
      { title: 'Reviews and mentions', text: 'A steady flow of specific Google reviews and a backlink and outreach strategy, because AI assistants lean on what others say about you.', href: '/products/review-system' },
    ],
    steps: [
      { title: '1. AI visibility audit', text: 'We ask the AI assistants the questions your customers ask, in the cities you serve, and record who gets recommended today.' },
      { title: '2. Fix the foundations', text: 'Business details, Google Business Profile, schema and the key service pages get cleaned up first. These are often the quickest wins.' },
      { title: '3. Build authority', text: 'New content, page improvements, reviews and outreach build the signals that make AI assistants confident naming you.' },
      { title: '4. Track and adjust', text: 'Monthly reporting on AI mentions, Google rankings and competitors, with a strategy call to decide what to do next.' },
    ],
    timeline: [
      { title: 'First month', text: 'Audit, setup and foundation fixes. Listing and schema corrections can change how AI tools describe you surprisingly quickly.' },
      { title: 'Months 2 to 4', text: 'Content and page improvements start to show up in Google rankings and in more AI answers for specific services and areas.' },
      { title: 'Months 4 to 12', text: 'Reviews, content and mentions compound. Broader, more competitive questions become realistic targets.' },
    ],
    pricing: 'AI SEO is included in our Growth ($1,497/month) and Authority ($2,497/month) packages, each with a one-time $1,000 setup, together with local SEO and monthly content. Plans are month to month.',
  },

  '/products/local-seo': {
    explainer: {
      title: 'Local SEO for',
      accent: 'contractors in the GTA',
      paragraphs: [
        'Local SEO is how you show up when a homeowner searches for your service near them: “plumber near me”, “roof repair Vaughan”, “furnace replacement Mississauga”. For contractors, two places matter most. The map pack, the three businesses shown with a map at the top of the results, and the regular organic results underneath it.',
        'Google decides the map pack mostly on three things: how relevant your business is to the search, how close you are to the searcher, and how prominent you are, which comes from reviews, links, mentions and the strength of your website. You can’t move your office, but you can make Google certain about what you do and where you do it, and you can build more prominence than the contractors you compete with.',
        'That is the work we do for contractors across Toronto, Vaughan, Mississauga, Brampton, Markham, Richmond Hill, Oakville and Pickering. It is the same foundation that gets you recommended by AI assistants, which is why our SEO packages include both.',
      ],
    },
    included: [
      { title: 'Google Business Profile optimization', text: 'The right primary and secondary categories, services, service area, description, photos and weekly posts, kept accurate as your business changes.', href: '/blog/google-business-profile-optimization' },
      { title: 'Keyword research for your trade', text: 'The exact words GTA homeowners use for your services, mapped to the pages that should rank for them.', href: '/blog/keyword-research-for-small-business' },
      { title: 'Service and area pages', text: 'A strong page for each core service, written the way people search, with clear coverage of the cities and neighbourhoods you serve.' },
      { title: 'Citations and consistency', text: 'Your name, phone and service area listed accurately on the directories Google and AI tools trust, including Bing Places and Apple Business Connect.' },
      { title: 'Technical SEO and internal linking', text: 'Speed, mobile, indexing and site structure monitored, and pages linked so Google understands which services matter most.', href: '/blog/technical-seo-basics' },
      { title: 'Reviews that move rankings', text: 'Automated review requests after every job, so your profile keeps growing with specific, recent reviews.', href: '/products/review-system' },
    ],
    steps: [
      { title: '1. Audit and keyword map', text: 'We check your Google Business Profile, website, listings and competitors, and map every important search to a page.' },
      { title: '2. Fix the foundations', text: 'Profile categories, services, listings, technical issues and core service pages are fixed first.' },
      { title: '3. Grow relevance and prominence', text: 'New and improved pages, monthly content, reviews and a backlink strategy build the signals Google rewards.' },
      { title: '4. Report what matters', text: 'Monthly reporting on rankings, map visibility, calls and form leads, with a strategy call to plan the next month.' },
    ],
    timeline: [
      { title: 'Weeks 1 to 4', text: 'Profile and listing fixes, technical clean-up and the first page improvements.' },
      { title: 'Months 2 to 4', text: 'Less competitive searches and nearby areas usually start improving first, along with map impressions and calls.' },
      { title: 'Months 4 to 12', text: 'Competitive city-wide searches become realistic as content, reviews and links build up.', href: '/blog/how-long-does-seo-take' },
    ],
    pricing: 'Local SEO and Google Business Profile optimization are included in our Growth ($1,497/month) and Authority ($2,497/month) packages, each with a one-time $1,000 setup. Plans are month to month and you keep everything we build.',
  },

  '/products/functional-website': {
    explainer: {
      title: 'Contractor website design',
      accent: 'built to book jobs',
      paragraphs: [
        'Most contractor websites look fine and do very little. They load slowly on phones, bury the phone number, describe every service in one paragraph and give Google almost nothing to rank. Homeowners leave, and the site never shows up for the searches that matter.',
        'We design contractor websites in Toronto and across the GTA around one goal: turning visitors into calls and booked estimates. That means a fast, mobile-first build, a clear page for each service, real project photos, reviews where people decide, and click-to-call, booking and chat on every page.',
        'Every site we build includes on-page SEO fundamentals from day one: clean structure, fast loading, descriptive titles and headings, and the structured data that helps Google and AI assistants understand your business. It is the foundation our local SEO and AI SEO work builds on.',
      ],
    },
    included: [
      { title: 'Mobile-first and fast', text: 'Built for phones first and designed to load quickly, because most homeowners find contractors on their phone.', href: '/blog/website-speed-costs-customers' },
      { title: 'Conversion-focused layout', text: 'Click-to-call, booking buttons and lead capture forms placed where people are ready to act.', href: '/blog/website-that-converts' },
      { title: 'A page for every core service', text: 'Separate, specific service pages that answer homeowner questions and give Google something to rank.' },
      { title: 'On-page SEO built in', text: 'Titles, headings, internal links, image descriptions and structured data done properly from launch.' },
      { title: 'Lead capture and chat', text: 'Forms and optional AI website chat that collect job details and send every lead to one inbox.', href: '/products/all-in-one-inbox' },
      { title: 'You own it', text: 'Your domain, your website and your content stay yours, whether or not you keep working with us.' },
    ],
    steps: [
      { title: '1. Discovery call', text: 'We learn your services, service area, best jobs and what your current site is missing.' },
      { title: '2. Structure and copy', text: 'Pages planned around how homeowners search, with clear copy for each service.' },
      { title: '3. Design and build', text: 'A fast, mobile-first site with your photos, reviews and contact options built in.' },
      { title: '4. Launch and track', text: 'Launch with analytics and lead tracking set up, so you can see calls and form leads from day one.' },
    ],
    timeline: [
      { title: 'Basic Website', text: 'Live in 7 to 10 days once we have your content and photos.' },
      { title: 'Custom builds', text: 'Larger sites with more pages, features and integrations are scoped and quoted to fit.' },
      { title: 'After launch', text: 'Pair the site with local SEO and the Lead & Review System to keep it bringing in work.', href: '/products/local-seo' },
    ],
    pricing: 'Our Basic Website is $300 to $500 one-time and live in 7 to 10 days. Larger or custom builds are quoted separately, and a full website build or overhaul is included in the Authority package.',
  },

  '/products/paid-ads': {
    explainer: {
      title: 'Google Ads for contractors,',
      accent: 'tracked to booked jobs',
      paragraphs: [
        'Paid ads are the fastest way to put your business in front of homeowners who are searching right now. Google Ads and Local Services Ads appear above the organic results for searches like “emergency plumber Toronto” or “roof replacement quote”, and Meta ads reach homeowners in the neighbourhoods you want before they start searching.',
        'The catch is that ads are easy to waste money on. Broad keywords, no negative keywords, traffic sent to a homepage, and no way to tell which clicks became jobs. We build campaigns for GTA contractors around booked calls instead of clicks: tight targeting by service and area, landing pages built to convert, and tracking from the first click to the booked estimate.',
        'Ads work best alongside SEO, not instead of it. Ads bring leads in this week while local SEO builds the free visibility that lowers your cost per job over time. Our Lead & Review System makes sure every paid lead gets an instant reply.',
      ],
    },
    included: [
      { title: 'Campaign strategy', text: 'Which services, areas and seasons to advertise, and what a lead is worth to you, before any money is spent.', href: '/blog/google-ads-vs-seo' },
      { title: 'Google Search and Local Services Ads', text: 'Search campaigns built around high-intent keywords, plus Local Services Ads where your trade is eligible.' },
      { title: 'Meta campaigns', text: 'Facebook and Instagram ads aimed at the neighbourhoods and homeowners you want.' },
      { title: 'Landing pages', text: 'Focused pages for each campaign, with click-to-call and booking, instead of sending paid clicks to a homepage.', href: '/products/functional-website' },
      { title: 'Call and conversion tracking', text: 'Calls, forms and bookings tracked back to the campaign that produced them.', href: '/blog/track-ads-to-revenue' },
      { title: 'Instant follow-up', text: 'Missed call text back and automated follow-up so paid leads never sit in voicemail.', href: '/products/missed-call-text-back' },
    ],
    steps: [
      { title: '1. Goals and budget', text: 'We agree on target jobs, areas, monthly budget and what a booked job is worth.' },
      { title: '2. Tracking first', text: 'Call tracking and conversion tracking are set up before launch, so every dollar can be judged.' },
      { title: '3. Launch', text: 'Campaigns and landing pages go live, focused on the searches most likely to book.' },
      { title: '4. Optimize monthly', text: 'Wasted spend is cut, winning ads and keywords get more budget, and you get a clear report.' },
    ],
    timeline: [
      { title: 'Week 1 to 2', text: 'Tracking, campaign build and landing pages, then launch.' },
      { title: 'First month', text: 'Early data shows which searches and areas produce booked calls.' },
      { title: 'Months 2 to 3', text: 'Budget shifts to what works and cost per booked job comes down.' },
    ],
    pricing: 'Paid ads management is quoted to fit your budget and goals. Ad spend is paid directly to Google and Meta, and every campaign is tracked to booked calls.',
  },

  '/products/content-creation': {
    explainer: {
      title: 'SEO content writing',
      accent: 'for contractors',
      paragraphs: [
        'Search engines and AI assistants can only recommend you for what your website actually says. Most contractor sites say very little: one services page, no answers to common questions, nothing new in years. Consistent, useful content changes that.',
        'We write SEO blog posts, newsletters and page updates for contractors, planned around what GTA homeowners actually search for and ask AI tools. Every piece is built on your real expertise, uses the language your customers use, links to the right service pages, and is fact-checked and edited by a person.',
      ],
    },
    included: [
      { title: 'Content strategy and keyword research', text: 'A monthly plan built around the services you want more of and the questions homeowners ask.', href: '/blog/keyword-research-for-small-business' },
      { title: 'SEO blog posts', text: 'Four posts a month on Growth and ten or more on Authority, each written to rank and to be quoted by AI.', href: '/blog/how-often-should-a-business-blog' },
      { title: 'Existing page optimization', text: 'Five existing pages improved every month on Growth, often the fastest SEO win available.', href: '/blog/updating-old-content' },
      { title: 'Newsletters', text: 'Two newsletters a month on Growth and six or more on Authority to keep past customers coming back.', href: '/products/one-click-marketing' },
    ],
    steps: [
      { title: '1. Plan', text: 'Topics chosen from keyword research, your services and the questions your customers ask.' },
      { title: '2. Capture', text: 'You send photos, voice notes or quick answers. We turn them into finished content.', href: '/blog/content-strategy-when-you-are-busy' },
      { title: '3. Publish', text: 'Posts and page updates go live with proper titles, links and structured data.' },
      { title: '4. Measure', text: 'Monthly reporting on rankings and traffic shows what to write next.' },
    ],
    pricing: 'Content creation is included in our Growth ($1,497/month) and Authority ($2,497/month) packages, and available on its own by quote.',
  },
  '/products/missed-call-text-back': {
    explainer: {
      title: 'Missed call text back',
      accent: 'for contractors',
      paragraphs: [
        'When a homeowner calls a contractor and nobody answers, most of them don’t leave a voicemail. They hang up and call the next business on Google. For a trade that spends the day on roofs, in crawl spaces and under sinks, that is a lot of jobs walking away.',
        'Missed call text back fixes that automatically. The moment a call goes unanswered, the caller gets a friendly text from your business number asking how you can help. Many reply right away with their address, the problem and a photo, and the conversation lands in your inbox so you can pick it up as soon as you are free.',
      ],
    },
    included: [
      { title: 'Instant text from your number', text: 'Every missed call gets a reply within seconds, day or night, from your own business number.' },
      { title: 'Custom message', text: 'Wording written for your trade and your hours, with a booking link when it helps.' },
      { title: 'Replies in one inbox', text: 'Every conversation lands in the all-in-one inbox on your phone, alongside texts, chats and messages.', href: '/products/all-in-one-inbox' },
      { title: 'Automatic follow-up', text: 'If the caller goes quiet, a friendly follow-up keeps the job from drifting to a competitor.', href: '/blog/automated-follow-up' },
    ],
    steps: [
      { title: '1. Connect your number', text: 'We connect missed call detection to your business line.' },
      { title: '2. Write the message', text: 'We write a reply that fits your trade, hours and booking process.' },
      { title: '3. Test it live', text: 'We call, miss the call on purpose and check the text arrives.' },
      { title: '4. Reply when free', text: 'You answer from your phone whenever you have a minute.' },
    ],
    pricing: 'Missed call text back is included in the Lead & Review System at $297/month, alongside AI website chat, automated follow-up, the all-in-one inbox and automated review requests.',
  },

  '/products/all-in-one-inbox': {
    explainer: {
      title: 'One inbox for',
      accent: 'every lead',
      paragraphs: [
        'Contractor leads arrive everywhere: phone calls, texts, emails, website chat, Facebook Messenger and Instagram DMs. When they are spread across five apps, some always get missed, and the slowest reply usually loses the job.',
        'The all-in-one inbox puts every conversation in one place. You see who reached out, how and when, reply from the same screen, assign conversations to team members and even send payment links in chat. Combined with automated follow-up, nobody waits and nobody is forgotten.',
      ],
    },
    included: [
      { title: 'Every channel in one place', text: 'SMS, email, web chat, Facebook Messenger and Instagram DMs together.' },
      { title: 'Team assignment', text: 'Assign conversations to the right person so your office can triage by urgency.' },
      { title: 'Automated follow-up', text: 'Friendly sequences that check in when a lead goes quiet, and stop when they reply.', href: '/blog/automated-follow-up' },
      { title: 'AI website chat', text: 'Answers common questions on your website and books estimates, then hands the conversation to you.', href: '/blog/ai-website-chat-vs-contact-forms' },
    ],
    steps: [
      { title: '1. Connect channels', text: 'We connect your phone number, email, website chat and social accounts.' },
      { title: '2. Set up follow-up', text: 'Sequences and replies written for your trade.' },
      { title: '3. Add your team', text: 'Team members get access and conversations are assigned.' },
      { title: '4. Answer faster', text: 'Every lead in one place, so the first reply comes from you.' },
    ],
    pricing: 'The all-in-one inbox is included in the Lead & Review System at $297/month, with AI website chat, missed call text back, automated follow-up and automated review requests.',
  },

  '/products/review-system': {
    explainer: {
      title: 'A Google review system',
      accent: 'built for contractors',
      paragraphs: [
        'Reviews decide who gets the call. Homeowners compare ratings, review counts and how recent the reviews are before they pick a contractor, Google uses them to rank the map pack, and AI assistants lean on them when they recommend businesses.',
        'Most happy customers would leave a review if someone asked at the right moment. The review system asks for you, automatically, after every job, with a direct link to your Google review page. It follows up once if they forget, and asks satisfied customers for referrals too.',
      ],
    },
    included: [
      { title: 'Automatic review requests', text: 'A text and email after every completed job with a one-tap link to your Google review page.' },
      { title: 'Gentle reminders', text: 'One friendly follow-up for customers who meant to leave a review and forgot.' },
      { title: 'Referral requests', text: 'Happy customers are asked to pass your name along to friends and neighbours.' },
      { title: 'Reviews that help SEO', text: 'More recent, specific reviews strengthen your map pack rankings and AI recommendations.', href: '/blog/google-reviews-and-ai-search' },
    ],
    steps: [
      { title: '1. Connect your profile', text: 'We link your Google Business Profile review page.' },
      { title: '2. Write the requests', text: 'Short, friendly messages in your voice, with no incentives, which break Google’s rules.' },
      { title: '3. Trigger after jobs', text: 'Requests go out automatically when a job is marked complete.' },
      { title: '4. Reply to reviews', text: 'You reply to every review, which helps rankings and trust.' },
    ],
    pricing: 'Automated review and referral requests are included in the Lead & Review System at $297/month, alongside AI website chat, missed call text back, automated follow-up and the all-in-one inbox.',
  },

  '/products/one-click-marketing': {
    explainer: {
      title: 'Email and SMS marketing',
      accent: 'for contractors',
      paragraphs: [
        'Your past customers already trust you, and they are far easier to win back than a stranger is to win over. But most contractors never contact them again, so the next time they need a tune-up or a new deck, they search Google and call someone else.',
        'One click marketing sends timely email and SMS campaigns to your past customers and old leads: seasonal maintenance reminders, slow-season offers and referral asks. Campaigns are written for your trade and sent in line with Canada’s anti-spam law (CASL), so you fill quiet months with repeat work.',
      ],
    },
    included: [
      { title: 'Seasonal campaigns', text: 'Tune-up, opening, closing and booking reminders timed to your trade’s seasons.', href: '/blog/database-reactivation' },
      { title: 'Database reactivation', text: 'Old quotes and past customers brought back with a friendly check-in.' },
      { title: 'Newsletters', text: 'Simple, useful updates that keep your name in front of past customers.', href: '/blog/are-email-newsletters-worth-it' },
      { title: 'CASL-friendly lists', text: 'Consent and unsubscribe handled properly, so campaigns stay on the right side of the law.' },
    ],
    steps: [
      { title: '1. Gather your list', text: 'We import past customers and leads you have consent to contact.' },
      { title: '2. Plan the year', text: 'Campaigns mapped to your busy and slow seasons.' },
      { title: '3. Write and schedule', text: 'Messages written in your voice and scheduled in advance.' },
      { title: '4. Book the replies', text: 'Responses arrive in your inbox, ready to book.' },
    ],
    pricing: 'Marketing campaigns are quoted to fit your list and goals. Newsletters are included in the Growth and Authority packages.',
  },
}
