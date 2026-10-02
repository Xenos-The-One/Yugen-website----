import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Seo, faqJsonLd } from "@/components/Seo";
import { CardGrid, CheckList, Chips, ClosingCta, Faqs, LandingHero, Section, SectionHeading } from "@/components/LandingParts";
import { areaBySlug } from "@/content/areas";
import { industries } from "@/content/industries";
import { site } from "@/content/site";
import NotFound from "./NotFound";

const services = [
  { title: "Lead & Review System", text: "Missed call text back, AI website chat, automated follow-up and review requests, so every inquiry is answered and every happy customer becomes a review.", href: "/products/missed-call-text-back" },
  { title: "Websites that book jobs", text: "Fast, mobile-first websites with clear service pages, real project photos and easy ways to call, chat or book.", href: "/products/functional-website" },
  { title: "Local SEO and AI search", text: "Google Business Profile, service and area pages, and the consistency AI assistants look for when they recommend local businesses.", href: "/products/local-seo" },
  { title: "Paid ads, tracked to jobs", text: "Google and Meta campaigns aimed at the neighbourhoods you want, tracked all the way to booked calls.", href: "/products/paid-ads" },
];

export default function Area() {
  const { slug } = useParams();
  const a = areaBySlug[slug];
  if (!a) return <NotFound />;

  const path = `/areas/${a.slug}`;
  const nearby = a.nearby.map((s) => areaBySlug[s]).filter(Boolean);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: a.title,
      serviceType: "Contractor marketing",
      description: a.metaDescription,
      provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
      areaServed: { "@type": "City", name: a.name, containedInPlace: { "@type": "AdministrativeArea", name: a.region } },
      url: `${site.url}${path}`,
    },
    faqJsonLd(a.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site.url}/areas` },
        { "@type": "ListItem", position: 3, name: a.name, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo title={a.title} description={a.metaDescription} path={path} jsonLd={jsonLd} />
      <LandingHero
        eyebrow={`${a.name}, ${a.region}`}
        icon={MapPin}
        title="Contractor Marketing in"
        accent={a.name}
        intro={a.intro}
        image={`/landing/img/area-${a.slug}.webp`}
        imageAlt={`A residential street in ${a.name}, Ontario`}
      />

      <Section>
        <SectionHeading title={`The ${a.name}`} accent="market" />
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {a.market.map((p) => (
            <p key={p.slice(0, 30)} className="text-lg md:text-xl text-white/75 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <h3 className="text-center text-white/60 font-semibold mb-5">Neighbourhoods we help contractors reach</h3>
        <Chips items={a.neighbourhoods} />
      </Section>

      <Section alt>
        <SectionHeading title={`What ${a.name} homeowners`} accent="hire for" />
        <CheckList items={a.needs} />
      </Section>

      <Section>
        <SectionHeading title="What we build for" accent={`${a.name} contractors`} sub="One system that answers every lead, builds your reviews and gets you found." />
        <CardGrid items={services} />
      </Section>

      <Section alt>
        <SectionHeading title={`Trades we work with in`} accent={a.name} />
        <Chips items={industries.map((i) => i.name)} hrefs={industries.map((i) => `/industries/${i.slug}`)} />
      </Section>

      <Section>
        <SectionHeading title="Common" accent="questions" />
        <Faqs faqs={a.faqs} />
      </Section>

      <Section alt>
        <SectionHeading title="Nearby" accent="areas" />
        <Chips items={nearby.map((n) => n.name)} hrefs={nearby.map((n) => `/areas/${n.slug}`)} />
      </Section>

      <ClosingCta
        title={`Get more booked jobs in ${a.name}`}
        text="Book a free strategy call. We'll look at how you show up for homeowners in your area today and what would bring in the most work."
      />
    </div>
  );
}
