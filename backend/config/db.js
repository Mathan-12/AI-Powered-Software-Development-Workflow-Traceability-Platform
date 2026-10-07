import mongoose from 'mongoose'
import { env } from './env.js'

export default async function connectDatabase() {
  if (!env.mongoUri) return false
  await mongoose.connect(env.mongoUri)
  console.log('MongoDB connected')
  return true
}