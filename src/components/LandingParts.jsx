import { ArrowRight, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

// Shared building blocks for the industry and area landing pages.

export function LandingHero({ eyebrow, icon: Icon = MapPin, title, accent, intro, image, imageAlt }) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 px-4 overflow-hidden bg-[#030303]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold mb-6">
              <Icon className="w-4 h-4" /> {eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6">
              {title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">{accent}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookingDialog location="landing_hero">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold h-14 px-8 rounded-full text-base">
                  Book a Call <Calendar className="w-4 h-4 ml-2" />
                </Button>
              </BookingDialog>
              <a
                href="/contact?interest=audit"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors"
              >
                Free AI Visibility Audit
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-[#06b6d4]/10 blur-3xl rounded-[3rem] pointer-events-none" />
            <img
              src={image}
              alt={imageAlt}
              className="relative w-full aspect-[16/10] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ title, accent, sub }) {
  return (
    <FadeIn>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">{accent}</span>
        </h2>
        {sub && <p className="text-lg text-white/60 leading-relaxed">{sub}</p>}
      </div>
    </FadeIn>
  );
}

export function CardGrid({ items, columns = "md:grid-cols-2" }) {
  return (
    <div className={`grid ${columns} gap-6 max-w-5xl mx-auto`}>
      {items.map((it, i) => {
        const inner = (
          <div className="h-full rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 p-7 hover:border-primary/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              {it.title}
              {it.href && <ArrowRight className="w-4 h-4 text-primary" />}
            </h3>
            <p className="text-white/65 leading-relaxed">{it.text}</p>
          </div>
        );
        return (
          <FadeIn delay={i * 0.05} key={it.title} className="h-full">
            {it.href ? (
              <a href={it.href} className="block h-full">
                {inner}
              </a>
            ) : (
              inner
            )}
          </FadeIn>
        );
      })}
    </div>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="space-y-4 max-w-3xl mx-auto">
      {items.map((t) => (
        <li key={t} className="flex gap-4 items-start rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <span className="text-lg text-white/85">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items, hrefs }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {items.map((t, i) =>
        hrefs?.[i] ? (
          <a key={t} href={hrefs[i]} className="px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors">
            {t}
          </a>
        ) : (
          <span key={t} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/80">
            {t}
          </span>
        ),
      )}
    </div>
  );
}

export function Faqs({ faqs }) {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((f) => (
        <div key={f.q} className="rounded-2xl border border-white/10 bg-[#0a0a0c]/90 p-6">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">{f.q}</h3>
          <p className="text-white/70 leading-relaxed">{f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function Section({ children, alt = false }) {
  return (
    <section className={`py-20 px-4 border-t border-white/5 ${alt ? "bg-[#0a0a0c]" : "bg-[#030303]"}`}>
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function ClosingCta({ title, text }) {
  return (
    <section className="py-24 px-4 border-t border-white/5 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">{title}</h2>
        <p className="text-lg text-white/70 mb-8">{text}</p>
        <BookingDialog location="landing_closing">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold h-14 px-10 rounded-full text-base">
            Book Your Strategy Call
          </Button>
        </BookingDialog>
      </div>
    </section>
  );
}
