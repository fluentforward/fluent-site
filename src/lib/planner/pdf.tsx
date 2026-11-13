import { Document, Page, renderToBuffer, StyleSheet, Text, View } from '@react-pdf/renderer'

import { FEASIBILITY_LINE, PRICE_LINE, type FullPlan } from '@/lib/planner/types'

const ink = '#0a0a0b'
const paper = '#f4f4f1'
const accent = '#ff4a1c'
const slate = '#4a4a4f'
const mist = '#5e5e63'

const styles = StyleSheet.create({
  page: {
    backgroundColor: paper,
    color: ink,
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  brand: {
    fontFamily: 'Courier',
    fontSize: 8,
    letterSpacing: 1.4,
    color: mist,
    textTransform: 'uppercase',
  },
  rule: {
    width: 28,
    height: 3,
    backgroundColor: accent,
    marginTop: 10,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 18,
    lineHeight: 1.2,
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Courier',
    fontSize: 8,
    letterSpacing: 1.2,
    color: mist,
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 3,
  },
  body: {
    color: slate,
    fontSize: 10,
    lineHeight: 1.4,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  stepNo: {
    width: 16,
    fontFamily: 'Helvetica-Bold',
    color: ink,
  },
  stepText: {
    flex: 1,
    color: slate,
  },
  tag: {
    fontFamily: 'Courier',
    fontSize: 8,
    color: accent,
    letterSpacing: 1,
  },
  foot: {
    marginTop: 12,
    fontSize: 8,
    color: mist,
    lineHeight: 1.35,
  },
})

const FOOTNOTE =
  'Once we have access to your systems, the data the agent needs, and scope agreed in writing.'

export function renderPlanPdf(input: {
  plan: FullPlan
  name: string | null
  scopingUrl: string
}): Promise<Buffer> {
  return renderToBuffer(
    <Document title={input.plan.title} author="FluentForward">
      <Page size="A4" style={styles.page}>
        <Text style={styles.brand}>FluentForward  ·  First-agent plan</Text>
        <View style={styles.rule} />
        {input.name ? <Text style={styles.brand}>Prepared for {input.name}</Text> : null}
        <Text style={styles.title}>{input.plan.title}</Text>
        <Text style={styles.label}>The problem you described</Text>
        <Text style={styles.body}>{input.plan.problem}</Text>
        <Text style={styles.label}>What the agent does</Text>
        {input.plan.steps.map((step) => (
          <View key={step.n} style={styles.step}>
            <Text style={styles.stepNo}>{step.n}.</Text>
            <Text style={styles.stepText}>{step.text}</Text>
          </View>
        ))}
        <Text style={styles.label}>Connects to</Text>
        <Text style={styles.body}>{input.plan.tools.join(', ')}. To be confirmed on the call.</Text>
        <Text style={styles.label}>Stays with a human</Text>
        <Text style={styles.body}>{input.plan.human.join(' ')}</Text>
        <Text style={styles.label}>Rough time saved</Text>
        <Text style={styles.tag}>ESTIMATE</Text>
        <Text style={styles.body}>{input.plan.timeSaved}</Text>
        <Text style={styles.label}>Live in 10 working days would include</Text>
        <Text style={styles.body}>{input.plan.tenDayIncludes}</Text>
        <Text style={styles.foot}>* {FOOTNOTE}</Text>
        <Text style={styles.foot}>{PRICE_LINE}</Text>
        <Text style={styles.foot}>{FEASIBILITY_LINE}</Text>
        <Text style={styles.foot}>Next step: {input.scopingUrl}</Text>
      </Page>
    </Document>,
  )
}
