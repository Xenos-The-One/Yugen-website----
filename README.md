# Yugen Systems — marketing site

Rebuilt from the takeoffdigitalsolutions.com codebase (same layout, sections, animations and page set), rebranded for Yugen.
Vite + React + Tailwind v3 (shadcn theme), prerendered to static HTML per route with `vite-react-ssg`.

- `npm run dev` — dev server on http://localhost:5179
- `npm run build` — static site in `dist/` (+ `sitemap.xml`)

Config to fill in before launch: `src/content/site.js` (booking widget URL, onboarding form endpoint, social links).
Blog articles live in `src/content/blog.js`; products list in `src/content/site.js`.

## Form email

`api/contact.js` is a Vercel function that emails contact and onboarding submissions through Resend. Set these in the Vercel project:

- `RESEND_API_KEY` (required)
- `RESEND_FROM` — sender on a domain verified in Resend (default `Yugen Systems Website <forms@yugensystem.com>`)
- `CONTACT_TO` — recipient (default `thailer@yugensystem.com`)

`npm run dev` does not run `/api`; use `vercel dev` to test forms locally.
