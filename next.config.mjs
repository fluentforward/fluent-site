/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
  async headers() {
    return [
      {
        source: '/guides/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/mockup/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/agent-planner',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/internal/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/', statusCode: 301 },
      { source: '/blog/:slug', destination: '/', statusCode: 301 },
      { source: '/pricing', destination: '/ways-we-work', statusCode: 301 },
      { source: '/surfaceos', destination: '/', statusCode: 301 },
      { source: '/agentic-platform', destination: '/', statusCode: 301 },
      { source: '/options', destination: '/profit-engine', statusCode: 301 },
      {
        source: '/leverage-board',
        destination: '/profit-engine',
        statusCode: 301,
      },
      {
        source: '/offers/interaction-engine-design.pdf',
        destination: '/profit-engine',
        statusCode: 301,
      },
      {
        source: '/client-capacity',
        destination: '/profit-engine',
        statusCode: 301,
      },
      {
        source: '/client-capacity/:path*',
        destination: '/profit-engine',
        statusCode: 301,
      },
      {
        source: '/capacity-scaling-roadmap',
        destination: 'https://client.fluentforward.com/profit-constraint-score',
        statusCode: 302,
      },
      { source: '/mockup/home', destination: '/', statusCode: 302 },
      { source: '/about', destination: '/', statusCode: 301 },
      { source: '/about/:path*', destination: '/', statusCode: 301 },
    ]
  },
}

export default nextConfig
