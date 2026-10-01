import { FadeInEase, Tilt } from "@/components/motion";
import { Seo } from "@/components/Seo";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const e = useMotionValue(0),
    t = useMotionValue(0);
  function n({ currentTarget: o, clientX: s, clientY: i }) {
    const { left: l, top: c } = o.getBoundingClientRect();
    (e.set(s - l), t.set(i - c));
  }
  const r = [
    {
      name: "Affan Mahmood",
      role: "HVAC Owner",
      quote:
        "Yugen didn't just build us a site — they built a system. Phones started ringing and we stopped chasing leads.",
      rating: 5,
    },
    {
      name: "Kelsey Olso",
      role: "Plumbing Contractor",
      quote: "Everything looks professional now. Customers mention the site all the time.",
      rating: 5,
    },
    {
      name: "Joann Marquez",
      role: "Roofing Specialist",
      quote: "Leads get answered fast and nothing slips through the cracks anymore.",
      rating: 5,
    },
    {
      name: "Ashvin Raveendran",
      role: "Electrician",
      quote: "No fluff, no BS. Just clean execution and real results.",
      rating: 5,
    },
    {
      name: "Philip Almayda",
      role: "General Contractor",
      quote: "Worth every dollar. Paid for itself quicker than expected.",
      rating: 5,
    },
    {
      name: "Nadia Qamar",
      role: "Cleaning Services",
      quote: "Built for contractors, not tech people. Easy and effective.",
      rating: 5,
    },
    {
      name: "Marcus T.",
      role: "Landscaping Pro",
      quote: "The missed call text back feature alone paid for the entire system in the first week. Unbelievable.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Remodeling",
      quote: "We finally have a system that automatically gets us 5-star reviews. It's completely hands-off.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "HVAC Tech",
      quote: "I was skeptical about AI, but the web chat books appointments while I'm sleeping.",
      rating: 5,
    },
  ];
  return (
    <div className="bg-background text-foreground selection:bg-primary/30">
      <Seo title="Testimonials" description="Real results from real Yugen Systems clients." path="/testimonials" />
      <section
        onMouseMove={n}
        className="pt-40 pb-20 px-4 text-center relative overflow-hidden bg-[#030303] min-h-[60vh] flex items-center justify-center"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-50 transition duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${e}px ${t}px,
                rgba(6,182,212, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <FadeInEase>
          <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white/80 shadow-[0_0_30px_rgba(6,182,212,0.2)] mb-8">
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="font-medium">Real Results from Real Contractors</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-white">
              {"Clients Trust "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                Yugen
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">{`They don't hire us for "marketing." They hire us to plug the leaks in their business and turn missed calls into booked jobs.`}</p>
          </div>
        </FadeInEase>
      </section>
      <section className="py-20 px-4 bg-[#030303] relative border-t border-white/5">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {r.map((o, s) => (
              <FadeInEase delay={s * 0.05} className="break-inside-avoid" key={s}>
                <Tilt>
                  <div className="glass-card bg-[#0a0a0c]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] group relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-1 text-primary group-hover:scale-110 origin-left transition-transform duration-300">
                          {[...Array(o.rating)].map((i, l) => (
                            <Star
                              className="w-5 h-5 fill-current drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                              key={l}
                            />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-white/10 group-hover:text-primary/20 transition-colors" />
                      </div>
                      <p className="text-xl text-white/90 mb-10 font-medium leading-relaxed flex-1">
                        {'"'}
                        {o.quote}
                        {'"'}
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t border-white/10 group-hover:border-primary/20 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/30 shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                          {o.name[0]}
                        </div>
                        <div>
                          <div className="font-bold text-white flex items-center gap-2">
                            {o.name}
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          </div>
                          <div className="text-sm text-white/50">{o.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </FadeInEase>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 px-4 relative border-t border-white/5 overflow-hidden bg-[#0a0a0c]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-[#06b6d4]/20 to-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <FadeInEase>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white tracking-tight">
              {"Ready to be our next "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
              Stop losing leads to missed calls. Let's build a system that captures traffic, responds instantly, and
              books more jobs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 px-10 h-16 text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 font-bold group overflow-hidden relative"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
              <span className="relative z-10 flex items-center gap-2">
                {"Book Your Strategy Call "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </FadeInEase>
        </div>
      </section>
    </div>
  );
}
