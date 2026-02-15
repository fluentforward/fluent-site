import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const services = [
  {
    title: 'AI-Native Product Development',
    tagline: '"We build products that only work because AI exists"',
    description:
      "End-to-end development of platforms where AI isn't a feature—it's the foundation. From market intelligence to production deployment, we architect systems that scale beyond human capacity.",
    idealFor: 'Founders with domain expertise, no technical co-founder',
  },
  {
    title: 'Legal Sector AI Transformation',
    tagline: '"Removing the execution ceiling in professional services"',
    description:
      "We've architected AI systems that let 3-person practices operate like 30-person firms. Proven 40-60% time savings in conveyancing, with expansion into wider legal workflows.",
    idealFor: 'Law firms, conveyancers, regulated professional services',
  },
  {
    title: 'Execution Abundance Consulting',
    tagline: '"Strategic advisory for founders building in the AI era"',
    description:
      "We help you identify which constraints are false (kill them) and which are intentional (double down). Strategy sessions grounded in real execution, not theoretical frameworks.",
    idealFor: 'Technical founders, operators transitioning to AI-first models',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-warm-gray">
      <SectionContainer>
        <SectionHeader
          title="How We Partner With You"
          subtitle="Three capability pillars. One philosophical foundation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 md:p-10 border-l-4 border-fluent-red transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-display font-extrabold text-xl md:text-2xl mb-4 text-charcoal">
                {service.title}
              </h3>
              <p className="italic text-fluent-red font-semibold mb-4">
                {service.tagline}
              </p>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <div className="text-sm text-neutral-500 mt-6 pt-6 border-t border-neutral-200">
                <strong>Ideal for:</strong> {service.idealFor}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
