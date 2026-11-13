import { handlePrepare } from '@/lib/planner/flow'
import { flowResponse, plannerErrorResponse } from '@/lib/planner/http'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST() {
  try {
    return flowResponse(await handlePrepare())
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
