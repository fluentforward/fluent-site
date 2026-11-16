import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  commercialsNote,
  gaveUpContact,
  plannerGaveUpCopy,
  showsBookCall,
} from '../src/lib/planner/plan-only-copy.ts'

test('teams of 10 or more are offered a call when the plan gives up', () => {
  for (const emailed of [true, false]) {
    const copy = plannerGaveUpCopy({ planOnly: false, emailed })
    assert.equal(copy.message, "The plan didn't come together this time. Book a call and we'll work through it with you.")
    assert.equal(copy.contact, 'book')
    assert.equal(showsBookCall(copy.contact), true)
  }
})

test('plan-only visitors we have emailed are asked to reply, with no call button', () => {
  const copy = plannerGaveUpCopy({ planOnly: true, emailed: true })
  assert.equal(
    copy.message,
    "The plan didn't come together this time. Try describing a different process, or reply to our email and we'll help.",
  )
  assert.equal(copy.contact, 'reply')
  assert.equal(showsBookCall(copy.contact), false)
})

test('plan-only visitors with no email from us get our address, with no call button', () => {
  const copy = plannerGaveUpCopy({ planOnly: true, emailed: false })
  assert.equal(
    copy.message,
    "The plan didn't come together this time. Try describing a different process, or email us at hello@fluentforward.com and we'll help.",
  )
  assert.equal(copy.contact, 'mailto')
  assert.equal(showsBookCall(copy.contact), false)
})

test('ordinary errors keep the call button, and unknown contacts fall back to the address', () => {
  assert.equal(showsBookCall(undefined), true)
  assert.equal(gaveUpContact('reply'), 'reply')
  assert.equal(gaveUpContact('nonsense'), 'mailto')
  assert.equal(gaveUpContact(undefined), 'mailto')
})

test('the PDF commercials note depends on the route', () => {
  assert.equal(commercialsNote(true), "Reply to our email if you'd like to talk either of them through.")
  assert.equal(commercialsNote(false), 'Both are confirmed on the scoping call.')
})

test('the copy has no em dashes', () => {
  const lines = [
    ...[true, false].flatMap((planOnly) => [true, false].map((emailed) => plannerGaveUpCopy({ planOnly, emailed }).message)),
    commercialsNote(true),
    commercialsNote(false),
  ]
  for (const line of lines) assert.ok(!line.includes('\u2014'), line)
})
