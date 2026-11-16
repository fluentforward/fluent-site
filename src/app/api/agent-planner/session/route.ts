import { flowResponse, plannerErrorResponse } from '@/lib/planner/http'
import { handleGet } from '@/lib/planner/flow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const ref = new URL(request.url).searchParams.get('ref')
    const response = flowResponse(await handleGet(ref))
    response.headers.set('Cache-Control', 'no-store')
    return response
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
