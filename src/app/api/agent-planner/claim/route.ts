import { waitUntil } from '@vercel/functions'

import { deliverPlan } from '@/lib/planner/deliver'
import { handleClaim } from '@/lib/planner/flow'
import { flowResponse, plannerErrorResponse, readJson } from '@/lib/planner/http'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST(request: Request) {
  try {
    const result = await handleClaim(await readJson(request))
    if (result.kind === 'json' && result.deliverId) {
      const deliverId = result.deliverId
      const work = deliverPlan(deliverId).catch((error) => {
        console.error('[planner] deliver', deliverId, error)
      })
      try {
        waitUntil(work)
      } catch {
        void work
      }
    }
    return flowResponse(result)
  } catch (error) {
    return plannerErrorResponse(error)
  }
}
