/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/', statusCode: 301 },
      { source: '/blog/:slug', destination: '/', statusCode: 301 },
      { source: '/pricing', destination: '/ways-we-work', statusCode: 301 },
      { source: '/surfaceos', destination: '/', statusCode: 301 },
      { source: '/agentic-platform', destination: '/', statusCode: 301 },
      { source: '/options', destination: '/client-capacity', statusCode: 301 },
      {
        source: '/leverage-board',
        destination: '/client-capacity',
        statusCode: 301,
      },
      {
        source: '/offers/interaction-engine-design.pdf',
        destination: '/client-capacity',
        statusCode: 301,
      },
      { source: '/about', destination: '/', statusCode: 301 },
      { source: '/about/:path*', destination: '/', statusCode: 301 },
      { source: '/how-it-works', destination: '/ways-we-work', statusCode: 301 },
      {
        source: '/how-it-works/:path*',
        destination: '/ways-we-work',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
