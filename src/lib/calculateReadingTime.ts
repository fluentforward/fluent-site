import { Document, BLOCKS, type Paragraph, type Text as RichTextText } from '@contentful/rich-text-types';

export function calculateReadingTime(content: Document): number {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200;
  
  // Extract text content from the rich text document
  const textContent = content.content
    .filter((node): node is Paragraph => node.nodeType === BLOCKS.PARAGRAPH)
    .map((paragraph) =>
      paragraph.content
        .filter((child): child is RichTextText => child.nodeType === 'text')
        .map((textNode) => textNode.value)
        .join(' ')
    )
    .join(' ');
  
  // Count words in the content
  const wordCount = textContent.trim().split(/\s+/).length;
  
  // Calculate reading time in minutes, rounded up to nearest minute
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
} 