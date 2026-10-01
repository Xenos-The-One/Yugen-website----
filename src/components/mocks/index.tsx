import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Bot, CalendarCheck, Mail, MessageSquare, PhoneMissed, Sparkles, Star, TrendingUp } from 'lucide-react'
import type { MockKey } from '../../content/services'
import { LogoMark } from '../Logo'

function Frame({ title, badge, icon, children }: { title: string; badge?: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-surface/90 p-5 shadow-2xl shadow-black/50 backdrop-blur sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-jade">{icon}</span>
          {title}
        </div>
        {badge && (
          <span className="rounded-full bg-jade/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-jade">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

const pop = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: 0.25 + i * 0.25, duration: 0.5 },
})

export function AiAnswerMock() {
  return (
    <Frame title="AI Answer Engine" badge="Cited" icon={<Sparkles className="h-4 w-4" />}>
      <motion.div {...pop(0)} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white/[0.06] px-4 py-3 text-sm text-white/80">
        Who's the best med spa near me for laser treatments?
      </motion.div>
      <motion.div {...pop(1)} className="mt-4 rounded-2xl rounded-tl-sm border border-jade/20 bg-jade/[0.06] px-4 py-4 text-sm leading-relaxed text-white/80">
        <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-jade">
          <Bot className="h-3.5 w-3.5" /> AI Overview
        </p>
        Based on reviews and expertise, <span className="font-semibold text-white">Your Business</span> is a top choice. They
        specialize in laser treatments, have a 4.9★ rating and offer free consultations.
        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded bg-jade text-[9px] font-bold text-ink">1</span>
      </motion.div>
      <motion.div {...pop(2)} className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ['ChatGPT', '✓'],
          ['Perplexity', '✓'],
          ['Gemini', '✓'],
        ].map(([n, v]) => (
          <div key={n} className="rounded-xl border border-white/10 bg-white/[0.03] py-2.5">
            <p className="text-[11px] text-white/50">{n}</p>
            <p className="text-sm font-bold text-jade">{v} Mentioned</p>
          </div>
        ))}
      </motion.div>
    </Frame>
  )
}

export function RankMock() {
  const rows = [
    ['best roofer near me', 14, 2],
    ['emergency roof repair', 22, 3],
    ['roof replacement cost', 31, 5],
    ['metal roofing installer', 48, 7],
  ] as const
  return (
    <Frame title="Keyword Rankings" badge="+38 this month" icon={<TrendingUp className="h-4 w-4" />}>
      <div className="mb-4 flex h-28 items-end gap-1.5">
        {[22, 28, 26, 35, 40, 38, 48, 55, 60, 66, 74, 86].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-jade/30 to-jade"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
          />
        ))}
      </div>
      <div className="divide-y divide-white/5 text-sm">
        {rows.map(([kw, from, to]) => (
          <div key={kw} className="flex items-center justify-between py-2.5">
            <span className="truncate text-white/75">{kw}</span>
            <span className="flex shrink-0 items-center gap-2 font-semibold">
              <span className="text-white/35 line-through">#{from}</span>
              <span className="rounded-md bg-jade/15 px-2 py-0.5 text-jade">#{to}</span>
            </span>
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function LeadMock() {
  return (
    <div className="space-y-5">
      <Frame title="Live Chat" badge="Instant" icon={<MessageSquare className="h-4 w-4" />}>
        <motion.div {...pop(0)} className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3 text-sm text-white/80">
          Do you have anything open this week? Our AC just stopped working.
        </motion.div>
        <motion.div {...pop(1)} className="ml-auto mt-3 max-w-[85%] rounded-2xl rounded-tr-sm bg-jade px-4 py-3 text-sm font-medium text-ink">
          Yes! We have a technician free tomorrow at 9am or 1pm. Want me to lock one in?
        </motion.div>
        <motion.div {...pop(2)} className="mt-3 flex items-center gap-2 text-xs font-semibold text-jade">
          <CalendarCheck className="h-4 w-4" /> Booked: Tomorrow, 9:00 AM
        </motion.div>
      </Frame>
      <motion.div {...pop(3)} className="ml-auto max-w-sm">
        <Frame title="Missed Call" badge="Texted back" icon={<PhoneMissed className="h-4 w-4" />}>
          <p className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-white/75">
            Hey, sorry we missed your call! We're with a customer right now. How can we help?
          </p>
        </Frame>
      </motion.div>
    </div>
  )
}

export function AdsMock() {
  return (
    <Frame title="Campaign Manager" badge="Active" icon={<ArrowUpRight className="h-4 w-4" />}>
      <div className="grid grid-cols-3 gap-3">
        {[
          ['Spend', '$2,400'],
          ['Leads', '86'],
          ['ROAS', '5.2x'],
        ].map(([k, v], i) => (
          <motion.div key={k} {...pop(i)} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] uppercase tracking-wider text-white/45">{k}</p>
            <p className="mt-1 font-display text-xl font-bold">{v}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {[
          ['Google Search · Emergency', 82],
          ['Meta · Retargeting', 64],
          ['Local Services Ads', 91],
        ].map(([n, w]) => (
          <div key={n as string}>
            <div className="mb-1.5 flex justify-between text-xs text-white/60">
              <span>{n}</span>
              <span className="text-jade">{w}% to goal</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-jade to-iris"
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl bg-jade/10 py-2.5 text-center text-sm font-semibold text-jade">+ 31 appointments booked</p>
    </Frame>
  )
}

export function ContentMock() {
  const items = [
    ['Blog', 'How Much Does a Roof Replacement Cost in 2026?', 'Published'],
    ['Social', '5 signs your water heater is about to fail', 'Scheduled'],
    ['Email', 'Fall tune-up offer for past customers', 'Drafting'],
    ['Page', 'Emergency Plumbing in Miami', 'In review'],
  ]
  return (
    <Frame title="Content Calendar" badge="12 this month" icon={<Sparkles className="h-4 w-4" />}>
      <div className="space-y-2.5">
        {items.map(([type, title, status], i) => (
          <motion.div key={title} {...pop(i)} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <span className="w-14 shrink-0 rounded-lg bg-iris/15 py-1 text-center text-[10px] font-bold uppercase text-iris">{type}</span>
            <span className="min-w-0 flex-1 truncate text-sm text-white/80">{title}</span>
            <span className={`shrink-0 text-[11px] font-semibold ${status === 'Published' ? 'text-jade' : 'text-white/40'}`}>{status}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  )
}

export function SiteMock() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">yourbusiness.com</span>
      </div>
      <div className="p-6">
        <motion.div {...pop(0)} className="h-3 w-24 rounded bg-jade/40" />
        <motion.div {...pop(1)} className="mt-4 h-7 w-4/5 rounded-lg bg-white/80" />
        <motion.div {...pop(1)} className="mt-2 h-7 w-3/5 rounded-lg bg-white/30" />
        <motion.div {...pop(2)} className="mt-5 flex gap-2">
          <span className="h-9 w-28 rounded-full bg-jade" />
          <span className="h-9 w-24 rounded-full border border-white/15" />
        </motion.div>
        <motion.div {...pop(3)} className="mt-6 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
          ))}
        </motion.div>
        <motion.div {...pop(4)} className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
          {[
            ['98', 'Speed'],
            ['100', 'SEO'],
            ['4.2%', 'Conversion'],
          ].map(([v, k]) => (
            <div key={k} className="rounded-lg bg-jade/10 py-2">
              <p className="font-bold text-jade">{v}</p>
              <p className="text-white/45">{k}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export function CampaignMock() {
  return (
    <div className="space-y-5">
      <Frame title="Growth Dashboard" badge="This month" icon={<LogoMark className="h-4 w-4" />}>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Organic Leads', '142', '+24%'],
            ['AI Mentions', '38', '+61%'],
            ['Ad Leads', '86', '+12%'],
            ['Booked Calls', '97', '+33%'],
          ].map(([k, v, d], i) => (
            <motion.div key={k} {...pop(i)} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-wider text-white/45">{k}</p>
              <p className="mt-1 flex items-baseline gap-2 font-display text-2xl font-bold">
                {v} <span className="text-xs font-semibold text-jade">{d}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </Frame>
      <motion.div {...pop(4)} className="mr-auto max-w-sm">
        <Frame title="Reactivation Email" badge="68% open" icon={<Mail className="h-4 w-4" />}>
          <p className="text-sm text-white/70">Sent to 450 past customers</p>
          <div className="mt-2 flex items-center gap-1 text-jade">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
            <span className="ml-2 text-xs font-semibold">24 jobs booked</span>
          </div>
        </Frame>
      </motion.div>
    </div>
  )
}

const mocks: Record<MockKey, () => ReactNode> = {
  ai: AiAnswerMock,
  rank: RankMock,
  lead: LeadMock,
  ads: AdsMock,
  content: ContentMock,
  site: SiteMock,
  campaign: CampaignMock,
}

export function MockFor({ kind }: { kind: MockKey }) {
  const M = mocks[kind]
  return <M />
}
