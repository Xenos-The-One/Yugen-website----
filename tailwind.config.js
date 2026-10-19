import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        display: ['Sora Variable', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        shine: { '0%': { left: '-100%' }, '100%': { left: '100%' } },
        'pulse-glow': { '0%, 100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '.8', transform: 'scale(1.05)' } },
        // Entrance animations for above-the-fold content: CSS runs before hydration, so text paints immediately.
        rise: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'none' } },
        'spin-in': { from: { opacity: '0', transform: 'rotate(-90deg)' }, to: { opacity: '1', transform: 'none' } },
        'nav-in': { from: { transform: 'translateY(-100%)' }, to: { transform: 'none' } },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 30s linear infinite',
        shine: 'shine 2s infinite linear',
        'gradient-x': 'gradient-x 15s ease infinite',
        rise: 'rise 0.8s cubic-bezier(.16,1,.3,1) both',
        'spin-in': 'spin-in 1.4s cubic-bezier(.16,1,.3,1) both',
        'nav-in': 'nav-in 0.6s cubic-bezier(.16,1,.3,1) both',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(.4,0,.6,1) infinite',
      },
    },
  },
  plugins: [animate],
}
