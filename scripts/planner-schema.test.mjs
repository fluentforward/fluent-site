import assert from 'node:assert/strict'
import { test } from 'node:test'

import { adaptLegacyPlan, followUpSchema, fullPlanSchema, toPartialPlan } from '../src/lib/planner/plan-schema.ts'
import { pdfSignatureValid, signPdfLink } from '../src/lib/planner/ids.ts'

const plan = {
  title: 'Linear-to-Xero invoice drafting agent',
  outcome: 'Finished work in Linear becomes draft invoices in Xero. You review and approve.',
  quote: 'Each month, 10 to 15 invoices are raised by hand from completed work in Linear. It takes 3 to 6 hours and cuts into delivery time.',
  opportunity: 'Your billing data already exists. Someone just has to move it every month.',
  shifts: [
    { today: 'Someone pulls completed work out of Linear, client by client.', withAgent: 'The agent reads Linear on a fixed schedule and groups the work by client.' },
    { today: 'Fixed-price or time-and-materials is decided invoice by invoice.', withAgent: 'Billing rules are set once and applied the same way every month.' },
    { today: 'Invoices are typed into Xero line by line.', withAgent: 'Draft invoices appear in Xero with line items and amounts filled in.' },
    { today: 'Invoicing waits until someone can step away from delivery.', withAgent: 'Invoicing becomes a review. You approve, and the agent sends from Xero.' },
  ],
  reasons: [
    { title: 'The data is already structured', text: 'Linear and Xero both have a clear place for the work. There is no document reading.' },
    { title: 'A person stays in control', text: 'Nothing goes to a client until someone approves it.' },
    { title: 'Results show in one cycle', text: 'It runs monthly, so the first run gives a before-and-after.' },
  ],
  scoreIntro: 'The two strongest levers are faster billing and protected delivery time. Both are direct.',
  steps: [
    { n: 1, actor: 'agent', title: 'Reads Linear', text: 'On the last working day it finds work marked complete and billable.' },
    { n: 2, actor: 'agent', title: 'Groups by client', text: 'It applies the fixed-price or time-and-materials rules to each client.' },
    { n: 3, actor: 'agent', title: 'Drafts in Xero', text: 'It creates one draft per client, with line items and amounts.' },
    { n: 4, actor: 'you', title: 'Approve and send', text: 'Once you approve, the agent sends each invoice to the contacts held in Xero.' },
  ],
  tools: ['Linear', 'Xero', 'Slack or email'],
  human: ['Review and approve every draft invoice before it is sent.', 'Resolve flagged items where the data is incomplete.'],
  alsoGet: ['Billing rules written down once, not kept in someone’s head.', 'A clear record of what was billed, when, and who approved it.'],
  includes: ['Linear-to-Xero data mapping', 'Draft invoices for the monthly run', 'Billing rules for fixed-price and time-and-materials', 'Gap flagging in Slack or email'],
  firstRun: 'First billing run alongside your current process',
  levers: [
    { lever: 'cash', impact: 'none', path: 'direct', why: 'No outside cost mentioned.', note: 'If a bookkeeper raises these, bring last month’s bill.' },
    { lever: 'capacity', impact: 'medium', path: 'direct', why: 'Invoicing takes 3 to 6 hours and cuts into delivery time.', baseline: 'Hours spent raising invoices', check: 'Hours spent reviewing drafts', ownerRole: 'Delivery lead', reviewAt: '30 days', note: 'Capped because growth or a hire was not mentioned.' },
    { lever: 'working_capital', impact: 'medium', path: 'direct', why: 'Invoices go out on the last working day instead of whenever someone is free.', baseline: 'Days from work complete to invoice sent', check: 'The same measure for the first agent-run month', ownerRole: 'Finance lead', reviewAt: '30 days' },
    { lever: 'revenue', impact: 'low', path: 'direct', why: 'Freed time could go into billable delivery, but growth was not mentioned.', baseline: 'Billable hours logged', check: 'Billable hours logged', ownerRole: 'Delivery lead', reviewAt: '30 days' },
  ],
  betterFirst: null,
}

test('the full plan schema accepts the case-style plan and the partial keeps two steps', () => {
  const parsed = fullPlanSchema.parse(plan)
  const partial = toPartialPlan(parsed)
  assert.equal(partial.steps.length, 2)
  assert.equal(partial.steps[0].text, plan.steps[0].text)
  assert.equal(partial.problem, plan.quote)
  assert.equal('levers' in partial, false)
})

test('an older one-page plan still opens', () => {
  const legacy = adaptLegacyPlan({
    title: 'Monthly client report agent',
    problem: 'Two people spend three days building client reports from the finance system.',
    steps: [
      { n: 1, text: 'Pull last month’s figures from the finance system.' },
      { n: 2, text: 'Draft each report in the template.' },
      { n: 3, text: 'Send the draft to a person to approve.' },
    ],
    tools: ['finance system'],
    human: ['Approving every report before it goes out.'],
    tenDayIncludes: 'The connections, the template and a human approval step.',
    levers: plan.levers,
    proofPlan: 'Compare last month with the next month on the same figures.',
    betterFirst: null,
  })
  assert.ok(legacy)
  assert.equal(legacy.steps.length, 3)
  assert.equal(legacy.steps[2].actor, 'you')
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
