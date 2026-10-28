/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/', statusCode: 301 },
      { source: '/blog/:slug', destination: '/', statusCode: 301 },
      { source: '/pricing', destination: '/how-it-works', statusCode: 301 },
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
    ]
  },
}

export default nextConfig
