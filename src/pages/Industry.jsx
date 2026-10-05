import { useParams } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { Seo, faqJsonLd } from "@/components/Seo";
import { CardGrid, Chips, ClosingCta, Faqs, LandingHero, Section, SectionHeading } from "@/components/LandingParts";
import { industryBySlug } from "@/content/industries";
import { areas } from "@/content/areas";
import { byline, testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import NotFound from "./NotFound";

export default function Industry() {
  const { slug } = useParams();
  const t = industryBySlug[slug];
  if (!t) return <NotFound />;

  const matched = testimonials.filter((x) => t.roles.includes(x.role));
  const quotes = (matched.length ? matched : testimonials).slice(0, 3);
  const path = `/industries/${t.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: t.title,
      serviceType: `Marketing for ${t.business}`,
      description: t.metaDescription,
      provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
      areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
      url: `${site.url}${path}`,
    },
    faqJsonLd(t.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
        { "@type": "ListItem", position: 3, name: t.name, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo title={t.title} description={t.metaDescription} path={path} jsonLd={jsonLd} />
      <LandingHero
        eyebrow={`For ${t.business}`}
        icon={Briefcase}
        title="Marketing for"
        accent={t.business.replace(/^\w/, (c) => c.toUpperCase())}
        intro={t.intro}
        image={`/landing/img/industry-${t.slug}.webp`}
        imageAlt={`${t.name} work underway at a Greater Toronto Area home`}
      />

      <Section>
        <SectionHeading title="What holds" accent={`${t.business} back`} sub="Most of the jobs you lose never show up in a report. These are the leaks we see most often." />
        <CardGrid items={t.challenges} />
      </Section>

      <Section alt>
        <SectionHeading
          title="What we build for"
          accent={t.business}
          sub="The parts of our system that matter most for your trade. Every piece is set up and managed for you."
        />
        <CardGrid items={t.focus} />
      </Section>

      <Section>
        <SectionHeading
          title="How homeowners"
          accent="search for you"
          sub="Real examples of what GTA homeowners type into Google and ask AI assistants. Your website, Business Profile and reviews should answer every one of them."
        />
        <Chips items={t.searches} />
      </Section>

      <Section alt>
        <SectionHeading title="Your year," accent="planned" sub="Marketing that follows your trade's seasons instead of fighting them." />
        <CardGrid items={t.seasons.map((s) => ({ title: s.season, text: s.text }))} columns="sm:grid-cols-2 lg:grid-cols-4" />
      </Section>

      <Section>
        <SectionHeading title="What contractors" accent="say" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 p-7">
              <blockquote className="text-white/85 text-lg leading-relaxed mb-5">“{q.quote}”</blockquote>
              <figcaption>
                <div className="font-bold text-white">{q.name}</div>
                <div className="text-sm text-white/50">{byline(q)}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading title="Common" accent="questions" />
        <Faqs faqs={t.faqs} />
      </Section>

      <Section>
        <SectionHeading title={`Serving ${t.business}`} accent="across the GTA" />
        <Chips items={areas.map((a) => a.name)} hrefs={areas.map((a) => `/areas/${a.slug}`)} />
      </Section>

      <ClosingCta
        title="Let's find the leaks in your business"
        text="Book a free strategy call. We'll look at how you handle leads today, how you show up on Google and AI search, and what would bring in the most booked jobs."
      />
    </div>
  );
}
