import { FadeIn } from './FadeIn'

type DetailItem = {
  icon: string
  title: string
  description: string
}

type ImplementationPhaseProps = {
  number: string
  title: string
  timeline: string
  description: string
  details: DetailItem[]
  delay?: number
}

export function ImplementationPhase({
  number,
  title,
  timeline,
  description,
  details,
  delay = 0,
}: ImplementationPhaseProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 rounded-xl p-12 mb-8 border-l-6 border-lime-500">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
          <div className="bg-lime-500 text-slate-900 w-20 h-20 rounded-full flex items-center justify-center font-bold text-4xl flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {number}
          </div>
          <div>
            <h3
              className="text-3xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {title}
            </h3>
            <span className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {timeline}
            </span>
          </div>
        </div>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div key={index} className="bg-white p-6 rounded-lg flex gap-4 items-start">
              <div className="bg-indigo-600 text-white w-9 h-9 rounded-lg flex items-center justify-center font-bold flex-shrink-0 text-lg">
                {detail.icon}
              </div>
              <div>
                <strong className="text-slate-900 font-bold block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {detail.title}
                </strong>
                <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

