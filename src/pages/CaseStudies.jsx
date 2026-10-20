import { Briefcase } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { CardGrid, CheckList, ClosingCta, LandingHero, Section, SectionHeading } from "@/components/LandingParts";
import { caseStudyCard } from "@/components/CaseStudyCards";
import { caseStudies } from "@/content/caseStudies";

const howWeWrite = [
  "Every case study is a real client who agreed to be named",
  "We show the work itself: the website, the profile, the systems we set up",
  "Numbers are added only once there is real data behind them, never estimated",
  "Each one links to the trade and the city, so you can see work close to yours",
];

export default function CaseStudies() {
  const path = "/case-studies";
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo
        title="Contractor Marketing Case Studies"
        description="Real projects for GTA contractors: the websites, Google profiles and lead systems we built, what was broken before, and what we changed for each client."
        path={path}
        jsonLd={breadcrumbJsonLd([["Case Studies", path]])}
      />
      <LandingHero
        eyebrow="Our work"
        icon={Briefcase}
        title="Contractor marketing"
        accent="case studies"
        intro="Real projects for contractors and home service businesses across the GTA. See what each business was dealing with, what we built for them and how it fits together."
        image="/landing/img/area-toronto.webp"
        imageAlt="A residential street in the Greater Toronto Area"
        location="case_studies_hero"
      />
      <Section>
        <SectionHeading title="Recent" accent="projects" />
        <CardGrid items={caseStudies.map(caseStudyCard)} />
      </Section>
      <Section alt>
        <SectionHeading title="How we write" accent="these" sub="Proof you can check, not marketing copy." />
        <CheckList items={howWeWrite} />
      </Section>
      <ClosingCta
        title="Want to be the next one?"
        text="Start with a free visibility and lead audit. We'll show you where you rank, where calls and form leads slip away and what we'd fix first."
        location="case_studies_closing"
      />
    </div>
  );
}
