# Yugen Systems — marketing site

Rebuilt from the takeoffdigitalsolutions.com codebase (same layout, sections, animations and page set), rebranded for Yugen.
Vite + React + Tailwind v3 (shadcn theme), prerendered to static HTML per route with `vite-react-ssg`.

- `npm run dev` — dev server on http://localhost:5179
- `npm run build` — static site in `dist/` (+ `sitemap.xml`)

Config to fill in before launch: `src/content/site.js` (booking widget URL, onboarding form endpoint, social links).
Blog articles live in `src/content/blog.js`; products list in `src/content/site.js`.
