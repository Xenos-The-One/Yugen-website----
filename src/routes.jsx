import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductWebsite from './pages/ProductWebsite'
import ProductInbox from './pages/ProductInbox'
import ProductLocalSeo from './pages/ProductLocalSeo'
import ProductMissedCall from './pages/ProductMissedCall'
import ProductMarketing from './pages/ProductMarketing'
import ProductReviews from './pages/ProductReviews'
import ProductAiSeo from './pages/ProductAiSeo'
import ProductContent from './pages/ProductContent'
import ProductAds from './pages/ProductAds'
import HowItWorks from './pages/HowItWorks'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Onboarding from './pages/Onboarding'
import NotFound from './pages/NotFound'
import { posts } from './content/blog'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/functional-website', element: <ProductWebsite /> },
      { path: 'products/all-in-one-inbox', element: <ProductInbox /> },
      { path: 'products/local-seo', element: <ProductLocalSeo /> },
      { path: 'products/missed-call-text-back', element: <ProductMissedCall /> },
      { path: 'products/one-click-marketing', element: <ProductMarketing /> },
      { path: 'products/review-system', element: <ProductReviews /> },
      { path: 'products/ai-seo', element: <ProductAiSeo /> },
      { path: 'products/content-creation', element: <ProductContent /> },
      { path: 'products/paid-ads', element: <ProductAds /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost />, getStaticPaths: () => posts.map((p) => `blog/${p.slug}`) },
      { path: 'contact', element: <Contact /> },
      { path: 'legal', element: <Legal /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
