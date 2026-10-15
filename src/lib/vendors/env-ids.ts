/**
 * Vendor IDs from deployment environment. Empty string means not configured;
 * loaders must not inject scripts when the ID is missing.
 */
export const vendorEnvIds = {
  ga4MeasurementId:
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? '',
  linkedInPartnerId:
    process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID?.trim() ?? '',
} as const
