import { motion } from 'framer-motion'
import { Bot, CheckCircle2, Sparkles } from 'lucide-react'
import { MockHeader, ProductPage } from '@/components/ProductPage'
import { Seo } from '@/components/Seo'

const engines = ['ChatGPT', 'Gemini', 'Perplexity']

export default function ProductAiSeo() {
  return (
    <>
      <Seo
        title="AI SEO"
        description="Get recommended by ChatGPT, Gemini and Perplexity. Yugen optimizes your brand, content and schema so AI search engines understand and cite your business."
        path="/products/ai-seo"
      />
      <ProductPage
        theme="sky"
        icon={Sparkles}
        eyebrow="AI Search Optimization"
        title="Get Recommended When Customers"
        accent="Ask AI"
        intro="Your customers are asking ChatGPT, Gemini and Perplexity who to hire. We optimize your brand, content and schema so AI search engines understand your business and recommend it."
        cta="Get Found in AI Search"
        sectionTitle="The AI"
        sectionAccent="Visibility Engine"
        sectionBody="Ranking on Google is no longer the whole game. AI answers now sit above the links, and they only name a few businesses. We make sure yours is one of them, and we track it every month."
        features={[
          'ChatGPT, Gemini and Perplexity visibility tracking',
          'Schema and entity optimization',
          'AI search optimization for your key pages',
          'Competitor tracking across AI answers',
          'Monthly reporting on where you are cited',
        ]}
        mock={
          <>
            <MockHeader icon={Bot} title="AI Answer" iconClass="text-sky-400" />
            <div className="flex-1 p-6 sm:p-8 flex flex-col gap-5 bg-[#0a0a0c]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="self-end max-w-[85%] bg-[#1a1a1c] border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white/80"
              >
                Who's the best contractor near me for a kitchen remodel?
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="max-w-[90%] bg-sky-500/10 border border-sky-500/30 rounded-2xl rounded-tl-sm px-4 py-4 text-sm text-white/80 leading-relaxed shadow-[0_0_20px_rgba(14,165,233,0.15)]"
              >
                Based on reviews and local expertise, <span className="font-bold text-white">Your Business</span> is a top
                choice. They specialize in kitchen remodels and have a 4.9★ rating.
              </motion.div>
              <div className="mt-auto grid grid-cols-3 gap-3">
                {engines.map((n, i) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="rounded-xl border border-white/10 bg-[#1a1a1c] py-3 text-center"
                  >
                    <div className="text-[11px] text-white/50">{n}</div>
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs font-bold text-sky-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Cited
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        }
      />
    </>
  )
}
