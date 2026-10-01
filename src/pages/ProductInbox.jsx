import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Mail, MessageSquare, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductInbox() {
  const e = useNavigate(),
    t = [
      "Manage SMS, Email, and Webchat in one place",
      "Connect Facebook Messenger and Instagram DMs",
      "Assign conversations to team members",
      "Send payment links directly in chat",
      "Never lose track of a lead again",
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="All-in-One Inbox" description="Manage SMS, email, web chat, Facebook and Instagram messages from one inbox so no lead slips through." path="/products/all-in-one-inbox" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <MessageSquare className="w-4 h-4" />
              Unified Communications
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"One Inbox for "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                Every Message
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop switching between text messages, emails, and social media apps. Reply to every customer lead from one
              single dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => e("/contact")}
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_30px_rgba(8,145,178,0.4)] hover:shadow-[0_0_50px_rgba(8,145,178,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Simplify Your Inbox
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
                {"Never Miss a "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                  Message
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                When a customer reaches out — whether it's a text, an email, or a Facebook message — it all goes to the
                exact same place. You and your team can reply instantly.
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
                    className="flex items-start gap-4 glass-card p-4 rounded-2xl hover:border-cyan-500/30 transition-colors"
                    key={r}
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
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
              <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full animate-pulse-glow" />
              <div className="relative glass-card rounded-3xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-0 hover:scale-[1.02] transition-all duration-500 bg-[#0a0a0c] flex">
                <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-6 pr-4">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"
                  >
                    <Globe className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                    className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"
                  >
                    <Smartphone className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.6,
                    }}
                    className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.div>
                </div>
                <div className="flex-1 pl-6 flex flex-col gap-4 pt-4">
                  <div className="border-b border-white/10 pb-4 mb-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div>
                      <div className="w-24 h-4 bg-white/20 rounded mb-2" />
                      <div className="w-16 h-3 bg-white/10 rounded" />
                    </div>
                  </div>
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
                      delay: 0.8,
                    }}
                    className="bg-white/5 p-3 rounded-2xl rounded-tl-sm w-3/4 text-sm text-white/80"
                  >
                    Hey! I need a quote for a new installation.
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 1.5,
                    }}
                    className="bg-cyan-600 p-3 rounded-2xl rounded-tr-sm w-3/4 self-end text-sm text-white"
                  >
                    Absolutely! We can help with that. What's the best time to call?
                  </motion.div>
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
                      delay: 2.2,
                    }}
                    className="bg-white/5 p-3 rounded-2xl rounded-tl-sm w-1/2 text-sm text-white/80"
                  >
                    Tomorrow at 10 AM works.
                  </motion.div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                    <div className="flex-1 h-10 bg-white/5 rounded-full" />
                    <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
