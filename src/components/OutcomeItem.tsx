import { FadeIn } from './FadeIn'

type OutcomeItemProps = {
  text: string
  delay?: number
}

export function OutcomeItem({ text, delay = 0 }: OutcomeItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-4 items-start">
        <div className="text-lime-500 text-2xl font-bold flex-shrink-0">✓</div>
        <p
          className="text-white/90 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </FadeIn>
  )
}

