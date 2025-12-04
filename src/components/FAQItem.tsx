import { FadeIn } from './FadeIn'

type FAQItemProps = {
  question: string
  answer: string
  delay?: number
}

export function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl mb-6">
        <h3
          className="text-xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {question}
        </h3>
        <p
          className="text-slate-700 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </FadeIn>
  )
}

