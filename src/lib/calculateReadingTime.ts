import { Document, BLOCKS, type Paragraph, type Text as RichTextText } from '@contentful/rich-text-types';

/**
 * Calculate reading time from one or more rich text documents
 */
export function calculateReadingTime(...documents: (Document | undefined)[]): number {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200;
  
  // Extract text content from all documents
  let totalWordCount = 0;
  
  for (const doc of documents) {
    if (!doc) continue;
    
    const textContent = doc.content
      .filter((node): node is Paragraph => node.nodeType === BLOCKS.PARAGRAPH)
      .map((paragraph) =>
        paragraph.content
          .filter((child): child is RichTextText => child.nodeType === 'text')
          .map((textNode) => textNode.value)
          .join(' ')
      )
      .join(' ');
    
    const wordCount = textContent.trim().split(/\s+/).filter(word => word.length > 0).length;
    totalWordCount += wordCount;
  }
  
  // Calculate reading time in minutes, rounded up to nearest minute
  return Math.max(1, Math.ceil(totalWordCount / WORDS_PER_MINUTE));
} 