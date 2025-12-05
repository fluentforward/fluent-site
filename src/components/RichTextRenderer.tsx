import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'

type RichTextRendererProps = {
  content: Document
  className?: string
}

export function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
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

