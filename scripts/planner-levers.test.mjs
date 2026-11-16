import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  applyLeverRules,
  claimedScores,
  defaultScoreIntro,
  impactLine,
  reconcileLeverText,
  scoreIntroFits,
} from '../src/lib/planner/levers.ts'

const blank = (lever) => ({
  lever,
  impact: 'none',
  path: 'direct',
  why: 'Nothing in the description points here.',
})

function scored(source, title, overrides) {
  const levers = ['cash', 'capacity', 'working_capital', 'revenue'].map(
    (id) => overrides[id] ?? blank(id),
  )
  return applyLeverRules({ levers, source, title, problem: source, betterFirst: null })
}

function byId(result, id) {
  return result.levers.find((item) => item.lever === id)
}

test('cost plan take-off keeps capacity high and revenue medium', () => {
  const source =
    'Cost plan take-off is the main time sink per cost plan, and you want to quote more without hiring.'
  const result = scored(source, 'Cost plan take-off agent', {
    capacity: {
      lever: 'capacity',
      impact: 'high',
      path: 'direct',
      why: 'Take-off is the main time sink, and you want to quote more without hiring.',
      baseline: 'Cost plans per month and hours per take-off, last month',
      ownerRole: 'MD decides whether to fill the next vacancy',
    },
    revenue: {
      lever: 'revenue',
      impact: 'medium',
      path: 'direct',
      why: 'Faster turnaround lets you bid on more jobs.',
      baseline: 'Tenders submitted per month',
      ownerRole: 'MD',
    },
  })
  assert.equal(byId(result, 'capacity').impact, 'high')
  assert.equal(byId(result, 'capacity').path, 'direct')
  assert.equal(byId(result, 'capacity').reviewAt, '30 days')
  assert.equal(byId(result, 'revenue').impact, 'medium')
  assert.equal(byId(result, 'cash').impact, 'none')
  assert.equal(byId(result, 'working_capital').impact, 'none')
  assert.match(impactLine(result.levers), /Team capacity \(High, direct\), Client work \(Medium, direct\)/)
  assert.equal(result.betterFirst, null)
})

test('management insights stay via decisions and at most medium', () => {
  const source =
    "Leadership can't see what is happening, and growth is held back without another hire. Management insights."
  const result = scored(source, 'Management insights agent', {
    capacity: { lever: 'capacity', impact: 'high', path: 'direct', why: 'People spend days pulling the numbers.' },
    revenue: { lever: 'revenue', impact: 'high', path: 'direct', why: 'Better sight should win more work.' },
    cash: { lever: 'cash', impact: 'low', path: 'direct', why: 'A small amount of overtime, nothing material.' },
  })
  assert.equal(byId(result, 'capacity').impact, 'medium')
  assert.equal(byId(result, 'capacity').path, 'via_decisions')
  assert.equal(byId(result, 'capacity').reviewAt, '90 days')
  assert.equal(byId(result, 'revenue').impact, 'medium')
  assert.equal(byId(result, 'revenue').path, 'via_decisions')
  assert.equal(byId(result, 'cash').impact, 'low')
  assert.equal(byId(result, 'cash').path, 'via_decisions')
})

test('invoice matching with a month-end temp scores cash high', () => {
  const source = 'Accounts payable invoice matching. A temp comes in at month-end to clear the pile.'
  const result = scored(source, 'Invoice matching agent', {
    cash: {
      lever: 'cash',
      impact: 'high',
      path: 'direct',
      why: 'The month-end temp is a cost you pay now.',
      baseline: 'Temp invoices last month',
      ownerRole: 'Finance manager stops the temp booking',
    },
    capacity: {
      lever: 'capacity',
      impact: 'medium',
      path: 'direct',
      why: 'The finance team gets the month-end days back.',
      baseline: 'Days spent on matching',
      ownerRole: 'Finance manager',
    },
    working_capital: {
      lever: 'working_capital',
      impact: 'high',
      path: 'direct',
      why: 'Invoices move faster.',
    },
    revenue: { lever: 'revenue', impact: 'medium', path: 'direct', why: 'It might free time for sales.' },
  })
  assert.equal(byId(result, 'cash').impact, 'high')
  assert.equal(byId(result, 'cash').path, 'direct')
  assert.equal(byId(result, 'capacity').impact, 'medium')
  assert.equal(byId(result, 'working_capital').impact, 'none')
  assert.equal(byId(result, 'revenue').impact, 'low')
})

test('wanting to double client numbers is growth, so capacity can stay high', () => {
  const source = 'Onboarding takes 4 hours and is a bottleneck. We do 5 a month and would love to double that.'
  const result = scored(source, 'Client onboarding agent', {
    capacity: {
      lever: 'capacity',
      impact: 'high',
      path: 'direct',
      why: 'The process is the bottleneck on taking more clients.',
      baseline: 'Clients onboarded last month',
      ownerRole: 'The owner',
    },
    revenue: {
      lever: 'revenue',
      impact: 'medium',
      path: 'via_decisions',
      why: 'Doubling depends on winning the extra clients.',
    },
  })
  assert.equal(byId(result, 'capacity').impact, 'high')
  assert.equal(byId(result, 'capacity').reviewAt, '30 days')
  assert.equal(byId(result, 'revenue').impact, 'medium')
})

test('a vague marketing wish scores low and names a better first agent', () => {
  const source = 'We want AI for marketing.'
  const high = {
    impact: 'high',
    path: 'direct',
    why: 'This will transform the whole function.',
    baseline: 'Not known',
    ownerRole: 'Someone',
  }
  const result = scored(source, 'Marketing agent', {
    cash: { lever: 'cash', ...high },
    capacity: { lever: 'capacity', ...high },
    working_capital: { lever: 'working_capital', ...high },
    revenue: { lever: 'revenue', ...high },
  })
  for (const lever of result.levers) {
    assert.ok(lever.impact === 'low' || lever.impact === 'none')
  }
  assert.match(impactLine(result.levers), /low in every area/)
  assert.ok(result.betterFirst)
})

test('working capital forced to none drops the model note that says it scored medium (16 Nov test)', () => {
  const source =
    'We are a 60-person accountancy firm. Ops chases ID, engagement letters and bank details for 18 new clients a month over email.'
  const result = scored(source, 'Client Onboarding Chaser Agent', {
    capacity: {
      lever: 'capacity',
      impact: 'high',
      path: 'direct',
      why: 'Two coordinators manually chase 18 files a month.',
    },
    working_capital: {
      lever: 'working_capital',
      impact: 'medium',
      path: 'via_decisions',
      why: 'Faster onboarding means bank details and engagement letters arrive sooner, unblocking the first invoice.',
      note: 'Scored medium because billing timing depends on partner action once documents are in, not the agent alone.',
      baseline: 'Average days from client sign to first invoice raised',
    },
  })
  const wc = byId(result, 'working_capital')
  assert.equal(wc.impact, 'none')
  assert.equal(wc.note, undefined)
  assert.equal(wc.why, 'Not a billing or collections process.')
  assert.equal(wc.baseline, undefined)
})

test('a capped lever loses a sentence that states the old score but keeps the rest', () => {
  const result = scored('Two people spend three days a month building reports from Xero.', 'Report agent', {
    capacity: {
      lever: 'capacity',
      impact: 'high',
      path: 'direct',
      why: 'Three days a month go on building reports.',
      note: 'Rated high because the time sink is clear.',
    },
  })
  const capacity = byId(result, 'capacity')
  assert.equal(capacity.impact, 'medium')
  assert.equal(capacity.note, undefined)
  assert.equal(capacity.why, 'Three days a month go on building reports.')
})

test('advice to rescore is kept, and a matching score claim is kept', () => {
  const unchanged = reconcileLeverText({
    lever: 'revenue',
    impact: 'low',
    path: 'direct',
    why: 'Scored low because no growth constraint was described.',
    note: 'If coordinators turn work away, this could rescore to medium.',
  })
  assert.equal(unchanged.why, 'Scored low because no growth constraint was described.')
  assert.equal(unchanged.note, 'If coordinators turn work away, this could rescore to medium.')
})

test('stored plans are reconciled on read', () => {
  const stale = reconcileLeverText({
    lever: 'working_capital',
    impact: 'none',
    path: 'via_decisions',
    why: 'Not a billing or collections process.',
    note: 'Score is medium because the billing uplift depends on partners acting on the faster onboarding; bring your average first-invoice value to the call to sharpen this.',
  })
  assert.equal(stale.note, undefined)
  assert.deepEqual(claimedScores('Scored medium because x. Score is high. A high score.'), ['medium', 'high', 'high'])
})

test('the score intro must not name a lever scored none', () => {
  const levers = [
    { lever: 'cash', impact: 'none', path: 'direct', why: 'x' },
    { lever: 'capacity', impact: 'medium', path: 'direct', why: 'x' },
    { lever: 'working_capital', impact: 'none', path: 'via_decisions', why: 'x' },
    { lever: 'revenue', impact: 'low', path: 'via_decisions', why: 'x' },
  ]
  assert.equal(scoreIntroFits('The biggest change is in team capacity: the agent takes on the chasing.', levers), true)
  assert.equal(scoreIntroFits('The strongest lever is capacity: the agent absorbs the chasing.', levers), false, 'lever wording is replaced')
  assert.equal(scoreIntroFits('Capacity and working capital both move.', levers), false)
  assert.equal(scoreIntroFits('Capacity is scored high.', levers), false)
  assert.equal(defaultScoreIntro(levers), 'The biggest change is in team capacity. The agent does that work itself.')
  assert.equal(scoreIntroFits('Billing and collections improve too.', levers), false, 'the new area names count as mentions')
})

test('buyer copy drops lever and money framing', async () => {
  const view = await import('../src/lib/planner/plan-view.ts')
  const { LEVER_LABEL, MONEY_FRAMING } = await import('../src/lib/planner/levers.ts')
  const lines = [
    view.SCORE_INTRO,
    view.WONT_DO,
    ...view.LEVER_GUIDE.flatMap((item) => [item.body, item.shows]),
    ...view.IMPACT_GUIDE.map((item) => item.body),
    ...Object.values(LEVER_LABEL),
    defaultScoreIntro([{ lever: 'cash', impact: 'none', path: 'direct', why: 'x' }]),
  ]
  for (const line of lines) {
    assert.ok(!MONEY_FRAMING.test(line), line)
    assert.ok(!/P&L|\u2014/.test(line), line)
  }
  assert.equal(MONEY_FRAMING.test('Where this agent moves the money.'), true)
  assert.equal(MONEY_FRAMING.test('The four money levers this agent could move.'), true)
})

test('the cash area is shown to buyers as bought-in work', async () => {
  const { LEVER_LABEL } = await import('../src/lib/planner/levers.ts')
  const view = await import('../src/lib/planner/plan-view.ts')
  assert.equal(LEVER_LABEL.cash, 'Bought-in work')
  const guide = view.LEVER_GUIDE.find((item) => item.id === 'cash')
  assert.match(guide.body, /contractor, agency or temp spend/)
  assert.equal(guide.shows, 'Shows up as: less contractor, agency or temp work bought in for this.')
  const levers = [
    { lever: 'cash', impact: 'none', path: 'direct', why: 'x' },
    { lever: 'capacity', impact: 'medium', path: 'direct', why: 'x' },
    { lever: 'working_capital', impact: 'none', path: 'direct', why: 'x' },
    { lever: 'revenue', impact: 'none', path: 'direct', why: 'x' },
  ]
  assert.equal(scoreIntroFits('Bought-in work drops too.', levers), false, 'a none area named in the intro is caught')
})
