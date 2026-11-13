import { NextResponse } from 'next/server'

import { handleReset } from '@/lib/planner/flow'
import { flowResponse, plannerErrorResponse } from '@/lib/planner/http'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST() {
  try {
    return flowResponse(await handleReset())
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
