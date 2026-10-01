// Placeholders: swap these before launch.
export const site = {
  name: 'Yugen Systems',
  legalName: 'Yugen Systems LLC',
  url: 'https://yugensystems.com',
  email: 'hello@yugensystems.com',
  phone: '(000) 000-0000',
  bookingUrl: '/contact',
  // Formspree-style endpoint. Leave empty to fall back to mailto.
  formEndpoint: '',
  tagline: 'AI-powered growth systems for businesses that want to be found, chosen and booked.',
}

export type NavItem = { label: string; to: string; hidden?: boolean }

export const companyNav: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
  // Enable once there is content for them.
  { label: 'Testimonials', to: '/testimonials', hidden: true },
  { label: 'Blog', to: '/blog', hidden: true },
]

// Placeholder figures until real numbers exist.
export const heroStats = [
  { value: 250, suffix: '+', label: 'Pages Ranked' },
  { value: 40, suffix: '%', label: 'Avg. Lead Lift' },
  { value: 24, suffix: '/7', label: 'Lead Response' },
  { value: 7, suffix: '', label: 'Channels, One System' },
]

// Real Yugen client quotes only. The section stays hidden while empty.
export const testimonials: { quote: string; name: string; role: string }[] = []
