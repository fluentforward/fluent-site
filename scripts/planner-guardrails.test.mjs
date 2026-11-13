import assert from 'node:assert/strict'
import { test } from 'node:test'

import { findGuardrailViolation, interpretPlanResult, planViolatesGuardrails } from '../src/lib/planner/guardrails.ts'
import { SCRIPTED_REFUSAL } from '../src/lib/planner/types.ts'

const plan = {
  title: 'Monthly client report agent',
  problem: 'Two people spend three days building client reports.',
  steps: [
    { n: 1, text: 'Pull last month’s figures from the finance system.' },
    { n: 2, text: 'Draft each report in the template.' },
    { n: 3, text: 'Send the draft to a person to approve.' },
  ],
  tools: ['finance system', 'CRM'],
  human: ['Approving every report before it goes out.'],
  timeSaved: 'Estimate only, based on your answers: most of the three days of assembly.',
  tenDayIncludes: 'Connections to the systems, the template, and a human approval step.',
}

test('a normal plan passes the guardrails', () => {
  assert.equal(planViolatesGuardrails(plan), null)
  assert.equal(findGuardrailViolation(plan.timeSaved), null)
})

test('currency, a price and a guarantee are rejected', () => {
  assert.equal(findGuardrailViolation('This would cost £2,000.'), 'currency')
  assert.equal(findGuardrailViolation('We charge a day rate for the build.'), 'price')
  assert.equal(findGuardrailViolation('This is guaranteed to be live.'), 'guarantee')
})

test('a priced plan falls back to the scripted refusal', () => {
  const result = interpretPlanResult({
    refusal: null,
    title: plan.title,
    problem: plan.problem,
    steps: plan.steps,
    tools: plan.tools,
    human: plan.human,
    timeSaved: 'Estimate only: about £4000 of time.',
    tenDayIncludes: plan.tenDayIncludes,
  })
  assert.equal(result.kind, 'refusal')
  if (result.kind === 'refusal') assert.equal(result.message, SCRIPTED_REFUSAL)
})

test('an explicit refusal is kept', () => {
  const result = interpretPlanResult({
    refusal: 'That is not a work process we can plan.',
    title: null,
    problem: null,
    steps: null,
    tools: null,
    human: null,
    timeSaved: null,
    tenDayIncludes: null,
  })
  assert.deepEqual(result, { kind: 'refusal', message: 'That is not a work process we can plan.' })
})
