import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const caseMetrics = [
  {
    title: 'False Constraint Identified',
    description:
      '"Need partners before understanding the market" — Most founders rush to partnerships. We inverted this: build market intelligence first, then approach with authority.',
  },
  {
    title: 'Constraint Removed',
    description:
      'Built comprehensive intelligence infrastructure: 800+ prospect database with regulatory data, geographic heat maps, financial analysis, competitive positioning — all before the first partner conversation.',
  },
  {
    title: 'Intentional Constraint Imposed',
    description:
      'Only Bristol/London geographies. Only contract conveyancers with Manager Licenses. Only 100-point scoring system matches. Only firms demonstrating tech adoption capability. Constraint creates velocity.',
  },
  {
    title: 'Result',
    description:
      'Proven 40–60% time savings in conveyancing workflows. Platform now underpinning the SurfaceOS architecture — the methodology proven in production before scaling distribution.',
  },
]

export function CaseStudySection() {
  return (
    <section id="casestudy" className="py-16 md:py-24 bg-charcoal text-white">
      <SectionContainer>
        <SectionHeader
          title="Building WeMove"
          subtitle="Applying Execution Abundance to enter the £1.92B UK conveyancing market"
          subtitleClassName="text-white/80 italic"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
          {caseMetrics.map((metric) => (
            <div
              key={metric.title}
              className="bg-white/5 p-8 border border-white/10"
            >
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-neutral-400 mb-3">
                {metric.title}
              </h4>
              <p className="opacity-90 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 bg-white/5 border border-white/10 border-t-2 border-t-fluent-red p-8">
          <p className="text-lg opacity-90 leading-relaxed max-w-3xl">
            This is Execution Abundance in action: validate the hardest parts
            first, remove false constraints through research, then impose
            intentional constraints that create velocity.{' '}
            <strong className="text-white font-normal">
              £50K invested in interactive prototypes. First pilot partner
              active. Two verticals in production.
            </strong>
          </p>
        </div>
      </SectionContainer>
    </section>
  )
}
