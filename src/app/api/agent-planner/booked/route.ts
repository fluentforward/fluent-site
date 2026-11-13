import { NextResponse } from 'next/server'

import { handleBooked } from '@/lib/planner/flow'
import { plannerErrorResponse, readJson } from '@/lib/planner/http'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    await handleBooked(await readJson(request))
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
