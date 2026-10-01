// Builds dist/sitemap.xml from the prerendered HTML files.
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://yugensystem.com'
const dist = fileURLToPath(new URL('../dist', import.meta.url))

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })

const paths = walk(dist)
  .map((f) => '/' + relative(dist, f).split(sep).join('/').replace(/\.html$/, '').replace(/(^|\/)index$/, ''))
  .map((p) => (p.length > 1 ? p.replace(/\/$/, '') : '/'))
  .filter((p) => p !== '/404' && p !== '/onboarding')
  .sort()

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p === '/' ? '' : p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), xml)
console.log(`sitemap.xml: ${paths.length} URLs`)
