import { Button } from "@/components/ui/button";
import { ProductExtras } from "@/components/ProductExtras";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductReviews() {
  const e = useNavigate(),
    t = [
      "Automated SMS & email review requests",
      "Direct links to your Google Business Profile",
      "Hear about problems early so you can make them right",
      "Display a live widget of your best reviews",
      "Respond to all reviews directly from the dashboard",
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="5 Star Review System" description="Automate Google review requests after every job and build a 5-star reputation on autopilot." path="/products/review-system" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-8 backdrop-blur-md">
              <Star className="w-4 h-4 fill-current" />
              Automate Reputation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"A 5-Star Reputation on "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                Autopilot
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Reviews are the #1 factor customers use to choose a business. Stop begging for them. We automate the
              entire process so you get 5-star reviews while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => e("/contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Boost My Reviews
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
                {"Build "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">Trust</span>
                {" Automatically"}
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                When a job is marked complete, our system automatically texts and emails the customer a link to leave a
                Google review. It's effortless for them, and powerful for you.
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
                    className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:border-primary/30 transition-colors"
                    key={r}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
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
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse-glow" />
              <div className="relative glass-card rounded-[2.5rem] p-4 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-0 hover:scale-[1.02] transition-all duration-500 bg-[#0f0f11] max-w-[320px] mx-auto aspect-[9/19] flex flex-col">
                <div className="absolute top-0 left-0 w-full h-6 bg-[#0f0f11] z-20 flex justify-center rounded-t-[2.5rem]">
                  <div className="w-32 h-6 bg-black rounded-b-3xl" />
                </div>
                <div className="flex-1 p-4 pt-12 flex flex-col gap-4 bg-[#0f0f11]">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="bg-white/5 text-xs text-center p-2 rounded-lg text-white/50"
                  >
                    Job marked complete
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
                      delay: 1.5,
                      type: "spring",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="bg-[#1a1a1c] p-3 rounded-2xl rounded-tl-sm text-sm border border-white/5 w-[85%] origin-bottom-left text-white/90"
                  >
                    Hey! Thanks for choosing us for your project today. We'd love to hear your feedback.
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
                      delay: 2.5,
                      type: "spring",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="bg-primary/10 border border-primary/30 p-4 rounded-2xl rounded-tl-sm w-[85%] origin-bottom-left text-center shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                  >
                    <div className="text-white font-bold mb-2">How did we do?</div>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((n, r) => (
                        <motion.div
                          initial={{
                            scale: 0,
                            rotate: -180,
                          }}
                          whileInView={{
                            scale: 1,
                            rotate: 0,
                          }}
                          transition={{
                            delay: 3 + r * 0.15,
                            type: "spring",
                          }}
                          viewport={{
                            once: !0,
                          }}
                          key={r}
                        >
                          <Star className="w-6 h-6 fill-primary text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 4.5,
                      type: "spring",
                    }}
                    viewport={{
                      once: !0,
                    }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl whitespace-nowrap"
                  >
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                    {" Google Review Posted!"}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ProductExtras path="/products/review-system" />
    </div>
  );
}
