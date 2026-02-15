import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const frameworkSteps = [
  {
    number: 1,
    title: 'Identify False Constraints',
    description:
      "Map assumptions that limit your execution. Most \"constraints\" are actually solutions you're attached to.",
  },
  {
    number: 2,
    title: 'Remove & Create Abundance',
    description:
      'Deploy AI-native systems that eliminate bottlenecks. Build capacity that compounds faster than headcount.',
  },
  {
    number: 3,
    title: 'Impose Intentional Constraints',
    description:
      'Channel newfound abundance through deliberate focus. Strategic constraint creates velocity, not limitation.',
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-white">
      <SectionContainer>
        <SectionHeader
          title="The Execution Abundance Framework"
          subtitle="Most businesses are drowning in execution scarcity. We architect abundance."
        />

        <div className="border-[3px] border-fluent-red p-8 md:p-12 my-12 bg-warm-gray">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-6 text-fluent-red">
            The Fundamental Shift
          </h3>
          <p className="text-lg mb-4">
            <strong>Traditional businesses:</strong> Execution-scarce (more ideas
            than capacity)
          </p>
          <p className="text-lg mb-4">
            <strong>AI era:</strong> Execution-abundant (capacity exceeds
            imagination)
          </p>
          <p className="text-lg text-fluent-red font-semibold">
            <strong>Our approach:</strong> Identify false constraints → Remove
            them → Impose intentional constraints for maximum value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
