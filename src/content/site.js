export const site = {
  name: 'Raindrop Marketing',
  url: 'https://www.raindropmarketing.ca',
  email: 'thailer@raindropmarketingcom.com',
  // Client portal (AI SEO dashboard). Swap for the custom domain once it's live.
  loginUrl: 'https://ai-seo-main.vercel.app/',
  founder: {
    name: 'Thailer Somerville',
    // Drop a photo in public/ (e.g. /founder.jpg) and set it here; empty shows the brand visual.
    photo: '',
  },
  // Google Calendar appointment schedule (Google Meet). Paste the booking page link
  // (calendar.app.google/... or calendar.google.com/calendar/appointments/schedules/...).
  // Empty shows an email fallback.
  bookingUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2206LGAtkS5qikC3lzI5SxKlon6UHh7zeeH3FPrckfZWXxRFu4deDwjzXLygQYjE99H-qaN0Gt',
  // Profile URLs; empty hides the icon in the footer.
  social: { twitter: '', instagram: '', linkedin: '' },
  // Google Business Profile share link (maps.app.goo.gl/... or g.page/...). Shown in the footer and
  // contact page, and added to schema sameAs. Empty hides it.
  googleBusinessProfile: '',
  // Business phone, e.g. '(416) 555-0123'. Empty hides it everywhere.
  phone: '(437) 974-3613',
  phoneHref: 'tel:+14379743613',
  // Website AI chat (api/chat.js). Needs ANTHROPIC_API_KEY in Vercel; false hides the widget.
  chatEnabled: true,
  // Twilio number wired to api/demo-call.js and api/demo-sms.js. Never the business line. Empty hides the demo.
  demoPhone: '(289) 277-1815',
  demoPhoneHref: 'tel:+12892771815',
  // Cities listed as the service area in structured data.
  areaServed: ['Toronto', 'Vaughan', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill', 'Oakville', 'Pickering'],
}

// Free audit offer: /contact?interest=audit preselects it on the contact form.
export const auditOption = 'Free AI visibility audit'

// Options for "what do you need help with" on the contact and onboarding forms.
export const serviceOptions = [
  'Website',
  'SEO & AI Search',
  'Content Creation',
  'Paid Ads',
  'Marketing & Campaigns',
  'Lead Automation',
  'Review System',
  'Not sure yet',
]

export const products = [
  { label: 'AI SEO', path: '/products/ai-seo' },
  { label: 'SEO & Local SEO', path: '/products/local-seo' },
  { label: 'Content Creation', path: '/products/content-creation' },
  { label: 'Functional Website', path: '/products/functional-website' },
  { label: 'Paid Ads', path: '/products/paid-ads' },
  { label: 'All-in-One Inbox', path: '/products/all-in-one-inbox' },
  { label: 'Missed Call Text Back', path: '/products/missed-call-text-back' },
  { label: 'One Click Marketing', path: '/products/one-click-marketing' },
  { label: '5 Star Review System', path: '/products/review-system' },
]
