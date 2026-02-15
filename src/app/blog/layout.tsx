import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on Execution Abundance, AI-native systems, and legal tech. Perspectives on building businesses where capacity compounds.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

