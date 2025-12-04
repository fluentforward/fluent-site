import { FadeIn } from './FadeIn'

type StoryInsightItemProps = {
  text: string
  delay?: number
}

export function StoryInsightItem({ text, delay = 0 }: StoryInsightItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-4 mb-6 items-start last:mb-0">
        <div className="bg-slate-900 text-lime-500 w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
          →
        </div>
        <p
          className="text-slate-700 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </FadeIn>
  )
}

