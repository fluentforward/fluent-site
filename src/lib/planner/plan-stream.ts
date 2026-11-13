import { waitUntil } from '@vercel/functions'

import { openPlanStream, planModelId } from '@/lib/planner/anthropic'
import { deliverPlan } from '@/lib/planner/deliver'
import { plannerCookieHeader } from '@/lib/planner/ids'
import { interpretPlanResult } from '@/lib/planner/guardrails'
import { PLAN_PROMPT_VERSION, PLAN_SYSTEM, promptHash } from '@/lib/planner/prompts'
import { assertRunRate, claimSession, logEvent, logRun, saveGeneratedPlan, saveRefusal } from '@/lib/planner/store'
import { SCRIPTED_REFUSAL } from '@/lib/planner/types'
import type { PlannerSessionRow } from '@/db/schema'

export function planStreamResponse(input: {
  session: PlannerSessionRow
  prompt: string
  cookie?: string
  claim?: { name: string; email: string }
}): Response {
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const send = (value: unknown) => {
        controller.enqueue(encoder.encode(`${JSON.stringify(value)}\n`))
      }
      try {
        await assertRunRate(input.session.id)
        const { result, started } = openPlanStream(input.prompt)
        const finalObject = await result.object
        const usage = await result.usage
        const interpreted = interpretPlanResult(finalObject, input.prompt)
        await logRun({
          sessionId: input.session.id,
          slot: 'plan',
          model: planModelId(),
          promptVersion: PLAN_PROMPT_VERSION,
          promptHash: promptHash(PLAN_SYSTEM),
          input: { prompt: input.prompt },
          output: finalObject,
          inputTokens: usage.inputTokens,
          outputTokens: usage.outputTokens,
          latencyMs: Date.now() - started,
          degraded: interpreted.kind !== 'plan',
        })
        if (interpreted.kind === 'refusal') {
          await saveRefusal(input.session, interpreted.message || SCRIPTED_REFUSAL)
          send({ type: 'refusal', message: interpreted.message || SCRIPTED_REFUSAL })
          return
        }
        const saved = await saveGeneratedPlan(input.session, interpreted.plan)
        const claimed = input.claim ? await claimSession(saved, input.claim.name, input.claim.email) : saved
        if (input.claim && !input.session.claimedAt) await logEvent(claimed.id, 'email_captured')
        await logEvent(claimed.id, 'plan_shown')
        if (input.claim && !claimed.emailedAt) {
          const work = deliverPlan(claimed.id).catch((error) => {
            console.error('[planner] deliver', claimed.id, error)
          })
          try {
            waitUntil(work)
          } catch {
            void work
          }
        }
        send({
          type: 'done',
          publicId: claimed.publicId,
          full: interpreted.plan,
          email: input.claim?.email ?? claimed.email ?? '',
          name: input.claim?.name ?? claimed.name ?? '',
          emailed: false,
        })
      } catch (error) {
        console.error('[planner] plan', input.session.id, error)
        const message =
          error instanceof Error && error.name === 'PlannerError'
            ? error.message
            : 'The plan did not come together. Please try again.'
        await logRun({
          sessionId: input.session.id,
          slot: 'plan',
          model: planModelId(),
          promptVersion: PLAN_PROMPT_VERSION,
          promptHash: promptHash(PLAN_SYSTEM),
          input: { prompt: input.prompt },
          output: { error: error instanceof Error ? error.message : 'plan failed' },
          degraded: true,
        }).catch(() => undefined)
        send({ type: 'error', message })
      } finally {
        controller.close()
      }
    },
  })

  const headers = new Headers({
    'Content-Type': 'application/x-ndjson; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  if (input.cookie) headers.append('Set-Cookie', plannerCookieHeader(input.cookie))
  return new Response(stream, { headers })
}

