# FluentForward website redesign brief

**For:** an AI design agent with design and front-end skills
**Owner:** Matt Todd, FluentForward Limited (UK)
**Site:** https://www.fluentforward.com (Next.js on Vercel, Tailwind v4 tokens)
**Version:** v0.3, 12 Nov 2026. This version changes direction: solution-aware positioning, the Profit Constraint Score and the webinar retired, the 10-Day Agent Build as the entry offer, and the Agent Planner as the new lead magnet. Design tokens come from the live CSS bundle on the same date.
**Canonical copy:** `/home/box/fluentforward-website/website-brief.md`

---

## 1. Purpose and how to use this brief

FluentForward builds and runs AI agents for services firms. Every live agent is looked after under a monthly **Agent Care** service. The current site is written for buyers who do not yet know what their problem is: it diagnoses a "profit problem" and sends them to a self-scoring quiz. **That approach is retired.** Our buyers are **solution-aware**. They already have a business problem in mind and want an AI agent to solve it. The new site must make it easy to bring us that problem and get a working agent, fast.

Matt likes the current look and feel: the layout, the near-black and warm-paper palette, the orange accent and the type. **Keep it and make it better.** Don't reinvent it.

Every instruction in this brief carries one of these labels:

| Label | Meaning |
|---|---|
| **LOCKED** | Must not change. Ask Matt before deviating. |
| **LOCKED (pending wording)** | The direction is approved. Matt will sign off the exact words, so design around this copy. |
| **KEEP AND ELEVATE** | Start from this and refine it. Small, documented changes are fine. |
| **YOUR CALL** | You have creative freedom, within the voice and proof rules. |

Copy that is not locked is strong draft copy. You may tighten it, but keep the meaning and follow the voice rules (section 8).

**Hard rules that override everything**
1. **Never assume the buyer's problem.** The buyer tells us what they need. We never diagnose them on the page.
2. **No invented proof.** That means no fabricated logos, testimonials, client names, results, percentages, user counts or awards. Design proof slots and fill them with placeholders.
3. **No public prices.** Say "fixed price" and "monthly per agent", never a figure.
4. **The kill list (section 8.3) never appears** on a buyer surface.
5. **No certification claims.** Use the placeholder.

---

## 2. Business context and audience

### 2.1 What FluentForward is now
FluentForward builds, hosts and runs AI agents and automations for UK services firms of about 20 to 200 people. Agents are **managed and FF-hosted by default**.

**Ownership line (LOCKED):** "You own your data, processes and outputs. We host, run and improve the agents."

The feeling we want is "you bring them a problem, and ten working days later an agent is doing that work, and they keep it working". The feeling we don't want is "they are consultants who will tell us what is wrong with our business".

*Internal note, not for buyer copy:* our internal delivery method for scoping and sequencing work used to be called "Profit Engine". It may stay as an internal name. It is **not** a product, page, nav item or headline.

### 2.2 Offer ladder
| Step | Name | What the buyer gets | Price language |
|---|---|---|---|
| Entry | **10-Day Agent Build** (LOCKED pending Matt's final wording) | One agent, built for one problem the buyer brings, live in 10 working days\* | Fixed price |
| Continuity | **Agent Care** (LOCKED name) | Always-on monitoring, evals, drift fixes, small improvements, connector and model updates for each live agent | Monthly per agent |
| Add-on | **Bespoke builds** | Custom work beyond the standard agent pattern | Scoped and priced separately |

**Promise (LOCKED):** "Live in 10 working days\*."
\* **Conditions footnote (LOCKED in substance; Matt to confirm the exact wording):** "Once we have access to your systems, the data the agent needs, and scope agreed in writing." Show this footnote wherever the 10-day promise appears.

**Naming (LOCKED):**
- The continuity product is **Agent Care** only. Never use "Run" as a product name. The verb "run" is fine.
- Never say "Profit Engine" to buyers.

**Design implication:** the 10-Day Agent Build is how a firm joins. Agent Care is where it stays. Firms add a second and third agent over time. The site should make "your first agent" feel like the start of a fleet.

### 2.3 Ideal customer
- Owner-led agencies, consultancies, and professional and managed services firms of about 20 to 200 people. UK first.
- Good sector fits: Legal and Finance (including trusts and regulated professional services). Treat these as a bias, not an exclusive list.
- **Solution-aware.** They have already decided AI could help with a specific problem: "we drown in reporting", "leads go cold", "intake takes days". They want someone credible to build it properly and keep it working.
- Not a fit: SaaS or product-core businesses, teams under about 10, anyone buying a chatbot licence or day-rate developers.

### 2.4 Problems buyers bring (examples, never assumptions)
Use these as *examples of what people ask us for*. Never use them as a diagnosis of the reader.
- "Our people spend days building client and management reports."
- "Leads and proposals go quiet because no one follows up in time."
- "Client intake and onboarding is slow and manual."
- "Leadership can't see what is happening without chasing three systems."
- "Senior people are stuck doing admin that doesn't need their judgement."
- "We tried ChatGPT internally and it never turned into anything reliable."

### 2.5 Objections the site must answer
| Objection | Where it is answered | Core answer |
|---|---|---|
| "Is our data safe?" | Security page, plus a strip on Home | Ownership line, data kept separate per client, exportable on exit, [CERTIFICATION PLACEHOLDER] |
| "What will it cost?" | Agents page, Agent Care page, FAQ | Fixed price to build, monthly per agent to run, no day rates, terms agreed in writing |
| "Is this just consulting?" | Home, How it works | You bring the problem. We ship a working agent in 10 working days. No diagnosis phase, no decks. |
| "Can you actually build what we need?" | Scoping call, Agents page | We scope it with you on the call and tell you straight if an agent is the wrong answer |
| "Will it work with our tools?" | Agents page, FAQ | It connects to the tools you already use. We confirm fit on the scoping call. |
| "Who maintains it when it drifts or breaks?" | Agent Care page | We do. That is what Agent Care is. |
| "What if we leave?" | Security page, FAQ | Ownership line. Your data, processes and outputs are exportable on exit. |
| "Is 10 days real?" | Agents page, How it works | It is a fixed-scope build with clear conditions (the footnote), and the timeline is shown day by day |

---

## 3. Site goals and success measures

**Primary conversion:** book a scoping call.
- **Mechanism (LOCKED):** a direct booking or scoping call. It is not a quiz, a score or a gated download.
- **Working CTA label (YOUR CALL for copy):** "Scope your agent". Other labels you could test: "Bring us your problem", "Book a scoping call".

**Lead magnet and secondary conversion: the Agent Planner.** The direction is approved. Name and URL are YOUR CALL, pending Matt.
- **Working name:** "Agent Planner". **Tagline:** "Describe a problem or process. See your first agent."
- It is a simple agentic tool on the site (suggested URL `/agent-planner`).
- The visitor describes a problem or process and answers 2 or 3 follow-up questions.
- They see a partial first-agent plan straight away. The full plan is emailed to them, so the email is captured at the point of value.
- The plan ends in the scoping CTA.
- It is the **hero's secondary CTA** and the main magnet across the site. Full briefs are in 7.9 and 9.2.

**Tertiary:** a short written enquiry on the scoping page, for buyers who would rather write first. Fields: name, firm, "What problem do you want an agent to solve?" and email. The email fallback stays `hello@fluentforward.com`.

**Webinar: killed for now (12 Nov).** It is removed from the sitemap, CTAs and pages. Its URLs are in the redirect map (6.3). A new webinar may come later.

**Paid ads:** these stay on platform instant forms for now. The Agent Planner is a site magnet, so don't design ad landing pages around it unless Matt asks.

Every page ends in the scoping CTA. Keep the current button pattern: an orange primary pill ("Scope your agent") and a ghost pill ("Try the Agent Planner").

**Success measures (all targets are assumptions; baselines are open with Matt):**
| Measure | Working target (assumption) |
|---|---|
| Visit to scoping call booked | Baseline to be set after launch, then improve |
| Visit to Agent Planner start, and start to full-plan email captured | Baseline to be set after launch |
| Agent Planner plan to scoping call booked | Baseline to be set after launch |
| Scoping call to 10-Day Agent Build signed | Tracked in CRM; baseline TBC |
| Mobile LCP | Under 2.5s |
| Lighthouse accessibility | 95 or above |
| First-screen clarity | A first-time visitor can say "they build and run AI agents for problems like mine, in 10 days" (test with 5 people) |

---

> **Note on section 4 (v0.3):** this section records the live site *as found*. Keep the visual system. The *content* inside some current components is retired: the "PROFIT ENGINE" dashboard mock, the Offers / Demand / Delivery tiles, the "BINDING" tag, the Score button and the profit-framed headlines. Keep the styling and replace the content, following sections 7 and 9.

## 4. Current design system (KEEP AND ELEVATE)

Taken from the live CSS bundle (`/_next/static/css/26254f3daaaceaea.css`) and the rendered HTML on 12 Nov 2026. These are the real values, not estimates.

### 4.1 Colour tokens
| Token | Hex | Role on the live site |
|---|---|---|
| `ink` | `#0a0a0b` | Page body background, dark hero and closing CTA sections, primary text on light sections, dark buttons |
| `ink-2` | `#121214` | Raised dark surfaces |
| `ink-3` | `#1b1b1e` | Dark button hover, dark cards |
| (deep) | `#070708` | Deepest dark, used sparingly |
| `paper` | `#f4f4f1` | Main light section background (warm off-white), light card fill |
| `paper-2` | `#eaeae6` | Alternate light section background (gives the section rhythm) |
| `paper-3` / `white` | `#ffffff` | Headline text on dark heroes, highlights |
| `accent` (also `steel`) | `#ff4a1c` | Primary CTA fill, headline highlight words, logo mark, eyebrow dot, binding-constraint flag |
| `accent-2` | `#ff6a3d` | Primary CTA hover |
| `steel-soft` | `#ff4a1c1f` | Focus ring colour, soft accent tint |
| accent glow | `#ff4a1c2e` / `#ff4a1c1a` | Radial glows on dark sections, eyebrow dot halo |
| `slate` | `#4a4a4f` | Body copy on light sections |
| `mist-d` | `#5e5e63` | Eyebrow and label text on light |
| `mist` | `#8b8b90` | Footer text, muted meta |
| `lede-dark` | `#bdbdc2` | Body and lede text on dark sections |
| nav link | `#cfcfd3` | Nav link default (hovers to `paper`) |
| footer wordmark | `#18181b` | Giant ghost wordmark in the footer |
| `line` | `#0a0a0b1f` | Hairline borders on light (ink at about 12%) |
| `line-strong` | `#0a0a0b2e` | Stronger dividers on light (about 18%) |
| `line-dark` | `#ffffff1f` | Hairlines on dark (white at about 12%) |
| ghost button border | `white/28` | Secondary pill outline on dark, hovers to solid white with `white/6` fill |
| selection | bg `#ff4a1c`, text `#0a0a0b` | Text selection |

**Palette character:** near-black plus warm paper, with one hot orange accent. No other hues. Greys are neutral with a very slight cool cast. Light and dark sections alternate.

### 4.2 Typography
| Role | Family | Weights | Notes |
|---|---|---|---|
| Sans / display | **Inter Tight** (Google font via `next/font`, variable 100 to 900) | 500, 600, 700 used | `--font-sans` and `--font-display`. Fallback is Arial with metric overrides. |
| Mono | **IBM Plex Mono** (via `next/font`) | 400, 500 | Eyebrows, labels, dashboard chrome, "ILLUSTRATION ONLY" tags. The CSS variable is misleadingly named `--font-geist-mono`, but it loads IBM Plex Mono. |

**Type scale (from CSS variables):**
| Token | Size | Line height | Tracking | Weight |
|---|---|---|---|---|
| `text-display` (H1) | `clamp(3.125rem, 7.4vw, 7.75rem)` | 0.92 | -0.048em | 600 |
| `text-section` (H2) | `clamp(2.5rem, 5.4vw, 5rem)` | 0.98 | -0.035em | 600 |
| `text-display-sm` | `clamp(2.5rem, 5.4vw, 5rem)` | 0.98 | -0.035em | 600 |
| `text-sub` | `clamp(1.35rem, 2.1vw, 1.75rem)` | 1.22 | -0.022em | 600 |
| `text-lede` | `clamp(1.0625rem, 1.45vw, 1.3125rem)` | 1.5 | default | 400 |
| H3 / card title | 1.125rem | default | -0.015em | 500 |
| body | 1rem (some 0.9375rem) | 1.5 to 1.72 | default | 400 |
| `text-label` / eyebrow | 0.75rem (12px), mono, uppercase | 1.2 | 0.08em | 400 to 500 |
| footer wordmark | `clamp(2.75rem, 12.2vw, 11.25rem)` | 0.8 | -0.065em | 700 |

Headlines use `text-balance` and are capped at about 22 to 32ch. Prose is capped at 65ch.

**Signature move:** headlines are huge, tight and near-black (or white on dark), and the key phrase is coloured `accent`. Examples on the live site: "Three ways a busy firm stays **unprofitable.**" and "Find your binding constraint in **three minutes**."

### 4.3 Spacing, radius, elevation, motion
- Base spacing unit is `0.25rem` (Tailwind v4).
- Page container is `max-width: 1360px`, with `px-6` (24px) rising to `sm:px-8` (32px), centred.
- Section padding is `py-16 md:py-24` (64 to 96px) for standard sections and `py-24 md:py-36` (96 to 144px) for feature, dark and CTA sections.
- Radius: buttons `999px` (full pill), cards `14px`.
- Shadows:
  - `shadow-card-hover`: `0 2px 4px #00000014, 0 30px 60px -30px #00000059`
  - `shadow-lift`: `0 40px 80px -30px #000c`
  - dark panels add an inset top highlight, `0 1px 0 #ffffff0f inset`
- Motion:
  - ease `cubic-bezier(.2,.7,.1,1)` ("apple-out")
  - reveal is 0.9s, fading up from translateY(8px), with staggered children
  - hover transitions are 0.2 to 0.3s
  - the card hover lifts by 4px and gains the hover shadow
  - buttons scale to 0.98 when pressed

### 4.4 Components on the live site
- **Primary button:** pill, `bg-accent`, `text-ink` (dark text on orange), semibold, about `px-7 py-3.5`, 15px text. Hovers to `accent-2` and presses to scale 0.98. It can carry a small "3 min" chip.
- **Secondary button (on dark):** pill, transparent with a `white/28` border and `paper` text. Hovers to a solid white border with a `white/6` fill. It carries a trailing arrow (→).
- **Dark button (on light):** pill, `bg-ink`, `text-paper`. Hovers to `ink-3`.
- **Card:** `rounded-[14px]`, 1px `line` border, `bg-paper`, `p-8 md:p-9`, with an optional hover lift.
- **Eyebrow:** an 8px orange dot with a 4px orange halo, then mono uppercase 12px text at 0.08em tracking in `mist-d`.
- **Dashboard mock (hero):** a dark `ink-2` panel with a hairline border and mono uppercase chrome ("PROFIT ENGINE", "ILLUSTRATION ONLY" in a dashed-border tag). It holds three small KPI tiles for Offers, Demand and Delivery, and the binding tile has an orange border, an orange tint and a "BINDING" tag. It is labelled as an illustration. **Keep the honesty labelling.**
- **Sector marquee:** a scrolling strip of firm types (agencies, management consultancies, professional services firms, managed service providers, consulting agencies).
- **Problem columns:** three numbered columns (01 Offers, 02 Demand, 03 Delivery) separated by hairlines.
- **Numbered step list:** full-width rows with a hairline between each.
- **Proof carousel:** a large lifted card with a mono sector tag, a huge headline, body, a quote block with a left rule, a "Read the proof →" link and arrow controls at the sides.
- **Webinar band:** a light band with faint vertical rules every 120px (repeating gradient). The details sit in a right-hand table (Format, Hosted by, Date) above a full-width dark "Register free" button. The CSS also defines an orange variant (`.webinar-band` uses `bg-accent`).
- **Closing CTA:** a dark section with a soft orange radial glow (`section-ambient-dark`), an eyebrow, a huge headline with an accent phrase, and two buttons.
- **Header:** sticky, `ink` at 72% opacity with a 24px backdrop blur. On the left is the logo, an orange chevron mark (clip-path polygon) plus "FluentForward" in Inter Tight bold at -0.03em. On the right are the nav links and an orange "Get your Profit Constraint Score" pill. "Resources" carries a small outlined "WEBINAR" mono chip.
- **Footer:** dark. The email `hello@fluentforward.com` sits large and underlined. Three columns follow (The offer / Company / Legal) with mono uppercase column labels. Below is a giant ghost "FluentForward" wordmark in `#18181b`, then the copyright, "Registered in England and Wales." and "Cookie settings".
- **Cookie banner:** a light bottom sheet with Reject / Manage / Accept (dark pill).

### 4.5 Section rhythm on the current home page
1. A dark hero (with an orange radial glow at the bottom right and a hairline across it) and the dashboard mock on the right.
2. The sector marquee.
3. The problem section on `paper`.
4. "What changes" on `paper-2`.
5. "How you get there" on `paper-2`.
6. Who it is for on `paper`.
7. How it works on `paper-2`.
8. Proof on `paper`.
9. The webinar band.
10. The closing CTA on `ink`.
11. The footer on `ink`.

In short, the page opens and closes dark, with alternating warm paper in between.

### 4.6 Visual impressions (from screenshots at 1440px and 390px)
- **Strengths:** confident, editorial, operator-grade. The giant tight headlines and the single orange are distinctive. The dashboard mock is the strongest "product" signal on the site.
- **Weaknesses to fix:**
  - The middle of the page turns into long, text-heavy, consultant-style paragraphs with small body text.
  - Too many sections repeat the same claim.
  - There are no visuals of agents doing work.
  - The hero hairline (`.hero-ambient:after`) cuts through the H1 at desktop widths, which looks accidental.
  - The light sections between the dark ends feel flat.
  - On mobile the problem columns become a long wall of text.

### 4.7 What may evolve (YOUR CALL, within limits)
| Element | Status |
|---|---|
| Ink / paper / orange palette, and orange as the only accent | **LOCKED** |
| Inter Tight + IBM Plex Mono | **LOCKED** (you may add weights or optical sizes from the same families) |
| Pill buttons and the 14px card radius | KEEP AND ELEVATE |
| Huge tight headlines with an accent phrase | KEEP AND ELEVATE |
| Dark-ends / paper-middle rhythm | KEEP AND ELEVATE |
| Logo mark and wordmark | **LOCKED** |
| Adding functional status colours *only inside dashboard and agent UI mocks* (e.g. a muted green "healthy", an amber "drifting") | YOUR CALL. Keep them desaturated, keep them out of the marketing chrome, and document them as tokens. |
| New textures, grids, data-viz styles, illustration language, motion | YOUR CALL |
| Section order, layouts, density | YOUR CALL |

---

## 5. Creative direction (mostly YOUR CALL)

**Feel:** calm, premium, operator-grade. It should feel like a product company that runs AI for you, not an agency pitching ideas. Quiet confidence, no hype. The site should feel *live*: agents are running, being watched and getting better.

**Central motifs**
1. **Problem in, agent out.** The buyer's words become a working agent. This is the story the hero, the Agent Planner and the How it works page all tell.
2. **Always on.** Agent status rows, last-run timestamps ("ran 2 min ago"), eval scores and a drift alert raised then resolved. Use motion to show work happening and being watched, not spectacle.
3. **Ten working days.** A visible, honest day-by-day timeline that makes the promise feel real.

**Quality bar (for craft only, don't copy):**
- the restraint and product storytelling of Linear, Vercel and Stripe marketing pages;
- the live-status clarity of good observability dashboards;
- editorial confidence in the type.

**Avoid:**
- Generic AI visuals: purple and blue gradients, glowing brains, robots, sparkles, circuit boards, floating chat bubbles.
- Consulting stock photography.
- Fake dashboards with impressive numbers presented as real. Every mock carries an "Illustration" or "Example" tag in mono, as now.
- Logo walls, testimonial carousels and "trusted by" strips until real ones exist.
- Diagnostic or quiz framing ("find out what is wrong with your firm").
- Walls of paragraphs. If a section needs more than about 60 words of body, it probably needs a visual.

**Freedom:** you choose the illustration system, data-viz language, motion design, layouts, hero composition and new component patterns. Give us at least one idea we would not have thought of.

---

## 6. IA and sitemap

### 6.1 Current pages (found on the live site, 12 Nov 2026)
| URL | Status | Notes |
|---|---|---|
| `/` | 200 | Home |
| `/profit-engine` | 200 | Old method page (retired name) |
| `/ways-we-work` | 200 | Old model: on-ramp, Run, co-build modes, developer placement |
| `/how-it-works` | 200 | Overlaps with the two pages above |
| `/strategy-blueprints` | 200 | Blueprints on recurring problems (CRM, inbox and so on), labelled "Interaction insights" in the footer |
| `/webinar` | 200 | Webinar registration (killed) |
| `/review` | 200 | Post-webinar Constraint review booking |
| `/contact` | 200 | Constraint review call booking |
| `/privacy`, `/terms`, `/cookies` | 200 | Legal |
| `/about` | 301 to `/` | |
| `/client-capacity` | 301 to `/profit-engine` | Legacy |
| `/pricing` | 301 to `/ways-we-work` | |
| `client.fluentforward.com/profit-constraint-score` | live | Score app (retired) |

### 6.2 New sitemap
| Page | URL | Notes |
|---|---|---|
| Home | `/` | |
| How it works | `/how-it-works` | Rebuilt. Replaces `/profit-engine`. |
| Agents | `/agents` | New. Example agents by function and the ways to start. |
| Agent Care | `/agent-care` | New |
| Agent Planner | `/agent-planner` | New lead magnet. Name and URL are YOUR CALL, pending Matt. |
| Security and data | `/security` | New |
| Proof | `/proof` | Replaces `/#proof` |
| About | `/about` | Rebuild. It currently redirects to `/`. |
| Scope your agent | `/contact` | The scoping call booking and written enquiry. Label is YOUR CALL. |
| Resources | `/strategy-blueprints` | Keep the URL. The nav label is "Resources". |
| Legal | `/privacy`, `/terms`, `/cookies` | Keep |

**Primary nav:** How it works · Agents · Agent Care · Security · Proof · Resources · Agent Planner (text link or chip, YOUR CALL) · **[Scope your agent]**
**Footer:** keep the current structure: the big email, three columns ("What we do" / "Company" / "Legal") and the ghost wordmark. Add the new pages and remove the retired ones.

### 6.3 Redirect map
| From | To | Status |
|---|---|---|
| `/ways-we-work` | `/agents` | **Decided** (301) |
| `/pricing` | `/agents` | **Decided** (301) |
| `/profit-engine` | `/how-it-works` | Proposed (301) |
| `/client-capacity` | `/how-it-works` | Proposed (currently goes to `/profit-engine`, so avoid a redirect chain) |
| `/profit-constraint-score` | `[TARGET: Matt to confirm, suggest /agent-planner]` | **Retired** |
| `client.fluentforward.com/profit-constraint-score` | `[TARGET: Matt to confirm, suggest https://www.fluentforward.com/agent-planner]` | **Retired.** It lives in the portal app (Morgan), not the site repo. |
| `/webinar` | `[TARGET: Matt to confirm, suggest /]` | **Retired** (webinar killed for now) |
| `/review` | `[TARGET: Matt to confirm, suggest /contact]` | **Retired** (post-webinar booking page) |
| `/#webinar`, `/#proof` | n/a | These are in-page anchors. Remove the links. `/proof` replaces `#proof`. |
| `/about` | none | Stop redirecting it. It becomes a real page. |

---

## 7. Page-by-page briefs

Each page brief covers four things: **Job** · **Key messages** · **Required copy** · **Your call**. Every page ends with the scoping CTA. Most pages also offer the Agent Planner as the softer option.

### 7.1 Home `/`
**Job:** in five seconds, a services-firm owner with a problem in mind thinks "they will build an agent for *my* problem, quickly, and look after it". Then they book a scoping call, or try the Agent Planner.

**Key messages, in order:**
1. Bring us the problem.
2. We build the agent.
3. It is live in 10 working days.
4. We host it and look after it.
5. It is safe, and your data stays yours.
6. Scope yours now.

**Hero headline (LOCKED pending Matt's sign-off on wording):**
**"Tell us the problem. We'll build the agent that fixes it."**

**Hero subhead (LOCKED pending Matt's sign-off on wording):**
"Live in 10 working days\*, hosted and looked after by us, improving every month."
(Footnote under the hero, small mono: "\*Once we have access to your systems, the data the agent needs, and scope agreed in writing.")

The alternates are in Appendix A.

**Hero CTAs:**
- Primary (orange pill): **"Scope your agent"**. This is a direct booking or scoping call, so the mechanism is LOCKED. The label is YOUR CALL.
- Secondary (ghost pill): **"Try the Agent Planner"**. Microcopy: "Describe a problem. See your first agent in under three minutes."

**Sections (suggested; order and form are YOUR CALL):**
1. **Problems people bring us.** H2: "What would you hand to an **agent**?" Show a row of real-sounding requests as cards or quotes, taken from 2.4. Label them "Examples of what firms ask for". Each one links to the matching example agent on `/agents`. Don't phrase them as a diagnosis of the reader.
2. **How it works in three steps.**
   - **Scope:** "A short call. You tell us the problem; we agree what the agent does."
   - **Build:** "Fixed price. Live in 10 working days\*."
   - **Agent Care:** "We host it, watch it and improve it, every month."
3. **Live agent moment.** A large animated illustration showing an agent run: input arrives, the agent works through its steps, a human approves, the output is sent, and a status row reads "Healthy · ran 2 min ago". Tag it "Illustration". This evolves the current dashboard mock.
4. **Why firms choose this (value equation in plain words).**
   - "**Your problem, not our pitch.** We build what you ask for, scoped in writing."
   - "**Fast.** Live in 10 working days\*, not a six-month programme."
   - "**Done for you.** We build, host and maintain it. Your team just uses it."
   - "**It keeps working.** Agent Care catches drift and keeps improving it."
   - "**Clear cost.** Fixed price to build, monthly per agent to run. No day rates."
5. **Agent Planner band.** H2: "Describe a problem or process. See your first **agent**." This is an inline entry box with a placeholder such as "e.g. We spend two days a month building client reports from three systems". The button "Plan my agent" goes to `/agent-planner` with the text carried over.
6. **Not consulting.** H2: "No diagnosis phase. No decks. A working **agent**." Body: "You don't pay us to tell you what is wrong. You tell us what you need, and we build it, run it and keep it improving."
7. **Security strip.** The ownership line (LOCKED), then: "Kept separate per client. Exportable when you leave. [CERTIFICATION PLACEHOLDER]". Link: "How we handle your data →"
8. **Proof slot.** `[CASE STUDY: anonymised UK trust, AI insights agent, results TBC, needs client consent before any use]`
9. **Who it is for / where we draw the line.** A short "not a fit" list.
10. **Closing CTA.** H2: "Got a problem an agent should **solve**?" Buttons: "Scope your agent" and "Try the Agent Planner". Microcopy: "If an agent is the wrong answer, we will tell you on the call."

**Your call:** the hero composition (headline plus a live agent mock, or a "type your problem" hero that hands off to the Planner), the motion, and the section order. Keep the marquee or drop it.

### 7.2 How it works `/how-it-works`
**Job:** make the 10-day build and Agent Care feel concrete, safe and low-effort for the buyer.

**Key messages:** a clear process, a fixed scope, little work for your team, live in 10 working days\*, then always on.

**Required copy:**
- Eyebrow: "How it works"
- H1: "From your problem to a live agent in **10 working days**."
- Lede: "You bring a problem or a process. We scope one agent with you, build it, connect it to your tools and put it live. Then Agent Care keeps it healthy and improving."
- **The 10 days (a timeline visual, YOUR CALL on the day split; the split below is a proposal for Matt to confirm):**
  1. **Scope (before day 1):** "Agree the job, the tools, the human checkpoints and what 'done' means. Written and fixed."
  2. **Connect (days 1 to 2):** "Access to your tools and data."
  3. **Build and test (days 3 to 8):** "We build the agent and test it on your real cases."
  4. **Go live (days 9 to 10):** "Live with your team, with a human in the loop where it matters."
  5. **Agent Care (from day 11):** "Monitoring, evals, fixes and improvements, every month."
- **What you need to do:** "Give us access, point us at the data, and name one person who knows the process. That's it."
- **What we need first:** this is the footnote condition, shown in full.
- **After the first agent:** "Most firms add the next agent once the first one is earning its keep. Each one is a new 10-Day Agent Build, and each live agent sits under Agent Care."
- **Bigger needs:** "Something beyond a single agent? Bespoke builds are scoped and priced separately."
- CTAs: "Scope your agent" and "Try the Agent Planner".

**Your call:** the timeline design, and whether it animates as the visitor scrolls.

### 7.3 Agents `/agents`
**Job:** make agents concrete. The buyer recognises their own problem and pictures the agent running. It should feel like a product catalogue, framed as **problems buyers bring**.

- **H1:** "Agents for the problems firms bring **us**."
- **Lede:** "Each agent does one job well, connects to the tools you already use, and is hosted and improved by us. These are examples. Yours is scoped to how your firm works."

**Example agents by function** (cards or detail rows, YOUR CALL):
| Function | The problem buyers bring | What the agent does (draft) |
|---|---|---|
| **Reporting** | "We spend days building client and management reports." | "Pulls from your systems, builds the report, and hands it to a person to check and send." |
| **Insights** | "Leadership can't see what is happening without chasing three systems." | "Reads your finance, time and pipeline data every day and tells leadership what changed, in plain English." |
| **Sales follow-up** | "Leads and proposals go quiet." | "Drafts follow-ups, chases replies and flags the deals that need a human." |
| **Intake and onboarding** | "New clients wait days to get started." | "Collects what you need, checks it, sets up the work and keeps the client updated." |
| **Delivery ops** | "Senior people are stuck doing admin." | "Handles status updates, handovers and chasers so your experts can stay on expert work." |

Each card shows:
- the problem, in the buyer's words;
- the agent's steps (inputs → output);
- what stays with a human;
- the line "Looked after under Agent Care";
- a link: "Plan an agent like this →" to the Planner, pre-filled.

**Ways to start (no prices):**
- **10-Day Agent Build:** "One agent, one problem, fixed price. Live in 10 working days\*."
- **Agent Care:** "Monthly per live agent. Monitoring, evals, fixes and improvements."
- **Bespoke builds:** "Bigger custom work, scoped and priced separately."

**Tools line:** "Works with the tools you already use: email, calendar, CRM, practice management, finance and document systems. We confirm fit on the scoping call." Don't show third-party logos (integrations are an open question).

**Your call:** card design, filters by function, and mini animated runs. Detail pages per agent are optional.

### 7.4 Agent Care `/agent-care`
**Job:** sell the continuity. Agents need looking after, and we are the people who do it. Make it feel like a premium managed service, not a support contract.

- **H1:** "Live agents need **care**. That's our job." (Alternate: "Always on. Always **improving**.")
- **Lede:** "AI agents drift. Models change, your tools update, your firm evolves. Agent Care means every live agent is monitored, tested and improved by us, every month, so it keeps doing the job you built it for."

**What is included:**
- **Monitoring:** "We watch every run. If something fails or looks wrong, we know before you do."
- **Evals:** "We test output against agreed quality checks, continuously."
- **Drift fixes:** "When quality slips, we fix it."
- **Small improvements:** "Steady tweaks as your team uses it and asks for more."
- **Connector and model updates:** "When your tools or the AI models change, we handle it."
- **Real-time reporting:** "See what each agent did, in real time."

**Pricing line:** "Monthly per live agent. No day rates. Terms agreed in writing."
**Ownership line (LOCKED):** "You own your data, processes and outputs. We host, run and improve the agents."
**Proof slot:** `[AGENT CARE METRIC PLACEHOLDER: real data only]`

**Your call:** an "agent health" panel as the hero (status, last run, eval score, a drift alert raised and resolved), labelled "Illustration".

### 7.5 Security and data `/security`
**Job:** clear the security objection fast, for owners, finance directors and compliance leads in Legal and Finance. Keep it plain, specific and sober.

- **H1:** "Your data stays **yours**."
- **Lede:** the ownership line (LOCKED), then: "We host and run your agents on our platform so we can monitor and improve them. Your data is kept separate from every other client and can be exported when you leave."

**Sections** (every claim to be verified by Matt and the Cyber bot before launch):
- **Where it lives:** "[HOSTING REGION PLACEHOLDER]"
- **Separated per client:** "Your data is kept separate from other clients' data."
- **Who can access it:** "[ACCESS CONTROL PLACEHOLDER]"
- **AI model providers:** "[MODEL PROVIDER AND DATA TERMS PLACEHOLDER]"
- **Leaving:** "Your data, processes and outputs are exportable on exit."
- **Certification:** "[CERTIFICATION PLACEHOLDER: Cyber Essentials in progress. No claim, no date, no badge.]"
- **UK GDPR:** "[DPA PLACEHOLDER]"
- **Agent Planner:** a short note on how Planner inputs are handled. Link to the privacy notice.
- **Download:** "[SECURITY SHEET PDF PLACEHOLDER]"

**Your call:** layout. A spec-sheet or FAQ style suits it. No padlock clip art.

### 7.6 Proof `/proof`
**Job:** show real evidence as it lands, and look credible with one or two cases.

- **H1:** "Proof, not **promises**."
- **Lede:** "Anonymised where clients ask. Only results we can stand behind."

**Slots:**
- `[CASE STUDY: anonymised UK trust, AI insights agent, results TBC, needs client consent]`
- `[CASE STUDY: energy and utilities case from the live site, Matt to decide keep, rewrite or retire]`
- `[CASE STUDY SLOT 3: TBC]`

**Case template:**
- sector tag;
- the problem they brought;
- the agent(s);
- time to live;
- what changed `[RESULT TBC]`;
- an optional quote `[QUOTE TBC, real and approved only]`.

**Your call:** the template design, and a good empty state for while there are only a few cases.

### 7.7 About `/about`
**Job:** prove a real, accountable UK team runs this.

- **H1 (draft):** "We build and run AI agents for services firms, and we stay to look after **them**."
- **Copy needs:**
  - "[FOUNDER STORY PLACEHOLDER: Matt Todd]"
  - "[TEAM PLACEHOLDER]"
  - "FluentForward Limited. Registered in England and Wales."
- **Beliefs:**
  - "Your problem, not our pitch."
  - "Live in days, not quarters."
  - "Every agent needs care."
  - "No numbers we cannot stand behind."

**Your call:** photography (real people only), layout.

### 7.8 Scope your agent `/contact`
**Job:** book the scoping call with as little friction as possible. This is the primary conversion.

- **H1:** "Scope your **agent**." (Label is YOUR CALL.)
- **Body:** "A short call. Tell us the problem or process you want an agent to take on. We'll tell you what the agent would do, what it connects to, what stays with a person, and whether 10 working days is realistic. If an agent is the wrong answer, we'll say so."
- **Embed:** the existing calendar booking.
- **Optional pre-question:** "What problem do you want an agent to solve?"
- **Pre-filled plan:** if the visitor arrives from the Agent Planner, carry their plan reference or summary into the booking so we see it before the call.
- **Written enquiry:** an alternative to the call (fields in section 3).
- **Fallback:** `hello@fluentforward.com`.

### 7.9 Agent Planner `/agent-planner` (lead magnet; name and URL are YOUR CALL, pending Matt)
**Job:** let a solution-aware visitor turn their problem into a concrete first-agent plan in under three minutes. The visitor gets real value, we capture the email at the point of value, and the plan leads into a scoping call.

**Ownership and handoff (LOCKED, 12 Nov):**
- **Morgan (Product, FluentForward OS) builds the Agent Planner tool.** That covers the conversation flow, follow-up logic, plan generation, partial and full output, email delivery of the full plan, guardrails, rate limits and abuse protection, data handling, and the plan record that the scoping call can see.
- **Web builds the site.** That covers the `/agent-planner` page shell (the hero, explainer, example output, privacy note, FAQ and closing CTA), every entry point (the hero secondary CTA, the home inline box, "Plan an agent like this" links on `/agents`, nav and footer) and the CTAs that lead into and out of it.
- **The handoff:**
  - Morgan supplies the tool as either an embeddable component or iframe, or a route (for example on `client.fluentforward.com`), along with an integration note. The note covers how to mount it, how to pass in pre-filled text (such as a `?q=` parameter), the events it emits (start, follow-up answered, partial plan shown, email captured, CTA clicked) and its sizing and theming hooks.
  - Web owns the surrounding page, the layout and the visual design. Web also styles the embed with the site tokens (section 4), where the embed allows it.
  - The design agent designs the tool's look and states as a *proposal for Morgan*. Morgan decides the tool's behaviour and build.
  - Whether it is an embed or a route is for Morgan and Web to agree, then Matt confirms.

**Page copy (draft):**
- Eyebrow: "Agent Planner"
- **H1:** "Describe a problem or process. See your first **agent**."
- Lede: "Tell us what takes too long, goes wrong or depends on one person. In under three minutes you'll see what an agent would do, what it connects to, and what stays with your team."
- Input placeholder: "e.g. Every month two people spend three days building client reports from Xero, our CRM and a spreadsheet."
- Button: "Plan my agent"
- Privacy note under the input (LOCKED in substance): "Please don't include personal, client or confidential data. Describe the process, not the people. [PRIVACY NOTICE LINK]."
- Closing CTA: "Book a call to scope this agent", which leads into the 10-Day Agent Build.

**How it works (behaviour; the interaction design is YOUR CALL):**
1. The visitor describes the problem or process in free text.
2. The agent asks **2 or 3 follow-ups**, chosen from: which tools are involved, how often it happens, who does it now, and how long it takes. The whole thing takes under three minutes.
3. **A partial plan appears straight away**, for example the agent's job and its first steps.
4. **The full plan is sent by email.** "Email me the full plan" is the email capture, at the point of value.
5. The plan ends in **"Book a call to scope this agent"**, which leads to `/contact` with the plan attached.

**The one-page first-agent plan contains:**
- What the agent does, step by step
- Which tools it connects to
- What stays with a human
- Rough time saved, **clearly marked as an estimate**
- What "live in 10 working days" would include for this agent, with the footnote conditions
- Next step: the scoping call CTA

**Guardrails (LOCKED):**
- **Never quote prices.** At most, use the standard line: "Fixed price to build, monthly per agent with Agent Care. We confirm on the call."
- **Never promise feasibility.** Always say: "We'll confirm on the call that this is buildable in 10 working days."
- Time saved is always labelled as an estimate based on the visitor's own answers.
- **Ask for no sensitive data.** The privacy note sits at the input. If the visitor pastes something that looks like personal data, the tool should gently decline or redact it (Morgan's call on how).
- Abuse protection and rate limits (Morgan).
- Stay on topic. Off-topic or harmful requests get a polite refusal.
- Never name clients or invent case results.

**Example output (must be shown on the page and labelled "EXAMPLE PLAN, ILLUSTRATION ONLY"):**

> **EXAMPLE PLAN · ILLUSTRATION ONLY**
> **Your first agent: Monthly client report agent**
> **The problem you described:** two people spend about three days a month building client reports from the finance system, the CRM and a spreadsheet.
> **What the agent does:**
> 1. On the first working day of each month, it pulls last month's figures from your finance system and CRM.
> 2. It reconciles them against the tracking spreadsheet and flags anything that doesn't match.
> 3. It drafts each client's report in your template, with a short plain-English summary.
> 4. It sends the drafts to the account lead to review.
> 5. Once a draft is approved, it sends the report and logs it in the CRM.
>
> **Connects to:** finance system, CRM, spreadsheet, email *(to be confirmed on the call)*
> **Stays with a human:** checking the figures that don't match, approving every report before it goes out, and any client commentary.
> **Rough time saved:** *estimate only, based on your answers:* most of the three days of assembly each month, with review time remaining.
> **Live in 10 working days would include:** connections to the three systems, your report template, testing on last month's real data, a human approval step, and go-live under Agent Care.\*
> **Next step:** Book a call to scope this agent. We'll confirm it's buildable in 10 working days.
> \*Once we have access to your systems, the data the agent needs, and scope agreed in writing.

**Your call:** the interaction design. It could be a chat style, a stepped form, a single input that expands, or something better. You also decide how the plan "assembles" on screen, the partial and full reveal, the loading states and the email capture moment. Keep it calm and fast.

---

## 8. Copy voice rules (LOCKED)

### 8.1 Voice
- UK English (optimise, organisation, programme, colour).
- **Solution-aware.** Respond to the problem the buyer brings. Never tell them what their problem is.
- Plain, direct, calm. Write like a senior operator, not a marketer.
- Lead with the value equation, in this order: the outcome they want (their problem handled by a working agent), why it will work (fixed scope, Agent Care, real proof), how fast (10 working days), and how little effort it takes them (we build, host and maintain).
- Short sentences and concrete nouns (report, proposal, intake form, inbox).
- **No em dashes.** Use commas, full stops or colons.
- No hype words: revolutionary, game-changing, cutting-edge, unleash, supercharge, 10x.
- No invented stats, benchmarks, logos, testimonials or results.
- No public prices. Say "fixed price" and "monthly per agent".
- **Spelling:** "real-time" as an adjective ("real-time reporting"), "real time" as a noun ("in real time"), never "realtime".

### 8.2 Locked terms and lines
- **10-Day Agent Build** (LOCKED pending final wording)
- **Agent Care**
- "Live in 10 working days\*", with the footnote: "\*Once we have access to your systems, the data the agent needs, and scope agreed in writing." (Matt to confirm the exact wording.)
- **Ownership line:** "You own your data, processes and outputs. We host, run and improve the agents."
- Hero headline and subhead (LOCKED pending sign-off, 7.1)

### 8.3 Kill list (never on buyer surfaces)
- **Profit Constraint Score** (and "Score" as a CTA)
- **Profit leak framing:** "profit leaks", "find and fix your profit", "£ leak", "busy is not profitable", "growth without margin"
- **Profit Engine** as a product, page, nav or headline name
- **Diagnostic framing:** "binding constraint", "constraint", "Constraint review", "Offers · Demand · Delivery" as a diagnosis or lens system
- **"Stop Getting Busier"** as hero or campaign framing (the webinar is killed)
- **"Run"** as a product name (use Agent Care)
- Client Capacity · Impact Build · MVP build · First AI Move / FAM · Quick Start · Audit as a CTA · Sprint · Install Partnership · £30k / 90 days · "Board it every quarter" or any quarterly-board framing · on-ramp · build modes ("build with your team" / "we ship more of the build") · developer placement
- Public prices · multi-lever SOWs
- Consultant and coach language: "workshop", "coaching", "advisory", "programme of change", "strategy deck", "transformation roadmap", "diagnosis phase" (except in "No diagnosis phase")

---

## 9. Components, interaction and build requirements

### 9.1 Signature components (ideas; execution is YOUR CALL)
1. **Problem-to-agent hero visual.** A buyer's sentence turns into an agent's steps.
2. **Live agent run mock.** Input, then the agent's steps, then a human approval, then the output, with a status row. Tagged "Illustration".
3. **10-day timeline.** Day-by-day build stages with the footnote.
4. **Agent health panel** (for Agent Care): status, last run, eval score, and a drift alert raised and resolved. Tagged "Illustration".
5. **Example agent cards** by function (7.3), each with a pre-filled Planner link.
6. **Agent Planner surfaces** (see 9.2).
7. **Proof card template** with placeholder and empty states.
8. **Security spec sheet.**
9. **Sticky "Scope your agent" CTA** on mobile after the first scroll (YOUR CALL).

**Removed:** the Profit Constraint Score entry, the constraint diagnostic visual, the Offers / Demand / Delivery tiles and "BINDING" flag, and the webinar band.

### 9.2 Agent Planner component brief (Morgan builds the tool; Web builds the surfaces)
**Web's surfaces:**
- the hero secondary CTA;
- the home inline entry box (it carries the text to `/agent-planner?q=`);
- "Plan an agent like this" links on agent cards, pre-filled;
- the nav entry;
- the page shell;
- the example plan block;
- the closing CTA.

**Tool states for the design agent to propose, for Morgan:**
1. empty input;
2. typing;
3. follow-up questions (2 or 3);
4. thinking or assembling;
5. the partial plan;
6. the email capture ("Email me the full plan");
7. a confirmation that the plan was sent;
8. the CTA to book a scoping call;
9. errors, rate limits and off-topic replies;
10. a gentle sensitive-data warning.

**The plan as a document:** a one-page layout that works on screen, in the email and as a printable or PDF page. Use the site tokens: mono labels, an "ESTIMATE" tag on time saved, and the footnote.

**Requirements:**
- Under three minutes end to end.
- Keyboard and screen-reader friendly, with announced live regions for streamed text.
- Honours reduced motion.
- No layout shift as the plan streams in.
- It fires analytics events (named in 7.9).

**Freedom:** the conversation pattern, the plan reveal, the micro-interactions and how the plan "assembles".

### 9.3 Accessibility (LOCKED minimums)
- WCAG 2.2 AA throughout.
- **Measured contrast:**
  - `#0a0a0b` on `#ff4a1c` is 5.9:1. Passes.
  - Orange on `paper` is 3.05:1. Use it for large display headlines only, never for body text or small links on light backgrounds. The current small orange links fail this.
  - Orange on `ink` is 5.9:1.
  - `mist-d` on `paper` is 5.85:1, `slate` on `paper-2` is 7.3:1, `lede-dark` on `ink` is 10.6:1, and `mist` on `ink` is 5.8:1.
- Use visible, strong focus states.
- Honour `prefers-reduced-motion`.
- Mocks must use real text or have proper text alternatives.
- Carousels, accordions, nav and the Planner must all work by keyboard.

### 9.4 Performance and responsive
- Mobile-first. Test at 390, 768, 1024, 1440 and 1920px.
- Mobile LCP under 2.5s and CLS under 0.1 (targets are assumptions).
- Use CSS or a light JS layer for motion. No heavy hero video. Lazy-load mocks and the Planner embed below the fold.
- Keep `next/font` self-hosting for Inter Tight and IBM Plex Mono.

### 9.5 Tech context
- The site is Next.js with Tailwind v4 CSS variables (section 4), in the `fluent-site` repo (FluentForward org). Keep the token names.
- The Agent Planner tool comes from Morgan (FluentForward OS) as an embed or a route (see 7.9).
- The retired Score lives in the portal app, so its redirect sits with Morgan's app, not the site repo.

---

## 10. Deliverables, open questions and decisions

### 10.1 Deliverables expected from the design agent
1. A design rationale (1 page): what you kept, what you elevated, and why.
2. An updated token sheet, with any additions flagged.
3. Full designs at desktop and mobile for Home, How it works, Agents, Agent Care, Agent Planner (page shell plus proposed tool states) and Security.
4. Lighter designs for Proof, About and Scope your agent.
5. A component library for the components in 9.1 and 9.2, plus buttons, cards, eyebrow, nav, footer and the cookie banner.
6. A motion spec, including the reduced-motion fallback.
7. A copy deck, with your edits kept separate from the LOCKED copy.
8. The redirect map, confirmed against 6.3.
9. A list of every placeholder used.
10. If you are building: PR-ready work against `fluent-site` for the site and page shell only. The Planner tool is Morgan's. **Matt reviews and merges. Nothing goes live without him.**

### 10.2 Open questions for Matt
1. **Security facts:** the hosting region, the model providers and their data and training terms, whether a DPA is available on request, and the Cyber Essentials wording. The current default is placeholders, no badge and no date.
2. **Proof:** keep, rewrite or retire the anonymised energy and utilities case? It tells the old "you own the code" story. The KC Trust case needs client consent before anything appears, so it stays a placeholder until then.
3. **Integrations:** can we name any tools or show logos? The current default is the generic line only.
4. **Analytics baselines:** for the new funnel (visit to scoping call, and the Planner steps). Finn (Funnel Analytics) may hold the older Score baselines.
5. **The webinar's future:** it is killed for now. Will a new, solution-aware webinar come later, and under what title? Also confirm the redirect targets for `/webinar` and `/review` (6.3).
6. **The retired Score's redirect targets:** `/profit-constraint-score` and `client.fluentforward.com/profit-constraint-score`. The suggestion for both is `/agent-planner`.

The following are also pending Matt, but don't block design: the final wording of "10-Day Agent Build", the hero headline and subhead, the 10-day footnote, the Agent Planner name and URL, the "Scope your agent" label, and the proposed day split in 7.2.

### 10.3 Decisions log
**12 Nov 2026 (first pass)**
- Hero headline and subhead locked. *(Superseded later the same day; see below.)*
- "Agent live in 10 working days" can be promised publicly. LOCKED, with a conditions footnote.
- The continuity name is **Agent Care** only. "Run" is retired from buyer copy.
- Ownership line LOCKED: "You own your data, processes and outputs. We host, run and improve the agents."

**12 Nov 2026 (change of direction)**
- **Audience:** solution-aware buyers who bring a problem and want an agent. We never assume their problem. All profit-problem language is removed from buyer copy.
- **"Profit Engine"** is internal method only. It is removed from buyer copy, nav and page names. `/profit-engine` is to 301 to `/how-it-works`.
- **The Profit Constraint Score is retired** as the magnet and CTA. It is removed from CTAs, sitemap and components, and its URLs are in the redirect map (targets for Matt to confirm).
- **Primary CTA:** a direct booking or scoping call (mechanism LOCKED). The working label "Scope your agent" is YOUR CALL.
- **Entry offer:** the **10-Day Agent Build**, LOCKED pending final wording. It is fixed price, one agent, live in 10 working days once access, data and scope are agreed. Continuity stays Agent Care. Custom work is bespoke builds, priced separately. The entry-name question is closed.
- **New hero**, LOCKED pending wording: "Tell us the problem. We'll build the agent that fixes it." The old profit hero is retired.
- **Kill list** extended: Profit Constraint Score, profit leak framing, Profit Engine as a product name, and the related diagnostic terms.
- **The webinar is killed for now.** It is removed from the sitemap, CTAs and pages, and its URLs are in the redirect map. A new one may come later. (This supersedes the earlier "under review" status and the subtitle and dash question.)
- **New lead magnet:** the **Agent Planner** (direction approved; name and URL YOUR CALL, pending Matt). It is a free-text problem, then 2 or 3 follow-ups, then a partial plan on screen and the full plan by email, then the scoping CTA. It is the hero's secondary CTA and has its own page. Paid ads stay on instant forms for now.
- **Agent Planner ownership:** Morgan (Product, FluentForward OS) builds the tool and supplies it as an embed or a route. Web builds the site, including the `/agent-planner` page shell, its entry points and the CTAs. Web owns the surrounding page and design.
- **Answers agreed with Web:**
  - Drop the Gartner stat.
  - Retire `/ways-we-work` with a 301 to `/agents`, and point `/pricing` to `/agents`.
  - "real-time" as an adjective, "real time" as a noun, never "realtime".
  - Drop the build modes.
  - Keep `/strategy-blueprints` under the nav label "Resources" (not "Insights").

---

## Appendix A. Alternate hero lines (reference only, not for use unless Matt picks one)
- **"Bring us the problem. Get a working agent in 10 working days."**
  Subhead: "One agent, fixed price, built around how your firm works. Hosted and looked after by us."
- **"The agent your team keeps wishing for, live in 10 working days."**
  Subhead: "You describe the job. We build it, host it and keep it improving every month."

All three headlines (the locked one and these two) take the same footnote on "10 working days".
