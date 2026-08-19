/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug', destination: '/', permanent: true },
      { source: '/pricing', destination: '/how-it-works', permanent: true },
      { source: '/surfaceos', destination: '/', permanent: true },
      { source: '/agentic-platform', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
