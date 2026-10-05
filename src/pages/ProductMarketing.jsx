import { Button } from "@/components/ui/button";
import { ProductExtras } from "@/components/ProductExtras";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductMarketing() {
  const e = useNavigate(),
    t = [
      "Pre-built email and SMS campaigns",
      "Seasonal offers and maintenance reminders",
      "Segment your list by job type or date",
      "Track open rates and direct replies",
      "Turn past customers into repeat business",
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="One Click Marketing" description="Launch email and SMS campaigns to past customers in one click and fill slow seasons with repeat business." path="/products/one-click-marketing" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <Zap className="w-4 h-4" />
              Instant Campaigns
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"Re-engage Customers with "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300 animate-gradient-x">
                One Click
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Your biggest asset is your past customer list. Launch targeted email and SMS campaigns instantly to
              generate immediate bookings during slow seasons.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => e("/contact")}
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_30px_rgba(202,138,4,0.4)] hover:shadow-[0_0_50px_rgba(202,138,4,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Launch a Campaign
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
              <div className="absolute inset-0 bg-yellow-500/20 blur-[80px] rounded-full animate-pulse-glow" />
              <div className="relative glass-card rounded-3xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-0 hover:scale-[1.02] transition-all duration-500 bg-[#0a0a0c]">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                  <div className="font-bold text-xl text-white">Campaign Manager</div>
                  <div className="flex gap-2">
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-bold">
                      1,240 Contacts
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Spring HVAC Tune-Up",
                      type: "SMS & Email",
                      status: "Ready",
                    },
                    {
                      title: "Holiday Discount Offer",
                      type: "Email Only",
                      status: "Ready",
                    },
                    {
                      title: "Refer-a-Friend Promo",
                      type: "SMS Only",
                      status: "Ready",
                    },
                  ].map((n, r) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.5 + r * 0.2,
                        type: "spring",
                      }}
                      viewport={{
                        once: !0,
                      }}
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="bg-[#1a1a1c] p-4 rounded-xl border border-white/5 flex items-center justify-between cursor-pointer"
                      key={r}
                    >
                      <div>
                        <div className="font-bold text-white mb-1">{n.title}</div>
                        <div className="text-xs text-muted-foreground">{n.type}</div>
                      </div>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                      >
                        <Send className="w-4 h-4 ml-1" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {" 85% Open Rate"}
                  </div>
                  <div className="flex items-center gap-1 text-green-400">+12 Bookings Today</div>
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
                {"Turn Slow Seasons into "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">
                  Busy Seasons
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Need to fill your schedule this week? Select a pre-written template, choose your past customer list, and
                hit send. Watch the replies and bookings roll into your inbox.
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
                    className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:border-yellow-500/30 transition-colors"
                    key={r}
                  >
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-lg text-white/90">{n}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ProductExtras path="/products/one-click-marketing" />
    </div>
  );
}
