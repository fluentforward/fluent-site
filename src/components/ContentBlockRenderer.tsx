import type {
  ICalloutBlock,
  IRichTextBlock,
  ITestimonialBlock,
  IEntry,
} from '@/lib/contentful-types'
import { RichTextRenderer } from './RichTextRenderer'

type ContentBlock = ICalloutBlock | IRichTextBlock | ITestimonialBlock

type ContentBlockRendererProps = {
  block: ContentBlock
}

export function ContentBlockRenderer({ block }: ContentBlockRendererProps) {
  const contentTypeId = block.sys.contentType.sys.id

  // Render Rich Text Block
  if (contentTypeId === 'richTextBlock') {
    const richTextBlock = block as IRichTextBlock
    return <RichTextRenderer content={richTextBlock.fields.content} />
  }

  // Render Testimonial Block
  if (contentTypeId === 'testimonialBlock') {
    const testimonialBlock = block as ITestimonialBlock
    return (
      <blockquote className="bg-slate-50 border-l-4 border-lime-500 pl-8 py-6 my-8 italic text-lg text-slate-700">
        {testimonialBlock.fields.quoteText}
        {testimonialBlock.fields.quoteAttribution && (
          <>
            <br />
            <span className="not-italic font-semibold mt-2 block">
              {testimonialBlock.fields.quoteAttribution}
            </span>
          </>
        )}
      </blockquote>
    )
  }

  // Render Callout Block
  if (contentTypeId === 'calloutBlock') {
    const calloutBlock = block as ICalloutBlock
    const variantClass = {
      lime: 'bg-lime-500',
      indigo: 'bg-indigo-600',
      slate: 'bg-slate-600',
    }[calloutBlock.fields.variant] || 'bg-lime-500'

    return (
      <div className={`${variantClass} p-8 rounded-xl my-12`}>
        <h4
          className="text-xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {calloutBlock.fields.title}
        </h4>
        <RichTextRenderer content={calloutBlock.fields.content} />
      </div>
    )
  }

  // Fallback for unknown block types
  return null
}

