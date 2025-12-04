import { FadeIn } from './FadeIn'

type SecurityCardProps = {
  icon: string
  title: string
  description: string
  features: string[]
  delay?: number
}

export function SecurityCard({ icon, title, description, features, delay = 0 }: SecurityCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-10 rounded-xl shadow-lg">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6">
          {icon}
        </div>
        <h3
          className="text-2xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-700 mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-slate-700 text-sm flex items-start gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-lime-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

