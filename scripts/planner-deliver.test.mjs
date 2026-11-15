import assert from 'node:assert/strict'
import { test } from 'node:test'

import { shouldSendPlanCompletedEvent } from '../src/lib/planner/entry-params.ts'

test('plan-only delivery skips plan_completed nurture event', () => {
  assert.equal(shouldSendPlanCompletedEvent(true), false)
  assert.equal(shouldSendPlanCompletedEvent(false), true)
})