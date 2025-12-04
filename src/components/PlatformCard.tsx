import { FadeIn } from './FadeIn'

type PlatformCardProps = {
  title: string
  description: string
  details: string[]
  delay?: number
}

export function PlatformCard({ title, description, details, delay = 0 }: PlatformCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-indigo-600">
        <h4
          className="text-xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h4>
        <p className="text-slate-700 mb-4 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <ul className="space-y-2">
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

