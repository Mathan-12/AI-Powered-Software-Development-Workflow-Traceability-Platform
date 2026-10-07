import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import authRoutes from './routes/authRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js'

export default function createApp() {
  const app = express()
  app.disable('x-powered-by')
  app.use(cors({ origin: env.clientUrl, credentials: true }))
  app.use(express.json({ limit: '1mb' }))
  app.get('/api/health', (request, response) => response.json({ ok: true, service: 'ai-dev-workflow-platform-api' }))
  app.use('/api/auth', authRoutes)
  app.use(errorMiddleware)
  return app
}