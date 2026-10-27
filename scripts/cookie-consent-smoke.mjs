/**
 * One-off smoke checks for cookie consent (run with `node scripts/cookie-consent-smoke.mjs`).
 * Requires: `npm run build` then `npm run start` on PORT, and Playwright chromium.
 */
import { chromium } from 'playwright'

const base = process.env.SMOKE_BASE_URL ?? 'http://127.0.0.1:3000'
const port = process.env.PORT ?? '3000'

async function waitForServer() {
  const url = `http://127.0.0.1:${port}`
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return url
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error('Server did not start')
}

const results = []

function pass(name, detail) {
  results.push({ name, ok: true, detail })
}

function fail(name, detail) {
  results.push({ name, ok: false, detail })
}

async function main() {
  const serverUrl = await waitForServer()
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  const vendorHosts = [
    'googletagmanager.com',
    'google-analytics.com',
    'connect.facebook.net',
    'snap.licdn.com',
  ]
  const seenVendors = []
  page.on('request', (req) => {
    const host = new URL(req.url()).hostname
    if (vendorHosts.some((h) => host.includes(h))) {
      seenVendors.push(host)
    }
  })

  await context.clearCookies()
  await page.goto(serverUrl, { waitUntil: 'networkidle' })
  await page.evaluate(() => localStorage.clear())

  await page.reload({ waitUntil: 'networkidle' })
  const banner = page.getByRole('dialog', { name: 'Cookies on this site' })
  if (await banner.isVisible()) {
    pass('1-banner', 'Banner visible on first visit')
  } else {
    fail('1-banner', 'Banner not visible')
  }

  if (seenVendors.length === 0) {
    pass('1-no-vendors', 'No vendor hosts before consent click')
  } else {
    fail('1-no-vendors', `Saw vendors: ${seenVendors.join(', ')}`)
  }

  await page.getByRole('button', { name: 'Reject non-essential' }).click()
  if (!(await banner.isVisible())) {
    pass('2-reject-hide', 'Banner hidden after reject')
  } else {
    fail('2-reject-hide', 'Banner still visible')
  }

  const stored = await page.evaluate(() =>
    localStorage.getItem('ff_cookie_consent_v1'),
  )
  const parsed = stored ? JSON.parse(stored) : null
  if (parsed?.analytics === false && parsed?.marketing === false) {
    pass('2-storage', 'Storage false/false after reject')
  } else {
    fail('2-storage', `Unexpected storage: ${stored}`)
  }

  await page.reload({ waitUntil: 'networkidle' })
  if (!(await banner.isVisible())) {
    pass('2-reload', 'Banner stays hidden after reload')
  } else {
    fail('2-reload', 'Banner reappeared after reject reload')
  }

  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Accept all' }).click()
  const storedAccept = await page.evaluate(() =>
    localStorage.getItem('ff_cookie_consent_v1'),
  )
  const parsedAccept = storedAccept ? JSON.parse(storedAccept) : null
  if (parsedAccept?.analytics === true && parsedAccept?.marketing === true) {
    pass('3-accept-storage', 'Storage true/true after accept all')
  } else {
    fail('3-accept-storage', storedAccept)
  }

  await page.waitForTimeout(1500)
  const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
  const hasGtmLoader =
    gaId && seenVendors.some((h) => h.includes('googletagmanager'))
  const hasGaCollect =
    gaId &&
    seenVendors.some(
      (h) =>
        h.includes('google-analytics.com') || h.includes('analytics.google.com'),
    )
  if (gaId) {
    if (hasGtmLoader) pass('3-vendors-gtm', 'GA4 gtag.js requested when ID configured')
    else fail('3-vendors-gtm', 'GA4 ID set but no gtm request')
    if (hasGaCollect) {
      pass('3-vendors-collect', 'GA4 collect host requested after consent')
    } else {
      fail(
        '3-vendors-collect',
        'GA4 ID set but no google-analytics.com collect request (check gtag dataLayer stub)',
      )
    }
  } else {
    pass('3-vendors-gtm', 'Skipped vendor load check (no GA4 ID in env)')
    pass('3-vendors-collect', 'Skipped collect check (no GA4 ID in env)')
  }

  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Manage choices' }).click()
  await page.getByRole('switch', { name: 'Analytics' }).click()
  await page.getByRole('button', { name: 'Save choices' }).click()
  await page.waitForTimeout(1500)
  const partial = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('ff_cookie_consent_v1') ?? '{}'),
  )
  if (partial.analytics === true && partial.marketing === false) {
    pass('4-partial', 'Analytics on, marketing off saved')
  } else {
    fail('4-partial', JSON.stringify(partial))
  }

  await page.getByRole('button', { name: 'Cookie settings' }).first().click()
  if (await page.getByRole('dialog', { name: 'Cookie settings' }).isVisible()) {
    pass('5-reopen', 'Cookie settings opens modal')
  } else {
    fail('5-reopen', 'Modal did not open')
  }
  await page.keyboard.press('Escape')

  await page.goto(`${serverUrl}/cookies`, { waitUntil: 'networkidle' })
  if (await page.getByRole('heading', { name: 'Cookie notice' }).isVisible()) {
    pass('6-cookies-page', '/cookies renders')
  } else {
    fail('6-cookies-page', 'Missing heading')
  }

  await browser.close()
  console.log(JSON.stringify(results, null, 2))
  if (results.some((r) => !r.ok)) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
