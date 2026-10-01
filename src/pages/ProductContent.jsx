import { motion } from 'framer-motion'
import { CalendarDays, PenTool } from 'lucide-react'
import { MockHeader, ProductPage } from '@/components/ProductPage'
import { Seo } from '@/components/Seo'

const items = [
  { type: 'Blog', title: 'How Much Does a Kitchen Remodel Cost in 2026?', status: 'Published' },
  { type: 'Blog', title: '5 Signs Your Roof Needs Replacing', status: 'Published' },
  { type: 'Newsletter', title: 'Fall Maintenance Checklist', status: 'Scheduled' },
  { type: 'Page', title: 'Service Area: Downtown', status: 'Optimizing' },
]

export default function ProductContent() {
  return (
    <>
      <Seo
        title="Content Creation"
        description="SEO blogs, newsletters and page optimizations every month. Yugen keeps your site publishing consistently so you rank on Google and in AI search."
        path="/products/content-creation"
      />
      <ProductPage
        theme="orange"
        icon={PenTool}
        eyebrow="Content That Ranks"
        title="Publish Consistently"
        accent="Without Lifting a Finger"
        intro="Search engines and AI reward businesses that publish helpful content on a steady schedule. We plan, write and publish it for you every month."
        cta="Start Publishing"
        sectionTitle="Your Content"
        sectionAccent="Engine"
        sectionBody="Every piece is planned around the keywords your customers search, written to answer their questions, and linked together so your whole site gains authority."
        features={[
          'SEO blog posts every month',
          'Newsletters that keep past customers engaged',
          'A content strategy mapped to your keywords',
          'Optimization of your existing pages',
          'Internal linking that builds topical authority',
        ]}
        mock={
          <>
            <MockHeader icon={CalendarDays} title="Content Calendar" iconClass="text-orange-400" />
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center gap-4 bg-[#0a0a0c]">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    it.status === 'Published' ? 'border-orange-500/40 bg-orange-500/10' : 'border-white/5 bg-[#1a1a1c]'
                  }`}
                >
                  <span className="w-20 shrink-0 rounded-md bg-white/5 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-orange-300">
                    {it.type}
                  </span>
                  <span className="flex-1 truncate text-sm text-white/85">{it.title}</span>
                  <span className={`shrink-0 text-xs font-bold ${it.status === 'Published' ? 'text-orange-400' : 'text-white/40'}`}>
                    {it.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </>
        }
      />
    </>
  )
}
