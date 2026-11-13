import { NextResponse } from 'next/server'

import { handleCta } from '@/lib/planner/flow'
import { plannerErrorResponse } from '@/lib/planner/http'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST() {
  try {
    await handleCta()
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
