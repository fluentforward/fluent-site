/**
 * Mirrors gtag.js KE/Qb checks: queued commands must be Arguments-like, not Arrays.
 */
import assert from 'node:assert/strict'
import test from 'node:test'

function isArgumentsLike(a) {
  return (
    !!a &&
    (Object.prototype.toString.call(a) === '[object Arguments]' ||
      Object.prototype.hasOwnProperty.call(a, 'callee'))
  )
}

function isGtagDataLayerCommand(a) {
  if (a == null || typeof a !== 'object') return false
  if (a.event) return true
  if (!isArgumentsLike(a)) return false
  const cmd = a[0]
  return cmd === 'config' || cmd === 'event' || cmd === 'js' || cmd === 'get'
}

function officialGtagStub(dataLayer) {
  return function gtag() {
    dataLayer.push(arguments)
  }
}

function brokenGtagStub(dataLayer) {
  return function gtag(...args) {
    dataLayer.push(args)
  }
}

test('official stub queues config/js commands for gtag.js', () => {
  const dataLayer = []
  const gtag = officialGtagStub(dataLayer)
  gtag('js', new Date())
  gtag('config', 'G-TEST')
  assert.equal(dataLayer.length, 2)
  assert.ok(isGtagDataLayerCommand(dataLayer[0]))
  assert.ok(isGtagDataLayerCommand(dataLayer[1]))
  assert.equal(dataLayer[0][0], 'js')
  assert.equal(dataLayer[1][0], 'config')
})

test('rest-args Array stub is ignored by gtag.js command detection', () => {
  const dataLayer = []
  const gtag = brokenGtagStub(dataLayer)
  gtag('js', new Date())
  gtag('config', 'G-TEST')
  assert.equal(dataLayer.length, 2)
  assert.ok(Array.isArray(dataLayer[0]))
  assert.ok(Array.isArray(dataLayer[1]))
  assert.equal(isGtagDataLayerCommand(dataLayer[0]), false)
  assert.equal(isGtagDataLayerCommand(dataLayer[1]), false)
})
