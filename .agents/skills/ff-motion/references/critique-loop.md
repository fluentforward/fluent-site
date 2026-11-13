# Motion critique loop (QA gate)

Run before asking Matt to review motion mockups or merging motion-heavy PRs.

## Capture

1. Playwright (or equivalent) screenshots of each signature moment at:
   - **390px** width (mobile)
   - **1440px** width (desktop)
2. Two passes per viewport: **`prefers-reduced-motion: reduce`** on and **off**.
3. Optional: contact sheet tiling all key frames; strip of 12 frames around fast transitions.
4. Dev seek: `?motion=still&t=` at 0, 0.25, 0.5, 0.75, 1.0 per mock.

## Score 1–10 each

| Criterion | What to check |
| --- | --- |
| Story clarity | Can a stranger say what the agent did? |
| Readability @390 | Type size, contrast, mono tags legible |
| Motion quality | No linear position, no pops, springs appropriate |
| Restraint | One hero move; no blanket fade-ups |
| Brand accuracy | Tokens only; one orange moment; Inter Tight + Plex Mono |
| Accessibility | Pause control on loops; focus visible; no moving readable text |
| CWV risk | Static LCP text; mock dimensions reserved; JS budget |

## Loop

1. Score all criteria.
2. Fix the **worst 3** issues.
3. Re-render contact sheets.
4. Repeat until **every score ≥ 8**.
5. Lighthouse mobile: LCP < 2.5s, CLS < 0.1, accessibility ≥ 95 on preview URL.

## Agent instruction

Do not present work to Matt with any criterion below 8 unless blocked externally — then list the blocker and interim scores.
