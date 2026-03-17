import { type Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Beyond Integration - FluentForward Agentic Platform',
  description:
    'How purpose-built agentic platforms replace the operational stack for regulated verticals.',
}

const replacementRows = [
  {
    layer: 'CRM / Entity Records',
    traditional: 'Generic CRM - contacts, companies, deals',
    platform: 'Purpose-built entities native to your domain',
  },
  {
    layer: 'Workflow Automation',
    traditional: 'Zapier / Make - rules connecting disconnected tools',
    platform: 'Agent orchestration - autonomous, context-aware',
  },
  {
    layer: 'Document Management',
    traditional: 'Document store + integrations to pull context in',
    platform: 'Entity-linked documents - agents generate, review, act',
  },
  {
    layer: 'Compliance & Risk',
    traditional: 'Compliance add-on or manual process layer',
    platform: 'Native Safeguard Layer - encoded in the platform itself',
  },
  {
    layer: 'Reporting & Analytics',
    traditional: 'BI tool pulling from multiple sources via connectors',
    platform: 'Full execution capture - every action, state, and outcome',
  },
  {
    layer: 'Task & Case Mgmt',
    traditional: 'Project management tool with custom fields',
    platform: 'Entity state + workflow engine - no translation needed',
  },
]

const engagementCards = [
  {
    label: 'Stream 01',
    title: 'Managed Agentic Services',
    body: 'For firms that want the operational benefits without managing the technology. We deploy, configure, and operate a vertical plugin on your behalf. Pricing is outcome-based - aligned to the value delivered, not seat counts or usage tiers.',
  },
  {
    label: 'Stream 02',
    title: 'AI-Native Transition',
    body: 'For businesses ready to move further. We work as a strategic partner in transitioning operations to a fully AI-native model - rebuilding operational processes around agent capabilities, not retrofitting agents onto existing processes.',
  },
  {
    label: 'Stream 03',
    title: 'Channel Partnership',
    body: 'For consultancies and professional service firms serving regulated verticals. Partners access the platform under a revenue-share arrangement and deliver vertical-specific solutions to their own client base. Founding partners receive preferential terms, time-limited vertical exclusivity, and certified implementer status.',
  },
]

export default function AgenticPlatformPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroWordmark}>
          <div className={styles.heroWordmarkBar} />
          <div className={styles.heroWordmarkText}>
            FluentForward <span>Agentic Platform</span>
          </div>
        </div>

        <div className={styles.heroBody}>
          <p className={styles.heroLabel}>Position Paper - March 2026</p>
          <h1 className={styles.heroHeadline}>
            Beyond
            <br />
            Integration.
            <span className={styles.heroHeadlineAccent}>
              The Agentic
              <br />
              Operating System.
            </span>
          </h1>
          <p className={styles.heroSub}>
            How purpose-built agentic platforms replace the operational stack
            entirely - and why that changes everything for businesses in
            regulated verticals.
          </p>
        </div>

        <div className={styles.heroFooter}>
          <span className={styles.heroFooterSite}>fluentforward.com</span>
          <span className={styles.heroFooterMeta}>Confidential</span>
        </div>
      </section>

      <main>
        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>
                The Problem with the Modern Operational Stack
              </h2>
            </div>

            <p>
              Most businesses running on software today are running on a
              compromise. They have a CRM that was not quite built for their
              industry. A workflow tool stitching it to a document system. A
              compliance layer bolted on top. And somewhere in the middle, a
              team spending significant time moving information between systems
              that were never designed to work together.
            </p>

            <p>
              AI has made this worse in one important way. The wave of AI tools
              now available are almost universally designed as additions to the
              existing stack - AI features inside the CRM, AI agents that read
              from your project management tool, AI automation that connects the
              same fragmented systems via smarter rules. The underlying
              architecture has not changed. The integration tax has not gone
              away.
            </p>

            <div className={styles.callout}>
              The question is not "how do we add AI to our existing stack?" The
              question is: if we were building our operational system from
              scratch today, knowing what AI can do, what would we actually
              build?
            </div>

            <p>
              The answer is not a better CRM with an AI feature. It is a system
              where agents, data, workflows, and compliance logic are designed
              together from the ground up - for a specific industry, with a
              specific set of problems, where AI is not an add-on but the
              operating engine.
            </p>

            <p>That is what the FluentForward Agentic Platform delivers.</p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>
                Agentic Operating Systems, Not Integrations
              </h2>
            </div>

            <p>
              The FluentForward Agentic Platform is a multi-tenant system that
              powers purpose-built, AI-native operational environments for
              regulated business verticals. Each vertical is delivered as a
              plugin - a complete operational system built around agents that
              act autonomously, safely, and with full auditability.
            </p>

            <p>
              The distinction from conventional software - including
              conventional AI software - is structural, not cosmetic.
            </p>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                Purpose-Built Entity Models
              </h3>
              <p>
                Every operational system needs a way to represent the things it
                works with: clients, cases, transactions, assets, relationships.
                Most software uses generic building blocks - contacts, deals,
                tasks, records - because generic building blocks serve the
                widest possible market.
              </p>
              <p>
                Vertical plugins on the FluentForward Platform are built around
                entity models native to a specific industry. A conveyancing
                plugin has Cases, Chains, Parties, Searches, and Milestones as
                first-class data types - not shoehorned into contact and deal
                fields. A property management plugin has Tenancies, Compliance
                Certificates, Maintenance Tickets, and Legal Notices, each with
                the precise structure that domain requires.
              </p>
              <p>
                This matters because agents operate directly on these entities.
                There is no translation layer. There is no integration pulling
                data from one system into another. The agent&apos;s context is
                the entity state - complete, accurate, and current.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                Agents as the Operational Engine
              </h3>
              <p>
                In a conventional software stack, workflows are automated rules
                - if this, then that. They are deterministic, brittle, and
                limited to the scenarios their designers anticipated. When
                something falls outside those scenarios, a human has to
                intervene.
              </p>
              <p>
                On the FluentForward Platform, agents handle the operational
                work. They monitor entity state, identify what needs to happen
                next, take action where they have autonomy to do so, and surface
                decisions to humans where judgement or authorisation is
                required. They learn from the outcomes of their actions. They
                improve over time.
              </p>
              <p>
                The agent layer does not sit on top of the operational system.
                It <em>is</em> the operational system.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                Compliance as Infrastructure
              </h3>
              <p>
                In regulated industries, compliance is typically an overlay -
                policies documented somewhere, enforced by training and manual
                checks, audited periodically. Compliance failures happen in the
                gaps between systems, in the moments where no rule was triggered
                because no system knew enough to trigger it.
              </p>
              <p>
                The FluentForward Platform encodes compliance logic at the
                infrastructure level. The Safeguard Layer is a dedicated,
                independent agent subsystem that evaluates every write action and
                external communication before it executes. Hard constraints are
                enforced at the platform level and cannot be overridden by
                operator configuration. Every safeguard evaluation is logged
                permanently.
              </p>
              <p>
                Compliance is not a feature. It is a structural property of how
                the platform works.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>What This Replaces</h2>
            </div>

            <p>
              A well-specified vertical plugin can legitimately replace five or
              six separate SaaS tools - not by replicating their interfaces, but
              by making their functions redundant.
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeadRow}>
                    <th>Operational Layer</th>
                    <th>Traditional SaaS Stack</th>
                    <th className={styles.platformColumn}>
                      FluentForward Platform
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {replacementRows.map((row) => (
                    <tr key={row.layer}>
                      <td>{row.layer}</td>
                      <td>{row.traditional}</td>
                      <td>{row.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.tableHint}>&larr; scroll to see full table</p>
            </div>

            <div className={styles.callout}>
              This is not a claim about features. It is a claim about
              architecture. A system designed from the ground up around agents,
              native entity models, and integrated compliance logic makes most
              of the conventional operational stack unnecessary - because those
              tools exist to compensate for the limitations of systems that were
              never designed to be intelligent.
            </div>

            <p>
              The practical consequence: businesses running on a FluentForward
              vertical plugin have lower total operational tooling cost, fewer
              integration failure points, more accurate data, faster decision
              cycles, and a compliance record generated automatically as a
              byproduct of normal operation.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>
                Why Regulated Verticals Are the Right Starting Point
              </h2>
            </div>

            <p>
              The strongest case for this architecture is in industries where
              the cost of operational error is high, compliance requirements are
              non-negotiable, and the volume of information-heavy work makes
              automation genuinely valuable. Regulated verticals meet all three
              criteria.
            </p>

            <p>
              In conveyancing, property management, financial services, and
              similar sectors, the difference between a well-run operation and a
              poorly-run one is almost always an information and coordination
              problem. Agents operating on complete, accurate, natively
              structured entity state are particularly well-suited to solving
              exactly this problem.
            </p>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>The Auditability Advantage</h3>
              <p>
                Regulated businesses have auditability requirements that
                conventional software handles badly. Reconstructing exactly what
                happened in a transaction - who took what action, what
                information was available at the time, and why a particular
                decision was made - is typically a laborious manual exercise
                drawing from multiple disconnected systems.
              </p>
              <p>
                The FluentForward Platform captures every agent action, every
                model call, every tool execution, and every entity state change
                as a structured record. Full execution capture is native to the
                architecture. Auditability is a byproduct of how the platform
                already operates.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                The Moat That Builds Over Time
              </h3>
              <p>
                The longer a vertical plugin operates within a business, the
                more valuable it becomes. The self-learning system replays
                historical executions against new agent configurations,
                identifying improvements through backtesting before deploying
                them to production. Entity memory accumulates context that makes
                agent performance increasingly precise.
              </p>
              <p>
                Switching costs are not primarily contractual - they are
                operational. A business that has run its operations through the
                platform for two years is not just switching software. It is
                dismantling an operational system that has learned how its cases
                work, what its clients prefer, and how its team makes decisions.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>
                How We Work With Clients and Partners
              </h2>
            </div>

            <p>
              FluentForward operates three distinct engagement models, designed
              to meet businesses and distribution partners at the right point in
              their journey.
            </p>

            <div className={styles.cards}>
              {engagementCards.map((card) => (
                <article key={card.label} className={styles.card}>
                  <div className={styles.cardLabel}>{card.label}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>06</span>
              <h2 className={styles.sectionTitle}>The Bigger Idea</h2>
            </div>

            <p>
              We are at an early point in a significant structural shift. The
              generation of software that built the modern operational stack -
              CRMs, ERPs, workflow tools, document management systems - was
              designed for a world where software was inherently passive. It
              stored data. It surfaced information. Humans made decisions and
              took actions.
            </p>

            <p>
              That constraint no longer holds. The question now is not whether
              AI can do operational work - it clearly can. The question is
              whether businesses will add AI to systems designed for passive
              software, or build operational systems designed for AI from the
              ground up.
            </p>

            <p>
              The businesses that get this right in the next few years will not
              just be more efficient than their competitors. They will be
              structurally different - operating with a smaller team, a lower
              cost base, faster cycle times, and a compliance record generated
              automatically. The gap between those businesses and those still
              managing AI integrations on top of fragmented SaaS stacks will
              compound over time.
            </p>
          </section>
        </div>

        <section className={styles.closer}>
          <div className={styles.closerEyebrow}>Get in touch</div>
          <p className={styles.closerText}>
            We built the FluentForward Agentic Platform because we believe the
            right answer is to start from first principles - to design the
            operational system around the agent, not the other way around. If
            you are building or running a business in a regulated vertical, we
            would like to talk about what that looks like for you.
          </p>
        </section>

        <div className={styles.paperMeta}>
          FluentForward Ltd - Confidential - March 2026
        </div>
      </main>
    </div>
  )
}
