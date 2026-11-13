import { NextResponse } from 'next/server'

import { isDatabaseConfigured } from '@/db'
import { retryUnsentPlans } from '@/lib/planner/deliver'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

function authorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim()
  if (!secret) return process.env.NODE_ENV !== 'production'
  return request.headers.get('authorization') === `Bearer ${secret}`
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ ok: false, reason: 'database' }, { status: 503 })
  }
  try {
    const retried = await retryUnsentPlans()
    return NextResponse.json({ ok: true, retried })
  } catch (error) {
    console.error('[planner] cron', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
