import { flowResponse, plannerErrorResponse, readJson } from '@/lib/planner/http'
import { handleStart } from '@/lib/planner/flow'
import { planStreamResponse } from '@/lib/planner/plan-stream'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST(request: Request) {
  try {
    const result = await handleStart(request, await readJson(request))
    if (result.kind === 'stream') return planStreamResponse(result)
    return flowResponse(result)
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
