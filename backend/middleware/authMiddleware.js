import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { env } from '../config/env.js'

export default async function authMiddleware(request, response, next) {
  try {
    const header = request.headers.authorization
    if (!header?.startsWith('Bearer ')) return response.status(401).json({ message: 'Authentication required.' })
    if (!env.jwtSecret) return response.status(503).json({ message: 'Authentication is not configured.' })
    const payload = jwt.verify(header.slice(7), env.jwtSecret)
    const user = await User.findById(payload.sub).select('_id name email role')
    if (!user) return response.status(401).json({ message: 'User no longer exists.' })
    request.user = { id: user._id.toString(), name: user.name, email: user.email, role: user.role }
    next()
  } catch { response.status(401).json({ message: 'Invalid or expired token.' }) }
}