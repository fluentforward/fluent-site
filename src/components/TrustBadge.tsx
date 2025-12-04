import { FadeIn } from './FadeIn'

type TrustBadgeProps = {
  icon: string
  text: string
  status: string
  delay?: number
}

export function TrustBadge({ icon, text, status, delay = 0 }: TrustBadgeProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col items-center gap-3">
        <div className="text-5xl">{icon}</div>
        <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {text}
        </div>
        <div className="text-slate-700 text-xs opacity-70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {status}
        </div>
      </div>
    </FadeIn>
  )
}

