import { FadeIn } from './FadeIn'

type FeaturePillarCardProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function FeaturePillarCard({ icon, title, description, delay = 0 }: FeaturePillarCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-10 rounded-xl shadow-lg text-center transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl mb-6">{icon}</div>
        <h3
          className="text-2xl font-bold text-slate-900 mb-4"
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

