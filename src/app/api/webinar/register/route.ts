import { NextResponse } from 'next/server'

import {
  DemioNotConfiguredError,
  registerWebinarAttendee,
} from '@/lib/demio/register-attendee'
import { isDemioRegistrationConfigured } from '@/lib/demio/config'
import type { MarketingAttribution } from '@/lib/marketing-attribution'
import { MARKETING_ATTRIBUTION_QUERY_PARAMS } from '@/lib/marketing-attribution'

type RegisterBody = {
  firstName?: unknown
  email?: unknown
  marketingOptIn?: unknown
  attribution?: unknown
}

function parseAttribution(value: unknown): MarketingAttribution {
  if (typeof value !== 'object' || value === null) return {}
  const record = value as Record<string, unknown>
  const attribution: MarketingAttribution = {}
  for (const key of MARKETING_ATTRIBUTION_QUERY_PARAMS) {
    const raw = record[key]
    if (typeof raw === 'string' && raw.trim()) {
      attribution[key] = raw.trim()
    }
  }
  return attribution
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function handleRegister(request: Request) {
  let body: RegisterBody
  try {
    body = (await request.json()) as RegisterBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const firstName =
    typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const marketingOptIn = body.marketingOptIn === true

  if (!firstName || firstName.length > 120) {
    return NextResponse.json({ error: 'Enter your first name' }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Enter a valid work email' },
      { status: 400 },
    )
  }

  if (!isDemioRegistrationConfigured()) {
    return NextResponse.json(
      {
        error: 'Demio registration is not configured on this deployment',
        configured: false,
      },
      { status: 503 },
    )
  }

  try {
    const result = await registerWebinarAttendee({
      firstName,
      email,
      marketingOptIn,
      attribution: parseAttribution(body.attribution),
    })
    return NextResponse.json({ ok: true, joinUrl: result.joinUrl ?? null })
  } catch (error) {
    if (error instanceof DemioNotConfiguredError) {
      return NextResponse.json(
        { error: error.message, configured: false },
        { status: 503 },
      )
    }
    const message =
      error instanceof Error ? error.message : 'Registration failed'
    return NextResponse.json({ error: message }, { status: 502 })
  }
}

export async function POST(request: Request) {
  return handleRegister(request)
}

export async function PUT(request: Request) {
  return handleRegister(request)
}
