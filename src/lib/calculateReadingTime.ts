import { Document } from '@contentful/rich-text-types';

export function calculateReadingTime(content: Document): number {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200;
  
  // Extract text content from the rich text document
  const textContent = content.content
    .filter(node => node.nodeType === 'paragraph')
    .map(node => node.content
      .filter(content => content.nodeType === 'text')
      .map(text => text.value)
      .join(' ')
    )
    .join(' ');
  
  // Count words in the content
  const wordCount = textContent.trim().split(/\s+/).length;
  
  // Calculate reading time in minutes, rounded up to nearest minute
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
} 