# Motion research for the FluentForward redesign

**Prepared by:** Web (research only, nothing changed in fluent-site)
**Date:** 12 Nov 2026
**Brief:** `website-brief.md` v0.3 (sections 4, 5, 7.1, 9 read in full; 7.2, 7.4, 7.9 for the motion-bearing pages)
**Source post:** https://x.com/0xclayo/status/2111079749342675440 (X Article "Opus 5.5 Motion Playbook", published 16 Oct 2026 by @0xclayo, who previously posted as @0xkerazcity)

## 0. How this was sourced

- The **full article body** was retrieved through the X connector (title, about 24,000 characters of text and all 48 embedded code blocks and tables). Images and videos inside the article were not viewed, only their captions and surrounding text.
- All **8 posts embedded in the article** were read, plus the **4 posts they quote**, plus the **two sister X Articles** those posts link to (by @flxrnc and @seeconvm). The repos are named at the end of the @seeconvm article ("Repos to clone") and in the install sections of all three articles. The article itself has no GitHub links; its "repos" are the engines in Part 10 and the skills it tells you to install.
- Replies in the thread (11) were checked. One promotes an unrelated video library (Comotion); none add repos.
- Every repo below was shallow-cloned into `/workspace/research/` and read. Star counts and dates come from the GitHub API on 12 Nov 2026.

## 1. What the article says (key points)

1. **Opus does not make video. It writes a program that draws every frame.** Usually one HTML file exposing `window.seek(t)`, which paints the exact frame for time t. Headless Chrome (Playwright) calls `seek` once per frame and screenshots it, and ffmpeg stitches the PNGs into an MP4. Nothing reads a clock, so frame 512 is identical on every run.
2. **Quality comes from two things: the decisions you hand it, and the loop you let it run.** Every line left out of a prompt gets filled with a default, and those defaults are the recognisable "AI look".
3. **"One prompt" is mostly untrue.** The viral pieces were L3 "state specs" (1.5k to 3k characters) or L4 "director's briefs" (9.5k to 19k characters, 6 to 12 hour runs), with 2 to 4 review rounds as normal. Thariq (Claude Code team) summed it up: "the post: Claude one-shot this. The prompt: 10k characters with good takes plus skills, examples and API keys."
4. **Ban the defaults by name.** The named default look: a centred title on a gradient, everything fading in, or fade-and-slide-up on every element, purple and blue gradients, glow, bloom, decorative particles, labels in the corners, turntable spins, linear moves and white-flash logo slams. "Avoid a generic AI look" does not work, because naming nothing just swaps one default for the next.
5. **Replace adjectives with numbers.** "Premium" means entrances on ease-out-quint at 600 to 800 ms, springs at a damping ratio of 0.8 with no overshoot on text, one accent and wide margins. "Calm" means holds of at least 1.5 s, ease-in-out-sine and no overshoot.
6. **The motion maths it gives:**
   - Easing: enter with ease-out, exit with ease-in at about half the duration, cross the screen with ease-in-out, and use linear only for rotation, progress bars and loop phase. Curves: ease-out-expo `0.16,1,0.3,1`, ease-out-quint `0.22,1,0.36,1`, ease-out-cubic `0.33,1,0.68,1`, ease-in-out-quart `0.76,0,0.24,1`.
   - Springs read as expensive. A damping ratio of 1.0 never bounces, 0.7 to 0.85 reads premium, and under 0.6 reads playful. Presets: Snappy 320/30, Default 170/26, Heavy 90/20. **Position and scale may bounce, opacity and colour never.**
   - Durations: UI feedback 100 to 150 ms, UI moves 200 to 300 ms, card or panel entrance 400 to 500 ms, hero reveal 600 to 900 ms, exits about half the entrance.
   - Stagger: words 60 to 120 ms, list items 40 to 80 ms, with the next one starting when the previous is 30 to 50% done.
   - **Text holds: at least 0.3 s per word plus 0.5 s.** Text must not move while it is being read.
   - Staging: one hero move per shot, with everything else travelling 60% as far and starting 100 to 200 ms later. Ambient motion stays under 5% of the hero's travel.
7. **The L3 "state spec" is the most transferable idea.** One container that never cuts. It morphs through states (button, field, loader, check, card, chart), its content swaps 4 frames after the morph starts, and a cursor causes every change with a real click or keystroke.
8. **The critique loop is the method.** Render, look, write notes with frame numbers, fix, re-render. The agent cannot watch video, so you turn the motion into images it can read: a contact sheet (the whole piece as a storyboard), a strip (12 consecutive frames around a fast move), a phone test (360 px wide), motion trails and speed graphs. It then scores itself 1 to 10 on hook, readability at phone size, motion, variety, composition, brand accuracy and sync, fixes the 3 worst problems, and repeats until every score is 8 or above.
9. **Use real assets, never redraw the UI from memory.** Screenshot the real product with Playwright and animate the real thing.
10. **House rules live in a file the agent reads every run** (CLAUDE.md, or for us an AGENTS.md or skill): the render contract, the ban list, a single MOTION object holding every easing and spring value, and the QA gate before showing anything.
11. **Sound, beat grids, GIF timing, X export specs and loudness** take up a large part of the article. All of it is video-only.
12. **Engine choice (Part 10):** plain HTML or Canvas for short loops, Three.js for 3D, Remotion or HyperFrames for video series, and **"motion that lives inside your app: Motion or GSAP"**. That last row is the only one aimed at a live website.

The sister articles add these points:
- @flxrnc's "Motion Lab" printed every follow-up prompt. A 6 s loop took 10 visual follow-ups and 5 sound follow-ups, about 2 h 45 min in total. It also quotes Anthropic's frontend-design skill: "a single orchestrated moment lands better than scattered effects".
- @seeconvm's article gives the "Repos to clone" list and the `npx skills add` commands.
- @rexan_wong's thread (652k impressions) says to use reference videos (whatships.com), install HyperFrames or Remotion and 21st.dev components, ask for 3 storyboard variants, approve stills before motion, then give director-style notes.
- @twoclipping's open-sourced state-spec prompt is the "one shape morphs through 12 UI states" loop.

## 2. Repos and skills

| # | Repo | What it is | Licence | Install | Maturity (12 Nov 2026) | Targets | Recommendation for fluent-site |
|---|---|---|---|---|---|---|---|
| 1 | https://github.com/heygen-com/hyperframes | HTML + CSS + GSAP timelines in, deterministic MP4 out. CLI, studio app and 9 agent skills (hyperframes, cli, registry, figma, style-sampling, reverse-any-video and others) | Apache-2.0 | `npx skills add heygen-com/hyperframes`, or `claude plugin install hyperframes@hyperframes`, or `npx hyperframes skills update`. Needs Node 22+ and ffmpeg | About 83k stars, pushed today | **Video** | **Skip in fluent-site.** Worth a separate `ff-motion-studio` repo later if Matt wants launch clips or LinkedIn videos made from the same components |
| 2 | https://github.com/remotion-dev/skills (and https://github.com/remotion-dev/remotion) | 13 Agent Skills for Remotion (best practices, markup, render, studio, captions, maps, SaaS and more). Video as React components | No licence file in the skills repo. Remotion itself is free only for individuals and companies of up to 3 employees; bigger companies need a company licence | `npx skills add remotion-dev/skills` | Skills about 6.9k stars, pushed 11 Nov. Remotion about 72.7k | **Video** | **Skip.** Video-only, and has licence cost and size implications |
| 3 | https://github.com/JohnHeibel/PDoomVideo | Source for Donald/John's 142 s Opus music video: p5.js + p5.brush, nine chapter files, `render.mjs`, and an Opus-written `ANIMATION_GUIDE.md` used to brief parallel subagents | **None** (all rights reserved by default) | Clone and run `node render.mjs` | About 2.9k stars, last push 25 Sep 2026 | **Video** | **Skip.** Read-only reference for the "guide file briefs subagents" pattern |
| 4 | https://github.com/JohnHeibel/ClaudeAnimationBase | Starter kit for hand-painted character animation in p5.js and p5.brush, with Anthropic's Clawd character, 31 emotions, a renderer that produces contact sheets, strips and stills, and ANIMATION_GUIDE.md | MIT (the Clawd character is Anthropic's) | Clone, `npm install`, `node render.mjs --clip` | About 2.9k stars, last push 24 Sep 2026 | **Video** | **Skip.** Borrow only the idea of a renderer that emits contact sheets for QA |
| 5 | https://github.com/greensock/gsap-skills | Official GSAP skills: core, timeline, ScrollTrigger, plugins, utils, React (`useGSAP`), performance, frameworks. Covers `gsap.matchMedia()` for reduced motion | MIT (skills). GSAP itself is free for commercial use under its own standard licence, with all plugins free since Webflow bought it | `npx skills add https://github.com/greensock/gsap-skills`, or Cursor remote rule `greensock/gsap-skills` | About 18k stars, last commit 21 Apr 2026 | **Live websites** | **Install only if we choose GSAP** (see 4.1). Do not install both GSAP and Motion skills, or the agent will mix libraries |
| 6 | https://github.com/motiondivision/ai-kit | Official Motion (formerly Framer Motion) skill `/motion`: best practices from Motion's creator, free hosted MCP docs search, and CSS `linear()` spring generation, MotionScore audits and a transition editor for Motion+ members | MIT | Cursor marketplace "Motion", or `npx motion-ai` (choose project scope and Cursor). Free tier needs no key | Small repo (about 76 stars), last push 26 Oct 2026, published by Motion itself | **Live websites** | **Install (recommended library).** Free tier only, no Motion+ sign-in unless Matt wants to pay |
| 7 | https://github.com/anthropics/skills (`skills/frontend-design`) | Anthropic's frontend-design skill: anti-template design guidance, "one orchestrated moment", a reduced-motion quality floor, and self-critique with screenshots | Apache-2.0 (LICENSE.txt in the skill) | `npx skills add anthropics/skills --skill frontend-design` | About 193k stars, pushed 6 Nov 2026 | **Live websites** | **Install, with a project note** (see risk 4). It lists "near-black with a single bright vermilion accent", "a monospace face for small data labels" and "#0B0B0B-style tinted black" as AI defaults, which is our locked system. The skill itself says "the brief's own words always win" |
| 8 | https://github.com/21st-dev/magic-mcp | MCP that searches and generates React and Tailwind components (Rexan's tip for UI in videos) | ISC | MCP plus a 21st.dev API key | About 6.5k stars, last push 9 Sep 2026 | Both | **Skip.** It imports someone else's component look into a locked design system and needs a paid key |
| 9 | https://github.com/vercel-labs/skills | The `npx skills` installer CLI used by items 1, 2, 5 and 7. For Cursor at project scope it writes to **`.agents/skills/<name>`** and records a `skills-lock.json` | MIT | `npx skills add <repo>` (Node 22.20+) | Widely used | n/a | **Use it as the installer**, so the installs are reproducible from the lockfile |
| ref | https://whatships.com | Reference library of product launch videos (from Rexan's thread) | n/a | n/a | n/a | Video | Optional mood reference only |

Also checked and ruled out for the site: **Lenis** (https://github.com/darkroomengineering/lenis, MIT, about 17k stars). Smooth-scroll hijacking adds a JS scroll loop, can hurt INP and feels "agency". **Three.js / react-three-fiber** (MIT). WebGL in the hero would hurt LCP on mobile, the brief asks for "CSS or a light JS layer", and the article's own ban list rules out 3D turntables. **Rive** (MIT runtime). Good for state machines, but it needs a designer working in the Rive editor and adds a WASM runtime. Not needed for UI-mock motion that can be real HTML text.

## 3. The technique, and what transfers to a live Next.js site

### Transfers well
| From the article | How it maps to fluent-site |
|---|---|
| Ban the defaults by name | A FluentForward ban list in the project skill (5.3). Note that **the live site's blanket "reveal" (fade up 8px over 0.9 s with staggered children, `Reveal.tsx`) is exactly the default both the article and the frontend-design skill call out.** Retire it as a blanket treatment and keep one orchestrated moment per section |
| Numbers, not adjectives: one MOTION object | `src/lib/motion.ts` plus CSS custom properties (`--ease-out-quint`, `--dur-panel`, spring `linear()` curves) so CSS and JS share one set of numbers. Keep the existing `apple-out` ease `cubic-bezier(.2,.7,.1,1)`, which is close to ease-out-quint, as the house entrance |
| Springs, damping 0.8 to 1.0, no opacity overshoot | Motion springs for position and scale (`stiffness 320, damping 30` for UI, critically damped for type), and CSS `linear()` springs for CSS-only bits |
| One hero move per shot | One hero move per section and one per viewport. Secondary moves travel 60% as far, 100 to 200 ms later |
| State spec: one container that never cuts | The core of the hero: a "problem" pill morphs into an agent card. This **is** "problem in, agent out" |
| Seekable `seek(t)`, a pure function of time, seeded data | Build each signature mock as a **timeline you can scrub**: one `progress` value drives every element. That gives four production wins: (1) the server renders a finished frame, so there is no CLS and it makes sense without JS; (2) reduced motion just renders the final frame; (3) pause and replay controls are trivial (WCAG 2.2.2); (4) Playwright can screenshot any exact moment for QA |
| Critique loop with contact sheets | A dev-only `?motion=still&t=` query plus a Playwright script that captures each mock at set times, at 390 px and 1440 px, tiles them into a contact sheet, and has the Cursor agent score them before showing Matt. This is the most valuable transfer for the mockup phase |
| Real UI, never invented | Mocks use real copy from the brief (the 2.4 problems, the 7.9 example plan, the 7.4 Agent Care items) as **real HTML text**, which also meets "mocks must use real text" (9.3) |
| Text holds of 0.3 s per word plus 0.5 s, and no moving text while it is read | A rule for typed problems and agent step labels. For example, an 11-word problem holds at least 3.8 s before it morphs |
| Seamless loop rules (whole cycles, frame N-1 flows into frame 0) | Only for the one ambient "always on" element, if Matt wants a loop at all |
| 3 storyboard variants, then stills before motion | The process for the Cursor Opus mockup: storyboard frames first, Matt picks, then motion |

### Does not transfer, or would hurt
- **Rendering to MP4 (Remotion, HyperFrames, ffmpeg, subframe motion blur).** The site must not ship hero video (9.4). Motion blur via subframes has no place in live DOM.
- **Sound, beat grids, BPM cutting, LUFS and GIF timing.** None of it applies. No audio on the site.
- **"Something new every 2 to 4 seconds" and "a cut on every beat".** That is showreel pacing for a feed and would be distracting on a calm, operator-grade page. Our cadence is "one moment per section, then stillness".
- **Endless autoplay loops.** WCAG 2.2.2 (Pause, Stop, Hide) requires a pause control for anything that moves for more than 5 s alongside other content. Default to play once, then rest, with a replay control.
- **WebGL, shaders, particles, chrome blobs.** These hurt LCP and INP on mid-range phones, and are on the brief's avoid list and the article's ban list.
- **Canvas-drawn text.** Fails "real text" and screen readers. Use DOM text with transforms.
- **Animating the H1 or LCP element in from opacity 0.** That delays LCP. The H1, subhead and both CTAs render static and immediately.
- **Scroll pinning and scroll-jacking on mobile.** Fights the thumb and can hide the CTA.

## 4. Draft motion approach for FluentForward

### 4.1 Principles
1. **Motion shows work happening and being watched, never spectacle** (section 5). Every animated thing is an agent doing something, a human approving something, or a status changing.
2. **Copy and CTAs never wait for motion.** H1, subhead, footnote and both pills are static, visible on first paint and never covered. Motion lives beside or below copy, never over it.
3. **One orchestrated moment per section, then stillness.** No blanket section fade-ups.
4. **Everything is honest.** Every mock carries the mono "Illustration" or "Example" tag (5, 9.1). No impressive numbers. For eval scores, use a pass label or modest plausible values clearly tagged as illustrations.
5. **Palette discipline.** Ink, paper and a single orange. Orange marks the one moment that matters in each sequence (the agent goes live, the approval, the CTA). Muted green and amber status tokens appear **only inside mocks**, as 4.7 allows.
6. **Reduced motion is a designed state, not a switched-off state.** Each moment has a composed static frame that tells the same story.

### 4.2 Motion tokens (proposal)
- Entrances: house `apple-out` `cubic-bezier(.2,.7,.1,1)`, or ease-out-quint `0.22,1,0.36,1`. Panel entrance 400 to 500 ms, hero mock reveal 700 ms.
- Exits: ease-in at half the entrance duration.
- UI springs: stiffness 320, damping 30 (ratio about 0.84). Containers and morphs: 170/26 (ratio about 1.0). Large type: no spring.
- Stagger: list items 60 ms. Agent steps tick at a "reading pace" of at least 0.3 s per word plus 0.5 s.
- Hover and press: keep the current 4 px card lift and 0.98 press. 150 to 200 ms.
- Allowed properties: `transform`, `opacity`, `clip-path`, and `background-color` on small elements only. Never animate layout properties on scroll.

### 4.3 Signature moments

**1. Hero: "Problem in, agent out" (home, 7.1 and 9.1 #1).**
- H1 and CTAs sit on the left, static. On the right (below on mobile), an ink-2 panel tagged "Example" holds a single pill-shaped intake field.
- An example request from 2.4 types itself in at human speed, for example "Our people spend days building client and management reports." It holds for the reading time, then the **same container morphs** (size, radius and fill on a damping-1.0 spring, with content swapping 4 frames after the morph starts) into an agent card. The card shows the agent's name, 4 steps that tick in turn, a "Human approves" checkpoint and a status row, "Healthy · ran 2 min ago".
- The orange accent appears once, on the moment the agent goes live.
- It cycles through 2 or 3 examples and then **rests on a finished card**, with small "Replay" and "Pause" controls.
- **The idea we would not have thought of:** the pill is a real input. "Try your own" focuses it, the visitor types, and Enter carries the text to `/agent-planner?q=`. The hero animation becomes the Agent Planner's front door, and the secondary CTA is something you can touch.
- The server renders the finished card (no CLS, meaningful without JS). Reduced motion shows the first example's finished card with a "Next example" button.
- Tech: a React client component with a seekable timeline, Motion `layout` or explicit springs for the morph, and DOM text. It loads after hydration and never blocks LCP.

**2. Live agent run (home section 3, 9.1 #2).**
- A large dark panel tagged "Illustration", evolving the current dashboard mock.
- When it is half in view it plays **once**: a request arrives (a mono timestamp row), the agent works through its steps (each step's mono log line appears and its progress bar fills linearly, the one place linear is right), a cursor moves on a curved path and clicks "Approve" (the human-in-the-loop beat, in orange), the output is sent, and the status row settles to "Healthy · ran just now". Later, "ran 2 min ago" updates as text, not motion.
- Replay button. Total length 8 to 10 s.
- The steps use a real 7.9-style example (the monthly client report agent).
- Reduced motion: the completed run with every step visible and timestamps shown.

**3. Ten working days timeline (How it works, and the 3-step strip on home, 9.1 #3).**
- A horizontal rail on desktop and a vertical rail on mobile, from "Scope (before day 1)" to "Agent Care (from day 11)".
- A **CSS scroll-driven animation** (`animation-timeline: view()`) fills the rail and lights each stage as it enters view. It is not pinned and never hijacks scroll, and it runs off the main thread, so INP is unaffected.
- The footnote condition sits permanently beside the rail, never animated, because the honesty is the point.
- Scroll-driven animations became Baseline in all major engines on 27 Oct 2026 (Firefox 159, Safari 26, Chrome 115). Older browsers get the completed static rail via `@supports`.
- Reduced motion: the completed rail.

**4. Agent Care health panel: drift raised, then resolved (Agent Care hero, 9.1 #4).**
- A panel tagged "Illustration" with status, last run and an eval line chart.
- The sequence: the chart draws in (stroke-dashoffset), dips, the status chip turns muted amber "Drifting", an alert row slides in ("Eval below agreed threshold"), a "Fix deployed" row follows, and the line recovers to muted green "Healthy".
- It plays once in view, about 10 s, then rests on the resolved state with a replay control. If Matt wants it always on, it becomes a seamless loop of whole cycles with a visible pause control.
- Reduced motion: the resolved state with a small static event log showing the raised and resolved times.

**5. The plan assembles (Agent Planner surfaces and the "EXAMPLE PLAN, ILLUSTRATION ONLY" block, 9.2).**
- The one-page plan builds section by section into **reserved-height slots** (no layout shift as it streams), with each section fading and settling on an opacity plus 8 px move. That is the one place the house reveal is the right tool.
- An `aria-live="polite"` region announces each section once, not character by character.
- Morgan owns the tool; we define the motion tokens and the example block.

**Micro-interactions (site-wide):** keep the pill press (0.98) and the card lift. Add a spring on the mobile sticky "Scope your agent" pill when it appears after the first scroll (9.1 #9). Nothing else.

### 4.4 Recommended stack
| Need | Choice | Why |
|---|---|---|
| Scroll-linked progress (timeline, rails) | **CSS scroll-driven animations** (`view()`, `scroll()`) with `@supports` fallback | Zero JS, off the main thread, now Baseline |
| Entrances, hover, press, CSS springs | **CSS** transitions and keyframes, `@starting-style`, `linear()` spring curves | Lightest option, which matches 9.4's "CSS or a light JS layer" |
| Orchestrated mocks (hero morph, agent run, health panel) | **Motion** (`motion/react`, MIT) with `LazyMotion` + `m` components, `MotionConfig reducedMotion="user"` and `useReducedMotion` | Built for React, layout morphs are first class, small when lazy-loaded, works with the repo's Next 14 and React 18, and has an official skill |
| Alternative if scroll choreography grows | GSAP + ScrollTrigger (free, with an official skill) | Better for pinned, scrubbed scenes, but heavier and imperative. **Pick one library, not both** |
| Not used | Lenis, Three.js and WebGL, Rive, Lottie, video, Remotion and HyperFrames in the site | Performance, accessibility, brief section 9.4, or video-only |

### 4.5 Accessibility and performance guardrails
- WCAG 2.2 AA:
  - Pause, stop and replay controls on anything that runs longer than 5 s (2.2.2).
  - Honour `prefers-reduced-motion` with the composed static frames.
  - Keep visible focus states.
  - Never move focus during animations.
  - Typed text is `aria-hidden`, with the full sentence in visually hidden text.
  - Mocks are real text and tagged.
- Contrast: orange on paper only for large display text (3.05:1). Status chips inside mocks are checked against their panel colour.
- CWV:
  - LCP: H1 is static text and fonts stay on `next/font`.
  - CLS: every mock has fixed or aspect-ratio dimensions and the server renders the final frame.
  - INP: no scroll handlers, motion work happens after idle, and mocks below the fold are lazy-loaded with `next/dynamic` plus IntersectionObserver.
  - Budget: under 30 KB gzipped of motion JS on the home page (a proposal).
- QA gate before Matt sees anything:
  - A Playwright contact sheet of each moment at 390 px and 1440 px, with reduced motion on and off.
  - The agent scores 1 to 10 on clarity of story, readability at 390 px, motion quality (no linear position moves, no pops), restraint (one hero move per section), brand accuracy (tokens only), accessibility and CWV.
  - It fixes the 3 worst problems and repeats until every score is 8 or above.
  - Lighthouse mobile run on the preview: target LCP under 2.5 s, CLS under 0.1, accessibility 95 or above.

## 5. Skills to install into fluent-site, and the mockup brief

### 5.1 Install (project scope, committed, via `npx skills` into `.agents/skills/`, which Cursor reads at project level)
1. **`motion`** from motiondivision/ai-kit (`npx motion-ai`, project scope, Cursor; or the Cursor marketplace). Free MCP docs search. No Motion+.
2. **`frontend-design`** from anthropics/skills (`npx skills add anthropics/skills --skill frontend-design`). Pair it with a line in AGENTS.md: "The brief's locked palette and type win over this skill's list of defaults."
3. **A new project skill, `ff-motion`** (written by us, in `.agents/skills/ff-motion/SKILL.md`). This is the article's "house rules" file and the most valuable install. Contents:
   - the tokens from 4.2;
   - the ban list from 5.3;
   - the signature moments and their reduced-motion frames;
   - the seekable-timeline contract for mocks (`progress`-driven, seeded, SSR final frame, `?motion=still&t=`);
   - the Playwright contact-sheet script and scoring rubric;
   - the honesty rules (tags, no invented proof, kill list).
4. **`gsap-skills`** only if the mockup chooses GSAP instead of Motion.

### 5.2 Skip
Remotion skills, the HyperFrames skills (keep for a future separate video repo), PDoomVideo, ClaudeAnimationBase, 21st.dev Magic MCP, Lenis, and any Three.js or shader kit.

### 5.3 FluentForward ban list (for the skill and the mockup prompt)
- Purple or blue gradients, glow, bloom, lens flares, sparkles and particles.
- Robots, brains, circuit boards and floating chat bubbles.
- A centred title on a gradient.
- Fade-and-slide-up on every section, and everything fading in at once.
- Linear moves on position.
- Bouncy easing on text, and opacity or colour overshoot.
- Turntable spins and 3D for decoration.
- Text that moves while it is read.
- Scroll-jacking and pinned scenes on mobile.
- Autoplay loops without a pause control.
- Motion over or near the CTAs and H1.
- Impressive metrics in mocks, and any mock without its "Illustration" or "Example" tag.
- New hues outside ink, paper and orange (except the muted status tokens inside mocks).
- The hero hairline cutting through the H1.

### 5.4 Mockup brief for the Cursor agent (Opus), outline
- **GOAL:** a reviewable motion mockup of Home (hero, live agent run, 3-step and 10-day strip, Planner band, closing CTA), plus the Agent Care health panel. Matt should be able to judge the motion before the real build.
- **OUTPUT:**
  - a new branch from a fresh `origin/main`;
  - a `noindex` route, for example `/mockup/motion`, using real tokens and fonts;
  - a Vercel preview URL;
  - no changes to live pages.
- **PROCESS GATES:**
  1. Read the brief, this file and `ff-motion`.
  2. Write a state list per moment with timings in ms.
  3. Make **3 storyboard variants** of the hero as stills and stop for Matt's pick. If running autonomously, pick one and explain why.
  4. Build the chosen variant.
  5. Run the contact-sheet critique loop until every score is 8 or above.
  6. Lighthouse mobile run.
  7. Report the preview URL, the contact sheets and the scores.
- **BANS:** section 5.3. **A11Y and CWV:** section 4.5.
- **Effort:** high. The article suggests xhigh only when the prompt is vague, and ours is not.

## 6. Risks and open choices for Matt
1. **Motion or GSAP.** I recommend CSS plus Motion. GSAP is the stronger choice only if Matt wants pinned, scrubbed scroll scenes, which I advise against on mobile.
2. **Play once or always-on loops.** The "always on" motif tempts endless loops. WCAG 2.2.2 then needs visible pause controls, and loops pull attention from copy. I recommend play once, rest, replay, and "always on" carried by live-updating text timestamps.
3. **The hero "try your own" input** depends on `/agent-planner?q=` existing. Until Morgan's tool is ready it can land on the page shell with the text kept.
4. **The frontend-design skill flags our locked look as an AI default** (near-black plus one vermilion, mono labels, tinted black). The brief locks it, so motion, type scale and real product storytelling have to carry the distinctiveness. This is not a reason to change the palette. Matt should know an agent may push back on it.
5. **Status colours in mocks** (muted green and amber) are allowed by 4.7 but need defining as tokens and checking for contrast.
6. **Eval scores and timestamps in mocks** could read as proof. I recommend pass or fail labels or modest values, always tagged "Illustration".
7. **Mockup location.** A `noindex` route on a preview branch inside fluent-site (recommended), or a separate prototype repo.
8. **Repo state.** The local clone at `/workspace/fluent-site` is 8 commits behind `origin/main` and has **staged, uncommitted changes** (README.md, next.config.mjs and two cookie-consent scripts). Whoever runs the Cursor agent should branch from a fresh `origin/main` and leave that staged work alone. The repo is on Next 14 and React 18. Motion supports both. Next 14 has no built-in View Transitions support, so don't rely on them.
9. **Licences, if we ever make video.** Remotion requires a company licence above 3 employees. HyperFrames is Apache-2.0 with no such rule, so it would be my choice for a future social clip repo. PDoomVideo has no licence, so read it but don't copy it.
10. **Remove the blanket `Reveal` fade-up.** It would change the feel of every page, so Matt should see it in the mockup first.

## 7. Sources
- Article: https://x.com/0xclayo/status/2111079749342675440
- Embedded posts:
  - https://x.com/rexan_wong/status/2103707054108299437
  - https://x.com/donaldjewkes/status/2102801274173587569 (full prompt: https://x.com/donaldjewkes/status/2102801469976248500)
  - https://x.com/stephanlivera/status/2103315922098470926
  - https://x.com/flxrnc/status/2108899503092740561
  - https://x.com/trq212/status/2102870353781641416
  - https://x.com/twoclipping/status/2103273003555402193
  - https://x.com/0xkerazcity/status/2109705700930957328
  - https://x.com/claudeai/status/2102435511222890900
- Sister articles: https://x.com/flxrnc/status/2105311836190978392 ("Opus 5.5 Motion Lab") and https://x.com/seeconvm/status/2106096193235259564 ("What the Viral 'One-Prompt' Videos Are Hiding", which holds the repo list)
- Repos: as listed in section 2
- Motion AI Kit docs: https://motion.dev/docs/ai-kit
- Scroll-driven animations support: https://caniuse.com/wf-scroll-driven-animations and https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/159
