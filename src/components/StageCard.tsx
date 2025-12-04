import { FadeIn } from './FadeIn'

type StageCardProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function StageCard({ icon, title, description, delay = 0 }: StageCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded-xl text-center shadow-lg">
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

