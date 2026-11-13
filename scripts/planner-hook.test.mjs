import assert from 'node:assert/strict'
import { test } from 'node:test'

import { shapeHook } from '../src/lib/planner/hook.ts'

test('a short specific hook is kept', () => {
  const hook = shapeHook({
    thanks: 'Thank you for walking through the monthly client reports.',
    agent: 'It pulls the figures from Xero and HubSpot into your PDF, ready for someone to check.',
    benefit: 'The two people who spend those days on assembly can go back to billable work.',
  })
  assert.ok(hook)
  assert.match(hook.agent, /Xero/)
})

test('a long draft is cut to its first sentence when that sentence fits', () => {
  const hook = shapeHook({
    thanks: 'Thank you for the detail on the reports. The rest of this sentence is padding that should be dropped from the note.',
    agent: 'It fills each client PDF from Xero and HubSpot. Then a person checks it before it goes out.',
    benefit: 'Those two days can go back to billable work. We will not invent a second claim.',
  })
  assert.equal(hook?.thanks, 'Thank you for the detail on the reports.')
  assert.equal(hook?.agent, 'It fills each client PDF from Xero and HubSpot.')
})

test('a savings claim is dropped', () => {
  assert.equal(
    shapeHook({
      thanks: 'Thank you for describing the monthly reports.',
      agent: 'It drafts each client PDF from Xero and HubSpot.',
      benefit: 'That is two days saved every month for the team.',
    }),
    null,
  )
})

test('an em dash is rewritten before the length check', () => {
  const hook = shapeHook({
    thanks: 'Thank you for walking through the monthly client reports.',
    agent: 'It drafts the PDF from Xero and HubSpot — then a person checks it.',
    benefit: 'The two people on assembly can return to billable work.',
  })
  assert.ok(hook)
  assert.equal(hook.agent.includes('—'), false)
  assert.match(hook.agent, /HubSpot, then/)
})
