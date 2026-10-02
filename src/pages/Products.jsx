import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { ArrowRight, Globe, MapPin, MessageSquare, PenTool, PhoneMissed, Sparkles, Star, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const e = useNavigate(),
    t = [
      {
        title: "AI SEO",
        desc: "Get recommended by ChatGPT, Gemini and Perplexity when customers ask who to hire.",
        icon: Sparkles,
        href: "/products/ai-seo",
        color: "from-sky-500/20 to-cyan-500/20",
        border: "group-hover:border-sky-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]",
        iconColor: "text-sky-400",
        colSpan: "md:col-span-2 lg:col-span-2",
      },
      {
        title: "SEO & Local SEO",
        desc: "Rank higher on Google Maps and search results organically.",
        icon: MapPin,
        href: "/products/local-seo",
        color: "from-green-500/20 to-emerald-500/20",
        border: "group-hover:border-green-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
        iconColor: "text-green-400",
        colSpan: "md:col-span-1 lg:col-span-1",
      },
      {
        title: "Content Creation",
        desc: "SEO blogs, newsletters and page updates published for you every month.",
        icon: PenTool,
        href: "/products/content-creation",
        color: "from-orange-500/20 to-amber-500/20",
        border: "group-hover:border-orange-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
        iconColor: "text-orange-400",
        colSpan: "md:col-span-1 lg:col-span-1",
      },
      {
        title: "Functional Website",
        desc: "A high-converting, mobile-first website built to turn visitors into customers.",
        icon: Globe,
        href: "/products/functional-website",
        color: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        iconColor: "text-blue-400",
        colSpan: "md:col-span-2 lg:col-span-2",
      },
      {
        title: "Paid Ads",
        desc: "Google and Meta campaigns tracked all the way to booked calls.",
        icon: Target,
        href: "/products/paid-ads",
        color: "from-indigo-500/20 to-violet-500/20",
        border: "group-hover:border-indigo-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
        iconColor: "text-indigo-400",
        colSpan: "md:col-span-1 lg:col-span-1",
      },
      {
        title: "All-in-One Inbox",
        desc: "Manage texts, emails, FB, IG, and web chats in one single dashboard.",
        icon: MessageSquare,
        href: "/products/all-in-one-inbox",
        color: "from-cyan-500/20 to-sky-500/20",
        border: "group-hover:border-cyan-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        iconColor: "text-cyan-400",
        colSpan: "md:col-span-1 lg:col-span-1",
      },
      {
        title: "Missed Call Text Back",
        desc: "Instantly text back callers when you can't answer the phone.",
        icon: PhoneMissed,
        href: "/products/missed-call-text-back",
        color: "from-red-500/20 to-orange-500/20",
        border: "group-hover:border-red-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
        iconColor: "text-red-400",
        colSpan: "md:col-span-1 lg:col-span-1",
      },
      {
        title: "One Click Marketing",
        desc: "Launch email and text campaigns to your past customers instantly.",
        icon: Zap,
        href: "/products/one-click-marketing",
        color: "from-yellow-500/20 to-amber-500/20",
        border: "group-hover:border-yellow-500/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
        iconColor: "text-yellow-400",
        colSpan: "md:col-span-1 lg:col-span-1",
      },
      {
        title: "5 Star Review System",
        desc: "Automate review requests and protect your online reputation.",
        icon: Star,
        href: "/products/review-system",
        color: "from-primary/20 to-[#06b6d4]/20",
        border: "group-hover:border-primary/50",
        glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
        iconColor: "text-primary",
        colSpan: "md:col-span-2 lg:col-span-2",
      },
    ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <Seo title="Products" description="AI SEO, SEO, content, websites, ads, unified inbox, missed call text back, one-click marketing and review automation from Raindrop Marketing." path="/products" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />
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
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Raindrop Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {"Everything you need to "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                grow your business.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              A single platform built to capture leads, automate follow-ups, and manage your entire online presence
              without the headache.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left auto-rows-fr">
            {t.map((n, r) => (
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
                  duration: 0.5,
                  delay: r * 0.1,
                }}
                onClick={() => e(n.href)}
                className={`group cursor-pointer glass-card p-8 rounded-3xl border border-white/5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative ${n.colSpan} ${n.border} ${n.glow}`}
                key={r}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${n.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500 ${n.iconColor}`}
                  >
                    <n.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {n.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{n.desc}</p>
                </div>
                <div className="relative z-10 flex items-center text-sm font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors mt-auto">
                  Explore Feature
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
