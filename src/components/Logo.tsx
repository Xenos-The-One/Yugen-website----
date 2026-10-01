import { useId } from 'react'

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5eead4" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <path
        d="M30.5 9.2A14 14 0 1 0 34 20.5"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="3.2" fill="#2dd4bf" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-none">
        <span className="block font-display text-xl font-bold tracking-tight">Yūgen</span>
        <span className="block text-[9px] font-semibold uppercase tracking-[0.32em] text-white/50">Systems</span>
      </span>
    </span>
  )
}
