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
          justifyContent: 'space-between',
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
            display: 'flex',
            flexDirection: 'column',
            color: '#FFFFFF',
            fontSize: 52,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            maxWidth: 1000,
          }}
        >
          <span>The Leverage Board</span>
          <span style={{ color: '#8A929F' }}>
            Senior judgement every quarter. Growth without adding headcount.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 40,
            color: '#8A929F',
            fontSize: 20,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderTop: '1px solid rgba(255,255,255,0.14)',
            paddingTop: 28,
          }}
        >
          <span>Audit</span>
          <span>Strategy sessions</span>
          <span>Owned roadmap</span>
        </div>
      </div>
    ),
    size,
  )
}
