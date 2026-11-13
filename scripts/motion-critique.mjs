/**
 * ff-motion critique capture for /mockup/motion.
 * Uses system Chrome. Writes screenshots under /opt/cursor/artifacts/motion-mockup.
 *
 *   node scripts/motion-critique.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { chromium } from 'playwright-core'

const base = process.env.MOCKUP_URL || 'http://127.0.0.1:3456/mockup/motion'
const out = process.env.MOCKUP_OUT || '/opt/cursor/artifacts/motion-mockup'
const chrome = process.env.CHROME_PATH || '/usr/bin/google-chrome'

const sections = ['option-a', 'option-b', 'option-c', 'timeline', 'run', 'care', 'planner']
const mocks = ['hero-a', 'hero-b', 'hero-c', 'agent-run', 'health', 'plan']
const times = [0, 0.25, 0.5, 0.75, 1]

async function prepare(page) {
  await page.addInitScript(() => {
    localStorage.setItem(
      'ff_cookie_consent_v1',
      JSON.stringify({
        v: 1,
        updatedAt: new Date().toISOString(),
        policyVersion: '1',
        analytics: false,
        marketing: false,
      }),
    )
  })
}

async function shot(page, file) {
  await mkdir(path.dirname(file), { recursive: true })
  await page.screenshot({ path: file })
}

const browser = await chromium.launch({
  executablePath: chrome,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})

async function withPage({ width, height, reduced }, run) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: reduced ? 'reduce' : 'no-preference',
  })
  const page = await context.newPage()
  await prepare(page)
  try {
    await run(page)
  } finally {
    await context.close()
  }
}

for (const width of [1440, 390]) {
  const height = width === 390 ? 844 : 900
  for (const reduced of [false, true]) {
    const folder = path.join(out, `${width}-${reduced ? 'reduced' : 'motion'}`)
    await mkdir(folder, { recursive: true })
    await withPage({ width, height, reduced }, async (page) => {
      await page.goto(base, { waitUntil: 'networkidle' })
      await page.addStyleTag({
        content: 'header { position: relative !important; top: auto !important; }',
      })
      await page.waitForTimeout(reduced ? 300 : 700)
      for (const id of sections) {
        const handle = page.locator(`#${id}`)
        await handle.evaluate((element) => element.scrollIntoView({ block: 'start' }))
        await page.evaluate(() => window.scrollBy(0, -96))
        await page.waitForTimeout(reduced ? 150 : 400)
        await handle.screenshot({ path: path.join(folder, `${id}.png`) })
      }
    })
    console.log('sections', folder)
  }
}

for (const width of [1440, 390]) {
  const height = width === 390 ? 844 : 900
  for (const t of times) {
    await withPage({ width, height, reduced: false }, async (page) => {
      await page.goto(`${base}?motion=still&t=${t}`, { waitUntil: 'networkidle' })
      await page.addStyleTag({
        content: 'header { position: relative !important; top: auto !important; }',
      })
      await page.waitForTimeout(200)
      for (const id of mocks) {
        const handle = page.locator(`[data-mock="${id}"]`).first()
        if ((await handle.count()) === 0) continue
        await handle.evaluate((element) => element.scrollIntoView({ block: 'center' }))
        const file = path.join(out, 'strips', `${id}-${width}-t${String(t).replace('.', '')}.png`)
        await mkdir(path.dirname(file), { recursive: true })
        await handle.screenshot({ path: file })
      }
    })
    console.log('still', width, t)
  }
}

const keyboard = { pause: null, handoff: null }
await withPage({ width: 1440, height: 900, reduced: false }, async (page) => {
  await page.goto(base, { waitUntil: 'networkidle' })
  const pause = page.locator('[data-mock="hero-a"] button[aria-pressed]')
  await pause.focus()
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim() || '')
  await page.keyboard.press('Enter')
  await page.waitForTimeout(200)
  const pressed = await pause.getAttribute('aria-pressed')
  await page.keyboard.press('Enter')
  await page.waitForTimeout(200)
  const released = await pause.getAttribute('aria-pressed')
  keyboard.pause = { focused, pressed, released }

  const input = page.locator('#option-a input[name="q"]')
  await input.fill('Client reports take two days')
  await input.press('Enter')
  await page.waitForURL(/\/agent-planner/)
  keyboard.handoff = page.url()
})

await withPage({ width: 390, height: 844, reduced: true }, async (page) => {
  await page.goto(base, { waitUntil: 'networkidle' })
  const next = page.getByRole('button', { name: 'Next example' }).first()
  await next.focus()
  const before = await page.locator('[data-mock="hero-a"]').innerText()
  await page.keyboard.press('Enter')
  await page.waitForTimeout(150)
  const after = await page.locator('[data-mock="hero-a"]').innerText()
  keyboard.reducedNext = { changed: before !== after, focused: true }
})

await mkdir(out, { recursive: true })
await writeFile(path.join(out, 'keyboard.json'), JSON.stringify(keyboard, null, 2))
console.log(JSON.stringify(keyboard, null, 2))

await withPage({ width: 1440, height: 900, reduced: false }, async (page) => {
  await page.goto(base, { waitUntil: 'networkidle' })
  const clips = [
    ['hero-a', '#option-a'],
    ['hero-b', '#option-b'],
    ['hero-c', '#option-c'],
    ['run', '#run'],
    ['care', '#care'],
  ]
  for (const [name, selector] of clips) {
    const dir = path.join(out, 'frames', name)
    await mkdir(dir, { recursive: true })
    await page.locator(selector).evaluate((element) => element.scrollIntoView({ block: 'center' }))
    for (let i = 0; i < 12; i += 1) {
      await page.screenshot({ path: path.join(dir, `f${String(i).padStart(2, '0')}.png`) })
      await page.waitForTimeout(280)
    }
  }
  const timeline = path.join(out, 'frames', 'timeline')
  await mkdir(timeline, { recursive: true })
  await page.locator('#timeline').evaluate((element) => element.scrollIntoView({ block: 'start' }))
  await page.evaluate(() => window.scrollBy(0, -80))
  for (let i = 0; i < 12; i += 1) {
    await page.screenshot({ path: path.join(timeline, `f${String(i).padStart(2, '0')}.png`) })
    await page.evaluate(() => window.scrollBy(0, 70))
    await page.waitForTimeout(80)
  }
  const planner = path.join(out, 'frames', 'planner')
  await mkdir(planner, { recursive: true })
  await page.locator('#planner').evaluate((element) => element.scrollIntoView({ block: 'start' }))
  for (let i = 0; i < 12; i += 1) {
    await page.screenshot({ path: path.join(planner, `f${String(i).padStart(2, '0')}.png`) })
    await page.evaluate(() => window.scrollBy(0, 90))
    await page.waitForTimeout(80)
  }
})
console.log('frames', path.join(out, 'frames'))

await browser.close()
