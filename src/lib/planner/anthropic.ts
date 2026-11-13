import { anthropic } from '@ai-sdk/anthropic'
import { generateObject, streamObject } from 'ai'

import { followUpSchema, planResultSchema } from '@/lib/planner/plan-schema'
import { FOLLOW_UP_SYSTEM, PLAN_SYSTEM } from '@/lib/planner/prompts'

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

export function openPlanStream(prompt: string) {
  const started = Date.now()
  const result = streamObject({
    model: anthropic(planModelId()),
    schema: planResultSchema,
    schemaName: 'FirstAgentPlan',
    system: PLAN_SYSTEM,
    prompt,
    maxOutputTokens: 1400,
  })
  return { result, started }
}
