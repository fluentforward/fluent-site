import assert from 'node:assert/strict'
import { test } from 'node:test'

import { followUpSchema, fullPlanSchema, toPartialPlan } from '../src/lib/planner/plan-schema.ts'
import { pdfSignatureValid, signPdfLink } from '../src/lib/planner/ids.ts'

const plan = {
  title: 'Monthly client report agent',
  problem: 'Two people spend three days building client reports.',
  steps: [
    { n: 1, text: 'Pull last month’s figures from the finance system.' },
    { n: 2, text: 'Draft each report in the template.' },
    { n: 3, text: 'Send the draft to a person to approve.' },
  ],
  tools: ['finance system'],
  human: ['Approving every report before it goes out.'],
  timeSaved: 'Estimate only, based on your answers: most of the assembly.',
  tenDayIncludes: 'The connections, the template and a human approval step.',
}

test('the full plan schema accepts a complete plan and the partial keeps two steps', () => {
  const parsed = fullPlanSchema.parse(plan)
  const partial = toPartialPlan(parsed)
  assert.equal(partial.steps.length, 2)
  assert.equal(partial.steps[0].text, plan.steps[0].text)
  assert.equal('tools' in partial, false)
})

test('a follow-up is either a question, done, or a refusal', () => {
  assert.equal(followUpSchema.parse({ done: false, sensitive: false, refusal: null, question: 'Which tools are involved?' }).question, 'Which tools are involved?')
  assert.equal(followUpSchema.safeParse({ done: true, sensitive: false, refusal: null, question: null }).success, true)
  assert.equal(followUpSchema.safeParse({ done: false, sensitive: false, refusal: null, question: 'x'.repeat(400) }).success, false)
})

test('a signed pdf link verifies and an edited one does not', () => {
  process.env.PLANNER_PDF_SIGNING_SECRET = 'unit-test-secret'
  const link = signPdfLink('planpublicidvalue1', 'https://www.fluentforward.com')
  assert.ok(link)
  const url = new URL(link)
  assert.equal(
    pdfSignatureValid(url.searchParams.get('plan'), url.searchParams.get('exp'), url.searchParams.get('sig')),
    true,
  )
  assert.equal(
    pdfSignatureValid(url.searchParams.get('plan'), url.searchParams.get('exp'), 'tampered'),
    false,
  )
})
