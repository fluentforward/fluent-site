# Agent skills (fluent-site)

Cursor discovers **project skills** under `.agents/skills/` (installed via [vercel-labs/skills](https://github.com/vercel-labs/skills); lockfile at repo root: `skills-lock.json`).

Read **`ff-motion`** before any motion-rich redesign or mock work on this site.

## Installed skills

| Skill | Source | Licence | Lock / commit (install date 12 Nov 2026) |
| --- | --- | --- | --- |
| `motion` | [motiondivision/ai-kit](https://github.com/motiondivision/ai-kit) — path `plugins/motion/skills/motion` | MIT ([repo](https://github.com/motiondivision/ai-kit)) | `skills-lock.json` → `computedHash` `03308ce7…`; upstream `HEAD` **1e424943582cbbdb6e3f410687e39f96451447bb** |
| `frontend-design` | [anthropics/skills](https://github.com/anthropics/skills) — path `skills/frontend-design` | Apache-2.0 (`LICENSE.txt` in skill folder) | `skills-lock.json` → `computedHash` `83485963…`; upstream `HEAD` **2c5958ecac7cee2b583967a2c4981d0f4a75c579** |
| `ff-motion` | **FluentForward** (this repo) | Same as repo | House rules from website brief v0.3 + motion research |

**Installer CLI:** `npx skills` (package `skills@1.8.1` at install time).

**Motion install command used:** `npx skills add motiondivision/ai-kit --skill motion --agent cursor --copy -y`  
(equivalent to free-tier [Motion AI Kit](https://motion.dev/docs/ai-kit); Motion+ MCP optional, not required.)

**Frontend-design install command used:** `npx skills add anthropics/skills --skill frontend-design --agent cursor --copy -y`

### Reinstall from lockfile

```bash
npx skills experimental_install -y
```

## frontend-design override

Anthropic’s `frontend-design` skill lists **near-black + single vermilion accent + mono data labels** as a common AI default. For FluentForward that combination is **LOCKED brand** (brief §4), not a mistake to “fix”.

When `frontend-design` conflicts with the brief or **`ff-motion`** — especially palette, type families (Inter Tight + IBM Plex Mono), pill buttons, 14px cards, and orange headline phrases — **the brief and `ff-motion` win**.

Distinctiveness must come from motion, product storytelling, layout, and honest mocks — not from changing tokens.

## Explicitly not installed

Remotion, HyperFrames, GSAP skills, PDoomVideo, ClaudeAnimationBase, 21st.dev magic-mcp (per Matt / motion research).

## Discovery check

After clone, agents should see:

- `.agents/skills/motion/SKILL.md`
- `.agents/skills/frontend-design/SKILL.md`
- `.agents/skills/ff-motion/SKILL.md`

Run `npx skills list` from repo root to confirm.
