import type {
  ICalloutBlock,
  ICalloutBlockFields,
  IRichTextBlock,
  IRichTextBlockFields,
  ITestimonialBlock,
  ITestimonialBlockFields,
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
    const fields = richTextBlock.fields as IRichTextBlockFields
    return <RichTextRenderer content={fields.content} />
  }

  // Render Testimonial Block
  if (contentTypeId === 'testimonialBlock') {
    const testimonialBlock = block as ITestimonialBlock
    const fields = testimonialBlock.fields as ITestimonialBlockFields
    return (
      <blockquote className="bg-slate-50 border-l-4 border-lime-500 pl-8 py-6 my-8 italic text-lg text-slate-700">
        {fields.quoteText}
        {fields.quoteAttribution && (
          <>
            <br />
            <span className="not-italic font-semibold mt-2 block">
              {fields.quoteAttribution}
            </span>
          </>
        )}
      </blockquote>
    )
  }

  // Render Callout Block
  if (contentTypeId === 'calloutBlock') {
    const calloutBlock = block as ICalloutBlock
    const fields = calloutBlock.fields as ICalloutBlockFields
    const variantClass = {
      lime: 'bg-lime-500',
      indigo: 'bg-indigo-600',
      slate: 'bg-slate-600',
    }[fields.variant] || 'bg-lime-500'

    return (
      <div className={`${variantClass} p-8 rounded-xl my-12`}>
        <h4
          className="text-xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {fields.title}
        </h4>
        <RichTextRenderer content={fields.content} />
      </div>
    )
  }

  // Fallback for unknown block types
  return null
}

