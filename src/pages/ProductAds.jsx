import { motion } from 'framer-motion'
import { BarChart3, Target } from 'lucide-react'
import { MockHeader, ProductPage } from '@/components/ProductPage'
import { Seo } from '@/components/Seo'

const campaigns = [
  { name: 'Google Search', pct: 82 },
  { name: 'Meta Retargeting', pct: 64 },
  { name: 'Local Services Ads', pct: 91 },
]

export default function ProductAds() {
  return (
    <>
      <Seo
        title="Paid Ads"
        description="Google and Meta ad campaigns built around booked calls, with landing pages and conversion tracking so you know what every dollar returns."
        path="/products/paid-ads"
      />
      <ProductPage
        path="/products/paid-ads"
        theme="indigo"
        icon={Target}
        eyebrow="Paid Advertising"
        title="Ads That Pay"
        accent="for Themselves"
        intro="We run Google and Meta campaigns built around one goal: booked calls. Every ad is tracked so you know exactly what you are getting back."
        cta="Launch My Ads"
        sectionTitle="Spend Smarter,"
        sectionAccent="Not Bigger"
        sectionBody="Most ad accounts leak money on clicks that never call. We build tight campaigns, send them to pages that convert, and connect every lead to your follow-up system."
        features={[
          'Google and Meta campaigns built around booked calls',
          'Landing pages matched to each campaign',
          'Conversion tracking down to the lead',
          'Retargeting to bring back visitors who did not call',
          'Clear monthly spend and results reporting',
        ]}
        mock={
          <>
            <MockHeader icon={BarChart3} title="Campaign Manager" iconClass="text-indigo-400" />
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center gap-6 bg-[#0a0a0c]">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ['Leads', '86'],
                  ['Cost / Lead', '$28'],
                  ['Booked', '31'],
                ].map(([k, v], i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="rounded-xl border border-white/10 bg-[#1a1a1c] p-3"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-white/40">{k}</div>
                    <div className="mt-1 text-xl font-black text-white">{v}</div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {campaigns.map((c) => (
                  <div key={c.name}>
                    <div className="mb-1.5 flex justify-between text-xs text-white/60">
                      <span>{c.name}</span>
                      <span className="text-indigo-400 font-bold">{c.pct}% to goal</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-indigo-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        }
      />
    </>
  )
}
