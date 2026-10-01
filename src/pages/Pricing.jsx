import { BookingDialog } from "@/components/BookingDialog";
import { FadeIn, Tilt } from "@/components/motion";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign } from "lucide-react";

// From the Yugen "AI SEO + Content Growth Packages" price sheet.
const plans = [
  {
    name: "Growth",
    blurb: "Rank on Google and show up in AI search with steady, high-quality content.",
    price: "$2,497",
    popular: true,
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
    price: "$3,497",
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

const addOns = [
  { name: "Additional SEO Blog", price: "$200", billing: "per batch" },
  { name: "Premium Long-Form Article", price: "$350", billing: "per batch" },
  { name: "Newsletter", price: "$750", billing: "per batch" },
];

export default function Pricing() {
  return (
    <div className="bg-[#030303] min-h-screen pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40">
      <Seo
        title="Pricing"
        description="Yugen Systems AI SEO + Content Growth packages: Growth at $2,497/mo and Authority at $3,497/mo, plus optional content add-ons."
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
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
                {"Two Simple "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                  Packages
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Increase visibility across Google and AI-powered search while publishing consistent, high-quality
                content. No hidden fees.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((p, i) => (
              <FadeIn delay={0.2 + i * 0.1} key={p.name}>
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
                        <span className="text-white/50 font-medium">/ month</span>
                      </div>
                      <p className="text-white/40 text-sm mt-2">+ $1,000 one-time setup &amp; onboarding</p>
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
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="max-w-5xl mx-auto mt-12 glass-card rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Optional Add-Ons</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {addOns.map((a) => (
                  <div key={a.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                    <div className="text-white/90 font-semibold mb-2">{a.name}</div>
                    <div className="text-3xl font-black text-white">{a.price}</div>
                    <div className="text-white/40 text-sm mt-1">{a.billing}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
