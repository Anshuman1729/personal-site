import { NextRequest, NextResponse } from 'next/server'
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()

    const adminPassword = process.env.ADMIN_PASSWORD
    if (!adminPassword) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Constant-time comparison using TextEncoder buffers
    const enc = new TextEncoder()
    const a = enc.encode(password ?? '')
    const b = enc.encode(adminPassword)
    if (a.length !== b.length) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }
    let diff = 0
    for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]
    if (diff !== 0) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = await createSessionToken()
    const res = NextResponse.json({ ok: true })
    res.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_MAX_AGE,
      path: '/',
    })
    return res
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
