import Layout from './Layout'

// Each page is its own chunk so visitors only download the code for the page they land on.
// The import() must sit inside each lazy function: vite-react-ssg reads it to preload the chunk.
const page = (m) => ({ Component: m.default })

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.jsx',
    children: [
      { index: true, lazy: () => import('./pages/Home').then(page) },
      { path: 'about', lazy: () => import('./pages/About').then(page) },
      { path: 'products', lazy: () => import('./pages/Products').then(page) },
      { path: 'products/functional-website', lazy: () => import('./pages/ProductWebsite').then(page) },
      { path: 'products/all-in-one-inbox', lazy: () => import('./pages/ProductInbox').then(page) },
      { path: 'products/local-seo', lazy: () => import('./pages/ProductLocalSeo').then(page) },
      { path: 'products/missed-call-text-back', lazy: () => import('./pages/ProductMissedCall').then(page) },
      { path: 'products/one-click-marketing', lazy: () => import('./pages/ProductMarketing').then(page) },
      { path: 'products/review-system', lazy: () => import('./pages/ProductReviews').then(page) },
      { path: 'products/ai-seo', lazy: () => import('./pages/ProductAiSeo').then(page) },
      { path: 'products/content-creation', lazy: () => import('./pages/ProductContent').then(page) },
      { path: 'products/paid-ads', lazy: () => import('./pages/ProductAds').then(page) },
      { path: 'how-it-works', lazy: () => import('./pages/HowItWorks').then(page) },
      { path: 'testimonials', lazy: () => import('./pages/Testimonials').then(page) },
      { path: 'pricing', lazy: () => import('./pages/Pricing').then(page) },
      { path: 'blog', lazy: () => import('./pages/Blog').then(page) },
      {
        path: 'blog/:slug',
        lazy: () => import('./pages/BlogPost').then(page),
        getStaticPaths: async () => (await import('./content/blog')).posts.map((p) => `blog/${p.slug}`),
      },
      { path: 'industries', lazy: () => import('./pages/LandingIndex').then((m) => ({ Component: m.IndustriesIndex })) },
      {
        path: 'industries/:slug',
        lazy: () => import('./pages/Industry').then(page),
        getStaticPaths: async () => (await import('./content/industries')).industries.map((i) => `industries/${i.slug}`),
      },
      { path: 'areas', lazy: () => import('./pages/LandingIndex').then((m) => ({ Component: m.AreasIndex })) },
      {
        path: 'areas/:slug',
        lazy: () => import('./pages/Area').then(page),
        getStaticPaths: async () => (await import('./content/areas')).areas.map((a) => `areas/${a.slug}`),
      },
      { path: 'contact', lazy: () => import('./pages/Contact').then(page) },
      { path: 'free-seo-audit', lazy: () => import('./pages/FreeAudit').then(page) },
      { path: 'legal', lazy: () => import('./pages/Legal').then(page) },
      { path: 'onboarding', lazy: () => import('./pages/Onboarding').then(page) },
      { path: '404', lazy: () => import('./pages/NotFound').then(page) },
      { path: '*', lazy: () => import('./pages/NotFound').then(page) },
    ],
  },
]
