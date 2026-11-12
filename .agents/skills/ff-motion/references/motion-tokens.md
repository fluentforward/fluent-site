# MOTION tokens (FluentForward)

Use these values in CSS custom properties and a shared `MOTION` object in `src/lib/motion.ts` when building.

## Easing curves

| Name | `cubic-bezier` | Use |
| --- | --- | --- |
| apple-out (house) | `.2, .7, .1, 1` | Default entrance (close to ease-out-quint) |
| ease-out-quint | `.22, 1, .36, 1` | Panel / hero enter |
| ease-out-expo | `.16, 1, .3, 1` | Rare emphasis |
| ease-out-cubic | `.33, 1, .68, 1` | UI settle |
| ease-in-out-quart | `.76, 0, .24, 1` | Cross-screen travel |
| linear | `linear` | Progress bars, loop phase, rotation only |

## Spring presets (Motion)

| Preset | stiffness | damping | ζ (approx) | Use |
| --- | --- | --- | --- | --- |
| Snappy | 320 | 30 | ~0.84 | Buttons, chips, small UI |
| Default / morph | 170 | 26 | ~1.0 | Container morphs, layout |
| Heavy | 90 | 20 | lower | Large panels (use sparingly) |

Generate CSS equivalents via Motion skill `linear()` spring when staying CSS-only.

## Durations (ms)

| Context | Range |
| --- | --- |
| UI feedback (press, toggle) | 100–150 |
| UI move (dropdown, chip) | 200–300 |
| Card / panel entrance | 400–500 |
| Hero mock reveal | ~700 |
| Hero section reveal (non-LCP) | 600–900 |
| Exit | ~50% of paired enter |

## Stagger

- List / steps: **60ms** default (40–80ms allowed).
- Choreographed words: **60–120ms**; overlap when prior item 30–50% complete.

## Text hold formula

```
holdMs = 300 * wordCount + 500
```

Apply before replacing or morphing copy the user is meant to read.

## Hover / press (keep live site behaviour)

- Card hover lift: **4px** + card hover shadow (200–300ms).
- Button press: **scale 0.98** (150–200ms).

## CSS scroll-driven (timeline rails)

```css
@supports (animation-timeline: view()) {
  /* progress fill tied to view(); no scroll JS */
}
```

Fallback: completed static rail (all stages “lit”).

## Properties

**Animate:** `transform`, `opacity`, `clip-path`, limited `background-color`.  
**Never on scroll:** width, height, top, left, margin, padding (use transform/clip-path).
