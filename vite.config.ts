import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'

// Dev only: serves the Vercel functions in api/ so forms and chat work on localhost.
// Secrets come from .env.local (git-ignored); production reads them from Vercel's env settings.
function devApi(): Plugin {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      Object.assign(process.env, loadEnv('development', process.cwd(), ''))
      server.middlewares.use(async (req: any, res: any, next) => {
        const path = (req.url || '').split('?')[0]
        const name = path.match(/^\/api\/([\w-]+)$/)?.[1]
        const file = name && `api/${name}.js`
        if (!file || !existsSync(file)) return next()
        let raw = ''
        for await (const chunk of req) raw += chunk
        const type = String(req.headers['content-type'] || '')
        req.body = !raw ? {} : type.includes('json') ? JSON.parse(raw) : Object.fromEntries(new URLSearchParams(raw))
        res.status = (code: number) => ((res.statusCode = code), res)
        res.json = (data: unknown) => (res.setHeader('Content-Type', 'application/json'), res.end(JSON.stringify(data)))
        res.send = (data: string) => res.end(data)
        try {
          const mod = await server.ssrLoadModule(`/${file}`)
          await mod.default(req, res)
        } catch (err) {
          console.error(err)
          res.statusCode = 500
          res.end('API error')
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), devApi()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { port: 5179, strictPort: true },
  ssgOptions: {
    entry: 'src/main.tsx',
    dirStyle: 'flat',
    formatting: 'none',
  },
})
