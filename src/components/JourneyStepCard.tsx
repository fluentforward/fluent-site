import { FadeIn } from './FadeIn'

type JourneyStepCardProps = {
  number: string
  title: string
  description: string
  delay?: number
}

export function JourneyStepCard({ number, title, description, delay = 0 }: JourneyStepCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded-xl shadow-lg text-center relative">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-3xl mx-auto mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {number}
        </div>
        <h3
          className="text-xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

