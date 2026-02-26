export const SESSION_COOKIE = 'admin_session'
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days in seconds

async function getKey(): Promise<CryptoKey> {
  const secret = process.env.ADMIN_SESSION_SECRET ?? 'dev-secret-change-in-production'
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

export async function createSessionToken(): Promise<string> {
  const key = await getKey()
  const ts = Date.now().toString()
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts))
  const sigB64 = btoa(Array.from(new Uint8Array(sig), b => String.fromCharCode(b)).join(''))
  return `${btoa(ts)}.${sigB64}`
}

export async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const [tsB64, sigB64] = token.split('.')
    if (!tsB64 || !sigB64) return false

    const ts = atob(tsB64)
    const timestamp = parseInt(ts, 10)
    if (isNaN(timestamp)) return false

    if (Date.now() - timestamp > SESSION_MAX_AGE * 1000) return false

    const key = await getKey()
    const sigBytes = Uint8Array.from(atob(sigB64), c => c.charCodeAt(0))
    return crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(ts))
  } catch {
    return false
  }
}
