import path from 'node:path'

import { Document, Font, Link, Page, renderToBuffer, StyleSheet, Svg, Path, Text, View } from '@react-pdf/renderer'

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
import type { FullPlan, LeverImpact, LeverScore } from '@/lib/planner/types'

const ink = '#0a0a0b'
const paper = '#f4f4f1'
const white = '#ffffff'
const card = '#ffffff'
const accent = '#ff4a1c'
const slate = '#3f3f44'
const mist = '#8a8a86'
const line = '#e4e4df'
const peach = '#fff1ec'

const fontDir = path.join(process.cwd(), 'src/lib/planner/fonts')
Font.register({
  family: 'InterTight',
  fonts: [
    { src: path.join(fontDir, 'InterTight-400.ttf'), fontWeight: 400 },
    { src: path.join(fontDir, 'InterTight-600.ttf'), fontWeight: 600 },
  ],
})
Font.register({
  family: 'PlexMono',
  src: path.join(fontDir, 'IBMPlexMono-400.ttf'),
})
Font.registerHyphenationCallback((word) => [word])

const styles = StyleSheet.create({
  page: {
    backgroundColor: paper,
    color: ink,
    paddingTop: 52,
    paddingBottom: 42,
    paddingHorizontal: 36,
    fontFamily: 'InterTight',
    fontSize: 9,
    lineHeight: 1.4,
  },
  cover: {
    backgroundColor: ink,
    color: white,
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 36,
    fontFamily: 'InterTight',
  },
  kicker: {
    fontFamily: 'PlexMono',
    fontSize: 7.5,
    letterSpacing: 1.1,
    color: '#b7b7b2',
    textTransform: 'uppercase',
  },
  label: {
    fontFamily: 'PlexMono',
    fontSize: 7.5,
    letterSpacing: 1.1,
    color: accent,
    textTransform: 'uppercase',
  },
  h1: { fontFamily: 'InterTight', fontWeight: 600, fontSize: 28, lineHeight: 1.02, letterSpacing: -0.6, marginTop: 14 },
  h2: { fontFamily: 'InterTight', fontWeight: 600, fontSize: 20, lineHeight: 1.08, letterSpacing: -0.4, marginTop: 6, marginBottom: 8 },
  outcome: { color: '#c8c8c4', fontSize: 11, lineHeight: 1.4, marginTop: 12, maxWidth: 460 },
  rule: { width: 28, height: 3, backgroundColor: accent, marginBottom: 8 },
  muted: { color: slate, fontSize: 9, lineHeight: 1.4 },
  run: {
    position: 'absolute',
    top: 22,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'PlexMono',
    fontSize: 7,
    letterSpacing: 0.8,
    color: mist,
    textTransform: 'uppercase',
  },
  foot: {
    position: 'absolute',
    bottom: 18,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'PlexMono',
    fontSize: 7,
    letterSpacing: 0.8,
    color: mist,
    textTransform: 'uppercase',
  },
})

export function renderPlanPdf(input: { plan: FullPlan; name: string | null; scopingUrl: string }): Promise<Buffer> {
  const plan = input.plan
  const who = preparedFor(input.name || '')
  const levers = rankedLevers(plan.levers)
  const rows = proofRows(plan)
  const proof = proofHeading(rows)
  const [opening, openingRest] = headlineLines(plan.opportunity)
  const review = firstReviewLabel(plan)

  return renderToBuffer(
    <Document title={plan.title} author="FluentForward">
      <Page size="A4" style={styles.cover}>
        <Logo />
        <Text style={[styles.kicker, { marginTop: 34 }]}>First-agent plan · Prepared for {who}</Text>
        <Text style={styles.h1}>{plan.title}</Text>
        <Text style={styles.outcome}>{plan.outcome}</Text>
        <View style={{ flexDirection: 'row', gap: 28, marginTop: 22 }}>
          <Fact label="Date" value={planDate()} />
          <Fact label="Build" value={BUILD_LINE} />
          <Fact label="First review" value={review} />
        </View>
        <View style={{ flexGrow: 1 }} />
        <Text style={[styles.kicker, { marginBottom: 8 }]}>At a glance · the four money levers this agent could move</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {levers.map((lever) => (
            <Glance key={lever.lever} lever={lever} />
          ))}
        </View>
        <Text style={{ marginTop: 10, color: '#9d9d98', fontSize: 8, lineHeight: 1.4 }}>
          We score each lever on its own and never add them together. Page 4 explains every score, and page 6 shows how we prove it.
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Running right="01 · The opportunity" />
        <Head label="The opportunity" />
        <Text style={styles.h2}>
          {opening}
          {openingRest ? `\n${openingRest}` : ''}
        </Text>
        <View style={{ marginTop: 8, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 12 }}>
          <Text style={[styles.kicker, { color: mist, marginBottom: 6 }]}>What you told us</Text>
          <Text style={{ fontSize: 11, lineHeight: 1.4, letterSpacing: -0.1 }}>“{plan.quote.replace(/^["“]|["”]$/g, '')}”</Text>
        </View>
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: '#dedad3', borderRadius: 10, overflow: 'hidden' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: '#efece6', paddingVertical: 8, paddingHorizontal: 10 }}>
              <Text style={[styles.kicker, { color: '#3b3b46' }]}>Today</Text>
            </View>
            <View style={{ flex: 1.15, backgroundColor: white, paddingVertical: 8, paddingHorizontal: 10 }}>
              <Text style={styles.label}>With the agent</Text>
            </View>
          </View>
          {plan.shifts.map((shift) => (
            <View key={shift.today} style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#dedad3' }}>
              <View style={{ flex: 1, backgroundColor: '#efece6', paddingVertical: 8, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 11, lineHeight: 1.4, color: '#3b3b46' }}>{shift.today}</Text>
              </View>
              <View style={{ flex: 1.15, backgroundColor: white, paddingVertical: 8, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 11, lineHeight: 1.4, fontWeight: 600, color: '#15151a' }}>{shift.withAgent}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={[styles.kicker, { color: mist, marginTop: 14, marginBottom: 6 }]}>
          {plan.betterFirst ? 'Read this before you build' : 'Why this is a strong first agent'}
        </Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {plan.reasons.map((reason, index) => (
            <View key={reason.title} style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
              <Text style={[styles.kicker, { color: accent, marginBottom: 4 }]}>{String(index + 1).padStart(2, '0')}</Text>
              <Text style={{ fontWeight: 600, fontSize: 11, marginBottom: 4 }}>{reason.title}</Text>
              <Text style={styles.muted}>{reason.text}</Text>
            </View>
          ))}
        </View>
        <Footer who={who} page="02" />
      </Page>

      <Page size="A4" style={styles.page}>
        <Running right="02 · How we score impact" />
        <Head label="How we score impact" />
        <Text style={styles.h2}>An agent only pays back through one of four levers.</Text>
        <Text style={[styles.muted, { marginBottom: 10 }]}>{SCORE_INTRO}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {LEVER_GUIDE.map((item) => (
            <View key={item.id} style={{ width: '48.5%', borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
              <Text style={[styles.kicker, { color: mist }]}>Lever {LEVER_NO[item.id]}</Text>
              <Text style={{ fontWeight: 600, fontSize: 12, marginTop: 2, marginBottom: 4 }}>{LEVER_LABEL[item.id]}</Text>
              <Text style={styles.muted}>{item.body}</Text>
              <Text style={[styles.muted, { marginTop: 6, paddingTop: 6, borderTopWidth: 1, borderTopColor: line, fontSize: 8 }]}>{item.shows}</Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
          <View style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
            <Text style={{ fontWeight: 600, fontSize: 11, marginBottom: 6 }}>Impact</Text>
            {IMPACT_GUIDE.map((item) => (
              <View key={item.impact} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                <Text style={{ width: 52, fontWeight: 600, fontSize: 8.5 }}>{IMPACT_LABEL[item.impact]}</Text>
                <Pips count={pipCount(item.impact)} light />
                <Text style={{ flex: 1, marginLeft: 8, color: slate, fontSize: 8 }}>{item.body}</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
            <Text style={{ fontWeight: 600, fontSize: 11, marginBottom: 6 }}>Path to the money</Text>
            <Text style={styles.muted}>
              <Text style={{ fontWeight: 600, color: ink }}>Direct. </Text>The agent does the work itself. We review at 30 days.
            </Text>
            <Text style={[styles.muted, { marginTop: 4 }]}>
              <Text style={{ fontWeight: 600, color: ink }}>Via decisions. </Text>The agent informs a person, who then acts. We review at 90 days.
            </Text>
            <Text style={[styles.muted, { marginTop: 6 }]}>Each lever also names an owner: the person who has to act for the money to show up.</Text>
          </View>
        </View>
        <View style={{ marginTop: 8, borderRadius: 10, backgroundColor: ink, padding: 12, flexDirection: 'row', gap: 10 }}>
          <Text style={{ color: white, fontWeight: 600, fontSize: 11, width: 70 }}>What we won’t do</Text>
          <Text style={{ flex: 1, color: '#d8d8d4', fontSize: 8.5, lineHeight: 1.4 }}>{WONT_DO}</Text>
        </View>
        <Footer who={who} page="03" />
      </Page>

      <Page size="A4" style={styles.page}>
        <Running right="03 · Your lever scores" />
        <Head label="Your lever scores" />
        <Text style={styles.h2}>Where this agent moves the money.</Text>
        <Text style={[styles.muted, { marginBottom: 8 }]}>{plan.scoreIntro}</Text>
        {levers.map((lever) => (
          <ScoreCard key={lever.lever} lever={lever} />
        ))}
        <Footer who={who} page="04" />
      </Page>

      <Page size="A4" style={styles.page}>
        <Running right="04 · How the agent works" />
        <Head label="How the agent works" />
        <Text style={styles.h2}>The agent does the legwork.{'\n'}You keep the final say.</Text>
        <Text style={styles.muted}>{stepIntro(plan)}</Text>
        <View style={{ marginTop: 14, marginBottom: 12 }}>
          <View style={{ position: 'absolute', top: 8, left: 10, right: 10, height: 1.5, backgroundColor: ink }} />
          <View style={{ flexDirection: 'row' }}>
            {plan.steps.map((step) => (
              <View key={step.n} style={{ flex: 1, paddingRight: 6 }}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    borderWidth: 1.4,
                    borderColor: step.actor === 'you' ? accent : ink,
                    backgroundColor: step.actor === 'you' ? accent : paper,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: 8, fontWeight: 600, color: step.actor === 'you' ? white : ink }}>{step.n}</Text>
                </View>
                <Text style={[styles.kicker, { color: mist, marginTop: 6 }]}>{step.actor === 'you' ? 'You' : 'Agent'}</Text>
                <Text style={{ fontWeight: 600, fontSize: 9, marginTop: 2 }}>{step.title}</Text>
                <Text style={[styles.muted, { marginTop: 2, fontSize: 8 }]}>{step.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
            <Text style={[styles.kicker, { color: mist, marginBottom: 6 }]}>Stays with a person</Text>
            {plan.human.map((item) => (
              <View key={item} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Svg width={8} height={8} viewBox="0 0 8 8" style={{ marginTop: 2, marginRight: 5 }}>
                  <Path d="M1 4.1 L3.1 6.2 L7 1.6" stroke={accent} strokeWidth={1.3} fill="none" />
                </Svg>
                <Text style={[styles.muted, { flex: 1 }]}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
            <Text style={[styles.kicker, { color: mist, marginBottom: 6 }]}>Connects to</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
              {plan.tools.map((tool) => (
                <Text key={tool} style={{ backgroundColor: '#ecece8', borderRadius: 8, paddingVertical: 3, paddingHorizontal: 7, fontSize: 8 }}>
                  {tool}
                </Text>
              ))}
            </View>
            <Text style={[styles.muted, { marginTop: 6, fontSize: 8 }]}>We confirm access and permissions on the call.</Text>
            <Text style={[styles.kicker, { color: mist, marginTop: 8, marginBottom: 4 }]}>What you also get</Text>
            {plan.alsoGet.map((item) => (
              <Text key={item} style={[styles.muted, { marginTop: 4, paddingTop: 4, borderTopWidth: 1, borderTopColor: line }]}>
                {item}
              </Text>
            ))}
          </View>
        </View>
        <Footer who={who} page="05" />
      </Page>

      <Page size="A4" style={styles.page}>
        <Running right="05 · Proving it and next step" />
        <Head label="How we prove it" />
        <Text style={styles.h2}>
          {proof.title}
          {'\n'}
          {proof.rest}
        </Text>
        {rows.length ? (
          <View style={{ borderWidth: 1, borderColor: line, borderRadius: 10, overflow: 'hidden', marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#ecece8', paddingVertical: 6, paddingHorizontal: 8 }}>
              {['Lever', 'Capture from last month', 'Check at review', 'Who acts'].map((heading) => (
                <Text key={heading} style={[styles.kicker, { color: mist, flex: heading === 'Lever' ? 0.8 : 1.1 }]}>
                  {heading}
                </Text>
              ))}
            </View>
            {rows.map((row) => (
              <View key={row.lever} style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: line, paddingVertical: 6, paddingHorizontal: 8 }}>
                <Text style={{ flex: 0.8, fontWeight: 600, paddingRight: 4 }}>{LEVER_LABEL[row.lever]}</Text>
                <Text style={{ flex: 1.1, color: slate, paddingRight: 4 }}>{row.baseline}</Text>
                <Text style={{ flex: 1.1, color: slate, paddingRight: 4 }}>{row.check || 'The same measure, after the agent has run'}</Text>
                <Text style={{ flex: 0.8, color: slate }}>{ownerShort(row.ownerRole)}</Text>
              </View>
            ))}
          </View>
        ) : null}
        <View style={{ marginBottom: 12 }}>
          <View style={{ height: 2, backgroundColor: ink, marginBottom: 8 }} />
          <View style={{ flexDirection: 'row' }}>
            {[
              ['Day 0', 'Scope agreed', 'System access granted, baselines captured'],
              ['Days 1–10', 'Build', 'Mapping, rules, flagging, approval'],
              ['Day 10', 'Live*', plan.firstRun],
              [review.replace(' after go-live', '') + ' after go-live', 'Review', 'Compare against your baselines, lever by lever'],
            ].map(([when, title, body], index) => (
              <View key={when} style={{ flex: 1, paddingRight: 8 }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: index >= 2 ? accent : ink,
                    marginTop: -12,
                    marginBottom: 6,
                  }}
                />
                <Text style={[styles.kicker, { color: mist }]}>{when}</Text>
                <Text style={{ fontWeight: 600, marginTop: 2 }}>{title}</Text>
                <Text style={[styles.muted, { marginTop: 2, fontSize: 8 }]}>{body}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
            <Text style={[styles.kicker, { color: mist, marginBottom: 4 }]}>Included in the 10-day build</Text>
            {plan.includes.map((item) => (
              <Text key={item} style={{ marginTop: 4 }}>{item}</Text>
            ))}
          </View>
          <View style={{ flex: 1, borderWidth: 1, borderColor: line, borderRadius: 10, backgroundColor: card, padding: 10 }}>
            <Text style={[styles.kicker, { color: mist, marginBottom: 4 }]}>Commercials</Text>
            {COMMERCIALS.map((item) => (
              <Text key={item.title} style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 600 }}>{item.title}{'\n'}</Text>
                <Text style={styles.muted}>{item.body}</Text>
              </Text>
            ))}
            <Text style={[styles.muted, { marginTop: 6 }]}>Both are confirmed on the scoping call.</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, borderRadius: 12, backgroundColor: ink, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: white, fontWeight: 600, fontSize: 14 }}>Book a 20-minute scoping call</Text>
            <Text style={{ color: '#c8c8c4', marginTop: 4, fontSize: 8.5 }}>{BOOK_LINE}</Text>
          </View>
          <Link src={input.scopingUrl}>
            <View style={{ backgroundColor: accent, borderRadius: 20, paddingVertical: 8, paddingHorizontal: 12 }}>
              <Text style={{ color: ink, fontWeight: 600, fontSize: 9 }}>Book my call</Text>
            </View>
          </Link>
        </View>
        <Text style={{ marginTop: 8, color: mist, fontSize: 7, lineHeight: 1.35 }}>* {PLAN_FOOTNOTE}</Text>
        <Footer who={who} page="06" />
      </Page>
    </Document>,
  )
}

function Logo() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Svg width={13} height={13} viewBox="0 0 14 14">
        <Path d="M0 0 L7.7 0 L14 7 L7.7 14 L0 14 L6.3 7 Z" fill={accent} />
      </Svg>
      <Text style={{ marginLeft: 6, fontFamily: 'InterTight', fontWeight: 600, fontSize: 11, letterSpacing: -0.3, color: white }}>
        FluentForward
      </Text>
    </View>
  )
}

function Pips({ count, light }: { count: number; light?: boolean }) {
  return (
    <View style={{ flexDirection: 'row', gap: 3 }}>
      {[0, 1, 2].map((index) => (
        <View
          key={index}
          style={{
            width: 14,
            height: 3.2,
            borderRadius: 2,
            backgroundColor: index < count ? accent : light ? '#d7d7d2' : '#3a3a3e',
          }}
        />
      ))}
    </View>
  )
}

function Glance({ lever }: { lever: LeverScore }) {
  const strong = lever.impact === 'high' || lever.impact === 'medium'
  const quiet = lever.impact === 'none'
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: strong ? accent : '#2a2a2e',
        borderRadius: 10,
        backgroundColor: '#141416',
        padding: 8,
        minHeight: 96,
      }}
    >
      <Text style={{ fontWeight: 600, fontSize: 8.5, color: quiet ? '#9a9a96' : white }}>{LEVER_LABEL[lever.lever]}</Text>
      <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 3, color: quiet ? '#8e8e8a' : white }}>{IMPACT_LABEL[lever.impact]}</Text>
      <Text style={{ marginTop: 3, color: '#b0b0ab', fontSize: 7.5, lineHeight: 1.3 }}>{glanceCaption(lever)}</Text>
      <View style={{ marginTop: 8 }}>
        <Pips count={pipCount(lever.impact)} />
      </View>
    </View>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text style={[styles.kicker, { marginBottom: 3 }]}>{label}</Text>
      <Text style={{ fontSize: 10 }}>{value}</Text>
    </View>
  )
}

function Head({ label }: { label: string }) {
  return (
    <View>
      <View style={styles.rule} />
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

function Running({ right }: { right: string }) {
  return (
    <View style={styles.run}>
      <Text>FluentForward · First-agent plan</Text>
      <Text>{right}</Text>
    </View>
  )
}

function Footer({ who, page }: { who: string; page: string }) {
  return (
    <View style={styles.foot}>
      <Text>Prepared for {who}</Text>
      <Text>{page}</Text>
    </View>
  )
}

function ScoreCard({ lever }: { lever: LeverScore }) {
  const strong = lever.impact === 'high' || lever.impact === 'medium'
  const none = lever.impact === 'none'
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 12,
        borderWidth: 1,
        borderColor: strong ? accent : line,
        borderRadius: 10,
        backgroundColor: none ? '#ecece8' : card,
        padding: 10,
        marginTop: 7,
      }}
    >
      <View style={{ width: 108 }}>
        <Text style={[styles.kicker, { color: mist }]}>Lever {LEVER_NO[lever.lever]}</Text>
        <Text style={{ fontWeight: 600, fontSize: 12, marginTop: 2 }}>{LEVER_LABEL[lever.lever]}</Text>
        <Text style={{ fontWeight: 600, fontSize: 16, marginTop: 2 }}>{IMPACT_LABEL[lever.impact]}</Text>
        <View style={{ marginTop: 5 }}>
          <Pips count={pipCount(lever.impact as LeverImpact)} light />
        </View>
        {none ? null : (
          <Text
            style={{
              marginTop: 6,
              alignSelf: 'flex-start',
              backgroundColor: peach,
              color: ink,
              fontSize: 7,
              fontWeight: 600,
              letterSpacing: 0.4,
              paddingVertical: 2,
              paddingHorizontal: 5,
              borderRadius: 8,
            }}
          >
            {lever.path === 'direct' ? 'DIRECT' : 'VIA DECISIONS'}
          </Text>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 9, lineHeight: 1.35 }}>{lever.why}</Text>
        {none ? null : (
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 6, paddingTop: 6, borderTopWidth: 1, borderTopColor: line }}>
            <Meta label="Baseline · last month" value={lever.baseline || 'The figure you can count from last month'} />
            <Meta label="Who acts" value={lever.ownerRole || 'The person who owns this work'} />
            <Meta label="Review" value={lever.reviewAt || ''} />
          </View>
        )}
        {lever.note ? (
          <Text style={{ marginTop: 6, backgroundColor: peach, borderRadius: 6, padding: 6, fontSize: 8, lineHeight: 1.35 }}>{lever.note}</Text>
        ) : null}
      </View>
    </View>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.kicker, { color: mist, marginBottom: 2 }]}>{label}</Text>
      <Text style={{ fontSize: 8, color: slate }}>{value}</Text>
    </View>
  )
}
