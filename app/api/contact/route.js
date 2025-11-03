import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, company, subject, message } = body

    await resend.emails.send({
      from: 'Ultimate Blend <onboarding@resend.dev>',
      to: 'info@ultimate-blend.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}
