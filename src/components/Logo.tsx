const MARK = '/raindrop-mark.png'

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return <img src={MARK} alt="" aria-hidden className={`object-contain ${className}`} />
}

// Height comes from className (e.g. "h-10"); width follows the viewBox.
export function Logo({ className = 'h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 168 44" className={`w-auto ${className}`} role="img" aria-label="Raindrop Marketing">
      <image href={MARK} x="0" y="2" width="27" height="40" />
      <text x="35" y="25" fill="#fff" fontFamily="Sora, ui-sans-serif, system-ui" fontWeight="700" fontSize="24" letterSpacing="-0.5">
        Raindrop
      </text>
      <text x="36" y="38" fill="rgba(255,255,255,0.55)" fontFamily="Sora, ui-sans-serif, system-ui" fontWeight="600" fontSize="8.5" letterSpacing="3.4">
        MARKETING
      </text>
    </svg>
  )
}
