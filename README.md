# Yugen Systems — marketing site

Vite + React + Tailwind v4, prerendered to static HTML per route with `vite-react-ssg`.

- `npm run dev` — dev server on http://localhost:5179
- `npm run build` — static site in `dist/` (+ `sitemap.xml`)

Copy lives in `src/content/` (site settings, services, home sections). Placeholders to replace before launch are in `src/content/site.ts` (email, phone, booking URL, form endpoint, hero stats, testimonials) and `src/pages/Pricing.tsx` (prices).
