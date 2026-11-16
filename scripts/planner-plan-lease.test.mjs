import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  PLAN_LEASE_MS,
  canResumeSession,
  canReuseSessionForStart,
  nextPlanPollAction,
  planFailures,
  planLeaseLive,
} from '../src/lib/planner/plan-lease.ts'

const now = Date.parse('2026-11-16T08:12:05.000Z')

test('a fresh lease is live and an old one has expired', () => {
  assert.equal(planLeaseLive({ awaitingDetails: true, planWritingAt: '2026-11-16T08:12:00.000Z' }, now), true)
  const old = new Date(now - PLAN_LEASE_MS - 1).toISOString()
  assert.equal(planLeaseLive({ awaitingDetails: true, planWritingAt: old }, now), false)
})

test('no lease, a bad timestamp or a missing plan record is not live', () => {
  assert.equal(planLeaseLive(null, now), false)
  assert.equal(planLeaseLive({ awaitingDetails: true }, now), false)
  assert.equal(planLeaseLive({ planWritingAt: 'not a date' }, now), false)
  assert.equal(planLeaseLive({ planWritingAt: '2027-01-01T00:00:00.000Z' }, now), false)
})

test('failures are counted only from a positive number', () => {
  assert.equal(planFailures({ planFailures: 2 }), 2)
  assert.equal(planFailures({ planFailures: -1 }), 0)
  assert.equal(planFailures({}), 0)
})

test('a tab only resumes the session it started', () => {
  assert.equal(canResumeSession('IW9b22z72GvFpJuwWw33eg', 'IW9b22z72GvFpJuwWw33eg'), true)
  // The 16 Nov test: the cookie still pointed at a plan from 15 Nov and the tab had no ref.
  assert.equal(canResumeSession('cGP0Gfb-ncmdJHs19kP1MQ', ''), false)
  assert.equal(canResumeSession('cGP0Gfb-ncmdJHs19kP1MQ', null), false)
  assert.equal(canResumeSession('cGP0Gfb-ncmdJHs19kP1MQ', 'IW9b22z72GvFpJuwWw33eg'), false)
  assert.equal(canResumeSession(null, 'IW9b22z72GvFpJuwWw33eg'), false)
})

test('the page keeps waiting while a writer is live, restarts a stopped job, and stops on a result', () => {
  assert.deepEqual(nextPlanPollAction({ state: 'writing', active: true }), { kind: 'wait' })
  assert.deepEqual(nextPlanPollAction({ state: 'writing' }), { kind: 'wait' })
  assert.deepEqual(nextPlanPollAction({ state: 'writing', active: false }), { kind: 'kick' })
  assert.deepEqual(nextPlanPollAction({ state: 'details' }), { kind: 'done' })
  assert.deepEqual(nextPlanPollAction({ state: 'error', message: 'x' }), { kind: 'done' })
  assert.deepEqual(nextPlanPollAction(null), { kind: 'done' })
})

test('starting a plan reuses the cookie session only for the tab that started it', () => {
  const open = { publicId: 'IW9b22z72GvFpJuwWw33eg', claimedAt: null, freeTextPurgedAt: null }
  assert.equal(canReuseSessionForStart(open, 'IW9b22z72GvFpJuwWw33eg'), true)
  // Another tab, or a new visit, starts a new session so an older lead id, company or email cannot carry over.
  assert.equal(canReuseSessionForStart(open, 'e3cb34b3xxxxxxxxxxxxxx'), false)
  assert.equal(canReuseSessionForStart(open, ''), false)
  assert.equal(canReuseSessionForStart(open, null), false)
  assert.equal(canReuseSessionForStart({ ...open, claimedAt: new Date() }, open.publicId), false)
  assert.equal(canReuseSessionForStart({ ...open, freeTextPurgedAt: new Date() }, open.publicId), false)
  assert.equal(canReuseSessionForStart(null, open.publicId), false)
})

test('only a tab with its own session ref waits for the session check on load', async () => {
  const { needsSessionCheck, SESSION_CHECK_TIMEOUT_MS } = await import('../src/lib/planner/session-ref.ts')
  assert.equal(needsSessionCheck(''), false, 'a new tab shows the form straight away')
  assert.equal(needsSessionCheck(null), false)
  assert.equal(needsSessionCheck('bad ref!'), false)
  assert.equal(needsSessionCheck('Dd6GOnAbCdEf1234'), true)
  assert.ok(SESSION_CHECK_TIMEOUT_MS > 0 && SESSION_CHECK_TIMEOUT_MS <= 10_000)
})

test('a late session check only replaces the start form with a real state for this tab', async () => {
  const { shouldShowLateSession } = await import('../src/lib/planner/session-ref.ts')
  for (const kind of ['writing', 'question', 'details', 'sent', 'refusal']) assert.equal(shouldShowLateSession(kind), true, kind)
  for (const kind of ['compose', 'loading', 'error', 'rate']) assert.equal(shouldShowLateSession(kind), false, kind)
})
