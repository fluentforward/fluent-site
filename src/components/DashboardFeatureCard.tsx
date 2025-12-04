import { FadeIn } from './FadeIn'

type DashboardFeatureCardProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function DashboardFeatureCard({ icon, title, description, delay = 0 }: DashboardFeatureCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5">
          {icon}
        </div>
        <h4
          className="text-xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h4>
        <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

