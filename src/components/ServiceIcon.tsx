import {
  BarChart3,
  LayoutTemplate,
  Megaphone,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from 'lucide-react'

const icons = { BarChart3, LayoutTemplate, Megaphone, PenTool, Search, ShieldCheck, Sparkles, Target, Workflow, Zap }

export type IconName = keyof typeof icons

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} />
}
