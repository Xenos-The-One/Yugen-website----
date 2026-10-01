import type { RouteRecord } from 'vite-react-ssg'
import Layout from './Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import { services } from './content/services'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.tsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      {
        path: 'services/:slug',
        element: <ServiceDetail />,
        getStaticPaths: () => services.map((s) => `services/${s.slug}`),
      },
      { path: 'about', element: <About /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: 'legal', element: <Legal /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
