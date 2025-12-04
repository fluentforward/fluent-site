import { FadeIn } from './FadeIn'

type APIFeatureItemProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function APIFeatureItem({ icon, title, description, delay = 0 }: APIFeatureItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0 text-xl">
          {icon}
        </div>
        <div>
          <strong className="text-slate-900 font-bold block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {title}
          </strong>
          <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

