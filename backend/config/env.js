export const env = {
  port: Number(process.env.PORT ?? 5000),
  mongoUri: process.env.MONGODB_URI ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
}
export function validateEnv() {
  if (!env.mongoUri) console.warn('MONGODB_URI is not configured.')
  if (!env.jwtSecret) console.warn('JWT_SECRET is not configured. Authentication is disabled.')
}