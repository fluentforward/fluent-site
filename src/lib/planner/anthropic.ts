import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'

import { followUpSchema, hookSchema, planResultSchema } from '@/lib/planner/plan-schema'
import { FOLLOW_UP_SYSTEM, HOOK_SYSTEM, PLAN_SYSTEM } from '@/lib/planner/prompts'

export function planModelId(): string {
  return process.env.ANTHROPIC_PLAN_MODEL?.trim() || 'claude-sonnet-4-6'
}

export function isAnthropicConfigured(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY?.trim())
}

export async function askFollowUp(prompt: string) {
  const started = Date.now()
  const result = await generateObject({
    model: anthropic(planModelId()),
    schema: followUpSchema,
    schemaName: 'FollowUp',
    system: FOLLOW_UP_SYSTEM,
    prompt,
    maxOutputTokens: 400,
  })
  return {
    object: result.object,
    usage: result.usage,
    latencyMs: Date.now() - started,
    model: planModelId(),
  }
}

export async function askHook(prompt: string) {
  const started = Date.now()
  const result = await generateObject({
    model: anthropic(planModelId()),
    schema: hookSchema,
    schemaName: 'PlanHook',
    system: HOOK_SYSTEM,
    prompt,
    maxOutputTokens: 600,
  })
  return {
    object: result.object,
    usage: result.usage,
    latencyMs: Date.now() - started,
    model: planModelId(),
  }
}

/** One model call for the plan. Retries live in flow.ts, so each attempt has its own deadline. */
export async function askPlan(prompt: string, options: { timeoutMs?: number } = {}) {
  const started = Date.now()
  const result = await generateObject({
    model: anthropic(planModelId()),
    schema: planResultSchema,
    schemaName: 'FirstAgentPlan',
    system: PLAN_SYSTEM,
    prompt,
    maxOutputTokens: 3200,
    temperature: 0.2,
    abortSignal: AbortSignal.timeout(options.timeoutMs ?? 75_000),
    maxRetries: 0,
  })
  return {
    object: result.object,
    usage: result.usage,
    latencyMs: Date.now() - started,
    model: planModelId(),
  }
}
