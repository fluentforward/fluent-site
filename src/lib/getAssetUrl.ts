import type { Asset } from 'contentful'

/**
 * Get the full URL for a Contentful asset
 */
export function getAssetUrl(asset: Asset | undefined): string | undefined {
  if (!asset?.fields?.file?.url) {
    return undefined
  }

  // Contentful URLs may or may not include the protocol
  const url = asset.fields.file.url
  if (url.startsWith('//')) {
    return `https:${url}`
  }
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return `https:${url}`
}

