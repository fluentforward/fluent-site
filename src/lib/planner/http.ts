import { NextResponse } from 'next/server'

import { clearPlannerCookieHeader, plannerCookieHeader } from '@/lib/planner/ids'
import { PlannerError } from '@/lib/planner/store'
import type { FlowResult } from '@/lib/planner/flow'

export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json()
  } catch {
    return {}
  }
}

export function flowResponse(result: FlowResult): Response {
  if (result.kind === 'stream') {
    throw new Error('stream results are returned by planStreamResponse')
  }
  const response = NextResponse.json(result.body, { status: result.status })
  if (result.cookie) response.headers.append('Set-Cookie', plannerCookieHeader(result.cookie))
  if (result.clearCookie) response.headers.append('Set-Cookie', clearPlannerCookieHeader())
  return response
}

export function plannerErrorResponse(error: unknown): Response {
  if (error instanceof PlannerError) {
    const state = error.code === 'rate_limited' ? 'rate_limited' : 'error'
    return NextResponse.json({ state, message: error.message }, { status: error.status })
  }
  console.error('[planner]', error)
  return NextResponse.json(
    { state: 'error', message: 'Something went wrong. Please try again.' },
    { status: 500 },
  )
}
