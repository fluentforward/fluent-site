import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function LeverageBoardCloseStrip({ text }: { text: string }) {
  return (
    <div className="border-y border-line bg-paper-2/50">
      <Container width="prose">
        <Reveal>
          <p className="py-8 text-[1.0625rem] leading-[1.72] text-ink md:py-10">
            {text}
          </p>
        </Reveal>
      </Container>
    </div>
  )
}
