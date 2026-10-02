import { useRef, useState } from "react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, LineChart, PhoneCall, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const [e, t] = useState(!1),
    n = useNavigate(),
    r = useRef(null),
    { scrollYProgress: o } = useScroll({
      target: r,
      offset: ["start center", "end center"],
    }),
    s = useTransform(o, [0, 1], ["0%", "100%"]),
    i = [
      {
        title: "Discovery & Demo",
        duration: "20 mins",
        desc: "We answer your questions, show real systems, and walk through how Raindrop actually works. No high-pressure sales, just finding out if we're a fit.",
        icon: <PhoneCall className="w-8 h-8 text-primary" />,
        align: "left",
      },
      {
        title: "System Architecture & Build",
        duration: "7–10 days",
        desc: "You fill out a short onboarding form and we build your entire digital foundation: website, SEO and content plan, automated follow-ups, reputation management, and local SEO.",
        icon: <Code className="w-8 h-8 text-primary" />,
        align: "right",
      },
      {
        title: "Launch & Handover",
        duration: "25 mins",
        desc: "We walk you through everything, hand over the keys, and show you exactly how easy it is to manage leads and run the system from your phone.",
        icon: <Rocket className="w-8 h-8 text-primary" />,
        align: "left",
      },
      {
        title: "Ongoing Growth",
        duration: "Continuous",
        desc: "We don't just hand it off and disappear. The system continuously captures leads, follows up, and requests reviews while we manage the backend infrastructure.",
        icon: <LineChart className="w-8 h-8 text-primary" />,
        align: "right",
      },
    ];
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-hidden">
      <Seo title="How It Works" description="From discovery call to launch: the four-step process Raindrop Marketing uses to build and run your growth system." path="/how-it-works" />
      <section className="pt-40 pb-20 px-4 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            {"No Fluff. Just a "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
              Proven Roadmap.
            </span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We don't hide behind complex jargon. Here is exactly how we take your business from manual chaos to an
            automated lead-generating machine.
          </motion.p>
        </div>
      </section>
      <section className="py-24 px-4 relative" ref={r}>
        <div className="container mx-auto max-w-5xl relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          <motion.div
            style={{
              height: s,
            }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.8)] origin-top"
          />
          <div className="space-y-24 md:space-y-40 relative z-10">
            {i.map((l, c) => (
              <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${l.align === "right" ? "md:flex-row-reverse" : ""}`}
                key={c}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: l.align === "left" ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: !0,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.7,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="w-full md:w-1/2 pl-20 md:pl-0 relative"
                >
                  <div
                    className={`glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors shadow-xl hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] ${l.align === "left" ? "md:mr-12" : "md:ml-12"}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20">
                        {l.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary tracking-wider uppercase mb-1">
                          {"Step "}
                          {c + 1}
                        </div>
                        <div className="text-white/60 font-medium text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          {l.duration}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{l.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{l.desc}</p>
                  </div>
                </motion.div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: !0,
                      margin: "-150px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      type: "spring",
                    }}
                    className="w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.6)] z-20 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: !0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-32 text-center relative z-20"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent mb-8">
              <div className="bg-background rounded-full px-6 py-2 text-sm font-medium border border-white/10">
                Ready to take the first step?
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-8">
              {"Let's build your "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">system.</span>
            </h2>
            <Button
              onClick={() => n("/contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10 h-16 rounded-full shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] transition-all hover:scale-105"
            >
              Start the Process
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
