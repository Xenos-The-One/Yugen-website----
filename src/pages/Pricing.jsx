import { BookingDialog } from "@/components/BookingDialog";
import { FadeIn, Tilt } from "@/components/motion";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, DollarSign, Globe, Megaphone, PenTool, Target } from "lucide-react";

// Lead automation + 5 star review system bundled the way Takeoff's pricing page does it, plus the basic website.
const starterPlans = [
  {
    name: "Lead & Review System",
    blurb: "Every lead answered and every happy customer turned into a 5-star review.",
    price: "$297",
    period: "/ month",
    popular: true,
    features: [
      "AI website chat that answers and books leads",
      "Missed call text back",
      "Automated follow-up sequences",
      "All-in-one inbox for SMS, email, chat and social",
      "5-star Google Review System",
      "Automatic review requests sent on autopilot",
      "Automated referral requests after every job",
      "Revisit customer discounts on autopilot",
      "Dedicated Account Rep",
    ],
  },
  {
    name: "Basic Website",
    blurb: "A fast, professional site that turns visitors into calls and booked jobs.",
    price: "$300–$500",
    period: "one-time",
    features: [
      "Mobile-first design built for speed",
      "Conversion-optimized lead capture forms",
      "Click-to-call and booking buttons",
      "On-page SEO fundamentals built-in",
      "Live in 7–10 days",
    ],
    note: "Bigger or custom builds are quoted separately.",
  },
];

// From the "AI SEO + Content Growth Packages" price sheet.
const plans = [
  {
    name: "Growth",
    blurb: "Rank on Google and show up in AI search with steady, high-quality content.",
    price: "$1,497",
    period: "/ month",
    setup: "+ $1,000 one-time setup & onboarding",
    features: [
      "SEO strategy & keyword research",
      "Full technical SEO monitoring",
      "On-page SEO & internal linking",
      "Local SEO / Google Business Profile",
      "Full AI search optimization",
      "ChatGPT / Gemini / Perplexity visibility",
      "Schema & entity optimization",
      "4 SEO blogs per month",
      "2 newsletters per month",
      "5 existing page optimizations per month",
      "Full competitor tracking",
      "Content strategy & monthly reporting",
      "Monthly strategy call",
      "Basic backlink / outreach strategy",
    ],
  },
  {
    name: "Authority",
    blurb: "Everything in Growth at full scale, plus your website built or rebuilt.",
    price: "$2,497",
    period: "/ month",
    setup: "+ $1,000 one-time setup & onboarding",
    features: [
      "Everything in Growth, upgraded to advanced",
      "Advanced technical SEO monitoring",
      "Advanced AI search optimization",
      "Advanced schema & entity optimization",
      "10+ SEO blogs per month",
      "6+ newsletters per month",
      "Ongoing existing page optimizations",
      "Local list ranking",
      "Website development / overhaul",
      "Advanced competitor tracking",
      "Bi-weekly strategy calls",
      "Advanced backlink / outreach strategy",
    ],
  },
];


const services = [
  { icon: Globe, title: "Custom Websites", desc: "Larger or custom-built websites with more pages, features and integrations, with hosting and updates handled.", href: "/products/functional-website" },
  { icon: Target, title: "Paid Ads", desc: "Google and Meta campaigns tracked all the way to booked calls.", href: "/products/paid-ads" },
  { icon: Megaphone, title: "Marketing & Campaigns", desc: "Email and SMS campaigns, seasonal offers and database reactivation.", href: "/products/one-click-marketing" },
  { icon: PenTool, title: "Content Creation", desc: "Blogs, newsletters and page updates on their own, without a full SEO package.", href: "/products/content-creation" },
];

function PlanCard({ plan: p, delay }) {
  return (
    <FadeIn delay={delay}>
      <Tilt>
        <div className="relative glass-card rounded-[2.5rem] p-8 sm:p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 bg-[#0a0a0c]/90 shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {p.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#06b6d4] text-black text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-lg whitespace-nowrap">
              MOST POPULAR
            </div>
          )}
          <div className="relative z-10 text-center mb-8 mt-4">
            <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
            <p className="text-white/60 text-sm mb-6">{p.blurb}</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                {p.price}
              </span>
              <span className="text-white/50 font-medium">{p.period}</span>
            </div>
            {p.setup && <p className="text-white/40 text-sm mt-2">{p.setup}</p>}
          </div>
          <div className="space-y-4 mb-10 relative z-10">
            {p.features.map((e, t) => (
              <div className="flex items-start gap-3" key={t}>
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 font-medium leading-snug">{e}</span>
              </div>
            ))}
          </div>
          {p.note && <p className="relative z-10 text-white/40 text-sm text-center -mt-4 mb-6">{p.note}</p>}
          <div className="relative z-10">
            <BookingDialog>
              <Button className="w-full bg-white text-black hover:bg-white/90 font-bold h-14 text-lg rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
                Get Started
              </Button>
            </BookingDialog>
          </div>
        </div>
      </Tilt>
    </FadeIn>
  );
}

export default function Pricing() {
  return (
    <div className="bg-[#030303] min-h-screen pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40">
      <Seo
        title="Pricing"
        description="Raindrop Marketing pricing: Lead & Review System $297/mo, basic websites $300–$500, AI SEO + Content packages from $1,497/mo, plus custom websites, paid ads, marketing and content quoted to fit your business."
        path="/pricing"
      />
      <section className="px-4 relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <DollarSign className="w-4 h-4" />
                {" Transparent Pricing"}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
                {"Simple, Honest "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Start with a lead system or a website, add an SEO growth package, or combine them. No hidden fees.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Lead Systems & Websites</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Stop losing jobs to missed calls and slow replies, and get a site that turns visitors into bookings.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start mb-28">
            {starterPlans.map((p, i) => (
              <PlanCard plan={p} delay={0.2 + i * 0.1} key={p.name} />
            ))}
          </div>
          <FadeIn>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">AI SEO + Content Packages</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Get found across Google and AI-powered search while publishing consistent, high-quality content.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((p, i) => (
              <PlanCard plan={p} delay={0.2 + i * 0.1} key={p.name} />
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="text-center mt-28 mb-12">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                {"Custom Work, Ads "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">& More</span>
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Every one of these is available on its own or alongside a package. Each is quoted to fit your business,
                so tell us what you need and we'll send a clear price.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((sv, i) => (
              <FadeIn delay={0.1 + i * 0.05} key={sv.title} className="h-full">
                <div className="h-full glass-card rounded-[2rem] p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 bg-[#0a0a0c]/90 flex flex-col group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <sv.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{sv.title}</h4>
                  <p className="text-white/60 leading-relaxed mb-8 flex-1">{sv.desc}</p>
                  <div className="flex items-center justify-between gap-4">
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold px-6 h-11 hover:bg-white/90 transition-colors">
                      Get a Quote
                    </a>
                    <a href={sv.href} className="text-sm font-bold text-white/60 hover:text-primary transition-colors inline-flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
