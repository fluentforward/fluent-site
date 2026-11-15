import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  if (request.nextUrl.pathname === '/agent-planner') {
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  }
  return response
}

export const config = {
  matcher: ['/mockup/:path*', '/agent-planner', '/internal/:path*'],
}
