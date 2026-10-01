import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './ui'
import { companyNav, site } from '../content/site'
import { services } from '../content/services'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink pt-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">{site.tagline}</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm font-semibold text-jade hover:underline">
              {site.email}
            </a>
          </div>
          <FooterCol title="Services">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>
            ))}
          </FooterCol>
          <FooterCol title="Company">
            {companyNav.filter((l) => !l.hidden).map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </FooterCol>
          <FooterCol title="Legal">
            <Link to="/legal#terms">Terms of Use</Link>
            <Link to="/legal#privacy">Privacy Policy</Link>
          </FooterCol>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Get found. Get chosen. Get booked.</p>
        </div>
      </Container>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{title}</p>
      <div className="flex flex-col gap-2.5 text-sm text-white/70 [&_a:hover]:text-jade [&_a]:transition-colors">{children}</div>
    </div>
  )
}
