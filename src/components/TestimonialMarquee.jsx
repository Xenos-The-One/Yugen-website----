import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Stars } from "@/components/Stars";
import { byline } from "@/content/testimonials";

const tones = {
  primary: {
    card: "hover:border-primary/50 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.2)]",
    wash: "from-primary/10",
    stars: "text-primary",
    star: "drop-shadow-[0_0_5px_hsl(var(--primary)/0.5)]",
    avatar: "bg-primary/20 text-primary border-primary/30 shadow-[0_0_15px_hsl(var(--primary)/0.2)]",
    meta: "text-primary",
  },
  cyan: {
    card: "hover:border-[#06b6d4]/50 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)]",
    wash: "from-[#06b6d4]/10",
    stars: "text-[#06b6d4]",
    star: "drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]",
    avatar: "bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]",
    meta: "text-[#06b6d4]",
  },
};

function Card({ t, tone }) {
  const c = tones[tone];
  return (
    <div
      className={`marquee-card group ${c.card}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${c.wash} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10">
        <div className={`mb-6 group-hover:scale-110 origin-left transition-transform duration-300 ${c.stars}`}>
          <Stars className={c.star} />
        </div>
        <p className="text-xl text-white/90 mb-8 font-medium leading-relaxed">"{t.quote}"</p>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border ${c.avatar}`}>{t.name[0]}</div>
          <div>
            <div className="font-bold text-white">{t.name}</div>
            <div className={`text-sm flex items-center gap-1 ${c.meta}`}>
              {t.location && <MapPin className="w-3.5 h-3.5" />}
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
      className={`flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max ${reverse ? "[animation-direction:reverse]" : ""}`}
    >
      {(loop ? [0, 1] : [0]).map((copy) => (
        <div className="flex gap-8 pr-8" aria-hidden={copy === 1 || undefined} key={copy}>
          {items.map((t) => (
            <Card t={t} tone={tone} key={t.name} />
          ))}
        </div>
      ))}
    </div>
  );
}
