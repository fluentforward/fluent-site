import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Temporarily disabled in pre-launch: accept request but do nothing
    const body = await request.json().catch(() => ({}))
    const email = body?.email
    return NextResponse.json(
      { message: 'Newsletter subscription is disabled during pre-launch', email },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Newsletter subscription endpoint. Use POST to subscribe.' },
    { status: 405 }
  )
} 