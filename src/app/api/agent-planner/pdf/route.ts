import { NextResponse } from 'next/server'

import { get } from '@vercel/blob'

import { pdfSignatureValid } from '@/lib/planner/ids'
import { readPlannerToken } from '@/lib/planner/flow'
import { hashSecret } from '@/lib/planner/ids'
import { getDb, isDatabaseConfigured } from '@/db'
import { plannerSessions } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Not available' }, { status: 503 })
  }
  const url = new URL(request.url)
  const plan = url.searchParams.get('plan') || ''
  const exp = url.searchParams.get('exp') || ''
  const sig = url.searchParams.get('sig') || ''
  if (!/^[A-Za-z0-9_-]{16,40}$/.test(plan)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const rows = await getDb()
    .select({
      tokenHash: plannerSessions.tokenHash,
      pdfPathname: plannerSessions.pdfPathname,
      publicId: plannerSessions.publicId,
    })
    .from(plannerSessions)
    .where(eq(plannerSessions.publicId, plan))
    .limit(1)
  const row = rows[0]
  if (!row?.pdfPathname) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const token = readPlannerToken()
  const cookieOk = Boolean(token && hashSecret(token) === row.tokenHash)
  const linkOk = pdfSignatureValid(plan, exp, sig)
  if (!cookieOk && !linkOk) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  try {
    const file = await get(row.pdfPathname, { access: 'private' })
    if (!file || file.statusCode !== 200 || !file.stream) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return new Response(file.stream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="first-agent-plan.pdf"',
        'Cache-Control': 'private, no-store',
      },
    })
  } catch (error) {
    console.error('[planner] pdf', error)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
}
