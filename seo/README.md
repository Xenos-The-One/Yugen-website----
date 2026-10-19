# Raindrop SEO program

Raindrop's own SEO, run the way we'd run it for a client. Goal: top-10 Google rankings for the niche terms in `keyword-map.csv` (contractor/trades marketing in the GTA, AI SEO Toronto), and mentions in AI answers. Broad terms like "SEO agency Toronto" come later, once authority is built.

| File | What it is |
|---|---|
| `keyword-map.csv` | One primary keyword per URL, with supporting blog posts |
| `google-business-profile.md` | Canonical NAP, GBP setup, description, services, review process, 12 weeks of posts |
| `citations.csv` | Directory and profile tracker, in priority order |
| `outreach.md` / `outreach.csv` | Link building, PR, partnerships, research study, email templates and tracker |
| `content-calendar.md` | Next 6 months of posts plus the quarterly refresh routine |
| `ai-visibility.md` | Monthly 20-prompt AI check plus the free rank-tracking routine |

## One-time setup (Thailer)

- [ ] **Google Search Console:** add a Domain property for `raindropmarketing.ca`, submit `https://www.raindropmarketing.ca/sitemap.xml`, and request indexing for `/`, `/products/ai-seo`, `/products/local-seo` and `/free-seo-audit`.
- [ ] **Bing Webmaster Tools:** import from Search Console. Bing powers ChatGPT search and Copilot.
- [ ] **GA4:** create a property and link it to Search Console (optional alongside Vercel Analytics, but it's needed for GSC landing-page data).
- [ ] **Ahrefs Webmaster Tools:** free, verify via Search Console.
- [ ] **Email alias** `@raindropmarketing.ca` for listings (see `google-business-profile.md`).
- [ ] **Founder photo:** add `public/founder.jpg` and set `site.founder.photo = '/founder.jpg'`. Add the LinkedIn URL to `site.founder.sameAs` and the company profiles to `site.social` in `src/content/site.js`. These feed the schema automatically.
- [ ] After each production deploy: `npm run indexnow` (pings Bing/IndexNow with every sitemap URL).

## Weekly (≈3–5 hours)

- **Mon:** publish the week's GBP post (copy ready in `google-business-profile.md`) and a new photo.
- **Mon–Fri:** check Qwoted/Featured daily and answer 2–3 relevant requests (`outreach.md` §2).
- **Weekly:** submit 3–5 citations from `citations.csv`, send 3–5 outreach emails (drafts in Gmail), ask every finished client for a review.
- **Every other week:** publish a new blog post (`content-calendar.md`).

## Monthly

- First business day: run the AI visibility check and the GSC query export (`ai-visibility.md`).
- Update `outreach.csv` and `citations.csv` statuses; note new referring domains from Ahrefs Webmaster Tools.

## Before every deploy

```
npm run build
npm run seo:check
```

`seo:check` fails if any page has a missing or long title, a description outside 120–160 characters, anything other than one H1, a missing canonical, broken JSON-LD, or a blog post with fewer than 2 in-article links to service pages.

## 6-month targets (not guarantees)

- All URLs indexed
- 15+ keywords from `keyword-map.csv` in the top 10
- Map pack for "marketing agency" searches near Vaughan/Toronto
- 25+ Google reviews
- 30+ quality referring domains
- Named in AI answers for 5+ of the 20 tracked prompts
