import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Ultimate Blend <onboarding@resend.dev>',
      to: ['ultimateblend2025@outlook.com'],
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { message: 'Failed to send email', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json(
      { message: 'Internal server error', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}