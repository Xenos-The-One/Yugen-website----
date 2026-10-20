import { useParams } from "react-router-dom";
import { Briefcase, ExternalLink } from "lucide-react";
import { Seo, breadcrumbJsonLd, providerRef } from "@/components/Seo";
import { CardGrid, CheckList, Chips, ClosingCta, LandingHero, Section, SectionHeading } from "@/components/LandingParts";
import { caseStudyBySlug } from "@/content/caseStudies";
import { industryBySlug } from "@/content/industries";
import { areaBySlug } from "@/content/areas";
import { site } from "@/content/site";
import NotFound from "./NotFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const c = caseStudyBySlug[slug];
  if (!c) return <NotFound />;

  const path = `/case-studies/${c.slug}`;
  const industry = industryBySlug[c.trade];
  const area = areaBySlug[c.city];
  const hero = c.images[0] || (industry && { src: `/landing/img/industry-${industry.slug}.webp`, alt: `${industry.name} work at a Greater Toronto Area home` });
  const gallery = c.images.slice(1);
  const related = [
    industry && [`Marketing for ${industry.business}`, `/industries/${industry.slug}`],
    area && [`Contractor marketing in ${area.name}`, `/areas/${area.slug}`],
  ].filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${c.client}: ${c.headline}`,
      description: c.metaDescription,
      url: `${site.url}${path}`,
      ...(c.date && { datePublished: c.date }),
      ...(c.images[0] && { image: `${site.url}${c.images[0].src}` }),
      author: providerRef,
      publisher: providerRef,
      about: {
        "@type": "LocalBusiness",
        name: c.client,
        ...(c.url && { url: c.url }),
        ...(area && { areaServed: { "@type": "City", name: area.name } }),
      },
    },
    breadcrumbJsonLd([["Case Studies", "/case-studies"], [c.client, path]]),
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo title={c.title} description={c.metaDescription} path={path} jsonLd={jsonLd} type="article" image={c.images[0]?.src} />
      <LandingHero
        eyebrow="Case study"
        icon={Briefcase}
        title={c.client}
        accent={c.headline}
        intro={c.summary}
        image={hero?.src}
        imageAlt={hero?.alt}
        location="case_study_hero"
      />

      <Section>
        <SectionHeading title="The" accent="starting point" />
        <p className="max-w-3xl mx-auto text-lg text-white/75 leading-relaxed">{c.problem}</p>
      </Section>

      <Section alt>
        <SectionHeading title="What we" accent="did" />
        <CheckList items={c.whatWeDid} />
      </Section>

      <Section>
        <SectionHeading title="What we" accent="delivered" />
        <Chips items={c.deliverables} />
        {c.url && (
          <p className="text-center mt-10">
            <a href={c.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Visit {c.client} <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        )}
      </Section>

      {gallery.length > 0 && (
        <Section alt>
          <SectionHeading title="The" accent="project" />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gallery.map((img) => (
              <figure key={img.src}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-[2rem] border border-white/10" />
                {img.caption && <figcaption className="text-sm text-white/50 mt-3 text-center">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </Section>
      )}

      {c.quote && (
        <Section>
          <figure className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-white/90 font-medium leading-relaxed mb-6">“{c.quote.text}”</blockquote>
            <figcaption className="text-white/60">
              <span className="font-bold text-white">{c.quote.name}</span>
              {c.quote.role && `, ${c.quote.role}`}
            </figcaption>
          </figure>
        </Section>
      )}

      {c.metrics.length > 0 && (
        <Section alt>
          <SectionHeading title="The" accent="results" />
          <CardGrid items={c.metrics.map((m) => ({ title: m.value, text: m.label }))} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <SectionHeading title="Related" accent="services" />
          <Chips items={related.map((r) => r[0])} hrefs={related.map((r) => r[1])} />
        </Section>
      )}

      <ClosingCta
        title="Want results like this?"
        text="Start with a free visibility and lead audit. We'll show you where you rank, where leads slip away and what we'd fix first for your business."
        location="case_study_closing"
      />
    </div>
  );
}
