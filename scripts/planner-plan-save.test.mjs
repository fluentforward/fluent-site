import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { before, test } from 'node:test'

import { PGlite } from '@electric-sql/pglite'
import { drizzle } from 'drizzle-orm/pglite'

import { setDatabaseForTests } from '../src/db/index.ts'
import * as schema from '../src/db/schema.ts'
import { PLAN_LEASE_MS } from '../src/lib/planner/plan-lease.ts'
import {
  acquirePlanLease,
  getSessionById,
  hasRecordedPlanEmail,
  insertSession,
  markDeliveryField,
  mergeSessionEntry,
  releasePlanLease,
  saveGeneratedPlanWithHook,
  saveRefusalWithLease,
  setPending,
  updateProblem,
} from '../src/lib/planner/store.ts'

const plan = { title: 'Client Onboarding Chaser Agent', levers: [] }
const hook = {
  thanks: 'Thank you for walking through that.',
  agent: 'An agent will chase ID and engagement letters for ops to review.',
  benefit: 'Your coordinators get the chasing time back.',
}
let n = 0

before(async () => {
  const client = new PGlite()
  for (const file of ['drizzle/0000_planner.sql', 'drizzle/0001_planner_meta_lead.sql']) {
    await client.exec(readFileSync(file, 'utf8').replaceAll('--> statement-breakpoint', ''))
  }
  setDatabaseForTests(drizzle(client, { schema }))
})

async function fresh(problem = 'We chase new clients for ID and engagement letters by email.') {
  n += 1
  return insertSession({
    tokenHash: `token-${n}`,
    publicId: `public-id-${n}-xxxxxxxx`,
    problem,
    attribution: { variant: 'agent_planner' },
    ipHash: null,
  })
}

test('the lock marks the session as writing in the same update, and a second taker is refused', async () => {
  const asked = await setPending(await fresh(), 'Which tools does ops use?')
  const leased = await acquirePlanLease(asked)
  assert.ok(leased)
  assert.equal(leased.pendingQuestion, null)
  assert.equal(leased.partialPlan.awaitingDetails, true)
  assert.equal(typeof leased.partialPlan.planWritingAt, 'string')
  assert.equal(await acquirePlanLease(asked), null)
  const later = await acquirePlanLease(asked, Date.now() + PLAN_LEASE_MS + 1000)
  assert.ok(later, 'an expired lock can be taken over')
})

test('the job that holds the lock saves its plan', async () => {
  const leased = await acquirePlanLease(await fresh())
  const saved = await saveGeneratedPlanWithHook(leased, leased.partialPlan.planWritingAt, plan, hook)
  assert.ok(saved)
  assert.equal(saved.phase, 'partial')
  assert.deepEqual(saved.fullPlan, plan)
  assert.equal(saved.partialPlan.agent, hook.agent)
  assert.equal(saved.partialPlan.planWritingAt, undefined)
})

test('a job whose lock was taken over cannot save', async () => {
  const session = await fresh()
  const first = await acquirePlanLease(session)
  const second = await acquirePlanLease(session, Date.now() + PLAN_LEASE_MS + 1000)
  assert.equal(await saveGeneratedPlanWithHook(first, first.partialPlan.planWritingAt, plan, hook), null)
  assert.equal((await getSessionById(session.id)).fullPlan, null)
  assert.ok(await saveGeneratedPlanWithHook(second, second.partialPlan.planWritingAt, plan, hook))
})

test('an old job cannot save its plan into a session restarted with a new problem', async () => {
  const session = await fresh()
  const leased = await acquirePlanLease(session)
  await updateProblem(leased, 'A different process: we rekey supplier invoices into Xero every week.', {
    variant: 'agent_planner',
  })
  assert.equal(await saveGeneratedPlanWithHook(leased, leased.partialPlan.planWritingAt, plan, hook), null)
  assert.equal(await saveRefusalWithLease(leased, leased.partialPlan.planWritingAt, 'No.'), null)
  const current = await getSessionById(session.id)
  assert.equal(current.fullPlan, null)
  assert.equal(current.refusal, null)
  assert.match(current.problem, /supplier invoices/)
})

test('nothing is saved over a plan that already exists', async () => {
  const leased = await acquirePlanLease(await fresh())
  const leaseAt = leased.partialPlan.planWritingAt
  assert.ok(await saveGeneratedPlanWithHook(leased, leaseAt, plan, hook))
  assert.equal(await saveGeneratedPlanWithHook(leased, leaseAt, { ...plan, title: 'Second' }, hook), null)
  assert.equal(await acquirePlanLease(leased, Date.now() + 10 * PLAN_LEASE_MS), null)
  assert.equal((await getSessionById(leased.id)).fullPlan.title, plan.title)
})

test('a failed job releases its lock and counts the failure, and the next lock keeps the count', async () => {
  const leased = await acquirePlanLease(await fresh())
  await releasePlanLease(leased.id, 'not-this-job')
  assert.equal(typeof (await getSessionById(leased.id)).partialPlan.planWritingAt, 'string')
  await releasePlanLease(leased.id, leased.partialPlan.planWritingAt)
  const released = await getSessionById(leased.id)
  assert.equal(released.partialPlan.planWritingAt, undefined)
  assert.equal(released.partialPlan.planFailures, 1)
  const again = await acquirePlanLease(released)
  assert.equal(again.partialPlan.planFailures, 1)
})

test('an email counts as sent only once a plan email to that address is recorded', async () => {
  const address = `lead-${Date.now()}@example.com`
  assert.equal(await hasRecordedPlanEmail(address), false)
  assert.equal(await hasRecordedPlanEmail(null), false)
  const known = await mergeSessionEntry(await fresh(), { leadEmail: address })
  assert.equal(await hasRecordedPlanEmail(address), false, 'knowing the address is not a send')
  await markDeliveryField(known.id, { loopsEventSentAt: new Date() })
  assert.equal(await hasRecordedPlanEmail(address), false, 'a Loops event alone is not an email')
  await markDeliveryField(known.id, { loopsPlanSentAt: new Date() })
  assert.equal(await hasRecordedPlanEmail(address), true)
  assert.equal(await hasRecordedPlanEmail(`  ${address.toUpperCase()} `), true, 'matching ignores case and spaces')
  assert.equal(await hasRecordedPlanEmail('someone-else@example.com'), false)
})
