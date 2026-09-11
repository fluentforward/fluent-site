import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProofArticle } from '@/components/sections/ProofArticle'
import { getProofPack, proofPacks } from '@/content/proof'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return proofPacks.map((pack) => ({ slug: pack.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const pack = getProofPack(params.slug)
  if (!pack) {
    return { title: 'Proof' }
  }

  const description = pack.summary

  return {
    title: pack.title,
    description,
    alternates: { canonical: `/proof/${params.slug}` },
    openGraph: {
      title: pack.title,
      description,
      url: `/proof/${params.slug}`,
    },
    twitter: { title: pack.title, description },
  }
}

export default function ProofDetailPage({ params }: PageProps) {
  const pack = getProofPack(params.slug)
  if (!pack) notFound()

  return <ProofArticle pack={pack} />
}
