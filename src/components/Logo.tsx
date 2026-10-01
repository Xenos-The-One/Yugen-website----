import { useId } from 'react'

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5eead4" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M30.5 9.2A14 14 0 1 0 34 20.5" fill="none" stroke={`url(#${id})`} strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3.2" fill="#2dd4bf" />
    </svg>
  )
}

// Height comes from className (e.g. "h-10"); width follows the viewBox.
export function Logo({ className = 'h-10' }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 172 44" className={`w-auto ${className}`} role="img" aria-label="Yugen Systems">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5eead4" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M32.5 11.2A14 14 0 1 0 36 22.5" fill="none" stroke={`url(#${id})`} strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="22" cy="22" r="3.2" fill="#2dd4bf" />
      <text x="48" y="25" fill="#fff" fontFamily="Sora, ui-sans-serif, system-ui" fontWeight="700" fontSize="24" letterSpacing="-0.5">
        Yūgen
      </text>
      <text x="49" y="38" fill="rgba(255,255,255,0.55)" fontFamily="Sora, ui-sans-serif, system-ui" fontWeight="600" fontSize="8.5" letterSpacing="3.4">
        SYSTEMS
      </text>
    </svg>
  )
}
