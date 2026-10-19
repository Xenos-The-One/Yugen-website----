// Strips lucide-react's default SVG attributes from the prerendered HTML; src/index.css sets the same
// defaults on .lucide. Every icon repeats ~180 bytes of them, which drags down text-to-HTML ratio.
// Hydration leaves server-rendered attributes alone, and client-rendered icons still get the attributes.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist', import.meta.url))
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })

const DEFAULTS = / (xmlns="http:\/\/www\.w3\.org\/2000\/svg"|fill="none"|stroke="currentColor"|stroke-width="2"|stroke-linecap="round"|stroke-linejoin="round")/g
let saved = 0
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8')
  const out = html.replace(/<svg [^>]*class="lucide[^"]*"[^>]*>/g, (tag) =>
    tag.replace(DEFAULTS, '').replace(/class="lucide((?: lucide-[\w-]+)+)/, 'class="lucide'),
  )
  saved += html.length - out.length
  if (out !== html) writeFileSync(file, out)
}
console.log(`slim-html: removed ${Math.round(saved / 1024)} KB of default icon attributes`)
