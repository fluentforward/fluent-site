import assert from 'node:assert/strict'
import { test } from 'node:test'

import { applyLeverRules, impactLine } from '../src/lib/planner/levers.ts'

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
  assert.match(impactLine(result.levers), /Capacity \(High, direct\), Revenue \(Medium, direct\)/)
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
  assert.match(impactLine(result.levers), /low across these levers/)
  assert.ok(result.betterFirst)
})
