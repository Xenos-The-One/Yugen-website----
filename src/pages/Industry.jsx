import { useParams } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { Seo, breadcrumbJsonLd, faqJsonLd, providerRef } from "@/components/Seo";
import { CardGrid, Chips, ClosingCta, Faqs, FirstHand, LandingHero, Section, SectionHeading } from "@/components/LandingParts";
import { industryBySlug } from "@/content/industries";
import { industrySeo } from "@/content/industrySeo";
import { areas } from "@/content/areas";
import { byline, testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { CaseStudySection } from "@/components/CaseStudyCards";
import NotFound from "./NotFound";

export default function Industry() {
  const { slug } = useParams();
  const t = industryBySlug[slug];
  if (!t) return <NotFound />;
  const seo = industrySeo[t.slug];

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
      provider: providerRef,
      areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
      url: `${site.url}${path}`,
    },
    faqJsonLd(t.faqs),
    breadcrumbJsonLd([["Industries", "/industries"], [t.name, path]]),
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo title={t.title} description={t.metaDescription} path={path} jsonLd={jsonLd} />
      <LandingHero
        eyebrow={`For ${t.business}`}
        icon={Briefcase}
        title={t.keyword}
        accent={t.title.slice(t.keyword.length).trim()}
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

      {seo && (
        <Section alt>
          <SectionHeading title={`SEO for ${t.business}:`} accent="what we set up" sub={seo.lead} />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 p-7">
              <h3 className="text-xl font-bold text-white mb-2">Google Business Profile categories to consider</h3>
              <p className="text-white/60 mb-5">The primary category matters most for map rankings. We choose based on the work you actually want.</p>
              <Chips items={seo.categories} />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 p-7">
              <h3 className="text-xl font-bold text-white mb-2">Service pages that should each rank</h3>
              <p className="text-white/60 mb-5">One strong page per service, written the way homeowners search, beats one page that lists everything.</p>
              <Chips items={seo.pages} />
            </div>
          </div>
          <p className="text-center mt-10">
            <a href="/products/local-seo" className="text-primary font-bold hover:underline">How our local SEO works</a>
            <span className="mx-3 text-white/20">·</span>
            <a href="/products/ai-seo" className="text-primary font-bold hover:underline">AI SEO for {t.business}</a>
          </p>
        </Section>
      )}

      <Section>
        <SectionHeading title="Your year," accent="planned" sub="Marketing that follows your trade's seasons instead of fighting them." />
        <CardGrid items={t.seasons.map((s) => ({ title: s.season, text: s.text }))} columns="sm:grid-cols-2 lg:grid-cols-4" />
      </Section>

      <FirstHand notes={t.fieldNotes} photos={t.photos} example={t.clientExample} subject={t.business} alt />

      <CaseStudySection
        title="Our work for"
        accent={t.business}
        sub={`Projects for ${t.business} in the GTA: what was broken, and what we built.`}
        filter={(c) => c.trade === t.slug}
      />

      <Section alt>
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

      <Section>
        <SectionHeading title="Common" accent="questions" />
        <Faqs faqs={t.faqs} />
      </Section>

      <Section alt>
        <SectionHeading title={`Serving ${t.business}`} accent="across the GTA" />
        <Chips items={areas.map((a) => a.name)} hrefs={areas.map((a) => `/areas/${a.slug}`)} />
      </Section>

      <ClosingCta
        title="Let's find the leaks in your business"
        text="Start with a free visibility and lead audit. We'll look at how you handle leads today, how you show up on Google and AI search, and what would bring in the most booked jobs."
      />
    </div>
  );
}
