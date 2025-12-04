import { FadeIn } from './FadeIn'

type PracticeItem = {
  title: string
  description: string
}

type PracticeCategoryProps = {
  title: string
  items: PracticeItem[]
  delay?: number
}

export function PracticeCategory({ title, items, delay = 0 }: PracticeCategoryProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-10 rounded-xl border-l-4 border-indigo-600">
        <h3
          className="text-2xl font-bold text-slate-900 mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index}>
              <h4 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.title}
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

