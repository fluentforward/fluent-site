import { Container } from './Container'
import { FadeIn } from './FadeIn'

type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  title?: string
  items: FAQItem[]
}

export function FAQSection({ title = 'Pricing FAQs', items }: FAQSectionProps) {
  return (
    <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
      <Container className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3
                  className="text-xl font-bold text-slate-900 mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.question}
                </h3>
                <p
                  className="text-slate-700 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

