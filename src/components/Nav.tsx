import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { ServiceIcon } from './ServiceIcon'
import { companyNav, site } from '../content/site'
import { services } from '../content/services'

const linkClass =
  'relative whitespace-nowrap transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-jade after:transition-all hover:after:w-full'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation()
  const links = companyNav.filter((l) => !l.hidden)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMenu(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/5 bg-ink/75 py-3 backdrop-blur-xl' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-white/75 lg:flex">
          <div className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-white"
              aria-expanded={menu}
              onClick={() => setMenu((m) => !m)}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${menu ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {menu && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-surface/95 p-2 shadow-2xl backdrop-blur-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-jade/10 text-jade">
                          <ServiceIcon name={s.icon} className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-white">{s.name}</span>
                          <span className="block text-xs font-normal leading-snug text-white/50">{s.short}</span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="col-span-2 rounded-xl p-3 text-center text-xs font-bold uppercase tracking-widest text-jade hover:bg-white/5"
                    >
                      All Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `${linkClass} ${isActive ? 'text-white' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={site.bookingUrl}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-jade sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-6 px-4 py-6 sm:px-6">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40">Services</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {services.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="py-1 text-sm font-semibold text-white/80">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <Link key={l.to} to={l.to} className="text-lg font-semibold">
                    {l.label}
                  </Link>
                ))}
              </div>
              <Link to={site.bookingUrl} className="block rounded-full bg-white py-3 text-center font-bold text-ink">
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
