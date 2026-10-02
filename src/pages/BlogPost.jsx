import { useEffect } from "react";
import { ArticleBody } from "@/components/ArticleBody";
import { FadeIn } from "@/components/motion";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { author, posts } from "@/content/blog";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug: e } = useParams(),
    t = useNavigate(),
    n = posts.find((i) => i.slug === e);
  if (
    (useEffect(() => {
      window.scrollTo(0, 0);
    }, [n]),
    !n)
  )
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Article Not Found</h1>
          <Button onClick={() => t("/blog")} className="bg-primary text-white">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  const r = posts.filter((i) => i.category === n.category && i.slug !== n.slug).slice(0, 3),
    o = r.length >= 3 ? r : [...r, ...posts.filter((i) => i.slug !== n.slug && !r.includes(i)).slice(0, 3 - r.length)],
    s = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: n.title,
      description: n.metaDescription,
      image: n.image,
      datePublished: n.date,
      author: {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        description: author.bio,
      },
      publisher: {
        "@type": "Organization",
        name: "Raindrop Marketing",
      },
      keywords: n.keywords.join(", "),
      articleSection: n.category,
    };
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Seo title={n.title} description={n.metaDescription} path={`/blog/${n.slug}`} jsonLd={s} />
      <div className="pt-28 pb-6 px-4 bg-[#030303]">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60 truncate max-w-[200px]">{n.category}</span>
          </nav>
        </div>
      </div>
      <section className="pb-12 px-4 bg-[#030303]">
        <div className="container mx-auto max-w-4xl">
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
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              {n.category}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
              {n.title}
            </h1>
            <div className="flex items-center gap-6 text-white/50 mb-8">
              <div>
                <div className="font-bold text-white text-sm">{author.name}</div>
                <div className="text-xs text-white/40">{author.role}</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex flex-col gap-1 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />{" "}
                  {new Date(n.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {n.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="px-4 bg-[#030303] pb-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <ArticleBody content={n.content} />
          </article>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {n.keywords.map((i, l) => (
                <span
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/50"
                  key={l}
                >
                  #{i.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </div>
          <FadeIn className="mt-12">
            <div className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{author.name}</h3>
                <p className="text-sm text-primary font-bold mb-3">{author.role}</p>
                <p className="text-white/60 leading-relaxed">{author.bio}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#030303] border-t border-white/5">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-primary/50 via-[#06b6d4]/50 to-transparent shadow-[0_0_60px_hsl(var(--primary)/0.2)]">
              <div className="absolute inset-0 bg-[#0a0a0c]/95 backdrop-blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
              <div className="relative p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  {"Want This System "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                    Working for You?
                  </span>
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Book a free strategy call and see exactly how we can get you found and win more customers for your
                  business.
                </p>
                <Button
                  onClick={() => t("/contact")}
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-10 h-14 text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
                >
                  {"Book Your Strategy Call "}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      {o.length > 0 && (
        <section className="py-16 px-4 bg-[#0a0a0c] border-t border-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Related Articles</h2>
              <Button
                onClick={() => t("/blog")}
                variant="outline"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full"
              >
                {"View All "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {o.map((i, l) => (
                <FadeIn delay={l * 0.1} key={i.slug}>
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    onClick={() => t(`/blog/${i.slug}`)}
                    className="group cursor-pointer h-full bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl flex flex-col"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={i.image}
                        alt={i.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-xs text-primary font-bold mb-2">{i.category}</div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                        {i.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed flex-1 line-clamp-2">{i.excerpt}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm text-primary font-bold">
                        {"Read More "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="py-8 px-4 text-center bg-[#0a0a0c] border-t border-white/5">
        <Button onClick={() => t("/blog")} variant="ghost" className="text-white/60 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {" Back to All Articles"}
        </Button>
      </div>
    </div>
  );
}
