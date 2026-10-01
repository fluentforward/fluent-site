import { Container } from '@/components/ui/Container'
import { footerStrip } from '@/content/options'

export function OptionsFooterStrip() {
  return (
    <div className="border-y border-line bg-paper-2/50">
      <Container>
        <p className="py-6 font-mono text-xs tracking-wide text-slate/80 uppercase">
          {footerStrip}
        </p>
      </Container>
    </div>
  )
}
