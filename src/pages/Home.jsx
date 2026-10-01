import { Box, Droplet, Hammer, Home as HomeIcon, Layers, LayoutGrid, Leaf, Paintbrush } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LogoMark } from "@/components/Logo";
import { TestimonialRow } from "@/components/TestimonialMarquee";
import { testimonials } from "@/content/testimonials";
import { Seo, faqJsonLd, orgJsonLd } from "@/components/Seo";
import { BookingDialog } from "@/components/BookingDialog";
import { Counter, FadeIn, Tilt } from "@/components/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const homeFaqs = [
  {
    q: "When will I start seeing results?",
    a: "This depends on a few things — how long you've been in business, what other advertising you're running, the quality of your work, and whether you actually commit to using the system. Yugen isn't a magic switch. We build the foundation that helps you convert more of the demand you already have. Results come from consistent execution, not just paying a monthly fee.",
  },
  {
    q: "Why is your pricing so affordable?",
    a: "Our goal isn't short-term contracts — it's long-term relationships. We price Yugen so growing businesses can afford to stay for years. If we don't overcharge and consistently deliver value, there's no reason for you to leave.",
  },
  {
    q: "What happens if I decide to cancel?",
    a: "We'll be extremely sad to see you go, but after a good cry we'll bounce back. However, you will lose access to all the features we set up for you.",
  },
  {
    q: "Will people actually find my business on Google?",
    a: "Yes. Every Yugen website is built with proper on-site SEO, speed optimization, SSL security, and Google best practices. Rankings depend on factors like competition, how long your site has been live, and your reviews — but unlike many agencies, we continue optimizing instead of setting it up and disappearing.",
  },
  {
    q: "Why invest in a system if word-of-mouth already works?",
    a: "Referrals are great, but they're unpredictable. A system gives you consistency. It helps new customers find you, makes it easier for existing clients to refer you, and ensures you don't lose opportunities just because you were busy or missed a call.",
  },
];

export default function Home() {
  const e = useNavigate(),
    t = useMotionValue(0),
    n = useMotionValue(0);
  function r({ currentTarget: o, clientX: s, clientY: i }) {
    const { left: l, top: c } = o.getBoundingClientRect();
    (t.set(s - l), n.set(i - c));
  }
  return (
    <div className="bg-background text-foreground selection:bg-primary/30">
      <Seo
        title="Yugen Systems | AI SEO, Websites & Automated Lead Systems"
        description="Yugen Systems gets you found on Google and in AI search, captures every lead, follows up instantly, and books them onto your calendar."
        path="/"
        jsonLd={[orgJsonLd, faqJsonLd(homeFaqs.map((f) => ({ q: f.q, a: f.a })))]}
      />
      <section
        onMouseMove={r}
        className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303] pt-24 sm:pt-28 md:pt-32 pb-12 px-4"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-60 transition duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${t}px ${n}px,
                rgba(6,182,212, 0.12),
                transparent 80%
              )
            `,
          }}
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: 1 / 0,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: 1 / 0,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">
          <motion.div
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
              ease: "easeOut",
            }}
            className="mb-6 sm:mb-8 mt-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm text-white/80 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-medium">AI-Powered SEO, Content & Lead Systems</span>
            </div>
          </motion.div>
          <h1 className="text-center text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-white mb-5 md:mb-8 max-w-4xl">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Get Found.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#5eead4] to-[#99f6e4]">
                  Get Chosen.
                </span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">Get Booked.</span>
              </motion.span>
            </span>
          </h1>
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
              duration: 0.8,
              delay: 0.6,
            }}
            className="text-base sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto text-center mb-8 md:mb-12 leading-relaxed font-light px-4"
          >{`Stop paying for "exposure" and "branding" that doesn't pay the bills. We build AI-powered systems that get you found on Google and in AI search, capture every lead, text them back instantly, and book them onto your calendar. You do the work, we handle the chase.`}</motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full px-4 sm:px-0 relative z-20"
          >
            <BookingDialog>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-bold text-sm sm:text-lg px-6 sm:px-10 h-12 sm:h-16 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.6)] transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {"Book a Call Now "}
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Button>
            </BookingDialog>
            <Button
              onClick={() => e("/how-it-works")}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 font-bold text-sm sm:text-lg px-6 sm:px-10 h-12 sm:h-16 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              See How It Works
            </Button>
          </motion.div>
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
              delay: 0.9,
            }}
            className="mt-16 md:mt-24 w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-[#0a0a0c] p-5 md:p-8 text-center">
                <div className="text-2xl md:text-4xl font-black text-white mb-2">
                  <Counter from={0} to={2450} duration={2.5} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-white/50 font-medium">Leads Captured</div>
              </div>
              <div className="bg-[#0a0a0c] p-5 md:p-8 text-center">
                <div className="text-2xl md:text-4xl font-black text-white mb-2">
                  <Counter from={0} to={184} duration={2.5} />
                </div>
                <div className="text-xs md:text-sm text-white/50 font-medium">Jobs Booked</div>
              </div>
              <div className="bg-[#0a0a0c] p-5 md:p-8 text-center">
                <div className="text-2xl md:text-4xl font-black text-green-400 mb-2">
                  <Counter from={0} to={54200} duration={3} prefix="$" />
                </div>
                <div className="text-xs md:text-sm text-white/50 font-medium">Revenue Generated</div>
              </div>
              <div className="bg-[#0a0a0c] p-5 md:p-8 text-center">
                <div className="text-2xl md:text-4xl font-black text-yellow-400 mb-2">4.9★</div>
                <div className="text-xs md:text-sm text-white/50 font-medium">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 font-medium tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: 1 / 0,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>
      <div className="py-16 sm:py-20 border-y border-white/5 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((o, s) => (
            <div className="flex gap-12 px-6 items-center" key={s}>
              {[
                "AI Search Optimization",
                "SEO & Local SEO",
                "Content Creation",
                "High-Converting Websites",
                "Paid Ads",
                "Automated Lead Follow-Up",
                "Missed Call Text Back",
                "AI Website Chat",
                "Review Generation Systems",
              ].map((i, l) => (
                <div className="flex items-center gap-3 text-lg font-medium text-white/80" key={l}>
                  <LogoMark className="w-5 h-5" />
                  {i}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <section className="py-24 sm:py-32 md:py-40 relative overflow-hidden bg-[#030303] border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 mb-20">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
                {"Clients Trust "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                  Yugen
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-light">{`They don't hire us for "marketing." They hire us to plug the leaks in their business.`}</p>
            </div>
          </FadeIn>
        </div>
        <div className="flex flex-col gap-8 relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <TestimonialRow items={testimonials.slice(0, 5)} />
          <TestimonialRow items={testimonials.slice(5)} tone="cyan" reverse />
        </div>
      </section>
      <div className="relative bg-[#030303] py-24 sm:py-32 md:py-40 overflow-hidden border-t border-white/5">
        <div className="hidden md:flex absolute top-40 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] flex-col gap-20">
          <div className="text-[15vw] font-black whitespace-nowrap leading-none text-white">AUTOMATE EVERYTHING</div>
          <div className="text-[15vw] font-black whitespace-nowrap leading-none text-white ml-[-10vw]">
            NEVER MISS A LEAD
          </div>
          <div className="text-[15vw] font-black whitespace-nowrap leading-none text-white ml-[5vw]">
            DOMINATE YOUR MARKET
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col gap-24 sm:gap-32 md:gap-40">
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <Zap className="w-4 h-4" />
                {" Speed to Lead"}
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                {"Zero-Second "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                  Lead Capture
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                If you don't answer in 5 minutes, you lose the job. Our system answers your website visitors instantly,
                answers their questions, and gets them on your calendar while your competitors are still sleeping.
              </p>
              <ul className="space-y-5 mb-12">
                {["Instant AI web chat response", "Automated SMS follow-ups", "Direct-to-calendar booking"].map(
                  (o, s) => (
                    <li className="flex items-center gap-4 text-lg font-medium text-white/90" key={s}>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <CheckCircle2 className="w-5 h-5 text-primary drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                      </div>
                      {o}
                    </li>
                  ),
                )}
              </ul>
              <BookingDialog>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-10 h-16 text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
                >
                  See It In Action
                </Button>
              </BookingDialog>
            </FadeIn>
            <div className="order-1 lg:order-2 relative">
              <Tilt className="relative w-full h-[450px] md:h-auto md:aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-[#06b6d4]/30 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col bg-[#0a0a0c]">
                  <div className="h-16 border-b border-white/5 bg-[#111113] flex items-center px-6 gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center text-sm font-medium text-white/50">Live Chat</div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-6 bg-[#0a0a0c] relative overflow-hidden">
                    <motion.div
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="bg-[#1a1a1c] p-5 rounded-3xl rounded-tl-sm w-[85%] border border-white/5 shadow-lg"
                    >
                      <div className="text-xs text-muted-foreground mb-2 font-medium">Website Visitor • Just now</div>
                      <div className="text-base text-white leading-relaxed">
                        Do you guys do emergency HVAC repair? My AC just went out.
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.2,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="bg-primary/20 p-5 rounded-3xl rounded-tr-sm w-[85%] self-end border border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative"
                    >
                      <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-[#0a0a0c] shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-primary mb-2 font-medium">Yugen Systems • Instant</div>
                      <div className="text-base text-white leading-relaxed">
                        Yes we do! We have a tech available in your area in 45 mins. Should I book them for you?
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Tilt>
            </div>
          </section>
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <Tilt className="relative w-full h-[450px] md:h-auto md:aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col bg-[#0a0a0c]">
                  <div className="h-16 border-b border-white/5 bg-[#111113] flex items-center px-6">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-400" />
                      {" Call Log"}
                    </div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-6 bg-[#0a0a0c] relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500/5" />
                    <motion.div
                      initial={{
                        scale: 0.9,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 flex items-center gap-5 mx-auto w-full max-w-[90%] shadow-[0_0_40px_rgba(239,68,68,0.15)] relative z-10 backdrop-blur-md"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0 border border-red-500/30">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">Missed Call</div>
                        <div className="text-sm text-red-400 font-medium">New Lead • (555) 019-2834</div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.2,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="bg-[#1a1a1c] p-5 rounded-3xl rounded-tr-sm w-[90%] self-end border border-white/10 mt-6 shadow-xl relative z-10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded border border-primary/20">
                          Automated SMS
                        </div>
                        <div className="text-xs text-white/40">Sent instantly</div>
                      </div>
                      <div className="text-base text-white/90 leading-relaxed">
                        Hey, sorry we missed your call! We're on a job right now. How can we help you?
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Tilt>
            </div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <Shield className="w-4 h-4" />
                {" Revenue Protection"}
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                {"The Missed Call "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  Safety Net
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                You're on a ladder, not a laptop. When you miss a call, our system texts them back immediately to start
                the conversation. It stops them from calling the next guy on Google.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Instantly engage missed calls",
                  "Stop leads from calling competitors",
                  "Automatically schedule callbacks",
                ].map((o, s) => (
                  <li className="flex items-center gap-4 text-lg font-medium text-white/90" key={s}>
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                      <CheckCircle2 className="w-5 h-5 text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    </div>
                    {o}
                  </li>
                ))}
              </ul>
              <BookingDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 font-bold rounded-full px-10 h-16 text-lg shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)] transition-all hover:scale-105 border-none"
                >
                  Protect Your Leads
                </Button>
              </BookingDialog>
            </FadeIn>
          </section>
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                <Star className="w-4 h-4" />
                {" Authority Builder"}
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                {"The 5-Star "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">
                  Flywheel
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                Turn completed jobs into your best marketing. We automate the follow-up so happy customers leave
                feedback without you ever having to chase them.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Automated SMS & Email review requests",
                  "Filter out negative feedback privately",
                  "Rank higher on Google Maps automatically",
                ].map((o, s) => (
                  <li className="flex items-center gap-4 text-lg font-medium text-white/90" key={s}>
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                    </div>
                    {o}
                  </li>
                ))}
              </ul>
              <BookingDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:opacity-90 font-bold rounded-full px-10 h-16 text-lg shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] transition-all hover:scale-105 border-none"
                >
                  Grow Your Reviews
                </Button>
              </BookingDialog>
            </FadeIn>
            <div className="order-1 lg:order-2 relative">
              <Tilt className="relative w-full h-[450px] md:h-auto md:aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-amber-500/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col bg-[#0a0a0c]">
                  <div className="flex-1 p-10 flex flex-col items-center justify-center gap-10 bg-[#0a0a0c] relative overflow-hidden">
                    <div className="text-center relative z-10">
                      <div className="text-7xl font-black text-white mb-4 tracking-tighter">4.9</div>
                      <div className="flex gap-2 text-yellow-400 justify-center mb-4">
                        {[...Array(5)].map((o, s) => (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0,
                              rotate: -180,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                              rotate: 0,
                            }}
                            transition={{
                              delay: 0.3 + s * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{
                              once: !0,
                            }}
                            key={s}
                          >
                            <Star className="w-10 h-10 fill-current drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]" />
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-base text-muted-foreground font-medium">Based on 128 verified reviews</div>
                    </div>
                    <motion.div
                      initial={{
                        y: 40,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.2,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="w-full bg-[#1a1a1c] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl border border-blue-500/30">
                          J
                        </div>
                        <div>
                          <div className="text-base font-bold text-white">John Smith</div>
                          <div className="text-sm text-muted-foreground">2 mins ago • Google</div>
                        </div>
                      </div>
                      <div className="text-base text-white/90 leading-relaxed font-medium">
                        {
                          '"Incredible service. They texted me back instantly and fixed the issue same day. Highly recommend!"'
                        }
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Tilt>
            </div>
          </section>
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <Tilt className="relative w-full h-[450px] md:h-auto md:aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col bg-[#0a0a0c]">
                  <div className="h-16 border-b border-white/5 bg-[#111113] flex items-center px-6 justify-between">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-400" />
                      {" Campaign Manager"}
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30 animate-pulse">
                      ACTIVE
                    </div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-6 bg-[#0a0a0c] relative overflow-hidden justify-center">
                    <motion.div
                      initial={{
                        scale: 0.9,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="bg-[#1a1a1c] border border-white/10 rounded-2xl p-6 relative z-10 shadow-xl"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-white mb-1">Seasonal Tune-Up Offer</div>
                          <div className="text-sm text-muted-foreground">Sent to 450 past clients</div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/80">Open Rate</span>
                            <span className="text-green-400 font-bold">68%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: "68%",
                              }}
                              transition={{
                                delay: 0.8,
                                duration: 1,
                              }}
                              viewport={{
                                once: !0,
                              }}
                              className="h-full bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/80">Bookings Generated</span>
                            <span className="text-green-400 font-bold">24 Jobs</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: "35%",
                              }}
                              transition={{
                                delay: 1,
                                duration: 1,
                              }}
                              viewport={{
                                once: !0,
                              }}
                              className="h-full bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.5,
                      }}
                      viewport={{
                        once: !0,
                      }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-bold shadow-[0_0_20px_rgba(74,222,128,0.15)]">
                        + $6,800 Revenue Recovered
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Tilt>
            </div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <TrendingUp className="w-4 h-4" />
                {" Database Reactivation"}
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                {"Hidden Revenue "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-300">
                  Extraction
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                You're sitting on a goldmine. We use automated SMS and email campaigns to reactivate past customers and
                dead leads into paying jobs.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Done-for-you seasonal offer campaigns",
                  "Automated referral requests after jobs",
                  "Turn old leads into new bookings automatically",
                ].map((o, s) => (
                  <li className="flex items-center gap-4 text-lg font-medium text-white/90" key={s}>
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <CheckCircle2 className="w-5 h-5 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                    </div>
                    {o}
                  </li>
                ))}
              </ul>
              <BookingDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-black hover:opacity-90 font-bold rounded-full px-10 h-16 text-lg shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_50px_rgba(74,222,128,0.5)] transition-all hover:scale-105 border-none"
                >
                  Reactivate Your List
                </Button>
              </BookingDialog>
            </FadeIn>
          </section>
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                <Sparkles className="w-4 h-4" />
                {" AI Search"}
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                {"Get Recommended "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#99f6e4]">By AI</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                Your customers are asking ChatGPT, Gemini and Perplexity who to hire. We optimize your brand, content
                and schema so AI search engines understand your business and name you in the answer.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "ChatGPT, Gemini & Perplexity visibility",
                  "Schema & entity optimization",
                  "SEO blogs published every month",
                ].map((o, s) => (
                  <li className="flex items-center gap-4 text-lg font-medium text-white/90" key={s}>
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                    </div>
                    {o}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black hover:opacity-90 font-bold rounded-full px-10 h-16 text-lg shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all hover:scale-105 border-none"
              >
                <a href="/products/ai-seo">Explore AI SEO</a>
              </Button>
            </FadeIn>
            <div className="order-1 lg:order-2 relative">
              <Tilt className="relative w-full h-[450px] md:h-auto md:aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 to-[#06b6d4]/30 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col bg-[#0a0a0c]">
                  <div className="h-16 border-b border-white/5 bg-[#111113] flex items-center px-6 gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center text-sm font-medium text-white/50">AI Answer</div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-6 bg-[#0a0a0c] relative overflow-hidden">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-[#1a1a1c] p-5 rounded-3xl rounded-tr-sm w-[85%] self-end border border-white/5 shadow-lg"
                    >
                      <div className="text-xs text-muted-foreground mb-2 font-medium">You • Just now</div>
                      <div className="text-base text-white leading-relaxed">Who's the best contractor near me for a kitchen remodel?</div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      viewport={{ once: true }}
                      className="bg-sky-500/15 p-5 rounded-3xl rounded-tl-sm w-[90%] border border-sky-500/30 shadow-[0_0_30px_rgba(14,165,233,0.15)] relative"
                    >
                      <div className="absolute -right-3 -top-3 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center border-4 border-[#0a0a0c] shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-sky-400 mb-2 font-medium">AI Overview</div>
                      <div className="text-base text-white leading-relaxed">
                        Based on reviews and local expertise, <span className="font-bold">Your Business</span> is a top
                        choice. They specialize in kitchen remodels and have a 4.9★ rating.
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Tilt>
            </div>
          </section>
        </div>
      </div>
      <section className="py-20 sm:py-28 md:py-32 px-4 border-t border-white/5 relative overflow-hidden bg-[#030303]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
                {"Built For "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                  Every Trade
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Our AI systems adapt to your specific industry, handling the unique questions and booking flows of your
                trade.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {[
                {
                  icon: <Droplet className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Plumbing",
                  desc: "Emergency repairs & leak detection.",
                },
                {
                  icon: <Wind className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "HVAC",
                  desc: "AC repair & seasonal tune-ups.",
                },
                {
                  icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Electrician",
                  desc: "Panel upgrades & rewiring.",
                },
                {
                  icon: <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Roofing",
                  desc: "Inspections & roof replacements.",
                },
                {
                  icon: <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "General Contractor",
                  desc: "Remodels & new construction.",
                },
                {
                  icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Landscaping",
                  desc: "Design & ongoing maintenance.",
                },
                {
                  icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Pool Services",
                  desc: "Cleaning & equipment repair.",
                },
                {
                  icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Pest Control",
                  desc: "Extermination & prevention.",
                },
                {
                  icon: <Box className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Concrete & Paving",
                  desc: "Driveways & foundations.",
                },
                {
                  icon: <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Windows & Doors",
                  desc: "Installations & repairs.",
                },
                {
                  icon: <Paintbrush className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Painting",
                  desc: "Interior & exterior painting.",
                },
                {
                  icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Remodeling",
                  desc: "Kitchens, baths & additions.",
                },
              ].map((o, s) => (
                <FadeIn delay={s * 0.05} className="h-full" key={s}>
                  <Tilt className="h-full">
                    <div className="group relative h-full rounded-2xl sm:rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 overflow-hidden hover:border-primary/50 transition-colors duration-500 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 relative z-10">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110 shadow-lg shrink-0">
                          {o.icon}
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">
                          {o.label}
                        </h3>
                      </div>
                      <p className="text-[11px] sm:text-sm text-white/60 relative z-10 leading-snug sm:leading-relaxed">
                        {o.desc}
                      </p>
                    </div>
                  </Tilt>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32 md:py-40 px-4 border-t border-white/5 relative overflow-hidden bg-[#0a0a0c]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  <Zap className="w-4 h-4" />
                  {" The Yugen Advantage"}
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight">
                  {"Most Agencies "}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                    Sell Fluff. We Sell Systems.
                  </span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-8">{`We don't care about "impressions" or "reach". We care about your bank account. Our systems are built to do one thing: turn a stranger into a booked job as fast as humanly possible.`}</p>
                <BookingDialog>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-8 h-14 text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all"
                  >
                    See The Difference
                  </Button>
                </BookingDialog>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Built for Speed",
                  desc: "Our systems respond, qualify, and book leads instantly. Speed wins deals.",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Designed for ROI",
                  desc: "We build revenue systems meant to generate returns quickly — not 6 months from now.",
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Real AI Integration",
                  desc: "We use AI to handle conversations and bookings — not just gimmicks that look cool.",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "No Long-Term Contracts",
                  desc: "If the system is working, you'll stay. If it's not, you shouldn't. Simple as that.",
                },
              ].map((o, s) => (
                <FadeIn delay={s * 0.1} key={s}>
                  <Tilt className="h-full">
                    <div className="glass-card p-8 rounded-3xl flex flex-col gap-6 h-full border border-white/5 hover:border-primary/40 bg-[#111113]/80 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] relative z-10">
                        {o.icon}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {o.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed">{o.desc}</p>
                      </div>
                    </div>
                  </Tilt>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32 md:py-40 px-4 border-t border-white/5 bg-[#030303] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-bold mb-8">
                    <MessageSquare className="w-4 h-4" />
                    {" Got Questions?"}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
                    {"Answers & "}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                      Insights
                    </span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    Everything you need to know about how our AI systems transform your business.
                  </p>
                  <BookingDialog>
                    <Button
                      size="lg"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 h-14 backdrop-blur-md transition-all"
                    >
                      Ask Us Anything
                    </Button>
                  </BookingDialog>
                </FadeIn>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Accordion type="multiple" defaultValue={["item-0", "item-1"]} className="w-full space-y-6">
                {homeFaqs.map((o, s) => (
                  <FadeIn delay={s * 0.1} key={s}>
                    <AccordionItem
                      value={`item-${s}`}
                      className="glass-card border border-white/10 rounded-3xl px-8 overflow-hidden data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-all duration-500 bg-[#0a0a0c]/80"
                    >
                      <AccordionTrigger className="hover:no-underline text-left font-bold py-8 text-xl group gap-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-primary">
                        <span className="group-hover:text-primary transition-colors text-white/90">{o.q}</span>
                      </AccordionTrigger>
                      <AccordionContent forceMount className="text-white/70 pb-8 leading-relaxed text-lg">{o.a}</AccordionContent>
                    </AccordionItem>
                  </FadeIn>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32 md:py-40 px-4 relative border-t border-white/5 overflow-hidden bg-[#0a0a0c]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: 1 / 0,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-[#06b6d4]/20 to-primary/20 blur-[100px] rounded-full pointer-events-none"
        />
        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden p-1 bg-gradient-to-br from-primary/50 via-[#06b6d4]/50 to-transparent shadow-[0_0_80px_hsl(var(--primary)/0.2)]">
              <div className="absolute inset-0 bg-[#0a0a0c]/95 backdrop-blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
              <div className="relative p-8 sm:p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-tight text-white tracking-tight">
                    {"Ready to "}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                      Scale Up?
                    </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed">
                    We'll walk you through what we build, how it helps businesses grow, and give you the space to
                    decide if moving forward makes sense.
                  </p>
                  <BookingDialog>
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 px-8 sm:px-10 h-14 sm:h-16 text-lg sm:text-xl rounded-full w-full md:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 font-bold group overflow-hidden relative"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
                      <span className="relative z-10">Book Your Strategy Call</span>
                    </Button>
                  </BookingDialog>
                </div>
                <div className="w-full md:w-auto flex justify-center relative">
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-primary/40 blur-[80px] rounded-full" />
                    <Logo className="h-20 max-w-full opacity-100 relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
