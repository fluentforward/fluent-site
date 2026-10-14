/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug', destination: '/', permanent: true },
      { source: '/pricing', destination: '/how-it-works', permanent: true },
      { source: '/surfaceos', destination: '/', permanent: true },
      { source: '/agentic-platform', destination: '/', permanent: true },
      { source: '/options', destination: '/leverage-board', permanent: true },
      {
        source: '/offers/interaction-engine-design.pdf',
        destination: '/leverage-board',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
