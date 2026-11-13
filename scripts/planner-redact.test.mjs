import assert from 'node:assert/strict'
import { test } from 'node:test'

import { isEmptiedByRedaction, redactFreeText } from '../src/lib/planner/redact.ts'

test('redacts emails, phones and urls before a model call', () => {
  const text = 'Reports from xero.example.com, email ada@firm.co.uk or 07700 900123.'
  const redacted = redactFreeText(text)
  assert.match(redacted, /\[redacted-email\]/)
  assert.match(redacted, /\[redacted-phone\]/)
  assert.match(redacted, /\[redacted-url\]/)
  assert.equal(redacted.includes('ada@firm.co.uk'), false)
  assert.equal(redacted.includes('07700'), false)
})

test('leaves short numbers alone', () => {
  assert.equal(redactFreeText('It takes 3 days and about 12 people.'), 'It takes 3 days and about 12 people.')
})

test('treats a message that is only personal data as empty', () => {
  const original = 'ada@firm.co.uk'
  const redacted = redactFreeText(original)
  assert.equal(isEmptiedByRedaction(original, redacted), true)
  assert.equal(isEmptiedByRedaction('We spend three days on reports.', redactFreeText('We spend three days on reports.')), false)
})

test('redacts a known name only when capitalised', () => {
  const redacted = redactFreeText('Ask Will to approve. We will send it after.', { name: 'Will Jones' })
  assert.match(redacted, /\[redacted-name\]/)
  assert.match(redacted, /will send/)
})
