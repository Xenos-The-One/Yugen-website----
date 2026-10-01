import { useRef } from "react";
import { site } from "@/content/site";
import { Logo, LogoMark } from "@/components/Logo";
import { Seo } from "@/components/Seo";
import { SlideIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const e = useNavigate(),
    t = useRef(null),
    { scrollYProgress: n } = useScroll({
      target: t,
      offset: ["start start", "end start"],
    }),
    r = useTransform(n, [0, 1], ["0%", "30%"]),
    o = useTransform(n, [0, 1], [1, 0]),
    s = [{ name: site.founder.name, role: "Founder" }],
    i = [
      {
        num: "01",
        title: "We Actually Care",
        desc: "We don't sell systems and disappear. If something affects your business, it affects us. Simple.",
      },
      {
        num: "02",
        title: "Clarity Over Complexity",
        desc: "No buzzwords, no fluff. Everything we build is designed to be understood, used, and profitable.",
      },
      {
        num: "03",
        title: "Execution Beats Ideas",
        desc: "Ideas are cheap. Execution compounds. We obsess over what actually moves revenue.",
      },
      {
        num: "04",
        title: "Built for Operators",
        desc: "We design for people running real businesses — not marketing agencies, not theory.",
      },
      {
        num: "05",
        title: "Integrity, Always",
        desc: "If we say we'll do something, it gets done. If it breaks, we fix it. No excuses.",
      },
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30">
      <Seo title="About" description="Yugen Systems is built by operators, not marketing gurus. We build AI-powered systems that get businesses found and booked." path="/about" />
      <section ref={t} className="pt-40 pb-24 px-4 relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{
                y: r,
                opacity: o,
              }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <div className="relative glass-card rounded-[2.5rem] p-3 border-t-white/10 border-l-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                {site.founder.photo ? (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src={site.founder.photo}
                    alt={`${site.founder.name}, founder of Yugen Systems`}
                    className="rounded-[2rem] w-full object-cover aspect-[4/5] lg:aspect-square relative z-10"
                  />
                ) : (
                  <div className="rounded-[2rem] w-full aspect-[4/5] lg:aspect-square relative z-10 overflow-hidden bg-[#0a0a0c] flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808014_1px,transparent_1px),linear-gradient(to_bottom,#80808014_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
                    <div className="absolute w-2/3 h-2/3 bg-primary/25 blur-[80px] rounded-full animate-pulse-glow" />
                    <motion.div
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      <LogoMark className="w-52 h-52 md:w-64 md:h-64 drop-shadow-[0_0_40px_rgba(45,212,191,0.45)]" />
                    </motion.div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <div className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Yūgen Systems</div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] z-20" />
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <SlideIn direction="left">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  {"Built by operators — "}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                    {'not "marketing gurus"'}
                  </span>
                </h1>
              </SlideIn>
              <div className="space-y-6 text-xl text-muted-foreground">
                <SlideIn delay={0.1} direction="left">
                  <p className="leading-relaxed">{`Yugen Systems was built because too many businesses get burned by agencies that sell "branding" but can't show what it does for revenue.`}</p>
                </SlideIn>
                <SlideIn delay={0.2} direction="left">
                  <p className="leading-relaxed">{`We don't believe in "pretty websites" that sit there doing nothing. We build systems that get you found on Google and in AI search, answer leads instantly, follow up automatically, and turn interest into booked business.`}</p>
                </SlideIn>
                <SlideIn delay={0.3} direction="left">
                  <p className="leading-relaxed">
                    Everything we build is designed for people who are busy running a real business — not learning tech.
                    No BS, just results.
                  </p>
                </SlideIn>
                <SlideIn delay={0.4} direction="left">
                  <div className="p-8 glass-card border-l-4 border-l-primary rounded-r-3xl mt-10 text-white font-medium shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-shadow">
                    We treat your business like it's our own — because at the end of the day, your bank account is the
                    only metric that matters.
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-4 border-t border-white/5 bg-[#0a0a0c] relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06b6d4]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start relative">
            <div className="lg:sticky lg:top-40 z-10">
              <SlideIn>
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                  Our culture wasn't accidental.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                    It was engineered.
                  </span>
                </h2>
              </SlideIn>
              <SlideIn delay={0.2}>
                <div className="hidden lg:block mt-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
                  <Logo className="h-14 max-w-full drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
                </div>
              </SlideIn>
            </div>
            <div className="space-y-16 lg:pt-32 pb-32">
              {i.map((l, c) => (
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
                    once: !1,
                    margin: "-20%",
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                  }}
                  className="flex gap-8 md:gap-10 group"
                  key={c}
                >
                  <div className="text-5xl md:text-7xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 shrink-0 select-none">
                    {l.num}
                  </div>
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                      {l.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{l.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-4 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <SlideIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {"Meet the "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">Founder</span>
              </h2>
              <p className="text-2xl text-muted-foreground">Yugen is founder-led. You work directly with the person building your system.</p>
            </div>
          </SlideIn>
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-8">
            {s.map((l, c) => (
              <SlideIn delay={c * 0.1} key={c}>
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="glass-card p-8 rounded-[2rem] flex flex-col items-center text-center group cursor-pointer border-t-white/10 border-l-white/10 hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-500 h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-[#06b6d4] to-primary/20 p-1 mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-500 group-hover:rotate-6">
                    <div className="w-full h-full rounded-full bg-[#0a0a0c] flex items-center justify-center">
                      <User
                        size={56}
                        className="text-primary/50 group-hover:text-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{l.name}</h3>
                  <p className="text-base text-primary font-semibold">{l.role}</p>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 px-4 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <SlideIn>
            <div className="relative rounded-[3rem] overflow-hidden p-1 bg-gradient-to-br from-primary via-[#06b6d4] to-transparent shadow-[0_0_50px_hsl(var(--primary)/0.3)]">
              <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-3xl" />
              <div className="relative p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    {"Interested in "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                      talking things through?
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    We'll walk you through what we build, how it helps businesses grow, and give you the space to
                    decide if moving forward makes sense.
                  </p>
                  <Button
                    onClick={() => e("/contact")}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-10 h-16 text-xl rounded-full w-full md:w-auto shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] hover:scale-105 transition-all duration-300"
                  >
                    Book a Call
                  </Button>
                </div>
                <div className="w-full md:w-auto flex justify-center relative">
                  <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full" />
                  <Logo className="h-[4.5rem] max-w-full opacity-90 relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
