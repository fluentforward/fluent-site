import { FadeIn } from './FadeIn'

type IncidentProcessStepProps = {
  number: string
  title: string
  description: string
  delay?: number
}

export function IncidentProcessStep({ number, title, description, delay = 0 }: IncidentProcessStepProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-8 mb-8 items-start last:mb-0">
        <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {number}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {title}
          </h4>
          <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

