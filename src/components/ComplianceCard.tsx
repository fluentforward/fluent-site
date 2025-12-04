import { FadeIn } from './FadeIn'

type ComplianceCardProps = {
  icon: string
  title: string
  status: string
  statusType?: 'active' | 'progress'
  description: string
  delay?: number
}

export function ComplianceCard({
  icon,
  title,
  status,
  statusType = 'active',
  description,
  delay = 0,
}: ComplianceCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-md text-center">
        <div className="text-5xl mb-6">{icon}</div>
        <h3
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${
            statusType === 'active'
              ? 'bg-lime-500 text-slate-900'
              : 'bg-lime-500/20 text-lime-500'
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {status}
        </span>
        <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

