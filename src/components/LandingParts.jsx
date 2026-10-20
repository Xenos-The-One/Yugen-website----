import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { CtaPair } from "@/components/AuditCta";
import { FadeIn } from "@/components/motion";

// Shared building blocks for the industry and area landing pages.

export function LandingHero({ eyebrow, icon: Icon = MapPin, title, accent, intro, image, imageAlt, primaryHref, primaryLabel, location = "landing_hero" }) {
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
            <CtaPair location={location} primaryHref={primaryHref} primaryLabel={primaryLabel} />
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
        <details key={f.q} className="faq">
          <summary>
            <h3>{f.q}</h3>
          </summary>
          <p>{f.a}</p>
        </details>
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

export function ClosingCta({ title, text, location = "landing_closing" }) {
  return (
    <section className="py-24 px-4 border-t border-white/5 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">{title}</h2>
        <p className="text-lg text-white/70 mb-8">{text}</p>
        <CtaPair location={location} className="justify-center" />
      </div>
    </section>
  );
}

// First-hand material for industry and area pages: audit findings, our own photos and a client example.
// Each part renders only when filled in, so empty pages never ship thin sections.
export function FirstHand({ notes = [], photos = [], example, subject, alt = false }) {
  if (!notes.length && !photos.length && !example) return null;
  return (
    <Section alt={alt}>
      <SectionHeading title="From our" accent="own work" sub={`What we've seen first-hand auditing and working with ${subject}.`} />
      {notes.length > 0 && <CardGrid items={notes} />}
      {photos.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {photos.map((p) => (
            <figure key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-[2rem] border border-white/10" />
              {p.caption && <figcaption className="text-sm text-white/50 mt-3 text-center">{p.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      {example && (
        <div className="max-w-3xl mx-auto mt-6 rounded-[2rem] border border-primary/30 bg-primary/[0.06] p-7">
          <h3 className="text-xl font-bold text-white mb-3">A real example</h3>
          <p className="text-white/75 leading-relaxed">{example.text}</p>
          {example.caseStudy && (
            <a href={`/case-studies/${example.caseStudy}`} className="inline-block mt-4 text-primary font-bold hover:underline">Read the case study</a>
          )}
        </div>
      )}
    </Section>
  );
}
