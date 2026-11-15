import { flowResponse, plannerErrorResponse, readJson } from '@/lib/planner/http'
import { handleEntry } from '@/lib/planner/flow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    return flowResponse(await handleEntry(await readJson(request)))
  } catch (error) {
    return plannerErrorResponse(error)
  }
}