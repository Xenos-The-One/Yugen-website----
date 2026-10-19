import { Search } from "lucide-react";
import { Seo, breadcrumbJsonLd, faqJsonLd, providerRef } from "@/components/Seo";
import { CardGrid, CheckList, Faqs, LandingHero, Section, SectionHeading } from "@/components/LandingParts";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

const checks = [
  { title: "Google rankings", text: "Where you rank today for the searches that bring in jobs, in the cities you serve, and who ranks above you.", href: "/products/local-seo" },
  { title: "AI search visibility", text: "What ChatGPT, Gemini and Perplexity say when homeowners ask who to hire for your service, and whether you are named.", href: "/products/ai-seo" },
  { title: "Google Business Profile", text: "Categories, services, service area, photos, reviews and the details that decide map pack rankings.", href: "/blog/google-business-profile-optimization" },
  { title: "Website and technical SEO", text: "Speed on phones, indexing, titles, headings, structured data and anything stopping Google from trusting your site.", href: "/blog/technical-seo-basics" },
  { title: "Reviews and reputation", text: "How your review count, rating and recency compare with the contractors you lose jobs to.", href: "/products/review-system" },
  { title: "Lead capture", text: "What happens when someone calls after hours, fills in a form or tries to book, and where leads slip away.", href: "/products/missed-call-text-back" },
];

const youGet = [
  "A short, plain-English summary of where you stand on Google and in AI search",
  "The three to five fixes that would make the biggest difference first",
  "How you compare with the competitors showing up instead of you",
  "Honest advice on what you can do yourself, with no obligation to hire us",
];

const faqs = [
  { q: "Is the audit really free?", a: "Yes. There is no cost and no obligation. We review your business, send you the findings and you decide what to do with them." },
  { q: "What do you need from me?", a: "Your business name, website, the services you want more of and the areas you serve. That is enough for us to start." },
  { q: "How long does it take?", a: "We usually send findings within a few business days and can walk you through them on a short call if you like." },
  { q: "Do you only audit contractors?", a: "We specialize in contractors and home service businesses in the GTA, but we are happy to look at any local business." },
];

export default function FreeAudit() {
  const path = "/free-seo-audit";
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo
        title="Free SEO & AI Visibility Audit"
        description="Get a free SEO and AI visibility audit: see where your business ranks on Google, what ChatGPT says about you and the fixes that matter most."
        path={path}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free SEO and AI visibility audit",
            serviceType: "SEO audit",
            url: `${site.url}${path}`,
            provider: providerRef,
            areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
            offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
          },
          faqJsonLd(faqs),
          breadcrumbJsonLd([["Free SEO Audit", path]]),
        ]}
      />
      <LandingHero
        eyebrow="Free SEO Audit"
        icon={Search}
        title="Free SEO & AI visibility audit"
        accent="for GTA contractors"
        intro="Find out where you rank on Google, whether AI assistants recommend you, and exactly what is holding you back. No cost, no obligation, no jargon."
        image="/landing/img/area-toronto.webp"
        imageAlt="A residential street in the Greater Toronto Area"
      />
      <Section>
        <SectionHeading title="What we" accent="check" sub="The same review we run before taking on any client, done for your business." />
        <CardGrid items={checks} columns="md:grid-cols-2 lg:grid-cols-3" />
      </Section>
      <Section alt>
        <SectionHeading title="What you" accent="get" />
        <CheckList items={youGet} />
      </Section>
      <Section>
        <SectionHeading title="Request your" accent="free audit" sub={`Or call ${site.phone}.`} />
        <div className="max-w-3xl mx-auto">
          <ContactForm audit />
        </div>
      </Section>
      <Section alt>
        <SectionHeading title="Common" accent="questions" />
        <Faqs faqs={faqs} />
      </Section>
    </div>
  );
}
