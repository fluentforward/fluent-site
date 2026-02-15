import { Button } from './Button'

export function FooterCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-charcoal text-white text-center">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8">
          Ready to Move From Scarcity to Abundance?
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          Let's map your constraints and architect your execution system.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Button href="https://outlook.office.com/bookwithme/user/b17c8b977f6e43a3b6dfe7b7770e5446@fluentforward.co/meetingtype/53Ug6pSl3EGCvx_PPavG3w2?anonymous&ismsaljsauthenabled&ep=mlink" variant="primary">
            Book a Constraint Audit
          </Button>
          <Button href="/#services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
