import { ImageResponse } from 'next/og'

import { site } from '@/content/site'

export const alt = `${site.name}: Tell us the problem. We’ll build the agent that fixes it.`
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
          background: '#0a0a0b',
          backgroundImage: 'radial-gradient(circle at 88% 92%, rgba(255,74,28,0.28), rgba(10,10,11,0) 45%)',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="30" height="30" viewBox="0 0 100 100">
            <polygon points="0,0 55,0 100,50 55,100 0,100 45,50" fill="#ff4a1c" />
          </svg>
          <div style={{ color: '#f4f4f1', fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em' }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#8b8b90', fontSize: 22, letterSpacing: '0.08em', marginBottom: 28 }}>
            AI AGENTS FOR UK SERVICES FIRMS
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#ffffff',
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: '-0.045em',
            }}
          >
            <span>Tell us the problem.</span>
            <span>We’ll build the agent</span>
            <span style={{ display: 'flex' }}>
              that<span style={{ color: '#ff4a1c', marginLeft: '0.26em' }}>fixes it.</span>
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
