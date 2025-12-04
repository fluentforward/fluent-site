import { FadeIn } from './FadeIn'

type TopicCardProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function TopicCard({ icon, title, description, delay = 0 }: TopicCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded-xl shadow-md text-left">
        <div className="text-3xl mb-4">{icon}</div>
        <h3
          className="text-xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

