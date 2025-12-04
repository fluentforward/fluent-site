import Link from 'next/link'
import { FadeIn } from './FadeIn'

type PMSCardProps = {
  name: string
  status: string
  statusType?: 'available' | 'coming-soon' | 'enterprise'
  dataPoints: string[]
  learnMoreHref: string
  learnMoreText: string
  delay?: number
}

export function PMSCard({
  name,
  status,
  statusType = 'available',
  dataPoints,
  learnMoreHref,
  learnMoreText,
  delay = 0,
}: PMSCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white p-8 text-center">
          <h3
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {name}
          </h3>
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            {status}
          </span>
        </div>
        <div className="p-8">
          <h4 className="font-bold text-slate-900 mb-4 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {statusType === 'coming-soon' ? 'Planned Data Integration' : statusType === 'enterprise' ? 'Your System' : 'Data Integration'}
          </h4>
          {statusType === 'enterprise' && (
            <p className="text-slate-700 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Using a different practice management system? We can build custom integrations for Enterprise clients.
            </p>
          )}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {dataPoints.map((point, index) => (
              <li key={index} className="text-slate-700 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="text-lime-500 font-bold">→</span>
                {point}
              </li>
            ))}
          </ul>
          <Link
            href={learnMoreHref}
            className="inline-block text-indigo-600 font-bold hover:text-lime-500 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {learnMoreText} →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

