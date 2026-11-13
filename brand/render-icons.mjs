/**
 * Renders the site icon mark to PNG avatars. Run with `node brand/render-icons.mjs`.
 *
 * Geometry is kept identical to src/app/icon.svg so the favicon, the header
 * wordmark and every uploaded avatar stay the same mark.
 */
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

const OUT = dirname(fileURLToPath(import.meta.url))

const INK = '#0B0C0E'
const PAPER = '#FFFFFF'
const CHEVRON = 'M7 5.5 12 10l-5 4.5'

/* The square line caps overhang the apex on the right, so the path's geometric
   centre sits half a unit left of its optical one. Invisible at favicon size,
   obvious at 400px. */
const OPTICAL_NUDGE = 0.5

/* Platforms that mask avatars themselves need full-bleed corners, otherwise
   the brand radius shows through as white notches inside their own mask. */
function icon({ size, radius, background, stroke }) {
  const corner = radius ? ` rx="2"` : ''
  const plate = background
    ? `<rect width="20" height="20"${corner} fill="${background}" />`
    : ''

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="${size}" height="${size}">
  ${plate}
  <path d="${CHEVRON}" transform="translate(${OPTICAL_NUDGE} 0)" fill="none" stroke="${stroke}" stroke-width="1.75" stroke-linecap="square" />
</svg>`
}

const variants = [
  // Square, full bleed: LinkedIn, X, Slack, Google, anywhere that crops.
  // Flattened, because upload pipelines composite alpha inconsistently.
  ...[400, 1024].map((size) => ({
    name: `fluentforward-icon-square-${size}.png`,
    svg: icon({ size, radius: false, background: INK, stroke: PAPER }),
    flatten: true,
  })),
  // Rounded, transparent outside the radius: decks, sites, docs.
  ...[512, 1024].map((size) => ({
    name: `fluentforward-icon-rounded-${size}.png`,
    svg: icon({ size, radius: true, background: INK, stroke: PAPER }),
  })),
  // Chevron only, for placing on a background of your own.
  {
    name: 'fluentforward-chevron-white-1024.png',
    svg: icon({ size: 1024, radius: false, background: null, stroke: PAPER }),
  },
  {
    name: 'fluentforward-chevron-ink-1024.png',
    svg: icon({ size: 1024, radius: false, background: null, stroke: INK }),
  },
]

await mkdir(OUT, { recursive: true })

for (const variant of variants) {
  const image = sharp(Buffer.from(variant.svg))
  if (variant.flatten) image.flatten({ background: INK })
  await image.png().toFile(join(OUT, variant.name))
  console.log(variant.name)
}
