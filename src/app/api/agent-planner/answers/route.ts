import { flowResponse, plannerErrorResponse, readJson } from '@/lib/planner/http'
import { handleAnswer } from '@/lib/planner/flow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST(request: Request) {
  try {
    const result = await handleAnswer(await readJson(request))
    return flowResponse(result)
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
