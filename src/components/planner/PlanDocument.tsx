'use client'

import { useEffect } from 'react'

import { rememberProblem, ScopeLink } from '@/components/booking/ScopeLink'
import { Chevron } from '@/components/home/Mark'
import { buttonClasses } from '@/components/ui/button-classes'
import { trackPlannerEvent } from '@/lib/vendors/track-planner'
import { IMPACT_LABEL, LEVER_LABEL } from '@/lib/planner/levers'
import {
  BOOK_LINE,
  BUILD_LINE,
  COMMERCIALS,
  firstReviewLabel,
  glanceCaption,
  headlineLines,
  IMPACT_GUIDE,
  LEVER_GUIDE,
  LEVER_NO,
  ownerShort,
  pipCount,
  planDate,
  PLAN_FOOTNOTE,
  preparedFor,
  proofHeading,
  proofRows,
  rankedLevers,
  SCORE_INTRO,
  stepIntro,
  WONT_DO,
} from '@/lib/planner/plan-view'
import type { FullPlan, LeverImpact } from '@/lib/planner/types'

export function PlanDocument({
  plan,
  name,
  email,
  emailed,
  publicId,
}: {
  plan: FullPlan
  name: string
  email: string
  emailed: boolean
  publicId: string
}) {
  const who = preparedFor(name)
  const [opening, openingRest] = headlineLines(plan.opportunity)
  const rows = proofRows(plan)
  const proof = proofHeading(rows)
  const levers = rankedLevers(plan.levers)

  useEffect(() => {
    rememberProblem(plan.quote || plan.outcome)
  }, [plan.quote, plan.outcome])

  function book() {
    void fetch('/api/agent-planner/cta', { method: 'POST', keepalive: true })
    trackPlannerEvent('planner_cta_clicked')
  }

  return (
    <article className="ffp-plan">
      <header className="ffp-plan-cover">
        <p className="ffp-plan-logo">
          <Chevron className="ffp-plan-mark" />
          FluentForward
        </p>
        <p className="ffp-plan-kicker">First-agent plan · Prepared for {who}</p>
        <h1>{plan.title}</h1>
        <p className="ffp-plan-outcome">{plan.outcome}</p>
        <dl className="ffp-plan-facts">
          <div>
            <dt>Date</dt>
            <dd>{planDate()}</dd>
          </div>
          <div>
            <dt>Build</dt>
            <dd>{BUILD_LINE}</dd>
          </div>
          <div>
            <dt>First review</dt>
            <dd>{firstReviewLabel(plan)}</dd>
          </div>
        </dl>
        <p className="ffp-plan-kicker">At a glance · the four money levers this agent could move</p>
        <ul className="ffp-plan-glance">
          {levers.map((lever) => (
            <li key={lever.lever} className={lever.impact === 'high' || lever.impact === 'medium' ? 'is-strong' : undefined}>
              <p>{LEVER_LABEL[lever.lever]}</p>
              <p className="ffp-plan-score">{IMPACT_LABEL[lever.impact]}</p>
              <p>{glanceCaption(lever)}</p>
              <Pips impact={lever.impact} />
            </li>
          ))}
        </ul>
        <p className="ffp-plan-aside">
          We score each lever on its own and never add them together. The next sections explain every score, and how
          we prove it.
        </p>
        {plan.betterFirst ? <p className="ffp-plan-aside">{plan.betterFirst}</p> : null}
        <p className="ffp-plan-aside">
          {emailed ? `A copy is on its way to ${email}.` : `The plan is here. A copy is being sent to ${email}.`}
        </p>
      </header>

      <section className="ffp-plan-section">
        <p className="ffp-plan-label">The opportunity</p>
        <h2>
          {opening}
          {openingRest ? (
            <>
              <br />
              {openingRest}
            </>
          ) : null}
        </h2>
        <blockquote>
          <p className="ffp-plan-label">What you told us</p>
          <p>“{plan.quote.replace(/^["“]|["”]$/g, '')}”</p>
        </blockquote>
        <div className="ffp-plan-table" role="table">
          <div className="ffp-plan-table-head" role="row">
            <p role="columnheader">Today</p>
            <p role="columnheader">With the agent</p>
          </div>
          {plan.shifts.map((shift) => (
            <div key={shift.today} className="ffp-plan-table-row" role="row">
              <p role="cell">{shift.today}</p>
              <p role="cell">{shift.withAgent}</p>
            </div>
          ))}
        </div>
        <p className="ffp-plan-label">{plan.betterFirst ? 'Read this before you build' : 'Why this is a strong first agent'}</p>
        {plan.betterFirst ? <p className="ffp-plan-lead">{plan.betterFirst}</p> : null}
        <ol className="ffp-plan-reasons">
          {plan.reasons.map((reason, index) => (
            <li key={reason.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ffp-plan-section">
        <p className="ffp-plan-label">How we score impact</p>
        <h2>An agent only pays back through one of four levers.</h2>
        <p className="ffp-plan-lead">{SCORE_INTRO}</p>
        <ul className="ffp-plan-guide">
          {LEVER_GUIDE.map((item) => (
            <li key={item.id}>
              <p className="ffp-plan-label">Lever {LEVER_NO[item.id]}</p>
              <h3>{LEVER_LABEL[item.id]}</h3>
              <p>{item.body}</p>
              <p>{item.shows}</p>
            </li>
          ))}
        </ul>
        <div className="ffp-plan-scale">
          <div>
            <h3>Impact</h3>
            <ul>
              {IMPACT_GUIDE.map((item) => (
                <li key={item.impact}>
                  <span>{IMPACT_LABEL[item.impact]}</span>
                  <Pips impact={item.impact} />
                  <span>{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Path to the money</h3>
            <p>
              <strong>Direct.</strong> The agent does the work itself. We review at 30 days.
            </p>
            <p>
              <strong>Via decisions.</strong> The agent informs a person, who then acts. We review at 90 days.
            </p>
            <p>Each lever also names an owner: the person who has to act for the money to show up.</p>
          </div>
        </div>
        <div className="ffp-plan-wont">
          <h3>What we won’t do</h3>
          <p>{WONT_DO}</p>
        </div>
      </section>

      <section className="ffp-plan-section">
        <p className="ffp-plan-label">Your lever scores</p>
        <h2>Where this agent moves the money.</h2>
        <p className="ffp-plan-lead">{plan.scoreIntro}</p>
        <ul className="ffp-plan-scores">
          {levers.map((lever) => (
            <li
              key={lever.lever}
              className={
                lever.impact === 'none' ? 'is-none' : lever.impact === 'high' || lever.impact === 'medium' ? 'is-strong' : undefined
              }
            >
              <div>
                <p className="ffp-plan-label">Lever {LEVER_NO[lever.lever]}</p>
                <h3>{LEVER_LABEL[lever.lever]}</h3>
                <p className="ffp-plan-score">{IMPACT_LABEL[lever.impact]}</p>
                <Pips impact={lever.impact} />
                {lever.impact !== 'none' ? (
                  <p className="ffp-plan-path">{lever.path === 'direct' ? 'Direct' : 'Via decisions'}</p>
                ) : null}
              </div>
              <div>
                <p>{lever.why}</p>
                {lever.impact !== 'none' ? (
                  <dl>
                    <div>
                      <dt>Baseline · last month</dt>
                      <dd>{lever.baseline || 'The figure you can count from last month'}</dd>
                    </div>
                    <div>
                      <dt>Who acts</dt>
                      <dd>{lever.ownerRole || 'The person who owns this work'}</dd>
                    </div>
                    <div>
                      <dt>Review</dt>
                      <dd>{lever.reviewAt}</dd>
                    </div>
                  </dl>
                ) : null}
                {lever.note ? <p className="ffp-plan-note">{lever.note}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ffp-plan-section">
        <p className="ffp-plan-label">How the agent works</p>
        <h2>
          The agent does the legwork.
          <br />
          You keep the final say.
        </h2>
        <p className="ffp-plan-lead">{stepIntro(plan)}</p>
        <ol className="ffp-plan-steps">
          {plan.steps.map((step) => (
            <li key={step.n} className={step.actor === 'you' ? 'is-you' : undefined}>
              <span>{step.n}</span>
              <p>{step.actor === 'you' ? 'You' : 'Agent'}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="ffp-plan-split">
          <div>
            <p className="ffp-plan-label">Stays with a person</p>
            <ul>
              {plan.human.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ffp-plan-label">Connects to</p>
            <ul className="ffp-plan-tools">
              {plan.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <p>We confirm access and permissions on the call.</p>
            <p className="ffp-plan-label">What you also get</p>
            <ul>
              {plan.alsoGet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ffp-plan-section">
        <p className="ffp-plan-label">How we prove it</p>
        <h2>
          {proof.title}
          <br />
          {proof.rest}
        </h2>
        {rows.length ? (
          <div className="ffp-plan-proof" role="table">
            <div role="row">
              <p role="columnheader">Lever</p>
              <p role="columnheader">Capture from last month</p>
              <p role="columnheader">Check at review</p>
              <p role="columnheader">Who acts</p>
            </div>
            {rows.map((row) => (
              <div key={row.lever} role="row">
                <p role="cell">{LEVER_LABEL[row.lever]}</p>
                <p role="cell">{row.baseline}</p>
                <p role="cell">{row.check || 'The same measure, after the agent has run'}</p>
                <p role="cell">{ownerShort(row.ownerRole)}</p>
              </div>
            ))}
          </div>
        ) : null}
        <ol className="ffp-plan-timeline">
          <li>
            <p>Day 0</p>
            <h3>Scope agreed</h3>
            <p>System access granted, baselines captured</p>
          </li>
          <li>
            <p>Days 1–10</p>
            <h3>Build</h3>
            <p>Mapping, rules, flagging, approval</p>
          </li>
          <li>
            <p>Day 10</p>
            <h3>Live*</h3>
            <p>{plan.firstRun}</p>
          </li>
          <li>
            <p>{firstReviewLabel(plan).replace(' after go-live', '')} after go-live</p>
            <h3>Review</h3>
            <p>Compare against your baselines, lever by lever</p>
          </li>
        </ol>
        <div className="ffp-plan-split">
          <div>
            <p className="ffp-plan-label">Included in the 10-day build</p>
            <ul>
              {plan.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ffp-plan-label">Commercials</p>
            {COMMERCIALS.map((item) => (
              <p key={item.title}>
                <strong>{item.title}</strong>
                {item.body}
              </p>
            ))}
            <p>Both are confirmed on the scoping call.</p>
          </div>
        </div>
        <div className="ffp-plan-book">
          <div>
            <h2>Book a 20-minute scoping call</h2>
            <p>{BOOK_LINE}</p>
          </div>
          <ScopeLink
            className={buttonClasses('primary')}
            href={`/contact?plan=${encodeURIComponent(publicId)}`}
            onOpen={book}
          >
            Book my call
          </ScopeLink>
        </div>
        <p className="ffp-plan-foot">* {PLAN_FOOTNOTE}</p>
      </section>
    </article>
  )
}

function Pips({ impact }: { impact: LeverImpact }) {
  const filled = pipCount(impact)
  return (
    <span className="ffp-plan-pips" aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <i key={index} className={index < filled ? 'is-on' : undefined} />
      ))}
    </span>
  )
}
