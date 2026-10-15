import { mkdir } from 'node:fs/promises'
import path from 'node:path'

import { chromium } from 'playwright'

const base = process.env.SMOKE_BASE_URL ?? 'http://127.0.0.1:3000'
const outDir =
  process.env.SCREENSHOT_DIR ?? '/opt/cursor/artifacts/screenshots'

async function main() {
  await mkdir(outDir, { recursive: true })
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle' })
  await page.screenshot({
    path: path.join(outDir, 'cookie-banner-desktop-1280.png'),
    fullPage: false,
  })

  await page.getByRole('button', { name: 'Manage choices' }).click()
  await page.screenshot({
    path: path.join(outDir, 'cookie-modal-desktop-1280.png'),
    fullPage: false,
  })
  await page.keyboard.press('Escape')

  await page.goto(`${base}/cookies`, { waitUntil: 'networkidle' })
  await page.screenshot({
    path: path.join(outDir, 'cookie-notice-desktop-1280.png'),
    fullPage: true,
  })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle' })
  await page.screenshot({
    path: path.join(outDir, 'cookie-banner-mobile-390.png'),
    fullPage: false,
  })

  await page.getByRole('button', { name: 'Manage choices' }).click()
  await page.screenshot({
    path: path.join(outDir, 'cookie-modal-mobile-390.png'),
    fullPage: false,
  })

  await page.goto(`${base}/cookies`, { waitUntil: 'networkidle' })
  await page.screenshot({
    path: path.join(outDir, 'cookie-notice-mobile-390.png'),
    fullPage: true,
  })

  await browser.close()
  console.log('Screenshots written to', outDir)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
