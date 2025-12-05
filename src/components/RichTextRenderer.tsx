import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'
import type { Asset } from 'contentful'
import Image from 'next/image'
import { getAssetUrl } from '@/lib/getAssetUrl'

type RichTextRendererProps = {
  content: Document
  className?: string
  linkedAssets?: Asset[]
}

export function RichTextRenderer({ content, className = '', linkedAssets = [] }: RichTextRendererProps) {
  // Create a map of assets by ID for quick lookup
  const assetMap = new Map<string, Asset>()
  linkedAssets.forEach((asset) => {
    if (asset.sys?.id) {
      assetMap.set(asset.sys.id, asset)
    }
  })

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
        <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {children}
        </p>
      ),
      [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
        <h3
          className="text-2xl font-bold text-slate-900 mb-4 mt-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => (
        <h4
          className="text-xl font-bold text-slate-900 mb-3 mt-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {children}
        </h4>
      ),
      [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => (
        <ul className="list-disc list-outside space-y-3 mb-6 text-lg text-slate-700 pl-6">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => (
        <ol className="list-decimal list-outside space-y-4 mb-6 text-lg text-slate-700 pl-6">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: any, children: React.ReactNode) => (
        <li className="[&>p]:mb-0">{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => (
        <blockquote className="bg-slate-50 border-l-4 border-lime-500 pl-8 py-6 my-8 italic text-lg text-slate-700">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // Try to get asset from node.data.target (if resolved by SDK)
        let asset = node.data.target

        // If node.data.target is a link object (not resolved), look it up from linkedAssets
        if (asset && asset.sys && asset.sys.type === 'Link' && !asset.fields) {
          // It's a link reference, not a resolved asset
          const assetId = asset.sys.id
          asset = assetMap.get(assetId) || linkedAssets.find((a) => a.sys?.id === assetId)
        } else if (!asset || !asset.fields) {
          // Asset not found or not fully resolved, try to look it up
          const assetId = node.data.target?.sys?.id
          if (assetId) {
            asset = assetMap.get(assetId) || linkedAssets.find((a) => a.sys?.id === assetId)
          }
        }

        if (!asset || !asset.fields) return null

        const imageUrl = getAssetUrl(asset)
        if (!imageUrl) return null

        const alt = asset.fields?.title || asset.fields?.description || ''
        const width = asset.fields?.file?.details?.image?.width
        const height = asset.fields?.file?.details?.image?.height

        // If we have dimensions, use Next.js Image component
        if (width && height) {
          return (
            <div className="my-8">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }}>
                <Image
                  src={imageUrl}
                  alt={alt}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                />
              </div>
            </div>
          )
        }

        // Fallback to regular img tag if dimensions aren't available
        return (
          <div className="my-8">
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-auto rounded-xl"
            />
          </div>
        )
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          className="text-indigo-600 hover:text-lime-500 underline"
          target={node.data.uri.startsWith('http') ? '_blank' : undefined}
          rel={node.data.uri.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
    },
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    },
  }

  return (
    <div className={className}>
      {documentToReactComponents(content, options)}
    </div>
  )
}

