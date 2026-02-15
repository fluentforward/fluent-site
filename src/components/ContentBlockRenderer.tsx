import type {
  ICalloutBlock,
  ICalloutBlockFields,
  IRichTextBlock,
  IRichTextBlockFields,
  ITestimonialBlock,
  ITestimonialBlockFields,
  IEntry,
} from '@/lib/contentful-types'
import type { Asset } from 'contentful'
import { RichTextRenderer } from './RichTextRenderer'

type ContentBlock = ICalloutBlock | IRichTextBlock | ITestimonialBlock

type ContentBlockRendererProps = {
  block: ContentBlock
  linkedAssets?: Asset[]
}

export function ContentBlockRenderer({ block, linkedAssets = [] }: ContentBlockRendererProps) {
  const contentTypeId = block.sys.contentType.sys.id

  // Render Rich Text Block
  if (contentTypeId === 'richTextBlock') {
    const richTextBlock = block as IRichTextBlock
    const fields = richTextBlock.fields as IRichTextBlockFields
    return <RichTextRenderer content={fields.content} linkedAssets={linkedAssets} />
  }

  // Render Testimonial Block
  if (contentTypeId === 'testimonialBlock') {
    const testimonialBlock = block as ITestimonialBlock
    const fields = testimonialBlock.fields as ITestimonialBlockFields
    return (
      <blockquote className="bg-warm-gray border-l-4 border-fluent-red pl-8 py-6 my-8 italic text-lg text-charcoal">
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
    const borderClass = {
      lime: 'border-fluent-red',
      indigo: 'border-charcoal',
      slate: 'border-neutral-600',
    }[fields.variant] || 'border-fluent-red'

    return (
      <div className={`bg-warm-gray border-l-4 ${borderClass} pl-8 py-6 my-12 rounded-r`}>
        <h4 className="font-display font-extrabold text-xl text-charcoal mb-4">
          {fields.title}
        </h4>
        <RichTextRenderer
          content={fields.content}
          linkedAssets={linkedAssets}
          className="[&_p]:text-charcoal [&_p]:mb-4 [&_p:last-child]:mb-0 [&_h3]:text-charcoal [&_h4]:text-charcoal [&_li]:text-charcoal [&_a]:text-fluent-red [&_strong]:text-charcoal"
        />
      </div>
    )
  }

  // Fallback for unknown block types
  return null
}

