import { CardGrid, Section, SectionHeading } from "@/components/LandingParts";
import { caseStudies } from "@/content/caseStudies";

export const caseStudyCard = (c) => ({ title: `${c.client}: ${c.headline}`, text: c.summary, href: `/case-studies/${c.slug}` });

// "Our work" section for industry, area and testimonial pages; renders nothing until a matching case study exists.
export function CaseStudySection({ title = "See the", accent = "work", sub, filter = () => true, alt = false }) {
  const items = caseStudies.filter(filter);
  if (!items.length) return null;
  return (
    <Section alt={alt}>
      <SectionHeading title={title} accent={accent} sub={sub} />
      <CardGrid items={items.slice(0, 4).map(caseStudyCard)} />
      <p className="text-center mt-10">
        <a href="/case-studies" className="text-primary font-bold hover:underline">All case studies</a>
      </p>
    </Section>
  );
}
