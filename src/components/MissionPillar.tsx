import { FadeIn } from './FadeIn'

type MissionPillarProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function MissionPillar({ icon, title, description, delay = 0 }: MissionPillarProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3
          className="text-xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

