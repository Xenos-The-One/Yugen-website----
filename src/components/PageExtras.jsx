import { Chips, Faqs, Section, SectionHeading } from '@/components/LandingParts'
import { pageExtras } from '@/content/pageExtras'

// Explainer, related links and FAQs for a core page. No FAQPage schema: Google no longer shows FAQ rich
// results for commercial sites, and repeating every answer in JSON-LD drags down the text-to-HTML ratio.
export function PageExtras({ path }) {
  const p = pageExtras[path]
  if (!p) return null
  return (
    <>
      {p.paragraphs && (
        <Section>
          <SectionHeading title={p.title} accent={p.accent} />
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-white/70 leading-relaxed">
            {p.paragraphs.map((t) => (
              <p key={t.slice(0, 40)}>{t}</p>
            ))}
          </div>
          {p.links && (
            <div className="mt-10">
              <Chips items={p.links.map((l) => l.label)} hrefs={p.links.map((l) => l.href)} />
            </div>
          )}
        </Section>
      )}
      {p.faqs && (
        <Section alt>
          <SectionHeading title={p.paragraphs ? 'Common' : p.title} accent="questions" />
          <Faqs faqs={p.faqs} />
        </Section>
      )}
    </>
  )
}
