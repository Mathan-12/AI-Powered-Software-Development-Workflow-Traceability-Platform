import 'dotenv/config'
import createApp from './app.js'
import connectDatabase from './config/db.js'
import { env, validateEnv } from './config/env.js'

validateEnv()
const app = createApp()

try {
  await connectDatabase()
} catch (error) {
  console.error('MongoDB connection failed:', error.message)
}
app.listen(env.port, () => console.log(`API running at http://localhost:${env.port}`))