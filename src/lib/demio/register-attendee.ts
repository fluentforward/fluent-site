import {
  demioConfig,
  isDemioRegistrationConfigured,
} from '@/lib/demio/config'
import type { MarketingAttribution } from '@/lib/marketing-attribution'

export class DemioNotConfiguredError extends Error {
  constructor() {
    super('Demio registration is not configured')
    this.name = 'DemioNotConfiguredError'
  }
}

export type RegisterWebinarAttendeeInput = {
  firstName: string
  email: string
  marketingOptIn: boolean
  attribution: MarketingAttribution
}

type DemioRegisterResponse = {
  hash?: string
  join_link?: string
  messages?: string[]
  errors?: string[]
}

/** Demio predefined GDPR field (required on some accounts). String yes/no per live API behaviour. */
export function demioGdprFromMarketingOptIn(
  marketingOptIn: boolean,
): 'yes' | 'no' {
  return marketingOptIn ? 'yes' : 'no'
}

export function formatDemioRegistrationError(
  payload: unknown,
  status: number,
): string {
  if (typeof payload !== 'object' || payload === null) {
    return `Demio registration failed (${status})`
  }
  const record = payload as DemioRegisterResponse
  const parts: string[] = []
  if (Array.isArray(record.errors)) {
    for (const item of record.errors) {
      if (typeof item === 'string' && item.trim()) parts.push(item.trim())
    }
  }
  if (Array.isArray(record.messages)) {
    for (const item of record.messages) {
      if (typeof item === 'string' && item.trim()) parts.push(item.trim())
    }
  }
  return parts.length > 0
    ? parts.join(', ')
    : `Demio registration failed (${status})`
}

type DemioEventDate = {
  date_id?: number
  status?: string
  timestamp?: number
}

type DemioEventResponse = {
  dates?: DemioEventDate[]
  next_date_id?: number
}

function demioHeaders(): HeadersInit {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Api-Key': demioConfig.apiKey,
    'Api-Secret': demioConfig.apiSecret,
  }
}

function buildReferrer(attribution: MarketingAttribution): string | undefined {
  const parts: string[] = []
  for (const [key, value] of Object.entries(attribution)) {
    if (value) parts.push(`${key}=${value}`)
  }
  return parts.length > 0 ? parts.join('&') : undefined
}

async function resolveDateId(eventId: number): Promise<number | undefined> {
  if (demioConfig.dateId) {
    const parsed = Number.parseInt(demioConfig.dateId, 10)
    return Number.isFinite(parsed) ? parsed : undefined
  }

  const response = await fetch(
    `https://my.demio.com/api/v1/event/${eventId}?active=true`,
    {
      method: 'GET',
      headers: demioHeaders(),
      cache: 'no-store',
    },
  )

  if (!response.ok) return undefined

  const payload = (await response.json().catch(() => null)) as
    | DemioEventResponse
    | null

  if (!payload) return undefined
  if (typeof payload.next_date_id === 'number') return payload.next_date_id

  const upcoming = payload.dates?.find((date) => date.status === 'scheduled')
  return upcoming?.date_id
}

export async function registerWebinarAttendee(
  input: RegisterWebinarAttendeeInput,
): Promise<{ joinUrl?: string }> {
  if (!isDemioRegistrationConfigured()) {
    throw new DemioNotConfiguredError()
  }

  const eventId = Number.parseInt(demioConfig.eventId, 10)
  if (!Number.isFinite(eventId)) {
    throw new Error('Invalid Demio event ID configuration')
  }

  const dateId = await resolveDateId(eventId)

  const body: Record<string, unknown> = {
    id: eventId,
    name: input.firstName.trim(),
    email: input.email.trim().toLowerCase(),
    gdpr: demioGdprFromMarketingOptIn(input.marketingOptIn),
  }

  if (dateId) {
    body.date_id = dateId
  }

  const ref = buildReferrer(input.attribution)
  if (ref) {
    body.ref_url = ref
  }

  const response = await fetch('https://my.demio.com/api/v1/event/register', {
    method: 'PUT',
    headers: demioHeaders(),
    body: JSON.stringify(body),
    cache: 'no-store',
  })

  const payload = (await response.json().catch(() => null)) as
    | DemioRegisterResponse
    | null

  if (!response.ok) {
    throw new Error(formatDemioRegistrationError(payload, response.status))
  }

  return { joinUrl: payload?.join_link }
}
