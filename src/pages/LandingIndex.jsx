import { Briefcase, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { ClosingCta, LandingHero, Section } from "@/components/LandingParts";
import { FadeIn } from "@/components/motion";
import { industries } from "@/content/industries";
import { areas } from "@/content/areas";

function Grid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {items.map((it, i) => (
        <FadeIn delay={i * 0.03} key={it.href} className="h-full">
          <a href={it.href} className="group block h-full rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 overflow-hidden hover:border-primary/40 transition-colors">
            <img src={it.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{it.title}</h2>
              <p className="text-white/60 leading-relaxed">{it.text}</p>
            </div>
          </a>
        </FadeIn>
      ))}
    </div>
  );
}

export function IndustriesIndex() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo
        title="Industries We Serve"
        description="Marketing, lead systems and AI search for GTA trades: HVAC, plumbing, electrical, roofing, renovation, landscaping and more."
        path="/industries"
      />
      <LandingHero
        eyebrow="Industries"
        icon={Briefcase}
        title="Built for"
        accent="the trades"
        intro="Every trade loses jobs in different ways. Pick yours to see what holds businesses like yours back, and what we build to fix it."
        image="/landing/img/industry-general-contractors.webp"
        imageAlt="A general contractor reviewing plans at a renovation site"
      />
      <Section>
        <Grid
          items={industries.map((t) => ({
            href: `/industries/${t.slug}`,
            title: `Marketing for ${t.business}`,
            text: t.intro.split(". ")[0] + ".",
            image: `/landing/img/industry-${t.slug}.webp`,
          }))}
        />
      </Section>
      <ClosingCta title="Don't see your trade?" text="We work with most home service businesses. Book a call and tell us about yours." />
    </div>
  );
}

export function AreasIndex() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo
        title="Service Areas"
        description="Contractor marketing across the Greater Toronto Area: Toronto, Vaughan, Mississauga, Brampton, Markham, Richmond Hill, Oakville and Pickering."
        path="/areas"
      />
      <LandingHero
        eyebrow="Service Areas"
        icon={MapPin}
        title="Contractor marketing across"
        accent="the GTA"
        intro="Every city has its own housing stock, neighbourhoods and competition. See how we help contractors win more work where you operate."
        image="/landing/img/area-toronto.webp"
        imageAlt="A residential street in the Greater Toronto Area"
      />
      <Section>
        <Grid
          items={areas.map((a) => ({
            href: `/areas/${a.slug}`,
            title: a.title,
            text: a.intro.split(". ")[0] + ".",
            image: `/landing/img/area-${a.slug}.webp`,
          }))}
        />
      </Section>
      <ClosingCta title="Working somewhere else?" text="We work with contractors across Ontario. Book a call and tell us where you operate." />
    </div>
  );
}
