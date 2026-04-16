import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FluentForward - Pricing',
  description:
    'Platform, services, and outcomes pricing for FluentForward subscriptions and professional services.',
}

const PRICING_MOCKUP = String.raw`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&display=swap" rel="stylesheet">
<style>
  :root {
    --red:      #d42b2b;
    --red-dim:  rgba(212,43,43,0.12);
    --charcoal: #0c0c10;
    --dark:     #111116;
    --surface:  #16161c;
    --surface2: #1c1c24;
    --border:   #252530;
    --border2:  #2e2e3a;
    --muted:    #5a5a6e;
    --body:     #a8a8bc;
    --white:    #eeeef4;
    --teal:     #1a9e8f;
    --amber:    #c8881a;
    --green:    #1a8a5a;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html.pricing-page { scroll-behavior: smooth; background: var(--charcoal); }

  body.pricing-page {
    background: var(--charcoal);
    color: var(--body);
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  /* -- HEADER -- */
  header {
    padding: 28px 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--border);
  }

  .wordmark-bar { width: 3px; height: 18px; background: var(--red); flex-shrink: 0; }

  .wordmark {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--white);
  }

  .wordmark span { color: var(--muted); font-weight: 400; }

  /* -- HERO -- */
  .hero {
    padding: 80px 40px 64px;
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }

  .eyebrow {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 24px;
  }

  .hero h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(32px, 6vw, 52px);
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin-bottom: 24px;
  }

  .hero p {
    font-size: 17px;
    color: var(--body);
    max-width: 600px;
    margin: 0 auto;
    font-style: italic;
    line-height: 1.7;
  }

  /* -- SECTION LABELS -- */
  .section {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 40px 80px;
  }

  .section-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-label::before {
    content: '';
    width: 20px;
    height: 2px;
    background: var(--red);
    flex-shrink: 0;
  }

  /* -- PLATFORM TIERS -- */
  .tiers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--border);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .tier {
    background: var(--surface);
    padding: 32px 28px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .tier.featured {
    background: var(--surface2);
  }

  .tier.featured::before {
    content: 'Most common';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    font-family: 'Montserrat', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: var(--red);
    color: #fff;
    padding: 4px 14px;
    border-radius: 0 0 8px 8px;
  }

  .tier-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
    margin-top: 8px;
  }

  .tier.featured .tier-name { color: var(--red); }

  .tier-price {
    font-family: 'Montserrat', sans-serif;
    font-size: 38px;
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 4px;
  }

  .tier-price sup {
    font-size: 18px;
    font-weight: 700;
    vertical-align: super;
    letter-spacing: 0;
  }

  .tier-cadence {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.04em;
    margin-bottom: 24px;
  }

  .tier-desc {
    font-size: 13px;
    color: var(--body);
    line-height: 1.6;
    margin-bottom: 28px;
    font-style: italic;
  }

  .tier-divider {
    height: 1px;
    background: var(--border2);
    margin-bottom: 24px;
  }

  .tier-features {
    list-style: none;
    flex: 1;
  }

  .tier-features li {
    font-size: 13px;
    color: var(--body);
    padding: 7px 0;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    border-bottom: 1px solid var(--border);
    line-height: 1.45;
  }

  .tier-features li:last-child { border-bottom: none; }

  .feat-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--teal);
  }

  .feat-icon.amber { color: var(--amber); }
  .feat-icon.red { color: var(--red); }

  .tier-cta {
    display: block;
    margin-top: 28px;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid var(--border2);
    background: transparent;
    color: var(--body);
    transition: all 0.2s;
  }

  .tier.featured .tier-cta {
    background: var(--red);
    border-color: var(--red);
    color: #fff;
  }

  .tier-cta:hover { opacity: 0.8; }

  /* -- ENTITY VOLUME NOTE -- */
  .volume-note {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px 24px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 48px;
  }

  .volume-note-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: var(--amber);
    margin-top: 2px;
  }

  .volume-note p {
    font-size: 13px;
    color: var(--body);
    line-height: 1.6;
  }

  .volume-note p strong {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--amber);
    display: block;
    margin-bottom: 4px;
  }

  /* -- SERVICES TABLE -- */
  .services-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: var(--border);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 48px;
  }

  .service-row {
    background: var(--surface);
    display: grid;
    grid-template-columns: 220px 1fr 160px 160px;
    gap: 0;
  }

  .service-row.header {
    background: var(--dark);
  }

  .service-cell {
    padding: 18px 20px;
    border-right: 1px solid var(--border);
    font-size: 13px;
    color: var(--body);
    line-height: 1.5;
  }

  .service-cell:last-child { border-right: none; }

  .service-row.header .service-cell {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 14px 20px;
  }

  .service-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--white);
  }

  .service-name .tag {
    display: inline-block;
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 2px 7px;
    border-radius: 3px;
    margin-left: 6px;
    vertical-align: middle;
  }

  .tag-impl { background: rgba(26,158,143,0.15); color: var(--teal); }
  .tag-success { background: rgba(26,138,90,0.15); color: var(--green); }
  .tag-retainer { background: rgba(212,43,43,0.12); color: var(--red); }

  .price-cell {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--white);
  }

  .price-sub {
    font-family: 'Source Serif 4', serif;
    font-size: 11px;
    font-weight: 400;
    color: var(--muted);
    display: block;
    margin-top: 2px;
  }

  /* -- SUCCESS TIER -- */
  .success-band {
    background: var(--surface2);
    border: 1px solid var(--border2);
    border-radius: 12px;
    padding: 36px 32px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 40px;
    align-items: center;
    margin-bottom: 48px;
    position: relative;
    overflow: hidden;
  }

  .success-band::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--teal);
  }

  .success-band h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: var(--white);
    margin-bottom: 10px;
  }

  .success-band p {
    font-size: 14px;
    color: var(--body);
    line-height: 1.65;
  }

  .success-price-block {
    text-align: right;
  }

  .success-price {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 4px;
  }

  .success-price-note {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--teal);
  }

  /* -- CHANNEL PARTNER -- */
  .channel-band {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 36px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-bottom: 48px;
  }

  .channel-col h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }

  .channel-col p {
    font-size: 13px;
    color: var(--body);
    line-height: 1.65;
  }

  .channel-col .big-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 6px;
  }

  /* -- TOTAL VALUE SUMMARY -- */
  .value-summary {
    background: var(--surface2);
    border-radius: 12px;
    padding: 40px 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: var(--border);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .value-cell {
    background: var(--surface2);
    padding: 28px 24px;
    text-align: center;
  }

  .value-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .value-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 900;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 6px;
  }

  .value-sub {
    font-size: 12px;
    color: var(--muted);
    font-style: italic;
  }

  /* -- FOOTNOTE -- */
  .footnote {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 40px 80px;
  }

  .footnote p {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.7;
    font-style: italic;
    border-top: 1px solid var(--border);
    padding-top: 24px;
  }

  /* -- RESPONSIVE -- */
  @media (max-width: 900px) {
    .tiers { grid-template-columns: 1fr; }
    .service-row { grid-template-columns: 1fr 1fr; }
    .service-row.header { display: none; }
    .success-band { grid-template-columns: 1fr; }
    .success-price-block { text-align: left; }
    .channel-band { grid-template-columns: 1fr; }
    .value-summary { grid-template-columns: repeat(2, 1fr); }
    header { padding: 20px 24px; }
    .hero { padding: 48px 24px 40px; }
    .section { padding: 0 24px 60px; }
    .footnote { padding: 0 24px 60px; }
  }
</style>

<header>
  <div class="wordmark-bar"></div>
  <div class="wordmark">FluentForward <span>· Pricing Overview</span></div>
</header>

<div class="hero">
  <div class="eyebrow">Commercial Model</div>
  <h1>Platform. Services.<br>Outcomes.</h1>
  <p>Predictable subscription pricing for platform access. High-value professional services for implementation and configuration. Premium intelligence tier for tenants who want the platform actively optimising toward their defined outcomes.</p>
</div>

<!-- PLATFORM TIERS -->
<div class="section">
  <div class="section-label">Platform Subscription — Per Organisation / Per Month</div>

  <div class="tiers">
    <div class="tier">
      <div class="tier-name">Foundation</div>
      <div class="tier-price"><sup>£</sup>1,200</div>
      <div class="tier-cadence">per month · billed annually</div>
      <div class="tier-desc">A single operational solution. Designed for smaller practices and initial deployments.</div>
      <div class="tier-divider"></div>
      <ul class="tier-features">
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>1 operational solution</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Up to 200 active records</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Up to 5 user seats</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Complete activity record &amp; audit trail</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Built-in compliance controls</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Standard support (email, 2 business days)</li>
        <li><svg class="feat-icon amber" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="3" x2="8" y2="9"></line><circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"></circle></svg>Outcome intelligence not included</li>
        <li><svg class="feat-icon amber" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="3" x2="8" y2="9"></line><circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"></circle></svg>Industry benchmarking not included</li>
      </ul>
      <a class="tier-cta" href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/53Ug6pSl3EGCvx_PPavG3w2?anonymous&ismsaljsauthenabled&ep=mlink">Get started</a>
    </div>

    <div class="tier featured">
      <div class="tier-name">Operational</div>
      <div class="tier-price"><sup>£</sup>3,500</div>
      <div class="tier-cadence">per month · billed annually</div>
      <div class="tier-desc">Full operational deployment across multiple areas of your business. Higher volumes, priority support.</div>
      <div class="tier-divider"></div>
      <ul class="tier-features">
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Up to 3 operational solutions</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Up to 1,000 active records</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Up to 25 user seats</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Complete activity record &amp; audit trail</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Built-in compliance controls, configurable rules</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Client-facing applications included</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Priority support (named contact, 4hr SLA)</li>
        <li><svg class="feat-icon amber" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="3" x2="8" y2="9"></line><circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"></circle></svg>Outcome intelligence (add Intelligence tier)</li>
      </ul>
      <a class="tier-cta" href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/53Ug6pSl3EGCvx_PPavG3w2?anonymous&ismsaljsauthenabled&ep=mlink">Get started</a>
    </div>

    <div class="tier">
      <div class="tier-name">Enterprise</div>
      <div class="tier-price">POA</div>
      <div class="tier-cadence">annual contract · custom terms</div>
      <div class="tier-desc">Large or complex deployments, group rollouts, and white-label delivery partners.</div>
      <div class="tier-divider"></div>
      <ul class="tier-features">
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Unlimited operational solutions</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Unlimited active records</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Unlimited user seats</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Dedicated infrastructure option</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Bespoke solution development included</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Embedded FluentForward consultant</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Intelligence tier included</li>
        <li><svg class="feat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Group and multi-site licensing available</li>
      </ul>
      <a class="tier-cta" href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/53Ug6pSl3EGCvx_PPavG3w2?anonymous&ismsaljsauthenabled&ep=mlink">Talk to us</a>
    </div>
  </div>

  <div class="volume-note">
    <svg class="volume-note-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="8"></circle><line x1="10" y1="6" x2="10" y2="10"></line><line x1="10" y1="13" x2="10" y2="14"></line></svg>
    <p>
      <strong>Volume overage</strong>
      Active record counts above tier limits are charged at £4 per record per month (Foundation), £2.50 (Operational). Closed and archived records — cases, transactions, or files that have reached a concluded state — do not count toward the limit and are retained indefinitely for audit purposes.
    </p>
  </div>
</div>

<div class="section">
  <div class="section-label">Intelligence Tier — Add-on to any Platform Subscription</div>
  <div class="success-band">
    <div>
      <h3>Outcome Intelligence &amp; Continuous Improvement</h3>
      <p>The Intelligence tier activates the platform's self-learning system against your defined business outcomes. The platform analyses your historical operational data, identifies the process configurations and AI behaviours that correlate with better results, and produces evidence-backed improvement suggestions. Includes anonymised industry benchmarking, structured process experiments, and a quarterly optimisation review with a FluentForward consultant.</p>
    </div>
    <div class="success-price-block">
      <div class="success-price"><sup style="font-size:16px">£</sup>1,800</div>
      <div class="success-price-note">per month · per organisation</div>
    </div>
  </div>
</div>

<div class="section">
  <div class="section-label">Professional Services</div>
  <div class="services-grid">
    <div class="service-row header">
      <div class="service-cell">Engagement</div>
      <div class="service-cell">What's included</div>
      <div class="service-cell">Typical duration</div>
      <div class="service-cell">Investment</div>
    </div>

    <div class="service-row">
      <div class="service-cell"><div class="service-name">Discovery &amp; Design <span class="tag tag-impl">Implementation</span></div></div>
      <div class="service-cell">Operational analysis, process mapping, data model design, outcome definition, and solution architecture. Produces a detailed specification ready for build — and a clear picture of what the platform will do for your business.</div>
      <div class="service-cell">2–4 weeks</div>
      <div class="service-cell price-cell">£8,000 – £18,000 <span class="price-sub">Fixed fee</span></div>
    </div>

    <div class="service-row">
      <div class="service-cell"><div class="service-name">Platform Implementation <span class="tag tag-impl">Implementation</span></div></div>
      <div class="service-cell">Full deployment: data model configuration, AI setup, workflow and process build, client-facing application design, third-party integrations, compliance rule configuration, and user training.</div>
      <div class="service-cell">4–12 weeks</div>
      <div class="service-cell price-cell">£20,000 – £65,000 <span class="price-sub">Fixed fee · scoped</span></div>
    </div>

    <div class="service-row">
      <div class="service-cell"><div class="service-name">Pilot Programme <span class="tag tag-impl">Implementation</span></div></div>
      <div class="service-cell">A condensed deployment scoped to a single process or area of the business. Designed to demonstrate measurable value within 8 weeks before full rollout commitment. Platform subscription waived during the pilot period.</div>
      <div class="service-cell">6–8 weeks</div>
      <div class="service-cell price-cell">£12,000 – £25,000 <span class="price-sub">All-in pilot fee</span></div>
    </div>

    <div class="service-row">
      <div class="service-cell"><div class="service-name">Managed Optimisation <span class="tag tag-success">Success</span></div></div>
      <div class="service-cell">Ongoing refinement of how the platform works for your business — outcome reviews, process improvements, AI tuning, and configuration updates. Delivered by a named FluentForward consultant on a monthly retainer.</div>
      <div class="service-cell">Ongoing</div>
      <div class="service-cell price-cell">£3,500 – £8,000 <span class="price-sub">Per month</span></div>
    </div>

    <div class="service-row">
      <div class="service-cell"><div class="service-name">Bespoke Solution Development <span class="tag tag-impl">Implementation</span></div></div>
      <div class="service-cell">Design and build of a new operational solution for a sector or business type not covered by existing offerings. Includes full process design, AI configuration, workflow build, and compliance layer. Intellectual property retained by FluentForward.</div>
      <div class="service-cell">8–20 weeks</div>
      <div class="service-cell price-cell">£35,000 – £120,000 <span class="price-sub">Fixed fee · scoped</span></div>
    </div>

    <div class="service-row">
      <div class="service-cell"><div class="service-name">CTO-as-a-Service <span class="tag tag-retainer">Retainer</span></div></div>
      <div class="service-cell">Fractional strategic technology leadership. Covers AI strategy, operational technology roadmap, vendor evaluation, and team capability building. Delivered through FluentForward Ltd.</div>
      <div class="service-cell">Ongoing</div>
      <div class="service-cell price-cell">£4,500 – £10,000 <span class="price-sub">Per month</span></div>
    </div>
  </div>
</div>

<div class="section">
  <div class="section-label">Channel Partner Model</div>
  <div class="channel-band">
    <div class="channel-col">
      <h4>How it works</h4>
      <p>Delivery partners — typically AI consultancies or sector specialists — resell the platform and deliver implementation services under their own brand. FluentForward provides the platform, pre-built industry solutions, and partner enablement. Partners own the client relationship and retain a share of recurring revenue.</p>
    </div>
    <div class="channel-col">
      <h4>Partner revenue share</h4>
      <div class="big-number">30%</div>
      <p>Of platform subscription revenue for clients introduced and managed by the partner. Paid monthly. No cap. Increases to 35% above £10k monthly recurring revenue per partner.</p>
    </div>
    <div class="channel-col">
      <h4>Partner onboarding</h4>
      <p>£5,000 one-time enablement fee covers platform certification, a sector demo deployment, and co-branded sales collateral. Waived for founding delivery partners in the first cohort.</p>
    </div>
  </div>
</div>

<div class="section">
  <div class="section-label">Illustrative Annual Value — Mid-Size Organisation</div>
  <div class="value-summary">
    <div class="value-cell"><div class="value-label">Platform subscription</div><div class="value-number">£42k</div><div class="value-sub">Operational tier, annual</div></div>
    <div class="value-cell"><div class="value-label">Intelligence tier</div><div class="value-number">£22k</div><div class="value-sub">Outcome intelligence add-on</div></div>
    <div class="value-cell"><div class="value-label">Managed optimisation</div><div class="value-number">£60k</div><div class="value-sub">£5k/month retainer</div></div>
    <div class="value-cell"><div class="value-label">Total recurring</div><div class="value-number">£124k</div><div class="value-sub">Exc. implementation</div></div>
  </div>
</div>

<div class="section" id="comparison">
  <div class="section-label">How it compares — illustrative scenario: 15-user regulated practice, ~500 active cases/year</div>
  <p style="font-size:14px;color:var(--body);line-height:1.75;max-width:820px;margin-bottom:40px;font-style:italic;">Most practices have never added up the true cost of their current stack. The comparison below uses conservative, publicly available pricing for a typical mid-size regulated practice. Your numbers will vary — but the shape of the comparison holds.</p>

  <div style="overflow-x:auto;margin-bottom:12px;">
    <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:640px;">
      <thead>
        <tr style="background:var(--dark);">
          <th style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);padding:14px 16px;text-align:left;border-bottom:1px solid var(--border);">Current stack</th>
          <th style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);padding:14px 16px;text-align:left;border-bottom:1px solid var(--border);">What it covers</th>
          <th style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);padding:14px 16px;text-align:right;border-bottom:1px solid var(--border);">Typical annual cost</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:var(--surface);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">CRM<br><span style="font-weight:400;color:var(--muted);font-size:11px;">e.g. Salesforce Enterprise</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">Client records, pipeline, communications, basic reporting. 15 users.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£29,700</td></tr>
        <tr style="background:var(--dark);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">AI add-on<br><span style="font-weight:400;color:var(--muted);font-size:11px;">e.g. Agentforce / Einstein</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">AI layer on top of CRM. Limited to CRM context — no document or compliance awareness.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£18,000</td></tr>
        <tr style="background:var(--surface);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">Document management<br><span style="font-weight:400;color:var(--muted);font-size:11px;">e.g. iManage, DocuWare</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">Document storage, version control, workflow approvals. Separate data model from CRM.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£10,000</td></tr>
        <tr style="background:var(--dark);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">Compliance tooling<br><span style="font-weight:400;color:var(--muted);font-size:11px;">specialist add-on or manual</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">Regulatory checks, audit logs, policy enforcement. Often partly manual.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£8,000</td></tr>
        <tr style="background:var(--surface);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">Client-facing application<br><span style="font-weight:400;color:var(--muted);font-size:11px;">separate portal product</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">External-facing app for clients to view status, sign documents, submit information.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£6,000</td></tr>
        <tr style="background:var(--dark);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">Workflow &amp; integration tools<br><span style="font-weight:400;color:var(--muted);font-size:11px;">e.g. Zapier, Make</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">Connecting the above systems. Maintaining automations between tools that don't share data.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£4,500</td></tr>
        <tr style="background:var(--surface);"><td style="padding:13px 16px;border-bottom:1px solid var(--border);font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;color:var(--white);">CRM admin overhead<br><span style="font-weight:400;color:var(--muted);font-size:11px;">fractional or in-house</span></td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--body);">Configuring, maintaining, and troubleshooting the stack. Unavoidable at this scale.</td><td style="padding:13px 16px;border-bottom:1px solid var(--border);color:var(--white);font-family:'Montserrat',sans-serif;font-weight:700;text-align:right;">£18,000</td></tr>
        <tr style="background:rgba(212,43,43,0.06);border-top:1px solid rgba(212,43,43,0.2);"><td colspan="2" style="padding:16px 16px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:12px;color:var(--white);letter-spacing:0.04em;">TOTAL — current stack (software + admin)</td><td style="padding:16px 16px;font-family:'Montserrat',sans-serif;font-weight:900;font-size:18px;color:var(--red);text-align:right;">£94,200/yr</td></tr>
      </tbody>
    </table>
  </div>

  <p style="font-size:11px;color:var(--muted);font-style:italic;margin-bottom:48px;padding-left:4px;">Based on publicly listed 2026 pricing. Excludes VAT and one-time implementation costs, which typically add £30,000–£80,000 in year one for a stack of this complexity.</p>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--border);border-radius:12px;overflow:hidden;margin-bottom:48px;">
    <div style="background:var(--surface);padding:32px 28px;">
      <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:20px;">Current stack approach</div>
      <div style="font-family:'Montserrat',sans-serif;font-size:32px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:6px;">£94,200</div>
      <div style="font-family:'Montserrat',sans-serif;font-size:10px;color:var(--muted);letter-spacing:0.08em;margin-bottom:28px;">per year · software + admin</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--muted);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="13" y2="13"></line><line x1="13" y1="3" x2="3" y2="13"></line></svg>5–6 separate systems, none sharing a data model</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--muted);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="13" y2="13"></line><line x1="13" y1="3" x2="3" y2="13"></line></svg>AI has no access to documents, compliance state, or case context</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--muted);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="13" y2="13"></line><line x1="13" y1="3" x2="3" y2="13"></line></svg>Compliance is manual checks and overlays — gaps exist</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--muted);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="13" y2="13"></line><line x1="13" y1="3" x2="3" y2="13"></line></svg>Client-facing app is a separate product, separate login, stale data</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--muted);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="13" y2="13"></line><line x1="13" y1="3" x2="3" y2="13"></line></svg>Admin overhead to maintain integrations and configuration</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--muted);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="13" y2="13"></line><line x1="13" y1="3" x2="3" y2="13"></line></svg>No mechanism to learn from outcomes or improve over time</div>
      </div>
    </div>

    <div style="background:var(--surface2);padding:32px 28px;position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--red);"></div>
      <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--red);margin-bottom:20px;">FluentForward — Operational + Intelligence</div>
      <div style="font-family:'Montserrat',sans-serif;font-size:32px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:6px;">£64,000</div>
      <div style="font-family:'Montserrat',sans-serif;font-size:10px;color:var(--muted);letter-spacing:0.08em;margin-bottom:28px;">per year · platform + intelligence tier</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--teal);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>One unified system — entities, AI, processes, client application</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--teal);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>AI operates on complete case context — documents, compliance state, history</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--teal);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Compliance built into infrastructure — structural, not an overlay</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--teal);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Client-facing application is live data from the same system, not a sync</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--teal);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>No integration maintenance — no separate systems to connect</div>
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);"><svg style="width:14px;height:14px;flex-shrink:0;margin-top:2px;color:var(--teal);" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 8 6 12 14 4"></polyline></svg>Platform actively analyses outcomes and suggests process improvements</div>
      </div>
    </div>
  </div>

  <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:var(--muted);margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;"><span style="width:20px;height:2px;background:var(--amber);flex-shrink:0;display:inline-block;"></span>Hidden costs the current stack doesn't show you</div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--border);border-radius:12px;overflow:hidden;margin-bottom:48px;">
    <div style="background:var(--surface);padding:24px 20px;"><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--amber);margin-bottom:10px;">Gap management labour</div><div style="font-family:'Montserrat',sans-serif;font-size:26px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:8px;">£35–55k</div><p style="font-size:12px;color:var(--body);line-height:1.6;">People whose primary job is chasing updates, re-keying data between systems, and manually checking compliance. Typically 1 FTE equivalent at this scale — cost that doesn't appear on any software invoice.</p></div>
    <div style="background:var(--surface);padding:24px 20px;"><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--amber);margin-bottom:10px;">Compliance failure exposure</div><div style="font-family:'Montserrat',sans-serif;font-size:26px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:8px;">Unquantified</div><p style="font-size:12px;color:var(--body);line-height:1.6;">Regulatory fines, PI claims, and reputational damage from compliance failures that happen in the gaps between systems. In regulated verticals, a single material failure can cost more than years of platform fees. Current stacks don't eliminate this risk — they just make it harder to see.</p></div>
    <div style="background:var(--surface);padding:24px 20px;"><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--amber);margin-bottom:10px;">Year-one implementation</div><div style="font-family:'Montserrat',sans-serif;font-size:26px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:8px;">£30–80k</div><p style="font-size:12px;color:var(--body);line-height:1.6;">Implementing a multi-tool stack typically costs £30,000–£80,000 in year one — often underbudgeted. FluentForward implementation is a single engagement with a single team, typically £20,000–£45,000 for a practice at this scale, with no integration layer to build.</p></div>
  </div>

  <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:var(--muted);margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;"><span style="width:20px;height:2px;background:var(--teal);flex-shrink:0;display:inline-block;"></span>ROI that only FluentForward can deliver</div>
  <p style="font-size:14px;color:var(--body);line-height:1.75;max-width:820px;margin-bottom:32px;font-style:italic;">The following returns are only possible when outcomes are a first-class concept in the platform — when the system can measure what good looks like, track the distance from here to there, and actively improve the processes that close that gap. No CRM or workflow tool can make this argument.</p>

  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
    <div style="background:var(--surface2);padding:28px 24px;border-right:none;position:relative;"><div style="position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--teal);"></div><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;">Faster completion, more throughput</div><p style="font-size:13px;color:var(--body);line-height:1.65;">When the platform identifies that a specific process sequence correlates with faster case completion, and applies that across all active cases, the practice handles more cases with the same team. A 10% improvement in average case duration at a 500-case practice is equivalent to handling 50 additional cases per year — without hiring.</p></div>
    <div style="background:var(--surface2);padding:28px 24px;position:relative;"><div style="position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--teal);"></div><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;">Compliance risk transfer</div><p style="font-size:13px;color:var(--body);line-height:1.65;">Compliance built into infrastructure — not overlaid on top — means regulatory obligations are enforced at the point of action, not checked after the fact. Every decision is logged with the reasoning behind it. In a regulated vertical, this changes the PI insurance conversation and reduces the cost of regulatory oversight materially.</p></div>
    <div style="background:var(--surface2);padding:28px 24px;position:relative;border-top:2px solid var(--border);"><div style="position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--teal);"></div><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;">Client experience as a competitive advantage</div><p style="font-size:13px;color:var(--body);line-height:1.65;">A live, intelligent client application — not a static portal — that shows clients exactly where their case is, what's needed from them, and what happens next. In markets where client experience is a differentiator, this directly affects referral rates and repeat business. Difficult to quantify. Impossible to replicate with a bolt-on portal.</p></div>
    <div style="background:var(--surface2);padding:28px 24px;position:relative;border-top:2px solid var(--border);"><div style="position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--teal);"></div><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;">The platform improves as you use it</div><p style="font-size:13px;color:var(--body);line-height:1.65;">Every case that runs through the platform generates signal. The Intelligence tier analyses that signal against your defined outcomes and surfaces evidence-backed process improvements. A CRM stores what happened. FluentForward learns from it. The gap between your operational performance today and in three years is not the same gap your competitors on static software face.</p></div>
  </div>

  <div style="background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:32px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:2px;background:var(--border);border-radius:12px;overflow:hidden;margin-top:4px;">
    <div style="background:var(--surface2);padding:24px 20px;text-align:center;"><div style="font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Direct software saving</div><div style="font-family:'Montserrat',sans-serif;font-size:28px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:4px;">~£30k</div><div style="font-size:11px;color:var(--muted);font-style:italic;">vs equivalent stack<br>per year</div></div>
    <div style="background:var(--surface2);padding:24px 20px;text-align:center;"><div style="font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Labour cost displaced</div><div style="font-family:'Montserrat',sans-serif;font-size:28px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:4px;">£35–55k</div><div style="font-size:11px;color:var(--muted);font-style:italic;">gap management &amp;<br>admin overhead</div></div>
    <div style="background:var(--surface2);padding:24px 20px;text-align:center;"><div style="font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Total first-year saving</div><div style="font-family:'Montserrat',sans-serif;font-size:28px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:4px;">£65–85k</div><div style="font-size:11px;color:var(--muted);font-style:italic;">software + labour<br>exc. throughput gains</div></div>
    <div style="background:rgba(26,158,143,0.1);padding:24px 20px;text-align:center;border-left:3px solid var(--teal);"><div style="font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;">Payback period</div><div style="font-family:'Montserrat',sans-serif;font-size:28px;font-weight:900;color:var(--white);letter-spacing:-0.02em;line-height:1;margin-bottom:4px;">&lt; 12 mo</div><div style="font-size:11px;color:var(--muted);font-style:italic;">including implementation<br>conservative estimate</div></div>
  </div>

  <p style="font-size:11px;color:var(--muted);font-style:italic;margin-top:14px;padding-left:4px;">All figures are illustrative estimates based on a 15-user, 500-case practice. Actual savings depend on current stack, headcount, and operational profile. We model this in detail during Discovery &amp; Design.</p>
</div>

<div class="footnote">
  <p>All prices shown exclude VAT. Implementation fees are indicative ranges; all engagements are scoped before contract. Platform subscription pricing is subject to annual review. Enterprise contracts are negotiated individually and may include volume discounts, multi-year terms, and dedicated infrastructure options. Delivery partner terms are governed by the FluentForward Partner Agreement.</p>
</div>
`

export default function PricingPage() {
  return <div dangerouslySetInnerHTML={{ __html: PRICING_MOCKUP }} />
}
