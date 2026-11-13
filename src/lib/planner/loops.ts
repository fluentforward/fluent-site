import { createHmac, timingSafeEqual } from 'node:crypto'

import { assertLoopsPayloadSafe } from '@/lib/planner/loops-payload'

export type LoopsClient = {
  updateContact(body: Record<string, unknown>): Promise<void>
  sendEvent(body: Record<string, unknown>, idempotencyKey: string): Promise<void>
  sendTransactional(body: Record<string, unknown>, idempotencyKey: string): Promise<void>
}

const LOOPS_API_BASE = 'https://app.loops.so/api'

export class LogLoopsClient implements LoopsClient {
  async updateContact(body: Record<string, unknown>): Promise<void> {
    assertLoopsPayloadSafe(body)
    console.log(`[loops] provider=log action=contacts.update body=${JSON.stringify(body)}`)
  }

  async sendEvent(body: Record<string, unknown>, idempotencyKey: string): Promise<void> {
    assertLoopsPayloadSafe(body)
    console.log(
      `[loops] provider=log action=events.send key=${idempotencyKey} body=${JSON.stringify(body)}`,
    )
  }

  async sendTransactional(body: Record<string, unknown>, idempotencyKey: string): Promise<void> {
    assertLoopsPayloadSafe(body)
    console.log(
      `[loops] provider=log action=transactional key=${idempotencyKey} body=${JSON.stringify(body)}`,
    )
  }
}

export class HttpLoopsClient implements LoopsClient {
  constructor(private readonly apiKey: string) {}

  async updateContact(body: Record<string, unknown>): Promise<void> {
    assertLoopsPayloadSafe(body)
    await this.request('PUT', '/v1/contacts/update', body)
  }

  async sendEvent(body: Record<string, unknown>, idempotencyKey: string): Promise<void> {
    assertLoopsPayloadSafe(body)
    await this.request('POST', '/v1/events/send', body, idempotencyKey)
  }

  async sendTransactional(body: Record<string, unknown>, idempotencyKey: string): Promise<void> {
    assertLoopsPayloadSafe(body)
    await this.request('POST', '/v1/transactional', body, idempotencyKey)
  }

  private async request(
    method: string,
    path: string,
    body: Record<string, unknown>,
    idempotencyKey?: string,
  ): Promise<void> {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    }
    if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey.slice(0, 100)
    const res = await fetch(`${LOOPS_API_BASE}${path}`, {
      method,
      headers,
      body: JSON.stringify(body),
    })
    if (res.status === 409) return
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(`loops ${method} ${path} failed: ${res.status} ${text.slice(0, 300)}`)
    }
  }
}

export function createLoopsClient(apiKey: string | undefined): LoopsClient {
  if (!apiKey?.trim()) return new LogLoopsClient()
  return new HttpLoopsClient(apiKey.trim())
}

export function loopsClientFromEnv(): LoopsClient {
  return createLoopsClient(process.env.LOOPS_API_KEY)
}

export class LoopsWebhookVerificationError extends Error {}

/** Standard Webhooks verification used by Loops. Accepts a raw secret or a whsec_ value. */
export function verifyLoopsWebhook(input: {
  rawBody: string
  secret: string
  webhookId: string | null
  webhookTimestamp: string | null
  webhookSignature: string | null
}): void {
  const { rawBody, secret, webhookId, webhookTimestamp, webhookSignature } = input
  if (!webhookId || !webhookTimestamp || !webhookSignature) {
    throw new LoopsWebhookVerificationError('missing webhook signature headers')
  }
  const signed = `${webhookId}.${webhookTimestamp}.${rawBody}`
  const expected = createHmac('sha256', webhookSecretBytes(secret)).update(signed).digest('base64')
  const signatures = webhookSignature
    .split(' ')
    .map((part) => part.split(',')[1])
    .filter((part): part is string => Boolean(part))
  const ok = signatures.some((sig) => {
    try {
      return timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
    } catch {
      return false
    }
  })
  if (!ok) throw new LoopsWebhookVerificationError('invalid webhook signature')
}

function webhookSecretBytes(secret: string): Buffer {
  const trimmed = secret.trim()
  if (trimmed.startsWith('whsec_')) {
    return Buffer.from(trimmed.slice('whsec_'.length), 'base64')
  }
  return Buffer.from(trimmed)
}
