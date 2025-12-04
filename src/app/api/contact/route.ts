import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the form data to console
    console.log('=== Contact Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('First Name:', body.firstName)
    console.log('Last Name:', body.lastName)
    console.log('Email:', body.email)
    console.log('Phone:', body.phone || 'Not provided')
    console.log('Firm Name:', body.firmName)
    console.log('Firm Size:', body.firmSize || 'Not provided')
    console.log('Inquiry Type:', body.inquiryType)
    console.log('Message:', body.message)
    console.log('=============================')

    // In a real application, you would:
    // - Save to database
    // - Send email notification
    // - Integrate with CRM
    // - etc.

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process form submission',
      },
      { status: 500 }
    )
  }
}

