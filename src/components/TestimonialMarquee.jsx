import { useEffect, useState } from "react";
import { SpriteIcon, Stars } from "@/components/Stars";
import { byline } from "@/content/testimonials";

// Card colours come from the row's tone class (.tone-primary / .tone-cyan in src/index.css),
// so each card doesn't repeat them in the HTML.
function Card({ t }) {
  return (
    <div className="marquee-card group">
      <div className="marquee-wash" />
      <div className="relative z-10">
        <div className="marquee-stars">
          <Stars />
        </div>
        <p className="marquee-quote">"{t.quote}"</p>
        <div className="flex items-center gap-4">
          <div className="marquee-avatar">{t.name[0]}</div>
          <div>
            <div className="font-bold text-white">{t.name}</div>
            <div className="marquee-meta">
              {t.location && <SpriteIcon id="pin" className="w-3.5 h-3.5" />}
              {byline(t)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Each row renders its list twice so the -50% marquee loop is seamless; the copy is hidden from assistive tech.
// The copy is added after hydration so the prerendered HTML carries each testimonial once.
export function TestimonialRow({ items, tone = "primary", reverse = false }) {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);
  return (
    <div
      className={`tone-${tone} flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max ${reverse ? "[animation-direction:reverse]" : ""}`}
    >
      {(loop ? [0, 1] : [0]).map((copy) => (
        <div className="flex gap-8 pr-8" aria-hidden={copy === 1 || undefined} key={copy}>
          {items.map((t) => (
            <Card t={t} key={t.name} />
          ))}
        </div>
      ))}
    </div>
  );
}
