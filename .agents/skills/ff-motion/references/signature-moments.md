# Signature motion moments

One hero animation per section. Headlines and CTAs stay static.

## 1. Hero — problem in, agent out

- **Layout:** Static H1 + CTAs left; mock panel right (below on mobile), `ink-2`, tagged **Example**.
- **Sequence:** Example problem from brief §2.4 types at human speed → reading hold → **same container morphs** (state spec: size, radius, fill; content swap ~4 frames after morph start) → agent card with steps, human approval beat (accent once at “go live”), status “Healthy · ran 2 min ago”.
- **End state:** Rest on finished card; **Replay** + **Pause** if looping examples.
- **Idea:** Optional real pill input — “Try your own” → `/agent-planner?q=`.
- **Reduced motion:** Finished card for first example; “Next example” if cycling.

## 2. Live agent run (home §3)

- Dark panel, **Illustration** tag.
- Play **once** in view (~8–10s): inbound row → step logs + linear progress fills → curved cursor → Approve (orange) → output sent → status row.
- **Reduced motion:** All steps visible, timestamps shown, completed state.

## 3. Ten working days timeline

- Horizontal rail (desktop), vertical (mobile). Stages through Agent Care.
- **CSS `view()`** fills rail; footnote §conditions **never animated**.
- **Reduced motion:** Full rail lit statically.

## 4. Agent Care health panel

- **Illustration:** status, last run, eval sparkline.
- Stroke draws → dip → amber **Drifting** → alert row → fix → green **Healthy** (~10s, once).
- Loop only with **Pause** if always-on variant chosen.
- **Reduced motion:** Resolved state + small static event log.

## 5. Agent Planner plan assembly

- Sections fill **reserved-height** slots (no CLS).
- Subtle opacity + 8px settle per section (acceptable use of house reveal).
- `aria-live="polite"` per section, not per character.
- Example block on page: **EXAMPLE PLAN · ILLUSTRATION ONLY** copy from brief §7.9.

## Micro-interactions (site-wide)

Keep pill press 0.98, card lift 4px; optional spring on mobile sticky “Scope your agent” after first scroll. No other global motion added without brief alignment.
