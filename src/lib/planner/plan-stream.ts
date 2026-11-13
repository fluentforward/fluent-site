import { openPlanStream, planModelId } from '@/lib/planner/anthropic'
import { plannerCookieHeader } from '@/lib/planner/ids'
import { interpretPlanResult } from '@/lib/planner/guardrails'
import { PLAN_PROMPT_VERSION, PLAN_SYSTEM, promptHash } from '@/lib/planner/prompts'
import { toPartialPlan } from '@/lib/planner/plan-schema'
import { assertRunRate, logEvent, logRun, saveGeneratedPlan, saveRefusal } from '@/lib/planner/store'
import { SCRIPTED_REFUSAL, type PlanStep } from '@/lib/planner/types'
import type { PlannerSessionRow } from '@/db/schema'

export function planStreamResponse(input: {
  session: PlannerSessionRow
  prompt: string
  cookie?: string
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
        for await (const partial of result.partialObjectStream) {
          if (partial.refusal) continue
          send({
            type: 'partial',
            title: partial.title || '',
            problem: partial.problem || '',
            steps: visibleSteps(partial.steps),
          })
        }
        const finalObject = await result.object
        const usage = await result.usage
        const interpreted = interpretPlanResult(finalObject)
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
        await logEvent(saved.id, 'partial_shown')
        send({
          type: 'done',
          publicId: saved.publicId,
          partial: toPartialPlan(interpreted.plan),
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

function visibleSteps(steps: unknown): PlanStep[] {
  if (!Array.isArray(steps)) return []
  return steps
    .map((step, index) => {
      const text =
        step && typeof step === 'object' && 'text' in step && typeof step.text === 'string'
          ? step.text.trim()
          : ''
      return { n: index + 1, text }
    })
    .filter((step) => step.text.length > 0)
    .slice(0, 2)
}
