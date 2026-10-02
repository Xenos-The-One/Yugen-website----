// Generates public/blog/<slug>.svg cover images for every blog post.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import aiAndSeo from '../src/content/posts/ai-and-seo.js'
import contentAndWebsites from '../src/content/posts/content-and-websites.js'
import leadsAndGrowth from '../src/content/posts/leads-and-growth.js'

const colors = {
  'AI Search': '#38bdf8',
  SEO: '#4ade80',
  Content: '#fb923c',
  Websites: '#60a5fa',
  'Lead Capture': '#f87171',
  Automation: '#2dd4bf',
  'Paid Ads': '#818cf8',
  Reputation: '#facc15',
  Marketing: '#22d3ee',
  'Our Service': '#2dd4bf',
}

// Embedded because an SVG shown through <img> can't load external images.
const mark = readFileSync(new URL('./raindrop-mark-64.png', import.meta.url)).toString('base64')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function wrap(text, max) {
  const lines = []
  let line = ''
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line.trim())
      line = word
    } else line += ' ' + word
  }
  if (line.trim()) lines.push(line.trim())
  return lines
}

function cover({ title, category }) {
  const c = colors[category] ?? '#2dd4bf'
  let size = 64
  let lines = wrap(title, 26)
  if (lines.length > 4) {
    size = 52
    lines = wrap(title, 32)
  }
  const lineH = size * 1.15
  const startY = 330 - ((lines.length - 1) * lineH) / 2
  const pillW = category.length * 13 + 48
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="g1" cx="85%" cy="15%" r="65%"><stop offset="0" stop-color="${c}" stop-opacity="0.45"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="5%" cy="100%" r="55%"><stop offset="0" stop-color="#2dd4bf" stop-opacity="0.22"/><stop offset="1" stop-color="#2dd4bf" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
  </defs>
  <rect width="1200" height="675" fill="#0a0a0c"/>
  <rect width="1200" height="675" fill="url(#grid)"/>
  <rect width="1200" height="675" fill="url(#g1)"/>
  <rect width="1200" height="675" fill="url(#g2)"/>
  <circle cx="1010" cy="170" r="150" fill="none" stroke="${c}" stroke-opacity="0.25" stroke-width="2"/>
  <circle cx="1010" cy="170" r="95" fill="none" stroke="${c}" stroke-opacity="0.15" stroke-width="2"/>
  <rect x="80" y="80" rx="22" ry="22" width="${pillW}" height="44" fill="${c}" fill-opacity="0.15" stroke="${c}" stroke-opacity="0.5"/>
  <text x="${80 + pillW / 2}" y="109" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="20" font-weight="700" fill="${c}">${esc(category.toUpperCase())}</text>
  ${lines
    .map((l, i) => `<text x="80" y="${startY + i * lineH}" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="${size}" font-weight="800" fill="#ffffff">${esc(l)}</text>`)
    .join('\n  ')}
  <g transform="translate(80 560)">
    <image href="data:image/png;base64,${mark}" x="0" y="0" width="30" height="44"/>
    <text x="50" y="30" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff">Raindrop Marketing</text>
  </g>
</svg>
`
}

const dir = new URL('../public/blog/', import.meta.url)
mkdirSync(dir, { recursive: true })
const posts = [...aiAndSeo, ...contentAndWebsites, ...leadsAndGrowth]
for (const p of posts) writeFileSync(new URL(`${p.slug}.svg`, dir), cover(p))
console.log(`covers: ${posts.length}`)
