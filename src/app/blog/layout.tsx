import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on legal tech and business intelligence. Perspectives on law firm operations and data-driven decision making.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

