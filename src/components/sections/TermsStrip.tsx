import { Container } from '@/components/ui/Container'

const terms = [
  'Fixed fee audit and pilot',
  'Unlimited development',
  'Turnaround in the contract',
  'No hourly billing',
]

export function TermsStrip() {
  return (
    <div className="border-y border-line bg-paper-2/50">
      <Container>
        <ul className="grid divide-y divide-line lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-line">
          {terms.map((term) => (
            <li
              key={term}
              className="py-6 font-mono text-xs tracking-wide text-slate/80 uppercase lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              {term}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
