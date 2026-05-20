import { Button } from './Button'
import { CalBookingButton } from './CalBookingButton'

export function HeroSection() {
  return (
    <section className="bg-charcoal text-white py-20 md:py-32 px-[5%] text-center">
      <span className="inline-block bg-fluent-red text-white font-display font-bold text-xs tracking-widest uppercase px-4 py-1.5 mb-8">
        From Constraint to Abundance
      </span>
      <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight max-w-4xl mx-auto">
        Build AI-Native Systems That Scale
        <br />
        <span className="text-fluent-red">Faster Than You Hire</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-[800px] mx-auto mb-12 opacity-90">
        We apply Execution Abundance principles to design businesses where AI
        removes bottlenecks, creating{' '}
        <strong className="text-white font-normal">
          capacity that compounds — not costs
        </strong>
        . From platform development to fractional strategic support.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <CalBookingButton label="Book a Constraint Audit" />
        <Button href="/#philosophy" variant="secondary">
          Explore the Framework
        </Button>
      </div>
    </section>
  )
}
