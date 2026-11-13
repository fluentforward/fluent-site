import assert from 'node:assert/strict'
import { createHmac } from 'node:crypto'
import { test } from 'node:test'

import {
  assertLoopsPayloadSafe,
  planCompletedEvent,
  planTransactionalBody,
} from '../src/lib/planner/loops-payload.ts'
import { verifyLoopsWebhook, LoopsWebhookVerificationError } from '../src/lib/planner/loops.ts'

test('plan transactional email uses downloadUrl and no attachment', () => {
  const payload = planTransactionalBody({
    email: 'ada@firm.co.uk',
    transactionalId: 'txn_plan',
    firstName: 'Ada',
    planTitle: 'Monthly client report agent',
    scopingUrl: 'https://www.fluentforward.com/contact?plan=plan-1',
    downloadUrl: 'https://www.fluentforward.com/api/agent-planner/pdf?plan=plan-1&sig=abc',
  })
  assert.doesNotThrow(() => assertLoopsPayloadSafe(payload))
  assert.equal(payload.attachments, undefined)
  assert.equal(payload.dataVariables.downloadUrl.includes('/api/agent-planner/pdf'), true)
  assert.equal('pdfBase64' in payload, false)
})

test('plan_completed carries the title and the link, not the answers', () => {
  const payload = planCompletedEvent({
    email: 'ada@firm.co.uk',
    userId: 'session-1',
    planId: 'plan-1',
    planTitle: 'Monthly client report agent',
    scopingUrl: 'https://www.fluentforward.com/contact?plan=plan-1',
    attribution: { variant: 'agent_planner', utm_source: 'linkedin' },
  })
  assert.doesNotThrow(() => assertLoopsPayloadSafe(payload))
  assert.equal(payload.eventName, 'plan_completed')
  const properties = payload.eventProperties
  assert.equal(properties.planTitle, 'Monthly client report agent')
  assert.equal(properties.utm_source, 'linkedin')
  assert.equal('problem' in properties, false)
  assert.equal('answers' in properties, false)
})

test('a payload that includes the plan body is refused', () => {
  assert.throws(
    () => assertLoopsPayloadSafe({ eventProperties: { problem: 'the raw text' } }),
    /must not include problem/,
  )
  assert.throws(
    () => assertLoopsPayloadSafe({ answers: [{ question: 'How often?' }] }),
    /must not include answers/,
  )
})

test('loops webhook signatures match the signed body', () => {
  const secret = 'test-secret'
  const rawBody = '{"eventName":"contact.unsubscribed"}'
  const webhookId = 'msg_1'
  const webhookTimestamp = '1700000000'
  const signature = createHmac('sha256', secret)
    .update(`${webhookId}.${webhookTimestamp}.${rawBody}`)
    .digest('base64')

  assert.doesNotThrow(() =>
    verifyLoopsWebhook({
      rawBody,
      secret,
      webhookId,
      webhookTimestamp,
      webhookSignature: `v1,${signature}`,
    }),
  )

  assert.throws(
    () =>
      verifyLoopsWebhook({
        rawBody,
        secret,
        webhookId,
        webhookTimestamp,
        webhookSignature: 'v1,not-the-signature',
      }),
    LoopsWebhookVerificationError,
  )
})
