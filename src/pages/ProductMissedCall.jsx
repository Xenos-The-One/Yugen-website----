import { Button } from "@/components/ui/button";
import { ProductExtras } from "@/components/ProductExtras";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneMissed } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductMissedCall() {
  const e = useNavigate(),
    t = [
      "Instantly text back any missed call",
      "Customizable response messages",
      "Works 24/7, even on weekends",
      "Stops leads from calling a competitor",
      "Integrates perfectly with the unified inbox",
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="Missed Call Text Back" description="Automatically text back every missed call so leads stay with you instead of calling a competitor." path="/products/missed-call-text-back" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <PhoneMissed className="w-4 h-4" />
              Automated Rescue
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"Turn Missed Calls Into "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300 animate-gradient-x">
                Booked Jobs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              If you don't answer, they call the next guy on Google. Our system instantly texts them back to start a
              conversation and save the lead.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => e("/contact")}
                size="lg"
                className="bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Stop Losing Leads
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {"Speed is "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  Everything
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                You're busy on a job site, under a sink, or on a roof. You can't always answer the phone. This system
                ensures the customer knows you care and stops them from dialing your competitor.
              </p>
              <div className="space-y-6">
                {t.map((n, r) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
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
                    className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:border-red-500/30 transition-colors"
                    key={r}
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-lg text-white/90">{n}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                rotateY: -15,
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
              className="relative"
            >
              <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full animate-pulse-glow" />
              <div className="relative glass-card rounded-[2.5rem] p-4 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-0 hover:scale-[1.02] transition-all duration-500 bg-[#0f0f11] max-w-[320px] mx-auto aspect-[9/19] flex flex-col">
                <div className="absolute top-0 left-0 w-full h-6 bg-[#0f0f11] z-20 flex justify-center rounded-t-[2.5rem]">
                  <div className="w-32 h-6 bg-black rounded-b-3xl" />
                </div>
                <div className="p-4 pt-10 border-b border-white/5 flex items-center justify-between bg-[#1a1a1c]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                      <PhoneMissed className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Missed Call</div>
                      <div className="text-xs text-red-400">Just now</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-4 bg-[#0f0f11]">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.6,
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="bg-red-500/10 text-red-400 text-xs text-center p-2 rounded-lg border border-red-500/20"
                  >
                    📞 Missed call from New Lead
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: 1.5,
                      type: "spring",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="bg-red-600 text-white p-3 rounded-2xl rounded-tr-sm text-sm self-end w-[85%] origin-bottom-right shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                  >
                    Hey! Sorry I missed your call, I'm currently on a job. How can I help you today?
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: 3,
                      type: "spring",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="bg-[#1a1a1c] p-3 rounded-2xl rounded-tl-sm text-sm border border-white/5 w-[85%] origin-bottom-left text-white/90"
                  >
                    Oh awesome, thanks for texting back so fast. I need an estimate for a repair.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ProductExtras path="/products/missed-call-text-back" />
    </div>
  );
}
