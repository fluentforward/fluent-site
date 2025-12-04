import { FadeIn } from './FadeIn'

type FoundingBenefitProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function FoundingBenefit({ icon, title, description, delay = 0 }: FoundingBenefitProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded-xl flex gap-4 items-start shadow-md">
        <div className="text-3xl flex-shrink-0">{icon}</div>
        <div>
          <strong className="block text-slate-900 font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {title}
          </strong>
          <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

