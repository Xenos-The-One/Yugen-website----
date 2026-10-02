# Yugen Systems — marketing site

Rebuilt from the takeoffdigitalsolutions.com codebase (same layout, sections, animations and page set), rebranded for Yugen.
Vite + React + Tailwind v3 (shadcn theme), prerendered to static HTML per route with `vite-react-ssg`.

- `npm run dev` — dev server on http://localhost:5179
- `npm run build` — static site in `dist/` (+ `sitemap.xml`)

Config to fill in before launch: `src/content/site.js` (booking widget URL, onboarding form endpoint, social links).
Blog articles live in `src/content/blog.js`; products list in `src/content/site.js`.

## Form email

`api/contact.js` is a Vercel function that emails contact and onboarding submissions from your own Google Workspace mailbox over SMTP (no third-party email service). Set these in the Vercel project:

- `SMTP_USER`: `thailer@yugensystem.com`
- `SMTP_PASS`: a Google app password for that account (myaccount.google.com/apppasswords; needs 2-Step Verification)
- `CONTACT_TO` (optional): recipient, defaults to `SMTP_USER`

`npm run dev` does not run `/api`; use `vercel dev` to test forms locally.

## Deploys

GitHub: https://github.com/Xenos-The-One/Yugen-website---- (private). The Vercel project `yugen-site` is connected to it: every push to `main` deploys to production (https://yugen-site-delta.vercel.app).
