import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { env } from '../config/env.js'

const signToken = (user) => jwt.sign({ sub: user._id.toString(), role: user.role }, env.jwtSecret, { expiresIn: '1h' })

export async function register(request, response, next) {
  try {
    const { name, email, password, role } = request.body
    if (!name || !email || !password) return response.status(400).json({ message: 'Name, email and password are required.' })
    if (password.length < 8) return response.status(400).json({ message: 'Password must be at least 8 characters.' })
    if (!env.jwtSecret) return response.status(503).json({ message: 'Authentication is not configured.' })
    const normalizedEmail = email.toLowerCase().trim()
    if (await User.findOne({ email: normalizedEmail })) return response.status(409).json({ message: 'Account already exists.' })
    const passwordHash = await bcrypt.hash(password, 12)
    const user = await User.create({ name: name.trim(), email: normalizedEmail, passwordHash, role })
    response.status(201).json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token: signToken(user) })
  } catch (error) { next(error) }
}

export async function login(request, response, next) {
  try {
    const { email, password } = request.body
    if (!email || !password) return response.status(400).json({ message: 'Email and password are required.' })
    if (!env.jwtSecret) return response.status(503).json({ message: 'Authentication is not configured.' })
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+passwordHash')
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) return response.status(401).json({ message: 'Invalid email or password.' })
    response.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token: signToken(user) })
  } catch (error) { next(error) }
}
export function me(request, response) { response.json({ user: request.user }) }