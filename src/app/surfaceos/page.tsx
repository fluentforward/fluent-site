import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SurfaceOS - The Agentic Operating System',
  description:
    'SurfaceOS position paper: every process and interaction on one unified, intelligent operational surface.',
}

const SURFACE_OS_MOCKUP = String.raw`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&display=swap" rel="stylesheet">
<style>
  :root {
    --red:      #d42b2b;
    --red-dim:  rgba(212,43,43,0.15);
    --charcoal: #0c0c10;
    --dark:     #111116;
    --surface:  #16161c;
    --surface2: #1c1c24;
    --border:   #26262f;
    --muted:    #64647a;
    --body:     #c2c2d4;
    --white:    #eeeef6;
    --max:      740px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html.surfaceos-page { scroll-behavior: smooth; background: var(--charcoal); }

  body.surfaceos-page {
    background: var(--charcoal);
    color: var(--body);
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 17px;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
  }

  /* HERO */
  .hero {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 55% at 5% 85%, rgba(212,43,43,0.14) 0%, transparent 55%),
      radial-gradient(ellipse 50% 35% at 95% 15%, rgba(212,43,43,0.07) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }

  .hero-nav {
    padding: 28px 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: fadeUp 0.5s 0.1s ease forwards;
  }

  .wordmark {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .wordmark-pip {
    width: 3px;
    height: 18px;
    background: var(--red);
    flex-shrink: 0;
  }

  .wordmark-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--white);
  }

  .wordmark-text span {
    color: var(--muted);
    font-weight: 400;
  }

  .hero-tag {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .hero-body {
    padding: 0 36px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    max-width: 820px;
  }

  .hero-eyebrow {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 24px;
    opacity: 0;
    animation: fadeUp 0.6s 0.25s ease forwards;
  }

  .hero-headline {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(42px, 7vw, 80px);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.03em;
    color: var(--white);
    margin-bottom: 32px;
    opacity: 0;
    animation: fadeUp 0.7s 0.35s ease forwards;
  }

  .hero-headline .accent {
    color: var(--red);
    display: block;
  }

  .hero-sub {
    font-size: 18px;
    line-height: 1.7;
    color: var(--body);
    max-width: 560px;
    opacity: 0;
    animation: fadeUp 0.7s 0.5s ease forwards;
  }

  .hero-footer {
    padding: 28px 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--border);
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: fadeUp 0.5s 0.65s ease forwards;
  }

  .hero-footer-domain {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--red);
  }

  .scroll-hint {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    cursor: pointer;
    border: none;
    background: none;
    transition: color 0.2s;
  }
  .scroll-hint:hover { color: var(--white); }

  .scroll-line {
    width: 32px;
    height: 1px;
    background: var(--muted);
    transition: width 0.3s, background 0.2s;
  }
  .scroll-hint:hover .scroll-line { width: 48px; background: var(--white); }

  /* CONTENT */
  main { max-width: var(--max); margin: 0 auto; padding: 0 36px; }

  section {
    padding: 80px 0;
    border-bottom: 1px solid var(--border);
  }
  section:last-child { border-bottom: none; }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 36px;
  }

  .section-num {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: var(--red);
    flex-shrink: 0;
  }

  .section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--white);
    line-height: 1.2;
  }

  p { margin-bottom: 20px; }
  p:last-child { margin-bottom: 0; }

  .callout {
    border-left: 3px solid var(--red);
    padding: 20px 24px;
    margin: 36px 0;
    background: var(--red-dim);
    border-radius: 0 6px 6px 0;
    font-style: italic;
    font-size: 18px;
    line-height: 1.65;
    color: var(--white);
  }

  /* SURFACE CONCEPT */
  .surface-concept {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .surface-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 20px 24px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    transition: border-color 0.2s, background 0.2s;
    cursor: default;
  }

  .surface-item:hover {
    border-color: rgba(212,43,43,0.4);
    background: var(--surface2);
  }

  .surface-item-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: var(--red-dim);
    border: 1px solid rgba(212,43,43,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .surface-item-icon svg {
    width: 16px;
    height: 16px;
    stroke: var(--red);
    fill: none;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .surface-item-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--white);
    margin-bottom: 4px;
  }

  .surface-item-desc {
    font-size: 15px;
    line-height: 1.6;
    color: var(--body);
    margin: 0;
  }

  /* OS LAYERS */
  .os-stack {
    margin: 40px 0;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  .os-layer {
    padding: 18px 24px;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 90px 160px 1fr;
    gap: 16px;
    align-items: center;
    transition: background 0.15s;
  }

  .os-layer:last-child { border-bottom: none; }
  .os-layer:hover { background: rgba(212,43,43,0.04); }

  .os-layer.top {
    background: rgba(212,43,43,0.08);
    border-top: none;
  }

  .os-role {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .os-layer.top .os-role { color: var(--red); }

  .os-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--white);
  }

  .os-layer.top .os-name { color: var(--red); }

  .os-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
    margin: 0;
  }

  /* REPLACES TABLE */
  .table-wrap {
    margin: 36px -4px;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  th {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border);
  }

  th.col-sos {
    color: var(--red);
  }

  td {
    padding: 14px 16px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
    line-height: 1.5;
    color: var(--body);
  }

  td:first-child {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--white);
  }

  td.col-sos {
    color: var(--white);
  }

  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(255,255,255,0.02); }

  /* STREAMS */
  .streams {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 36px;
  }

  .stream {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
    transition: border-color 0.2s;
  }

  .stream:hover { border-color: rgba(212,43,43,0.35); }

  .stream-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 6px;
  }

  .stream-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: var(--white);
    letter-spacing: -0.01em;
    margin-bottom: 10px;
  }

  .stream p {
    font-size: 15px;
    line-height: 1.65;
    color: var(--body);
    margin: 0;
  }

  /* CLOSER */
  .closer {
    padding: 72px 36px;
    text-align: center;
    background: var(--surface);
    border-top: 1px solid var(--border);
  }

  .closer-eyebrow {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 20px;
  }

  .closer-text {
    font-style: italic;
    font-size: 20px;
    line-height: 1.7;
    color: var(--white);
    max-width: 580px;
    margin: 0 auto 32px;
  }

  .closer-contact {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--muted);
  }

  .closer-contact a {
    color: var(--red);
    text-decoration: none;
  }

  /* FOOTER */
  footer {
    padding: 28px 36px;
    text-align: center;
    border-top: 1px solid var(--border);
  }

  .footer-wordmark {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: var(--white);
    margin-bottom: 4px;
  }

  .footer-domain {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    color: var(--red);
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .footer-meta {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: none; }
  }

  @media (max-width: 600px) {
    .hero-nav, .hero-body, .hero-footer { padding-left: 24px; padding-right: 24px; }
    main { padding: 0 24px; }
    .os-layer { grid-template-columns: 1fr; gap: 4px; }
    .os-role { display: none; }
    .closer { padding: 56px 24px; }
  }
</style>

<div class="hero">
  <nav class="hero-nav">
    <div class="wordmark">
      <div class="wordmark-pip"></div>
      <div class="wordmark-text">FluentForward <span>· SurfaceOS</span></div>
    </div>
    <div class="hero-tag">Position Paper · April 2026</div>
  </nav>

  <div class="hero-body">
    <p class="hero-eyebrow">Introducing SurfaceOS</p>
    <h1 class="hero-headline">
      Every process.<br>
      Every interaction.
      <span class="accent">One surface.</span>
    </h1>
    <p class="hero-sub">
      SurfaceOS is the agentic operating system for regulated businesses — the first platform where every business process, human interaction, and agent action exists on a unified, intelligent surface. Not integrated. Not automated. Replaced.
    </p>
  </div>

  <div class="hero-footer">
    <span class="hero-footer-domain">surfaceos.ai</span>
    <button class="scroll-hint" onclick="document.querySelector('main').scrollIntoView({behavior:'smooth'})">
      <span class="scroll-line"></span>
      Read on
    </button>
    <span class="hero-footer-domain" style="opacity:0;pointer-events:none">surfaceos.ai</span>
  </div>
</div>

<main>
  <section>
    <div class="section-header">
      <span class="section-num">01</span>
      <h2 class="section-title">What a Surface Is</h2>
    </div>

    <p>A surface is where your business operates. Not a dashboard. Not a form. Not a workflow diagram. A surface is a live, intelligent interface that shows the right information, enables the right actions, and connects human judgement to agent execution — in one place, in real time.</p>

    <p>Every business process has a surface. Every client interaction has a surface. Every agent action originates from a surface and is visible on one. There is no hidden complexity, no integration layer, no translation between systems. What happens in your business happens on surfaces.</p>

    <div class="callout">
      The question every business is now asking is: "how do we add AI to what we already have?" The better question is: "if we built our operational system from scratch today, what would it actually look like?" The answer is surfaces — not tools, not workflows, not records. A living operational layer where humans and agents work together.
    </div>

    <p>This is what makes SurfaceOS structurally different. Every competitor is adding AI to passive software. SurfaceOS is built from the ground up around the surface as the primary unit — the thing your business runs on, not the thing you look at occasionally.</p>
  </section>

  <section>
    <div class="section-header">
      <span class="section-num">02</span>
      <h2 class="section-title">Why Surfaces Change Everything</h2>
    </div>

    <p>Surfaces aren't an interface choice. They are an architectural commitment. Because everything in SurfaceOS happens on a surface, the platform gains capabilities that bolt-on AI and conventional software cannot replicate.</p>

    <div class="surface-concept">
      <div class="surface-item">
        <div class="surface-item-icon">
          <svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </div>
        <div>
          <div class="surface-item-label">Complete visibility by design</div>
          <p class="surface-item-desc">Every agent action, every human interaction, every decision point happens on a surface and is captured as a structured record. Auditability is not a feature — it is a byproduct of how the system works.</p>
        </div>
      </div>

      <div class="surface-item">
        <div class="surface-item-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
        </div>
        <div>
          <div class="surface-item-label">Self-learning that compounds</div>
          <p class="surface-item-desc">Because every interaction flows through a surface, the system accumulates operational intelligence over time. Every case handled, every decision made, every outcome recorded makes the agents more precise. Competitors cannot replicate this without first rebuilding their architecture.</p>
        </div>
      </div>

      <div class="surface-item">
        <div class="surface-item-icon">
          <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <div>
          <div class="surface-item-label">Compliance as infrastructure</div>
          <p class="surface-item-desc">The Safeguard Layer evaluates every agent action before it executes — not as an add-on, but as a layer the surface sits on top of. Regulated businesses get compliance built into the operating model, not bolted onto it.</p>
        </div>
      </div>

      <div class="surface-item">
        <div class="surface-item-icon">
          <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"></path></svg>
        </div>
        <div>
          <div class="surface-item-label">Human and agent scale, unified</div>
          <p class="surface-item-desc">Staff surfaces, client surfaces, agent surfaces — all operating on the same entity model, the same data, the same platform. No translation layer. No synchronisation problem. One source of truth, many points of interaction.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="section-header">
      <span class="section-num">03</span>
      <h2 class="section-title">The Operating System Model</h2>
    </div>

    <p>An operating system has two parts: a kernel that runs the machine, and a UI layer through which humans interact with it. SurfaceOS is an operating system for regulated business operations in exactly this sense.</p>

    <div class="os-stack">
      <div class="os-layer top">
        <div class="os-role">UI Layer</div>
        <div class="os-name">Surfaces</div>
        <p class="os-desc">Composable, agent-native interfaces for operators, staff, and clients. Every interaction point in the business — configured, not coded.</p>
      </div>
      <div class="os-layer">
        <div class="os-role">Kernel</div>
        <div class="os-name">Agent Layer</div>
        <p class="os-desc">Autonomous agents that monitor entity state, identify what needs to happen, act within granted scope, and surface decisions requiring human judgement.</p>
      </div>
      <div class="os-layer">
        <div class="os-role">Kernel</div>
        <div class="os-name">Entity Model</div>
        <p class="os-desc">Purpose-built entity types native to the vertical — not generic CRM records. The agent's world is the entity state. Every surface renders from it.</p>
      </div>
      <div class="os-layer">
        <div class="os-role">Kernel</div>
        <div class="os-name">Safeguard Layer</div>
        <p class="os-desc">An independent subsystem that evaluates every write action and external communication before execution. Hard constraints at the infrastructure level.</p>
      </div>
      <div class="os-layer">
        <div class="os-role">Kernel</div>
        <div class="os-name">Execution Capture</div>
        <p class="os-desc">Every agent action, model call, tool execution, and surface interaction captured as a permanent structured record. Full reconstruction-grade audit, always on.</p>
      </div>
    </div>

    <p>Vertical-specific operations are delivered as plugins — complete operational systems built on the kernel for a specific industry. Each plugin is configured, not custom-built. The platform infrastructure is shared. The operational logic and entity model are specific to the vertical.</p>
  </section>

  <section>
    <div class="section-header">
      <span class="section-num">04</span>
      <h2 class="section-title">What This Replaces</h2>
    </div>

    <p>A well-configured SurfaceOS vertical makes the conventional operational stack structurally redundant — not by replicating existing tools, but by making the problems those tools exist to solve disappear.</p>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Operational Layer</th>
            <th>Conventional Stack</th>
            <th class="col-sos">SurfaceOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CRM / Entity Records</td>
            <td>Generic CRM — contacts, deals, tasks</td>
            <td class="col-sos">Purpose-built entities native to the domain</td>
          </tr>
          <tr>
            <td>Workflow Automation</td>
            <td>Rules connecting disconnected tools</td>
            <td class="col-sos">Agent orchestration — autonomous, context-aware</td>
          </tr>
          <tr>
            <td>Document Management</td>
            <td>Document store with manual context</td>
            <td class="col-sos">Entity-linked — agents generate, review, act</td>
          </tr>
          <tr>
            <td>Compliance & Risk</td>
            <td>Compliance add-on or manual process</td>
            <td class="col-sos">Native Safeguard Layer — built into the kernel</td>
          </tr>
          <tr>
            <td>Reporting & Audit</td>
            <td>BI tool pulling from multiple sources</td>
            <td class="col-sos">Full execution capture — every action, always</td>
          </tr>
          <tr>
            <td>Client Portals & Intake</td>
            <td>Forms tool + portal SaaS + email</td>
            <td class="col-sos">Client surfaces — agent-native, context-bound</td>
          </tr>
          <tr>
            <td>Staff Interfaces</td>
            <td>Multiple disconnected applications</td>
            <td class="col-sos">Staff surfaces — one interface, full context</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>This is not a claim about features. It is a claim about architecture. A system designed from the ground up around surfaces, agents, and native entity models makes the integration-heavy operational stack unnecessary — because that stack exists to compensate for the limitations of systems that were never designed to be intelligent.</p>
  </section>

  <section>
    <div class="section-header">
      <span class="section-num">05</span>
      <h2 class="section-title">Why Regulated Verticals First</h2>
    </div>

    <p>The strongest case for SurfaceOS is in industries where the cost of operational error is high, compliance requirements are non-negotiable, and the volume of information-heavy work makes autonomous operation genuinely valuable.</p>

    <p>In conveyancing, property management, financial services, and similar sectors, the difference between a well-run operation and a poorly-run one is almost always an information and coordination problem. Agents operating on complete, natively-structured entity state are built to solve exactly this.</p>

    <p>The auditability requirement — which conventional software handles badly — is a structural property of SurfaceOS. Every surface interaction is captured. Every agent decision is logged. Regulators and operators can reconstruct exactly what happened, and why, for any case at any point in time. Not as a reporting feature. As a consequence of how the platform operates.</p>

    <div class="callout">
      Regulated buyers are not purchasing productivity. They are purchasing risk transfer. SurfaceOS makes compliance a structural guarantee, not a process discipline — and that changes the pricing conversation entirely.
    </div>
  </section>

  <section>
    <div class="section-header">
      <span class="section-num">06</span>
      <h2 class="section-title">How We Work With Clients</h2>
    </div>

    <p>FluentForward operates three distinct engagement models, meeting businesses and distribution partners at the right point in their journey.</p>

    <div class="streams">
      <div class="stream">
        <div class="stream-label">Stream 01</div>
        <div class="stream-title">Managed Agentic Services</div>
        <p>We deploy, configure, and operate a SurfaceOS vertical on your behalf. Pricing is outcome-based — aligned to value delivered, not seat counts or usage tiers. You get the operational benefits without managing the technology.</p>
      </div>
      <div class="stream">
        <div class="stream-label">Stream 02</div>
        <div class="stream-title">AI-Native Transition</div>
        <p>For businesses ready to move further. We work as a strategic partner in rebuilding operations around agent capabilities — not retrofitting agents onto existing processes. The result is a business that compounds in capability over time.</p>
      </div>
      <div class="stream">
        <div class="stream-label">Stream 03</div>
        <div class="stream-title">Channel Partnership</div>
        <p>For consultancies and professional service firms serving regulated verticals. Partners access SurfaceOS under a revenue-share arrangement and deliver vertical-specific solutions to their own client base. Founding partners receive preferential terms and time-limited vertical exclusivity.</p>
      </div>
    </div>
  </section>
</main>

<div class="closer">
  <p class="closer-eyebrow">FluentForward · SurfaceOS</p>
  <p class="closer-text">Every business that runs on SurfaceOS is building something competitors cannot replicate without first rebuilding their architecture. That is not a feature advantage. It is a structural one.</p>
  <p class="closer-contact">
    surfaceos.ai &nbsp;·&nbsp; <a href="mailto:hello@fluentforward.com">hello@fluentforward.com</a>
  </p>
</div>

<footer>
  <div class="footer-wordmark">FluentForward</div>
  <div class="footer-domain">surfaceos.ai</div>
  <div class="footer-meta">Confidential · April 2026</div>
</footer>
`

export default function SurfaceOSPage() {
  return <div dangerouslySetInnerHTML={{ __html: SURFACE_OS_MOCKUP }} />
}
