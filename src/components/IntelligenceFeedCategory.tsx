import { FadeIn } from './FadeIn'

type AlertExample = {
  text: string
}

type IntelligenceFeedCategoryProps = {
  icon: string
  title: string
  alerts: AlertExample[]
  delay?: number
}

export function IntelligenceFeedCategory({ icon, title, alerts, delay = 0 }: IntelligenceFeedCategoryProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">{icon}</span>
          <h3
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h3>
        </div>
        <ul className="space-y-4">
          {alerts.map((alert, index) => (
            <li key={index} className="text-white/80 text-sm leading-relaxed border-b border-white/10 pb-4 last:border-0 last:pb-0">
              <span className="text-lime-500 font-bold mr-3">→</span>
              {alert.text}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

