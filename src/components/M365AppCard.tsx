import { FadeIn } from './FadeIn'

type M365AppCardProps = {
  icon: string
  title: string
  description: string
  features: string[]
  delay?: number
}

export function M365AppCard({ icon, title, description, features, delay = 0 }: M365AppCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-10 rounded-xl border-t-4 border-indigo-600 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl mb-6">{icon}</div>
        <h3
          className="text-2xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-700 mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <ul className="space-y-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="text-slate-700 text-sm flex items-start gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-lime-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

