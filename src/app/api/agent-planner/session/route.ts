import { flowResponse, plannerErrorResponse } from '@/lib/planner/http'
import { handleGet } from '@/lib/planner/flow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    return flowResponse(await handleGet())
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
