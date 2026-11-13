import { NextResponse } from 'next/server'

import { isDatabaseConfigured } from '@/db'
import { LoopsWebhookVerificationError, verifyLoopsWebhook } from '@/lib/planner/loops'
import { markUnsubscribed } from '@/lib/planner/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type LoopsWebhookBody = {
  eventName?: string
  contactIdentity?: { email?: string }
}

export async function POST(request: Request) {
  const secret = process.env.LOOPS_WEBHOOK_SECRET?.trim()
  if (!secret) {
    return NextResponse.json({ error: 'Webhook is not configured' }, { status: 503 })
  }
  const rawBody = await request.text()
  try {
    verifyLoopsWebhook({
      rawBody,
      secret,
      webhookId: request.headers.get('webhook-id'),
      webhookTimestamp: request.headers.get('webhook-timestamp'),
      webhookSignature: request.headers.get('webhook-signature'),
    })
  } catch (error) {
    if (error instanceof LoopsWebhookVerificationError) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }
    throw error
  }

  let body: LoopsWebhookBody
  try {
    body = JSON.parse(rawBody) as LoopsWebhookBody
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  if (body.eventName === 'contact.unsubscribed' && isDatabaseConfigured()) {
    const email = body.contactIdentity?.email?.trim().toLowerCase()
    if (email) {
      try {
        await markUnsubscribed(email)
      } catch (error) {
        console.error('[planner] unsubscribe', error)
        return NextResponse.json({ error: 'unavailable' }, { status: 503 })
      }
    }
  }

  return new NextResponse(null, { status: 204 })
}