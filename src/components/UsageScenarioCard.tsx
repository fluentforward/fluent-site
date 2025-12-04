import { FadeIn } from './FadeIn'

type FlowStep = {
  label: string
  text: string
}

type UsageScenarioCardProps = {
  icon: string
  title: string
  description: string
  flowSteps: FlowStep[]
  delay?: number
}

export function UsageScenarioCard({ icon, title, description, flowSteps, delay = 0 }: UsageScenarioCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-md">
        <div className="text-4xl mb-6">{icon}</div>
        <h3
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <div className="bg-white/5 p-6 rounded-lg border-l-3 border-lime-500">
          {flowSteps.map((step, index) => (
            <div key={index} className="mb-4 pl-6 relative last:mb-0">
              <div className="absolute left-0 text-lime-500 font-bold">→</div>
              <div className="text-xs uppercase tracking-wider text-lime-500 font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {step.label}
              </div>
              <div className="text-white/90 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

