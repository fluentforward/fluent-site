import { FadeIn } from './FadeIn'

type RoleCardProps = {
  icon: string
  title: string
  timing: string
  description: string
  delay?: number
}

export function RoleCard({ icon, title, timing, description, delay = 0 }: RoleCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-md">
        <div className="text-4xl mb-6">{icon}</div>
        <h3
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <span className="inline-block bg-lime-500/20 text-lime-500 px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {timing}
        </span>
        <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

