import express from 'express';
import cors from 'cors';

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change'
const COOKIE_NAME = 'auth_token'
const USERS_FILE = path.join(__dirname, 'data', 'users.json')

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'))
  } catch {
    return []
  }
}
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
}

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:8080', credentials: true }))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

function setAuthCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false, // set true behind HTTPS
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
}

function clearAuthCookie(res) {
  res.cookie(COOKIE_NAME, '', { httpOnly: true, sameSite: 'lax', secure: false, expires: new Date(0) })
}

function authMiddleware(req, res, next) {
  const token = req.cookies[COOKIE_NAME]
  if (!token) return res.status(401).json({ message: 'Not authenticated' })
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.userId = payload.sub
    next()
  } catch {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' })
  const users = readUsers()
  if (users.some(u => u.email.toLowerCase() === String(email).toLowerCase())) {
    return res.status(409).json({ message: 'Email already registered' })
  }
  const user = {
    id: uuidv4(),
    email: String(email).toLowerCase(),
    name: name || '',
    passwordHash: bcrypt.hashSync(password, 10),
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  writeUsers(users)
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })
  setAuthCookie(res, token)
  res.json({ user: { id: user.id, email: user.email, name: user.name } })
})

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' })
  const users = readUsers()
  const user = users.find(u => u.email.toLowerCase() === String(email).toLowerCase())
  if (!user) return res.status(401).json({ message: 'Invalid credentials' })
  const ok = bcrypt.compareSync(password, user.passwordHash)
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' })
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })
  setAuthCookie(res, token)
  res.json({ user: { id: user.id, email: user.email, name: user.name } })
})

app.post('/api/auth/logout', (_req, res) => {
  clearAuthCookie(res)
  res.json({ ok: true })
})

app.get('/api/auth/me', (req, res) => {
  const token = req.cookies[COOKIE_NAME]
  if (!token) return res.status(401).json({ message: 'Not authenticated' })
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    const users = readUsers()
    const user = users.find(u => u.id === payload.sub)
    if (!user) return res.status(401).json({ message: 'Not authenticated' })
    res.json({ user: { id: user.id, email: user.email, name: user.name } })
  } catch {
    return res.status(401).json({ message: 'Not authenticated' })
  }
})

app.get('/api/market/quotes', (req, res) => {
  const tickers = (req.query.tickers || '').split(',');
  const mockData = tickers.map(ticker => ({
    symbol: ticker,
    price: (Math.random() * 1000).toFixed(2),       // random price between 0-1000
    change: (Math.random() * 10 - 5).toFixed(2),    // random change between -5 and +5
    timestamp: new Date().toISOString()
  }));
  res.json(mockData);
});

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))