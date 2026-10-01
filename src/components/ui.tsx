import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-jade shadow-[0_0_10px] shadow-jade" />
      {children}
    </span>
  )
}

type ButtonProps = { to: string; children: ReactNode; variant?: 'primary' | 'ghost'; className?: string }

export function Button({ to, children, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-white text-ink hover:bg-jade hover:shadow-[0_0_40px_-6px] hover:shadow-jade'
      : 'border border-white/15 bg-white/[0.03] text-white hover:border-jade/60 hover:bg-jade/10'
  const external = /^(https?:|mailto:|tel:)/.test(to)
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </>
  )
  return external ? (
    <a href={to} className={`${base} ${styles} ${className}`}>{inner}</a>
  ) : (
    <Link to={to} className={`${base} ${styles} ${className}`}>{inner}</Link>
  )
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  center = true,
}: {
  eyebrow?: string
  title: string
  accent?: string
  body?: string
  center?: boolean
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-jade">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {body && <p className="mt-5 text-lg leading-relaxed text-white/60">{body}</p>}
    </Reveal>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-white/80">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-jade/15 text-jade">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-2xl shadow-black/40 backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

export function Glow({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`} />
}
