import { FadeIn } from './FadeIn'

type ComingSoonCardProps = {
  badge: string
  icon: string
  title: string
  description: string
  delay?: number
}

export function ComingSoonCard({ badge, icon, title, description, delay = 0 }: ComingSoonCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl border-2 border-dashed border-slate-300 text-center relative">
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
          {badge}
        </div>
        <div className="text-4xl mb-4 opacity-60">{icon}</div>
        <h4
          className="text-xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h4>
        <p className="text-slate-700 leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

