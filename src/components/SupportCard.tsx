import { FadeIn } from './FadeIn'

type SupportCardProps = {
  icon: string
  title: string
  description: string
  details: string[]
  delay?: number
}

export function SupportCard({ icon, title, description, details, delay = 0 }: SupportCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-10 rounded-xl border-t-4 border-indigo-600 text-center">
        <div className="text-4xl mb-6">{icon}</div>
        <h4
          className="text-xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h4>
        <p className="text-slate-700 mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <ul className="space-y-2 text-left">
          {details.map((detail, index) => (
            <li key={index} className="text-slate-700 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-lime-500 font-bold">✓</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

