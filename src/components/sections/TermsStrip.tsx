import { Container } from '@/components/ui/Container'

const terms = [
  'Fixed fee audit and pilot',
  'Unlimited development',
  'Turnaround in the contract',
  'No hourly billing',
]

export function TermsStrip() {
  return (
    <div className="border-y border-line bg-paper">
      <Container>
        <ul className="grid divide-y divide-line lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-line">
          {terms.map((term) => (
            <li
              key={term}
              className="py-5 font-mono text-xs tracking-wide text-slate uppercase lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              {term}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
