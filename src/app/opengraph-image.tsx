import { ImageResponse } from 'next/og'

import { site } from '@/content/site'

export const alt = `${site.name} | ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0B0C0E',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 4,
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0B0C0E',
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            &rsaquo;
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: 44,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            maxWidth: 1000,
          }}
        >
          <span>{site.tagline}</span>
        </div>
      </div>
    ),
    size,
  )
}
