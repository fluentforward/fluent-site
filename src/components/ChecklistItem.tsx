import { FadeIn } from './FadeIn'

type ChecklistItemProps = {
  text: string
  delay?: number
}

export function ChecklistItem({ text, delay = 0 }: ChecklistItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-4 mb-5 items-start last:mb-0">
        <div className="bg-lime-500 text-slate-900 w-7 h-7 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
          ✓
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

