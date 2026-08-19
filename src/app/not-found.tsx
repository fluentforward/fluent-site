import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'

export default function NotFound() {
  return (
    <Container className="py-28 md:py-40">
      <div className="max-w-xl">
        <Eyebrow>Error 404</Eyebrow>
        <Heading as="h1" size="display-sm" className="mt-6">
          That page is not here.
        </Heading>
        <Lede className="mt-6">
          It may have moved, or it may never have existed. Either way, the three
          pages that matter are the offer, the practice, and a way to reach us.
        </Lede>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/how-it-works">How it works</Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </Container>
  )
}
