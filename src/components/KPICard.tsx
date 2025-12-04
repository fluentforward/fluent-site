import { FadeIn } from './FadeIn'

type KPICardProps = {
  category: string
  items: string[]
  delay?: number
}

export function KPICard({ category, items, delay = 0 }: KPICardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {category}
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-slate-700 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-lime-500 font-bold text-lg">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

