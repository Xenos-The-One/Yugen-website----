// On-page SEO checks over the built site: run `npm run build` first, then `npm run seo:check`.
// Exits non-zero when any indexable page breaks a rule, so it can gate deploys.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist', import.meta.url))
const SKIP = new Set(['/404', '/onboarding'])
// Pages that sell something; blog posts should send readers to at least two of them.
const MONEY = /^\/(products\/|industries\/|areas\/|pricing$)/
// ArticleBody renders in-article links with this class, which separates them from nav, footer and cards.
const BODY_LINK = /<a href="([^"]+)" class="text-primary font-medium underline/g

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
const problems = []
const titles = new Map()
// Incoming internal links per page, counted once per linking page.
const inlinks = new Map()

for (const file of walk(dist)) {
  const path = '/' + relative(dist, file).split(sep).join('/').replace(/\.html$/, '').replace(/(^|\/)index$/, '')
  const route = path.length > 1 ? path.replace(/\/$/, '') : '/'
  if (SKIP.has(route)) continue
  const html = readFileSync(file, 'utf8')
  const fail = (msg) => problems.push(`${route}: ${msg}`)

  const title = decode(html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? '')
  const desc = decode(html.match(/<meta[^>]*name="description" content="([^"]*)"/)?.[1] ?? '')
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0
  const canonical = html.match(/<link[^>]*rel="canonical" href="([^"]*)"/)?.[1]

  if (!title) fail('missing <title>')
  else if (title.length > 60) fail(`title is ${title.length} chars (max 60): ${title}`)
  if (titles.has(title)) fail(`title duplicates ${titles.get(title)}`)
  titles.set(title, route)
  if (desc.length < 120 || desc.length > 160) fail(`description is ${desc.length} chars (want 120-160)`)
  if (h1s !== 1) fail(`${h1s} <h1> elements (want 1)`)
  if (!canonical) fail('missing canonical')
  inlinks.set(route, inlinks.get(route) ?? new Set())
  for (const [, href] of html.matchAll(/<a [^>]*href="(?:https:\/\/www\.raindropmarketing\.ca)?(\/[^"#?]*)/g)) {
    const target = href.length > 1 ? href.replace(/\/$/, '') : '/'
    if (target === route) continue
    if (!inlinks.has(target)) inlinks.set(target, new Set())
    inlinks.get(target).add(route)
  }

  // Rules Semrush's Site Audit flags: H1 identical to the title, under 10% visible text, thin pages.
  const h1 = decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, '').trim() ?? '')
  if (h1 && h1 === title) fail('H1 duplicates the title tag')
  // Semrush joins text nodes without adding spaces and fails pages under 10%; keep a margin above that.
  const visible = html.replace(/<(script|style)[\s\S]*?<\/\1>/g, '')
  // Tags can contain ">" inside quoted attributes (Tailwind's [&>svg] variants), so skip quoted values.
  const TAG = /<(?:[^>"']|"[^"]*"|'[^']*')*>/g
  const text = decode(visible.replace(TAG, '')).replace(/\s+/g, ' ').trim()
  const ratio = text.length / html.length
  if (ratio < 0.105) fail(`text-to-HTML ratio ${(ratio * 100).toFixed(1)}% (want 10.5%+)`)
  const words = decode(visible.replace(TAG, ' ')).trim().split(/\s+/).length
  if (words < 200) fail(`${words} words (want 200+)`)

  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      // Every LocalBusiness-type node (ProfessionalService included) needs an address.
      JSON.parse(json, (k, v) => {
        if (v && typeof v === 'object' && v['@type'] === 'ProfessionalService' && !v.address) fail('ProfessionalService schema without address')
        return v
      })
    } catch {
      fail('JSON-LD does not parse')
    }
  }

  if (route.startsWith('/blog/')) {
    const money = new Set([...html.matchAll(BODY_LINK)].map((m) => m[1]).filter((h) => MONEY.test(h)))
    if (money.size < 2) fail(`${money.size} in-article links to service pages (want 2+)`)
  }
}

// Semrush flags pages with one incoming internal link, and sitemap URLs nothing links to (orphans).
for (const loc of readFileSync(join(dist, 'sitemap.xml'), 'utf8').matchAll(/<loc>https:\/\/[^/]+(\/[^<]*)<\/loc>/g)) {
  const route = loc[1].length > 1 ? loc[1].replace(/\/$/, '') : '/'
  const n = inlinks.get(route)?.size ?? 0
  if (n < 2) problems.push(`${route}: linked from ${n} page(s) (want 2+)`)
}

console.log(`seo-check: ${titles.size} pages checked, ${problems.length} problem(s)`)
for (const p of problems) console.log(`  ${p}`)
process.exit(problems.length ? 1 : 0)
