import assert from 'node:assert/strict'
import { test } from 'node:test'

/** Mirrors `src/lib/demio/register-attendee.ts` helpers for unit tests without a TS build step. */
function demioGdprFromMarketingOptIn(marketingOptIn) {
  return marketingOptIn ? 'yes' : 'no'
}

function formatDemioRegistrationError(payload, status) {
  if (typeof payload !== 'object' || payload === null) {
    return `Demio registration failed (${status})`
  }
  const parts = []
  if (Array.isArray(payload.errors)) {
    for (const item of payload.errors) {
      if (typeof item === 'string' && item.trim()) parts.push(item.trim())
    }
  }
  if (Array.isArray(payload.messages)) {
    for (const item of payload.messages) {
      if (typeof item === 'string' && item.trim()) parts.push(item.trim())
    }
  }
  return parts.length > 0
    ? parts.join(', ')
    : `Demio registration failed (${status})`
}

test('gdpr maps from marketing opt-in', () => {
  assert.equal(demioGdprFromMarketingOptIn(true), 'yes')
  assert.equal(demioGdprFromMarketingOptIn(false), 'no')
})

test('formatDemioRegistrationError reads errors and messages', () => {
  assert.equal(
    formatDemioRegistrationError({ errors: ['GDPR is required'] }, 400),
    'GDPR is required',
  )
  assert.equal(
    formatDemioRegistrationError(
      { errors: ['GDPR is required'], messages: ['Wrong Email format'] },
      400,
    ),
    'GDPR is required, Wrong Email format',
  )
  assert.equal(
    formatDemioRegistrationError(null, 502),
    'Demio registration failed (502)',
  )
})
