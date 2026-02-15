import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'
import { Button } from './Button'

const caseMetrics = [
  {
    title: 'False Constraint Identified',
    description:
      '"Need partners before understanding the market" – Most founders rush to partnerships. We inverted this: build market intelligence first, then approach with authority.',
  },
  {
    title: 'Constraint Removed',
    description:
      'Built comprehensive intelligence infrastructure: 800+ prospect database with regulatory data, geographic heat maps, financial analysis, competitive positioning—all before first partner conversation.',
  },
  {
    title: 'Intentional Constraint Imposed',
    description:
      'Only Bristol/London geographies. Only contract conveyancers with Manager Licenses. Only 100-point scoring system matches. Only firms demonstrating tech adoption capability.',
  },
  {
    title: 'Current Status',
    description:
      'Targeting first pilot partner within 8-10 weeks. £50K invested in interactive prototypes. Positioned to capture 10% of £1.92B UK conveyancing market through AI-native platform approach.',
  },
]

export function CaseStudySection() {
  return (
    <section id="case-study" className="py-16 md:py-24 bg-charcoal text-white">
      <SectionContainer>
        <SectionHeader
          title="Case Study: Building WeMove"
          subtitle="Applying Execution Abundance to enter a £192M market"
          subtitleClassName="text-white/80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {caseMetrics.map((metric) => (
            <div
              key={metric.title}
              className="bg-white/5 p-8 border-l-4 border-fluent-red"
            >
              <h4 className="font-display font-extrabold text-lg text-fluent-red mb-2">
                {metric.title}
              </h4>
              <p className="opacity-90">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            This is Execution Abundance in action: validate the hardest parts
            first, remove false constraints through research, then impose
            intentional constraints that create velocity.
          </p>
          <Button href="/#contact" variant="primary">
            Apply This Methodology
          </Button>
        </div>
      </SectionContainer>
    </section>
  )
}
