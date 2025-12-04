import { FadeIn } from './FadeIn'

type SetupTimelineItemProps = {
  number: string
  title: string
  duration: string
  description: string
  details: string[]
  delay?: number
  isLast?: boolean
}

export function SetupTimelineItem({
  number,
  title,
  duration,
  description,
  details,
  delay = 0,
  isLast = false,
}: SetupTimelineItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-12 mb-16 relative">
        <div className="relative">
          <div className="bg-lime-500 text-slate-900 w-20 h-20 rounded-full flex items-center justify-center font-bold text-3xl flex-shrink-0 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {number}
          </div>
          {!isLast && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-lime-500 opacity-30" />
          )}
        </div>
        <div className="pt-2">
          <h3
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h3>
          <span className="inline-block bg-lime-500/20 text-lime-500 px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {duration}
          </span>
          <p className="text-white/80 mb-4 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {description}
          </p>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="text-white/70 text-sm flex items-start gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="text-lime-500 font-bold flex-shrink-0">→</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  )
}

