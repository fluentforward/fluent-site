# FluentForward

Marketing site for FluentForward Limited's AI advisory and implementation practice.

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS v4, configured CSS-first via `@theme` in `src/styles/tailwind.css`
- Fonts loaded with `next/font/google`: Instrument Sans (display), Inter (body), IBM Plex Mono (labels)
- No CMS, no database. All copy lives in `src/content`.
- Optional analytics/marketing vendors load only after cookie consent (see `src/lib/vendors`).

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. Local development does not require vendor IDs.

### Production vendor IDs (Vercel)

Set these on the **Production** environment only (not Preview or Development). Scripts stay unloaded when an ID is empty or unset.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 (`G-…`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (optional) |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag (optional) |

Redeploy Production after changing public env vars so the client build picks them up.

## Structure

```
src/
  app/         routes, one thin page.tsx per route plus sitemap/robots/OG image
  components/
    layout/    site header, footer, wordmark
    sections/  page sections, composed by routes
    ui/        primitives: Button, Container, Section, Heading, Reveal, SpecRow
  content/     all copy and configuration as typed TS exports
  lib/         Cal.com embed loader
  styles/      Tailwind theme and base layer
```

### Editing copy

Every page's text is in `src/content`. Components take content as data rather than
containing it, so changing wording never means touching layout code.

### Publishing case studies

`/results` renders an empty state until `caseStudies` in
[src/content/results.ts](src/content/results.ts) has entries. Add objects matching
the `CaseStudy` type and the page switches over automatically.

### Design system

Tokens are defined once in [src/styles/tailwind.css](src/styles/tailwind.css).
The palette is deliberately monochrome — paper and ink surfaces with slate and
mist text. `--color-steel` is the single accent and is used sparingly, for
eyebrow rules, phase numerals, active navigation and focus rings. Primary
buttons are ink, never accent.

Scroll reveals use the `Reveal` component, which adds `html.js` before hiding
anything, so content stays visible without JavaScript and honours
`prefers-reduced-motion`.

## Booking

The single call to action is a Cal.com (EU) booking. Configuration lives in
[src/content/cal.ts](src/content/cal.ts); `CalBookingInit` in the root layout
powers popup triggers and `CalInline` renders the inline calendar on `/contact`.
There are no forms and no API routes.

## Deployment

Standard Next.js build, deployed on Vercel.

```bash
npm run build
```

Routes retired in the 2026 redesign (`/blog`, `/pricing`, `/surfaceos`,
`/agentic-platform`) are 301 redirected in [next.config.mjs](next.config.mjs).
