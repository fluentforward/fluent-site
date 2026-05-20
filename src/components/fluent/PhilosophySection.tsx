import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const frameworkSteps = [
  {
    number: 1,
    title: 'Identify False Constraints',
    description:
      'Map assumptions that limit your execution. Most "constraints" are actually solutions you\'re attached to — processes designed for a world that no longer exists.',
  },
  {
    number: 2,
    title: 'Remove & Create Abundance',
    description:
      'Deploy AI-native systems that eliminate bottlenecks. Build capacity that compounds faster than headcount. Technique before volume, always.',
  },
  {
    number: 3,
    title: 'Impose Intentional Constraints',
    description:
      'Channel newfound abundance through deliberate focus. Strategic constraint creates velocity. You can now build anything — choosing what not to build is the discipline.',
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-white">
      <SectionContainer>
        <SectionHeader title="The Execution Abundance Framework" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 items-start">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl leading-tight">
            Most businesses are drowning in execution scarcity.
            <br />
            We architect abundance.
          </h3>
          <p className="text-lg text-neutral-600 leading-relaxed pt-2">
            The fundamental shift happening now: AI has removed the execution
            ceiling. Capacity is no longer the constraint.{' '}
            <strong className="text-charcoal font-semibold">
              Strategic judgment is.
            </strong>{' '}
            The businesses that win are those that identify which constraints
            are false and remove them — then impose intentional constraints
            that create genuine velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 mb-16">
          <div className="bg-warm-gray p-8 border border-neutral-200">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-neutral-500 mb-5">
              Traditional businesses
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Execution-scarce. More ideas than capacity. Growth limited by the
              number of people and the hours they work. Scaling means hiring.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center px-4 text-fluent-red text-xl bg-white border-y border-neutral-200">
            →
          </div>
          <div className="bg-warm-gray p-8 border border-neutral-200 md:border-l-2 md:border-l-fluent-red">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-fluent-red mb-5">
              AI-native businesses
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Execution-abundant. Capacity exceeds imagination. Growth limited
              only by strategic clarity. Scaling means designing better systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frameworkSteps.map((step) => (
            <div key={step.number} className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-fluent-red text-white font-display font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h4 className="font-display font-extrabold text-xl mb-4">
                {step.title}
              </h4>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
