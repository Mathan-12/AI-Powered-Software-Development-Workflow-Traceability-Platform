const toPort = (value) => {
  const port = Number(value)
  return Number.isInteger(port) && port > 0 && port < 65536 ? port : 5000
}

export const env = {
  port: toPort(process.env.PORT),
  mongoUri: process.env.MONGODB_URI ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
}

export function validateEnv() {
  if (!env.mongoUri) console.warn('MONGODB_URI is not configured; database features will be unavailable.')
  if (!env.jwtSecret || env.jwtSecret === 'replace-me') console.warn('Set a strong JWT_SECRET before using authentication.')
}
