import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import '@fontsource-variable/sora'
import './index.css'

export const createRoot = ViteReactSSG({ routes })
