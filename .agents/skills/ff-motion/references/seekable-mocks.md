# Seekable mock timeline contract

Production mocks (hero, agent run, health panel) should behave like a deterministic timeline, not wall-clock `setInterval` chaos.

## Requirements

1. **Single driver:** `progress` in `[0, 1]` (or `t` in ms with fixed duration) drives all substates.
2. **Seeded content:** Example strings from brief §2.4 / §7.9; no random metrics.
3. **SSR / no-JS:** Server renders **final frame** (or sensible default) so CLS ≈ 0 and story is intelligible without JS.
4. **Reduced motion:** `useReducedMotion()` / `MotionConfig` → render static end frame for that mock.
5. **QA query:** Support dev URL `?motion=still&t=0.42` (or similar) to seek for screenshots.

## Implementation sketch (when building — not required for skills-only PR)

- React client component + `LazyMotion`.
- `requestAnimationFrame` or Motion `useAnimate` driven by single timeline.
- `next/dynamic({ ssr: true })` with initial static markup matching `t=1` or agreed poster frame.
- IntersectionObserver: play once when ≥50% visible unless user hit Replay.

## State spec pattern

One DOM container **never unmounts** between states (pill → card). Morph layout on critically damped spring; swap inner content shortly after morph begins. Cursor interactions only where story needs human-in-the-loop click.
