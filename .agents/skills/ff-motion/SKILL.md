---
name: ff-motion
description: >
  FluentForward marketing site motion and visual house rules. Use before designing
  or building motion, mocks, or redesign UI in fluent-site. Covers locked design
  tokens, animation stack (CSS first, Motion lazy-loaded for mocks), ban list,
  signature moments, seekable timelines, loop+pause and reduced-motion, CWV/a11y
  budgets, honesty rules for illustrations, UK copy/kill list, and the screenshot
  critique loop. The website brief v0.3 always wins over generic design skills.
---

# FluentForward motion and design (`ff-motion`)

**Project:** fluent-site (Next.js on Vercel, Tailwind v4 CSS variables).  
**Owner:** Matt Todd, FluentForward Limited (UK).  
**Brief:** website redesign v0.3 (12 Nov 2026). If a copy exists in-repo, read `docs/website-brief.md` first; otherwise treat this skill plus `references/` as binding for motion work.

## Skill precedence

1. **`website-brief.md` v0.3** (LOCKED items are non-negotiable).
2. **This skill (`ff-motion`)** for motion, mocks, critique, and bans.
3. **`frontend-design`** (Anthropic) for process and self-critique — **except** where it conflicts with the brief or this skill. See [README](../README.md#frontend-design-override).
4. **`motion`** (Motion AI Kit) for Motion/CSS implementation detail — stack choices here override its defaults (e.g. no GSAP, lazy `motion/react` only).

## Animation stack (Matt, LOCKED)

| Layer | Use for |
| --- | --- |
| **CSS first** | Scroll-driven progress (`animation-timeline: view()` / `scroll()`), `@starting-style`, `linear()` springs, hovers, presses, timeline rails |
| **Motion** (`motion/react`, MIT) | Orchestrated **mocks only**: hero morph, agent run, health panel. `LazyMotion` + `m`, `MotionConfig reducedMotion="user"`, `next/dynamic` below the fold |
| **Not in this repo** | GSAP, Lenis, Three.js/WebGL, Rive, hero video, Remotion, HyperFrames, PDoomVideo, ClaudeAnimationBase, 21st.dev magic-mcp |

Do not install or import both GSAP and Motion. Prefer one seekable timeline per mock, not scattered tweens.

## Locked design tokens (do not reinterpret)

Keep Tailwind token **names**: `ink`, `paper`, `accent`, `line`, `mist`, etc.

| Role | Value | Notes |
| --- | --- | --- |
| Page ink | `#0a0a0b` | Body/dark sections |
| Paper | `#f4f4f1` | Warm off-white sections |
| **Single accent** | `#ff4a1c` | CTAs, one headline phrase, one moment per sequence — **no other hues** in marketing chrome |
| Display | **Inter Tight** (`next/font`) | Huge tight headlines; one phrase in `accent` |
| Mono | **IBM Plex Mono** | Eyebrows, labels, mock chrome, `ILLUSTRATION` / `EXAMPLE` tags |
| Buttons | Pill `999px` | Orange primary on dark/light per brief |
| Cards | `14px` radius | Hairline `line` borders |

Muted green/amber **only inside dashboard/agent UI mocks** (status chips), desaturated, documented if added.

The near-black + warm paper + vermilion + mono labels look is **LOCKED brand**, not a generic AI default. Do not “differentiate” by changing palette or type.

## Motion philosophy

- **Operator-grade, not spectacle.** Motion shows agents working and being watched.
- **Copy never waits.** H1, subhead, 10-day footnote, and primary/secondary CTAs are **static on first paint** — nothing animates over them.
- **One orchestrated moment per section**, then stillness. Retire blanket `Reveal` fade-up on every block.
- **Honest mocks** — every mock tagged mono **Illustration** or **Example**; no invented proof (see references).

## Numeric motion spec (`MOTION`)

Single source for CSS vars and `src/lib/motion.ts` when implemented. Details: [references/motion-tokens.md](references/motion-tokens.md).

**Easing:** Enter ease-out (`apple-out` `cubic-bezier(.2,.7,.1,1)` or ease-out-quint `0.22,1,0.36,1`). Exit ease-in at **~50%** of enter duration. Cross-screen: ease-in-out-quart `0.76,0,0.24,1`. **Linear only** for rotation, progress bars, loop phase.

**Springs (Motion):** UI snappy `320/30` (ζ≈0.84). Containers/morphs `170/26` (ζ≈1.0). **Position/scale may bounce; opacity and colour never.**

**Durations:** UI feedback 100–150ms; UI moves 200–300ms; panel enter 400–500ms; hero mock reveal ~700ms; hero enter up to 600–900ms.

**Stagger:** List items 60ms (40–80ms range). Words in choreographed type: 60–120ms; next starts when previous is 30–50% done.

**Reading holds:** `0.3s × word count + 0.5s` minimum before morphing or replacing readable text. **No moving text while it is being read.**

**Staging:** One hero move per viewport; secondary moves travel **60%** as far, start **100–200ms** later; ambient motion **<5%** of hero travel.

**Allowed properties:** `transform`, `opacity`, `clip-path`, small `background-color` only. Do not animate layout-affecting properties on scroll.

## Ban list (name these defaults explicitly)

Full list: [references/ban-list.md](references/ban-list.md). Includes: purple/blue gradients, glow, particles, centred-title-on-gradient, fade-and-slide-up on every section, linear position moves, 3D turntables, scroll-jacking on mobile, autoplay loops without pause, motion on H1/CTAs, impressive fake metrics, hero hairline through H1.

## Signature moments (build targets)

Spec and reduced-motion frames: [references/signature-moments.md](references/signature-moments.md).

1. Hero **problem in → agent out** (state spec: one container morphs; optional real input → `/agent-planner?q=`).
2. **Live agent run** mock (illustration, play once, replay).
3. **10-day timeline** — CSS `view()` scroll-driven rail; footnote static.
4. **Agent Care health** — drift raised then resolved; loop only with pause control.
5. **Plan assembles** — reserved-height slots, `aria-live="polite"`.

## Seekable mock contract

Every signature mock should be **`progress`-driven** (pure function of t), SSR **final frame** by default, query `?motion=still&t=` for QA. Reduced motion = composed static end state. See [references/seekable-mocks.md](references/seekable-mocks.md).

## Loops, pause, reduced motion (WCAG 2.2.2)

- **Always-on loops** are allowed only with a **visible, keyboard-focusable Pause** control (and Replay where useful).
- Honour `prefers-reduced-motion`: show the **designed static finished state**, not “animation off”.
- Prefer **play once → rest → replay** over endless autoplay.

## Performance and a11y budgets

| Target | Value |
| --- | --- |
| Mobile LCP | < 2.5s |
| CLS | < 0.1 |
| Lighthouse accessibility | ≥ 95 |
| Motion JS (home, proposal) | < 30 KB gzip for Motion chunk |

No scroll handlers for hero LCP; lazy-load mocks; fixed/aspect-ratio mock boxes; orange on `paper` only for **large** display text (contrast 3.05:1).

## Honesty and copy

[references/honesty-and-copy.md](references/honesty-and-copy.md): UK English, no em dashes, kill list §8.3, no public prices, no certification claims, pass/modest values in mocks only.

## Critique loop (before showing Matt)

[references/critique-loop.md](references/critique-loop.md): Playwright contact sheets at **390px** and **1440px**, reduced motion on/off; score 1–10 on seven criteria; fix worst 3; repeat until all **≥ 8**.

## Related repo skills

- `.agents/skills/motion` — Motion library + CSS springs (free tier).
- `.agents/skills/frontend-design` — process; brief overrides palette/type defaults.
- Install manifest: [../README.md](../README.md).

## Mockup branch convention (future work)

`noindex` route e.g. `/mockup/motion`, real tokens, no live page changes until Matt merges.
