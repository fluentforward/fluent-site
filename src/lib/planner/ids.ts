import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto'

import { PLANNER_COOKIE, PLANNER_COOKIE_MAX_AGE } from '@/lib/planner/types'

export function newSecret(bytes = 32): string {
  return randomBytes(bytes).toString('base64url')
}

export function hashSecret(value: string): string {
  return createHash('sha256').update(value).digest('hex')
}

export function hashIp(ip: string): string {
  const salt = process.env.PLANNER_PDF_SIGNING_SECRET || process.env.CRON_SECRET || 'ff-planner'
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex')
}

export function clientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  const real = request.headers.get('x-real-ip')?.trim()
  return real || null
}

export function plannerCookieHeader(token: string): string {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${PLANNER_COOKIE}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${PLANNER_COOKIE_MAX_AGE}${secure}`
}

export function clearPlannerCookieHeader(): string {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${PLANNER_COOKIE}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0${secure}`
}

const PDF_TTL_SECONDS = 30 * 24 * 60 * 60

export function signingSecret(): string | null {
  const secret = process.env.PLANNER_PDF_SIGNING_SECRET?.trim()
  if (secret) return secret
  if (process.env.NODE_ENV === 'production') return null
  return 'dev-planner-pdf-secret'
}

export function signPdfLink(publicId: string, origin: string): string | null {
  const secret = signingSecret()
  if (!secret) return null
  const exp = Math.floor(Date.now() / 1000) + PDF_TTL_SECONDS
  const sig = createHmac('sha256', secret).update(`${publicId}.${exp}`).digest('base64url')
  const url = new URL('/api/agent-planner/pdf', origin)
  url.searchParams.set('plan', publicId)
  url.searchParams.set('exp', String(exp))
  url.searchParams.set('sig', sig)
  return url.toString()
}

export function pdfSignatureValid(publicId: string, exp: string, sig: string): boolean {
  const secret = signingSecret()
  if (!secret || !publicId || !exp || !sig) return false
  const expires = Number(exp)
  if (!Number.isFinite(expires) || expires < Math.floor(Date.now() / 1000)) return false
  const expected = createHmac('sha256', secret).update(`${publicId}.${exp}`).digest('base64url')
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
  } catch {
    return false
  }
}

export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}
