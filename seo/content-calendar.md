# Content calendar

Two new posts per month plus refreshes. New posts target **commercial-intent** searches first, since those sit closest to a sale. Each post must link to its money page (see `keyword-map.csv`). `npm run seo:check` enforces at least 2 in-article links to service pages.

Posts live in `src/content/posts/*.js` and need a publish date in `src/content/blog.js`, a cover at `public/blog/img/{slug}-cover.webp`, a `seoTitle` (≤60 chars) and a `metaDescription` (120–160 chars).

## Next 6 months

| Month | Post | Target keyword | Links to |
|---|---|---|---|
| Nov 2026 | How Much Does SEO Cost in Toronto? (2026 Prices) | seo cost toronto | /pricing, /products/local-seo |
| Nov 2026 | GTA Contractor AI Visibility Study (original research, see outreach.md) | ai search contractors | /products/ai-seo, /free-seo-audit |
| Dec 2026 | HVAC SEO: A Complete Guide for GTA Heating & Cooling Companies | hvac seo | /industries/hvac, /products/local-seo |
| Dec 2026 | How Much Does Contractor Marketing Cost in Ontario? | contractor marketing cost | /pricing, / |
| Jan 2027 | Plumber Marketing Ideas That Actually Book Jobs | plumber marketing ideas | /industries/plumbing, /products/missed-call-text-back |
| Jan 2027 | Roofing Leads in the GTA: Where They Come From and What They Cost | roofing leads toronto | /industries/roofing, /products/paid-ads |
| Feb 2027 | Marketing Agency vs Doing It Yourself: An Honest Comparison for Contractors | contractor marketing agency vs diy | /, /pricing |
| Feb 2027 | Local Services Ads for Contractors in Canada: Setup, Costs and Tips | local services ads canada | /products/paid-ads |
| Mar 2027 | Electrician SEO: How to Rank for Panel Upgrades and EV Chargers | electrician seo | /industries/electricians, /products/local-seo |
| Mar 2027 | Spring Marketing Checklist for Landscapers and Paving Contractors | landscaping marketing | /industries/landscaping, /industries/concrete-paving |
| Apr 2027 | Renovation Marketing: Winning Long-Cycle Kitchen and Basement Projects | renovation marketing | /industries/remodeling, /products/content-creation |
| Apr 2027 | Google Business Profile Categories for Contractors (Full List by Trade) | gbp categories contractors | /products/local-seo, industry pages |

## Quarterly refresh (Jan, Apr, Jul, Oct)

1. In Search Console, sort posts by impressions.
2. Rewrite titles and descriptions for posts with high impressions and CTR under 2%.
3. Expand posts sitting at positions 8–20: add a section that answers the queries they already show up for.
4. Update facts, prices and the year.
5. Add first-hand material to one or two industry or area pages (`fieldNotes`, `photos`, `clientExample` in `src/content/industries.js` / `areas.js`): patterns from audits you ran that quarter, your own project photos, and a short real client story. Publish any finished case studies in `src/content/caseStudies.js`. This is what keeps those pages from being copied.
