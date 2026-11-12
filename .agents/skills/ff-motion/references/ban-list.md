# FluentForward motion and visual ban list

If a technique appears in this list, do not use it on buyer surfaces or mocks unless Matt explicitly approves an exception in writing.

## Visual / “AI look”

- Purple or blue gradients, glow, bloom, lens flares, sparkles, decorative particles
- Robots, brains, circuit boards, floating chat bubbles, “AI brain” stock
- Centred title on a gradient background
- Logo turntable spins, decorative 3D, WebGL shaders, chrome blobs
- New hues outside ink / paper / orange (except muted status inside mocks)
- Hero ambient hairline cutting through the H1 at desktop

## Motion anti-patterns

- Fade-and-slide-up on **every** section or child (`Reveal.tsx` blanket pattern — retire)
- Everything fading in at once
- Linear easing on **position** moves (linear OK for progress/rotation/loop phase only)
- Bouncy easing on text; opacity or colour overshoot
- Text that moves while being read
- Scroll-jacking, pinned scroll scenes on mobile, Lenis-style smooth scroll hijack
- Autoplay motion >5s without visible **Pause** (WCAG 2.2.2)
- Animation over or obscuring H1, subhead, footnote, or CTAs
- Animating LCP headline from `opacity: 0`
- Canvas-drawn text instead of real DOM text
- Hero video or large autoplay video

## Honesty / proof

- Impressive metrics, user counts, or eval scores presented as real
- Mocks without mono **Illustration** or **Example** tag
- Invented logos, testimonials, certifications, client names
- Fake “trusted by” strips

## Copy (buyer surfaces) — brief §8.3 kill list (never use)

Including but not limited to: Profit Constraint Score, profit leak framing, Profit Engine as product name, binding constraint diagnostic framing, “Run” as product name, webinar/Score CTAs, public prices, consultant “diagnosis phase” framing as a sell (except “No diagnosis phase” positioning).

## Libraries / tooling (this repo)

GSAP, Lenis, Three.js/r3f, Rive, Remotion, HyperFrames, 21st.dev magic-mcp, GSAP skills.
