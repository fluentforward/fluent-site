import { Button } from './Button'

export function HeroSection() {
  return (
    <section className="bg-charcoal text-white py-20 md:py-32 px-[5%] text-center">
      <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight max-w-4xl mx-auto">
        Build AI-Native Systems That Scale
        <br />
        <span className="text-fluent-red">Faster Than You Hire</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-[800px] mx-auto mb-12 opacity-90">
        We apply Execution Abundance principles to design businesses where AI
        removes bottlenecks, creating capacity that compounds—not costs.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Button href="/#philosophy" variant="primary">
          Explore Our Approach
        </Button>
        <Button href="/#case-study" variant="secondary">
          See Our Work in Legal Tech
        </Button>
      </div>
    </section>
  )
}
