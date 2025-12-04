import { FadeIn } from './FadeIn'

type ValueCardProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function ValueCard({ icon, title, description, delay = 0 }: ValueCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-10 rounded-xl border-t-4 border-indigo-600">
        <div className="text-4xl mb-6">{icon}</div>
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

