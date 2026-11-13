import assert from 'node:assert/strict'
import { test } from 'node:test'

import { findGuardrailViolation, interpretPlanResult, planViolatesGuardrails } from '../src/lib/planner/guardrails.ts'
import { fullPlanSchema } from '../src/lib/planner/plan-schema.ts'

const plan = fullPlanSchema.parse({
  title: 'Monthly client report agent',
  outcome: 'Reports are drafted from the finance system and the CRM. A person still approves each one.',
  quote: 'Two people spend three days building client reports from the finance system and the CRM.',
  opportunity: 'The figures already exist in two systems. Someone spends days copying them into the template.',
  shifts: [
    { today: 'Two people pull figures out of the finance system by hand.', withAgent: 'The agent pulls the figures on the first working day.' },
    { today: 'The CRM numbers are copied into the same spreadsheet.', withAgent: 'The agent places the CRM numbers in the template.' },
    { today: 'Each report is checked while it is being written.', withAgent: 'Gaps are flagged before a person reviews the draft.' },
    { today: 'Sending waits until the report is finished by hand.', withAgent: 'A person approves the draft, then it is sent.' },
  ],
  reasons: [
    { title: 'The sources are known', text: 'The finance system and the CRM are where the figures already live.' },
    { title: 'A person stays in control', text: 'Nothing goes to a client until the report is approved.' },
    { title: 'One cycle is enough', text: 'The next month of reports is the comparison.' },
  ],
  scoreIntro: 'Capacity is the lever this can move. The agent informs the people who write the reports.',
  steps: [
    { n: 1, actor: 'agent', title: 'Pull the figures', text: 'It reads last month from the finance system and the CRM.' },
    { n: 2, actor: 'agent', title: 'Draft the reports', text: 'It fills the template and flags what does not match.' },
    { n: 3, actor: 'you', title: 'Approve and send', text: 'A person checks each report before it goes out.' },
  ],
  tools: ['finance system', 'CRM'],
  human: ['Approving every report before it goes out.'],
  alsoGet: ['A record of which figures were used, and who approved the report.'],
  includes: ['Connections to the two systems', 'The report template', 'A human approval step'],
  firstRun: 'First report run alongside the current process',
  levers: [
    { lever: 'cash', impact: 'none', path: 'direct', why: 'No outside cost mentioned.' },
    { lever: 'capacity', impact: 'medium', path: 'via_decisions', why: 'Two people spend three days on assembly.', baseline: 'Days spent on reports', check: 'Days spent reviewing drafts', ownerRole: 'Account lead', reviewAt: '90 days' },
    { lever: 'working_capital', impact: 'none', path: 'direct', why: 'Not a billing or collections process.' },
    { lever: 'revenue', impact: 'low', path: 'via_decisions', why: 'No hire was mentioned.', baseline: 'Billable hours', check: 'Billable hours', ownerRole: 'Account lead', reviewAt: '90 days' },
  ],
  betterFirst: null,
})

function rawFrom(plan, overrides = {}) {
  return {
    refusal: null,
    title: plan.title,
    outcome: plan.outcome,
    quote: plan.quote,
    opportunity: plan.opportunity,
    shifts: plan.shifts,
    reasons: plan.reasons,
    scoreIntro: plan.scoreIntro,
    steps: plan.steps,
    tools: plan.tools,
    human: plan.human,
    alsoGet: plan.alsoGet,
    includes: plan.includes,
    firstRun: plan.firstRun,
    levers: plan.levers,
    betterFirst: null,
    ...overrides,
  }
}

test('a normal plan passes the guardrails', () => {
  assert.equal(planViolatesGuardrails(plan), null)
  assert.equal(findGuardrailViolation(plan.quote), null)
})

test('a duration the buyer gave is not treated as a savings claim', () => {
  assert.equal(findGuardrailViolation('It takes 3 to 6 hours and cuts into delivery time.'), null)
  assert.equal(findGuardrailViolation('This saves 6 hours a month.'), 'savings')
})

test('currency, a price and a guarantee are rejected', () => {
  assert.equal(findGuardrailViolation('This would cost £2,000.'), 'currency')
  assert.equal(findGuardrailViolation('We charge a day rate for the build.'), 'price')
  assert.equal(findGuardrailViolation('This is guaranteed to be live.'), 'guarantee')
})

test('a priced sentence is dropped and the rest of the plan stands', () => {
  const result = interpretPlanResult(rawFrom(plan, { includes: ['About £4000 of build.', 'The template', 'A human approval step'] }), plan.quote)
  assert.equal(result.kind, 'plan')
  if (result.kind === 'plan') assert.equal(result.plan.includes.some((item) => item.includes('£')), false)
})

test('saying something costs N times the attention is not a price', () => {
  const line = '10 clients do not cost 10 times your personal attention.'
  assert.equal(findGuardrailViolation(line), null)
  const result = interpretPlanResult(
    rawFrom(plan, {
      shifts: [
        plan.shifts[0],
        plan.shifts[1],
        plan.shifts[2],
        { today: plan.shifts[3].today, withAgent: line },
      ],
    }),
    plan.quote,
  )
  assert.equal(result.kind, 'plan')
})

test('an explicit refusal is kept', () => {
  const result = interpretPlanResult({
    refusal: 'That is not a work process we can plan.',
    title: null,
    outcome: null,
    quote: null,
    opportunity: null,
    shifts: null,
    reasons: null,
    scoreIntro: null,
    steps: null,
    tools: null,
    human: null,
    alsoGet: null,
    includes: null,
    firstRun: null,
    levers: null,
    betterFirst: null,
  }, '')
  assert.deepEqual(result, { kind: 'refusal', message: 'That is not a work process we can plan.' })
})

test('a complete draft becomes a plan with the buyer’s hours intact', () => {
  const result = interpretPlanResult(
    rawFrom(plan, { quote: 'Each month it takes 3 to 6 hours and cuts into delivery time for the whole team.' }),
    'Each month it takes 3 to 6 hours and cuts into delivery time.',
  )
  assert.equal(result.kind, 'plan')
  if (result.kind === 'plan') assert.match(result.plan.quote, /3 to 6 hours/)
})
