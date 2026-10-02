import { useMemo, useState } from "react";
import { Seo } from "@/components/Seo";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { author, categories, posts } from "@/content/blog";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const e = useNavigate(),
    [t, n] = useState(""),
    [r, o] = useState("All"),
    s = useMemo(
      () =>
        posts.filter((l) => {
          const c =
              l.title.toLowerCase().includes(t.toLowerCase()) ||
              l.excerpt.toLowerCase().includes(t.toLowerCase()) ||
              l.keywords.some((d) => d.toLowerCase().includes(t.toLowerCase())),
            u = r === "All" || l.category === r;
          return c && u;
        }),
      [t, r],
    ),
    i = posts[0];
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo title="Blog" description="Practical answers about websites, SEO, AI search, lead capture and growing your business." path="/blog" />
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-[#030303] border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
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
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
          >
            Growth Resources
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
          >
            {"The "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
              Raindrop
            </span>
            {" Blog"}
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            No fluff. Practical answers about SEO, AI search, content, websites and lead generation for businesses that
            want to grow.
          </motion.p>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#030303]">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div
              onClick={() => e(`/blog/${i.slug}`)}
              className="group cursor-pointer grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={i.image}
                  alt={i.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0c]/80 md:to-[#0a0a0c]" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold shadow-lg">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                  <span className="text-primary font-bold">{i.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />{" "}
                    {new Date(i.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {i.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {i.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">{i.excerpt}</p>
                <div>
                  <div className="text-sm font-bold text-white">{author.name}</div>
                  <div className="text-xs text-white/40">{author.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-8 px-4 border-t border-white/5 bg-[#0a0a0c] sticky top-0 z-30 backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={t}
                onChange={(l) => n(l.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((l) => (
                <button
                  onClick={() => o(l)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${r === l ? "bg-primary text-white shadow-[0_0_20px_hsl(var(--primary)/0.3)]" : "bg-white/5 text-white/60 border border-white/10 hover:text-white hover:border-white/20"}`}
                  key={l}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#030303]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {s.map((l, c) => (
              <FadeIn delay={c * 0.05} key={l.slug}>
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  onClick={() => e(`/blog/${l.slug}`)}
                  className="group cursor-pointer h-full bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={l.image}
                      alt={l.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-primary text-xs font-bold border border-primary/20">
                      {l.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />{" "}
                        {new Date(l.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {l.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                      {l.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">{l.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs font-bold text-white/70">{author.name}</span>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          {s.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white/60">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
      <section className="py-20 px-4 border-t border-white/5 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              {"Ready to Stop "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                Losing Leads?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Book a free strategy call and see exactly how our AI systems can get you found and win more customers for
              your business.
            </p>
            <Button
              onClick={() => e("/contact")}
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-10 h-16 text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all"
            >
              {"Book Your Strategy Call "}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
