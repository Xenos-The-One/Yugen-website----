// Client case studies. Each published entry gets a page at /case-studies/{slug} and is linked from
// its industry page, its area page, the testimonials page and the footer. Only real clients who
// agreed to be named; never invent results. Leave metrics empty until there are real numbers.
//
// Fields:
//   slug, client, trade (industry slug), city (area slug), url (client's site, optional)
//   title (SEO title, ≤38 chars so the " | Raindrop Marketing" suffix fits in 60)
//   metaDescription (120–160 chars), headline (H1 accent after the client name)
//   date (YYYY-MM-DD the project went live), summary, problem
//   whatWeDid[], deliverables[], quote { text, name, role }, images[{ src, alt, caption }] in public/
//   metrics[{ value, label }] (optional), published
//
// Drafts (published: false) show on the local dev server only, never in the build.
// When you publish one, add it to public/llms.txt too.
const all = [
  {
    slug: 'example-draft',
    client: 'Example Client',
    trade: 'hvac',
    city: 'vaughan',
    url: '',
    title: 'Example Client Case Study',
    metaDescription:
      'Template entry showing the case study layout. Replace every field with a real client project before publishing, and never publish this example as is.',
    headline: 'template case study',
    date: '2026-10-01',
    summary: 'Template only. One or two sentences on who the client is and what changed for them after working with us.',
    problem:
      'Template only. What the business looked like before: how they got leads, what was broken or missing, and what it was costing them.',
    whatWeDid: ['Template step one', 'Template step two', 'Template step three'],
    deliverables: ['Website', 'Google Business Profile', 'Missed call text back'],
    quote: null,
    images: [],
    metrics: [],
    published: false,
  },
]

export const caseStudies = all.filter((c) => c.published || import.meta.env.DEV)
export const caseStudyBySlug = Object.fromEntries(caseStudies.map((c) => [c.slug, c]))
