// Builds dist/sitemap.xml from the prerendered HTML files.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://www.raindropmarketing.ca'
const dist = fileURLToPath(new URL('../dist', import.meta.url))

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })

// Only pages with a real date in their JSON-LD (blog posts) get a lastmod; stamping every
// page with the build date tells search engines nothing.
const pages = walk(dist)
  .map((f) => {
    const p = '/' + relative(dist, f).split(sep).join('/').replace(/\.html$/, '').replace(/(^|\/)index$/, '')
    const date = readFileSync(f, 'utf8').match(/"date(?:Modified|Published)":"(\d{4}-\d{2}-\d{2})/)?.[1]
    return { path: p.length > 1 ? p.replace(/\/$/, '') : '/', date }
  })
  .filter(({ path }) => path !== '/404' && path !== '/onboarding')
  .sort((a, b) => a.path.localeCompare(b.path))

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(({ path, date }) => `  <url><loc>${SITE}${path === '/' ? '' : path}</loc>${date ? `<lastmod>${date}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), xml)
console.log(`sitemap.xml: ${pages.length} URLs`)
