import { FadeIn } from './FadeIn'

type MetricCardProps = {
  value: string
  label: string
  delay?: number
}

export function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <div
          className="text-6xl font-bold text-indigo-600 leading-none mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {value}
        </div>
        <div className="text-slate-700 font-semibold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {label}
        </div>
      </div>
    </FadeIn>
  )
}

