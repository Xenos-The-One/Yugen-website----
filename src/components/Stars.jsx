// Shared SVG symbols for icons a page repeats many times (review stars, map pins, check marks).
// Each use is a small <use> reference instead of the full lucide SVG, which keeps review-heavy pages lean.
// Render IconSprite once on any page that uses Stars or SpriteIcon.
const STAR = "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26";

export function IconSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <symbol id="i-star" viewBox="0 0 24 24">
        <polygon points={STAR} />
      </symbol>
      <symbol id="i-stars" viewBox="0 0 136 24">
        {[0, 28, 56, 84, 112].map((x) => (
          <polygon key={x} points={STAR} transform={`translate(${x})`} />
        ))}
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 9-5.5 5.5L8 12" />
      </symbol>
    </svg>
  );
}

// Outline icons inherit the .lucide stroke styles; pass fill-current for filled ones.
export function SpriteIcon({ id, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`lucide ${className}`} aria-hidden="true">
      <use href={`#i-${id}`} />
    </svg>
  );
}

export function Stars({ className = "" }) {
  return (
    <svg viewBox="0 0 136 24" className={`h-5 w-[113px] fill-current ${className}`} role="img" aria-label="5 out of 5 stars">
      <use href="#i-stars" />
    </svg>
  );
}
