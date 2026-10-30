import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function contactApiDevPlugin(): Plugin {
  return {
    name: 'frame-contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        const chunks: Buffer[] = []
        req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
        req.on('end', () => {
          try {
            const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}') as {
              name?: string
              email?: string
              topic?: string
              message?: string
            }
            const name = String(body.name || '').trim()
            const email = String(body.email || '').trim()
            const topic = String(body.topic || '').trim()
            const message = String(body.message || '').trim()

            if (!name) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Please enter your name.' }))
              return
            }
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Please enter a valid email address.' }))
              return
            }
            if (!['bug', 'general', 'feature'].includes(topic)) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  error: 'Please choose Bug report, General, or Feature request.',
                }),
              )
              return
            }
            if (!message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Please enter a message.' }))
              return
            }

            console.info('[contact:dev]', { topic, name, email, message })
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true, dryRun: true }))
          } catch {
            next()
          }
        })
      })
    },
  }
}

// GitHub Pages project site: https://<user>.github.io/frame-website/
export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE ?? (command === 'build' ? '/frame-website/' : '/'),
  plugins: [react(), contactApiDevPlugin()],
}))
