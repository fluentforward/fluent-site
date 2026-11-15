import type { PlannerAttribution } from '@/lib/planner/types'

const FORBIDDEN_KEYS = new Set([
  'problem',
  'answers',
  'followUps',
  'follow_ups',
  'fullPlan',
  'partialPlan',
  'steps',
  'timeSaved',
  'tenDayIncludes',
  'responses',
  'human',
  'tools',
])

/** Refuses a Loops body whose keys carry the plan or the visitor's answers. */
export function assertLoopsPayloadSafe(payload: unknown): void {
  walk(payload)
}

function walk(value: unknown): void {
  if (!value || typeof value !== 'object') return
  if (Array.isArray(value)) {
    for (const item of value) walk(item)
    return
  }
  for (const [key, child] of Object.entries(value)) {
    if (FORBIDDEN_KEYS.has(key)) {
      throw new Error(`loops payload must not include ${key}`)
    }
    walk(child)
  }
}

export function contactUpdateBody(input: {
  email: string
  userId: string
  firstName: string
  scopingCallBooked: boolean
  teamSize?: string | null
  metaLeadId?: string | null
  source?: string
  planOnly: boolean
}): Record<string, unknown> {
  const body: Record<string, unknown> = {
    email: input.email,
    userId: input.userId,
    firstName: input.firstName,
    source: input.source || 'agent_planner',
    scopingCallBooked: input.scopingCallBooked,
    planOnly: input.planOnly,
  }
  if (input.teamSize) body.teamSize = input.teamSize
  if (input.metaLeadId) body.metaLeadId = input.metaLeadId
  return body
}

export function planCompletedEvent(input: {
  email: string
  userId: string
  planId: string
  planTitle: string
  scopingUrl: string
  attribution: PlannerAttribution
  teamSize?: string | null
  metaLeadId?: string | null
  planOnly?: boolean
}): Record<string, unknown> {
  const eventProperties: Record<string, unknown> = {
    sessionId: input.userId,
    planId: input.planId,
    planTitle: input.planTitle,
    scopingUrl: input.scopingUrl,
    variant: input.attribution.variant || 'agent_planner',
    ...utmProperties(input.attribution),
  }
  if (input.teamSize) eventProperties.teamSize = input.teamSize
  if (input.metaLeadId) eventProperties.metaLeadId = input.metaLeadId
  if (typeof input.planOnly === 'boolean') eventProperties.planOnly = input.planOnly
  return {
    email: input.email,
    userId: input.userId,
    eventName: 'plan_completed',
    eventProperties,
  }
}

export function scopingBookedEvent(input: {
  email: string
  userId: string
  planId: string
}): Record<string, unknown> {
  return {
    email: input.email,
    userId: input.userId,
    eventName: 'plan_scoping_booked',
    eventProperties: {
      sessionId: input.userId,
      planId: input.planId,
    },
  }
}

export function planTransactionalBody(input: {
  email: string
  transactionalId: string
  firstName: string
  planTitle: string
  scopingUrl: string
  downloadUrl: string
}): Record<string, unknown> {
  return {
    email: input.email,
    transactionalId: input.transactionalId,
    addToAudience: true,
    dataVariables: {
      firstName: input.firstName,
      planTitle: input.planTitle,
      scopingUrl: input.scopingUrl,
      downloadUrl: input.downloadUrl,
    },
  }
}

export function planOnlyTransactionalBody(input: {
  email: string
  transactionalId: string
  firstName: string
  planTitle: string
  downloadUrl: string
}): Record<string, unknown> {
  return {
    email: input.email,
    transactionalId: input.transactionalId,
    addToAudience: true,
    dataVariables: {
      firstName: input.firstName,
      planTitle: input.planTitle,
      downloadUrl: input.downloadUrl,
    },
  }
}

export function staffTransactionalBody(input: {
  transactionalId: string
  notifyEmail: string
  leadName: string
  leadEmail: string
  planTitle: string
  adminUrl: string
}): Record<string, unknown> {
  return {
    email: input.notifyEmail,
    transactionalId: input.transactionalId,
    addToAudience: false,
    dataVariables: {
      leadName: input.leadName,
      leadEmail: input.leadEmail,
      planTitle: input.planTitle,
      adminUrl: input.adminUrl,
    },
  }
}

function utmProperties(attribution: PlannerAttribution): Record<string, string> {
  const out: Record<string, string> = {}
  const fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'] as const
  for (const key of fields) {
    const value = attribution[key]
    if (value) out[key] = value
  }
  return out
}
