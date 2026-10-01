import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductLocalSeo() {
  const e = useNavigate(),
    t = [
      "Google Business Profile optimization",
      "Local citation building and management",
      "Keyword-optimized service pages",
      "Monthly performance reporting",
      "Dominate local map pack rankings",
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="SEO & Local SEO" description="Rank higher on Google Maps and search with Google Business Profile optimization, citations and keyword-optimized pages." path="/products/local-seo" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <MapPin className="w-4 h-4" />
              Dominate Local Search
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"Be the First Business "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-300 animate-gradient-x">
                They See
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              When a customer searches for your services, you need to be at the top of Google Maps. We optimize your
              profile to make sure you get the call, not your competitor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => e("/contact")}
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:shadow-[0_0_50px_rgba(22,163,74,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Rank Higher Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="relative w-full aspect-square max-w-[500px] mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col bg-[#0a0a0c]">
                  <div className="h-16 border-b border-white/5 bg-[#111113] flex items-center px-6 justify-between">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-400" />
                      {" Map Pack Rankings"}
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 flex flex-col gap-5 bg-[#0a0a0c] relative overflow-hidden">
                    <motion.div
                      initial={{
                        width: "80%",
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="bg-[#1a1a1c] rounded-full border border-white/10 px-4 py-3 flex items-center gap-3 mb-2 overflow-hidden whitespace-nowrap shadow-inner"
                    >
                      <Search className="w-5 h-5 text-white/40 shrink-0" />
                      <motion.span
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.8,
                        }}
                        viewport={{
                          once: !0,
                        }}
                        className="text-white/80 text-sm font-medium"
                      >
                        best contractor near me
                      </motion.span>
                    </motion.div>
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                      {[
                        {
                          name: "Your Business",
                          rating: "4.9",
                          reviews: "128",
                          active: !0,
                        },
                        {
                          name: "Competitor A",
                          rating: "4.2",
                          reviews: "45",
                          active: !1,
                        },
                        {
                          name: "Competitor B",
                          rating: "3.8",
                          reviews: "12",
                          active: !1,
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
                          className={`p-4 rounded-xl shadow-sm border ${n.active ? "border-green-500/50 bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.15)] relative z-10" : "border-white/5 bg-[#1a1a1c]"} flex gap-3 cursor-pointer transition-all hover:scale-[1.02]`}
                          key={r}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${n.active ? "bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-white/5 text-white/40"}`}
                          >
                            {r + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base mb-1 text-white">{n.name}</div>
                            <div className="flex items-center gap-1 text-sm mb-1">
                              <span className="font-bold text-white/90">{n.rating}</span>
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((o, s) => (
                                  <motion.div
                                    initial={{
                                      opacity: 0,
                                      scale: 0,
                                    }}
                                    whileInView={{
                                      opacity: 1,
                                      scale: 1,
                                    }}
                                    transition={{
                                      delay: 0.8 + r * 0.2 + s * 0.1,
                                    }}
                                    viewport={{
                                      once: !0,
                                    }}
                                    key={s}
                                  >
                                    <Star
                                      className={`w-3 h-3 sm:w-4 sm:h-4 ${s === 4 && n.rating < "4.5" ? "text-white/20" : "fill-current"}`}
                                    />
                                  </motion.div>
                                ))}
                              </div>
                              <span className="text-white/50">({n.reviews})</span>
                            </div>
                            <div className="text-xs sm:text-sm text-white/40">Open 24/7 • 1.2 miles away</div>
                          </div>
                          <MapPin
                            className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${n.active ? "text-green-400" : "text-white/20"}`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
                {"Organic "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-300">
                  Lead Engine
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Stop paying for shared leads that go to 5 other businesses. By ranking organically in the Google Map
                Pack, you get exclusive, high-intent calls from people ready to buy.
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
                    className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:border-green-500/30 transition-colors"
                    key={r}
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-lg text-white/90">{n}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
