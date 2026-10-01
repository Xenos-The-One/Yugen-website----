import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

// Same layout as the Takeoff-derived product pages; class strings stay literal so Tailwind keeps them.
export const themes = {
  sky: {
    glow: 'bg-sky-500/20',
    pill: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
    gradient: 'from-sky-600 to-sky-300',
    button: 'bg-sky-600 hover:bg-sky-500 shadow-[0_0_30px_rgba(2,132,199,0.4)] hover:shadow-[0_0_50px_rgba(2,132,199,0.6)]',
    mockGlow: 'from-sky-500/20 to-cyan-500/20',
    itemHover: 'hover:border-sky-500/30',
    check: 'bg-sky-500/20 text-sky-400',
  },
  orange: {
    glow: 'bg-orange-500/20',
    pill: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
    gradient: 'from-orange-600 to-orange-300',
    button: 'bg-orange-600 hover:bg-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)]',
    mockGlow: 'from-orange-500/20 to-amber-500/20',
    itemHover: 'hover:border-orange-500/30',
    check: 'bg-orange-500/20 text-orange-400',
  },
  indigo: {
    glow: 'bg-indigo-500/20',
    pill: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    gradient: 'from-indigo-600 to-indigo-300',
    button: 'bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)]',
    mockGlow: 'from-indigo-500/20 to-violet-500/20',
    itemHover: 'hover:border-indigo-500/30',
    check: 'bg-indigo-500/20 text-indigo-400',
  },
}

export function ProductPage({ theme, icon: Icon, eyebrow, title, accent, intro, cta, sectionTitle, sectionAccent, sectionBody, features, mock }) {
  const navigate = useNavigate()
  const c = themes[theme]
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${c.glow} blur-[120px] rounded-full pointer-events-none animate-pulse-glow`}
        />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-8 backdrop-blur-md ${c.pill}`}>
              <Icon className="w-4 h-4" />
              {eyebrow}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {title}{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${c.gradient}`}>{accent}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate('/onboarding')}
                size="lg"
                className={`text-white font-bold text-lg px-10 h-16 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto ${c.button}`}
              >
                {cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-full aspect-square max-w-[500px] mx-auto"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr rounded-full blur-[100px] animate-pulse-glow ${c.mockGlow}`} />
                <div className="relative h-full w-full glass-card rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col bg-[#0a0a0c]">
                  {mock}
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {sectionTitle}{' '}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${c.gradient}`}>{sectionAccent}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">{sectionBody}</p>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex items-start gap-4 glass-card p-4 rounded-2xl transition-colors ${c.itemHover}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.check}`}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-white/90">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function MockHeader({ icon: Icon, title, iconClass }) {
  return (
    <div className="h-16 border-b border-white/5 bg-[#111113] flex items-center px-6 justify-between">
      <div className="text-sm font-bold text-white flex items-center gap-2">
        <Icon className={`w-4 h-4 ${iconClass}`} /> {title}
      </div>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
    </div>
  )
}
