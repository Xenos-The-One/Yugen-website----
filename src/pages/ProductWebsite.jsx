import { ProductExtras } from "@/components/ProductExtras";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { CheckCircle2, MonitorSmartphone } from "lucide-react";
import { CtaPair } from "@/components/AuditCta";
import { CardGrid, Section, SectionHeading } from "@/components/LandingParts";

// Why the Basic Website is $300–$500: efficient, not cheap.
const savings = [
  {
    title: "A proven contractor template",
    text: "Every site starts from a layout we've already built and tested for trades: click-to-call, quote forms, service pages and reviews where customers look for them. You're not paying for design rounds to reinvent that.",
  },
  {
    title: "An AI-assisted build",
    text: "AI tools speed up the first draft of your copy, page structure and on-page SEO. We review and edit every page, but the drafting hours a traditional agency bills for are gone.",
  },
  {
    title: "A lean team with no overhead",
    text: "No account managers, sales team or downtown office priced into your site. You deal directly with the people building it.",
  },
  {
    title: "We earn on the ongoing work",
    text: "A website is how most clients start with us. We make our margin on the SEO, lead and review systems some clients add later, so we don't need to make it all on the build. Adding them is never required.",
  },
];

const agencyCosts = [
  "Custom design rounds and revisions",
  "Project and account management hours",
  "Copywriting billed by the hour",
  "Sales, office and overhead costs",
];

const youGet = [
  "A fast, mobile-first site built for your trade",
  "Click-to-call, quote forms and booking buttons",
  "On-page SEO fundamentals so Google can rank it",
  "Live in 7 to 10 days, and you own it",
];

export default function ProductWebsite() {
  const t = [
      "Mobile-first design built for speed",
      "Conversion-optimized lead capture forms",
      "Integrated live web chat widget",
      "On-page SEO fundamentals built-in",
      "Secure, fast hosting included",
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="Contractor Website Design Toronto" description="Fast, mobile-first contractor websites built in Toronto to rank on Google and turn visitors into calls, with chat, booking and on-page SEO built in." path="/products/functional-website" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="animate-rise"
          >
            <h1 className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <MonitorSmartphone className="w-4 h-4" />
              Contractor Website Design in Toronto
            </h1>
            <p className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"A Website Built to "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 animate-gradient-x">
                Capture Leads
              </span>
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop losing customers to slow, outdated websites. We build lightning-fast, mobile-optimized sites designed
              specifically to turn visitors into booked jobs.
            </p>
            <CtaPair location="product_website" className="items-center justify-center" />
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                rotateY: 15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              viewport={{
                once: !0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              style={{
                perspective: 1e3,
              }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full animate-pulse-glow" />
              <div className="relative glass-card rounded-3xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-0 hover:scale-[1.02] transition-all duration-500 bg-[#0a0a0c]">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-white/40 flex-1 text-center mx-4">
                    yourbusiness.com
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                    }}
                    className="h-12 bg-white/5 rounded-xl mb-8 flex items-center px-4 justify-between"
                  >
                    <div className="w-24 h-4 bg-white/10 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-12 h-4 bg-white/10 rounded-full" />
                      <div className="w-12 h-4 bg-white/10 rounded-full" />
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-4">
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                        }}
                        className="h-8 bg-blue-500/20 rounded-lg w-3/4"
                      />
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8,
                        }}
                        className="h-4 bg-white/10 rounded-lg w-full"
                      />
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 1,
                        }}
                        className="h-4 bg-white/10 rounded-lg w-5/6"
                      />
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2,
                        }}
                        className="h-10 bg-blue-500 rounded-lg w-32 mt-4"
                      />
                    </div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                      className="bg-white/5 rounded-2xl aspect-square border border-white/10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: !0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {"Your 24/7 "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">
                  Sales Rep
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Most websites look pretty but don't convert. We build sites that load instantly, look great on phones,
                and make it incredibly easy for customers to contact you.
              </p>
              <div className="space-y-6">
                {t.map((n, r) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: !0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: r * 0.1,
                    }}
                    className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:border-blue-500/30 transition-colors"
                    key={r}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-lg text-white/90">{n}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div id="why-affordable" className="scroll-mt-24">
        <Section alt>
          <SectionHeading
            title="Why it's $300–$500"
            accent="(and not $5,000)"
            sub="Inexpensive because the process is efficient, not because corners are cut. Here's where the savings come from."
          />
          <CardGrid items={savings} />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0c]/90 p-7">
              <h3 className="text-xl font-bold text-white mb-4">Where a typical $3,000–$10,000 agency site goes</h3>
              <ul className="space-y-3">
                {agencyCosts.map((c) => (
                  <li key={c} className="text-white/60 leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-blue-500/30 bg-blue-500/[0.06] p-7">
              <h3 className="text-xl font-bold text-white mb-4">What your $300–$500 pays for</h3>
              <ul className="space-y-3">
                {youGet.map((c) => (
                  <li key={c} className="flex gap-3 text-white/85 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-white/50 max-w-3xl mx-auto mt-8">
            Bigger builds, like many service pages, custom features or a full overhaul, are{" "}
            <a href="/pricing" className="text-primary font-medium underline">quoted separately</a>, so you only pay for
            what you need.
          </p>
        </Section>
      </div>
      <ProductExtras path="/products/functional-website" />
    </div>
  );
}
