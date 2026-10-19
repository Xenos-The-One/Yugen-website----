// Five filled stars drawn from one shared <symbol>; lucide renders each star as its own ~700-byte SVG,
// which bloats pages that list many reviews. StarSymbol is rendered once in the layout.
export function StarSymbol() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <symbol id="star" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </symbol>
    </svg>
  );
}

export function Stars({ className = "" }) {
  return (
    <svg viewBox="0 0 136 24" className={`h-5 w-[113px] fill-current ${className}`} role="img" aria-label="5 out of 5 stars">
      {[0, 28, 56, 84, 112].map((x) => (
        <use key={x} href="#star" x={x} width="24" height="24" />
      ))}
    </svg>
  );
}
