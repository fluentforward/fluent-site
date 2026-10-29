import assert from 'node:assert/strict'
import test from 'node:test'

/** Mirrors GTAG_CONSENT_DEFAULT_DENIED in load-vendors.ts */
const GTAG_CONSENT_DEFAULT_DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500,
}

function gtagConsentStateFromChoice(choice) {
  return {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
    ad_storage: choice.marketing ? 'granted' : 'denied',
    ad_user_data: choice.marketing ? 'granted' : 'denied',
    ad_personalization: choice.marketing ? 'granted' : 'denied',
  }
}

function simulateEnsureGa4ConsentMode(dataLayer) {
  const gtag = function gtag() {
    dataLayer.push(Array.from(arguments))
  }
  gtag('consent', 'default', { ...GTAG_CONSENT_DEFAULT_DENIED })
  gtag('js', new Date())
  gtag('config', 'G-TEST')
  return dataLayer
}

test('consent default is queued before js/config', () => {
  const dataLayer = []
  simulateEnsureGa4ConsentMode(dataLayer)
  assert.equal(dataLayer[0][0], 'consent')
  assert.equal(dataLayer[0][1], 'default')
  assert.equal(dataLayer[0][2].analytics_storage, 'denied')
  assert.equal(dataLayer[1][0], 'js')
  assert.equal(dataLayer[2][0], 'config')
})

test('gtagConsentStateFromChoice maps analytics and marketing separately', () => {
  assert.deepEqual(
    gtagConsentStateFromChoice({ analytics: true, marketing: false }),
    {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    },
  )
})
