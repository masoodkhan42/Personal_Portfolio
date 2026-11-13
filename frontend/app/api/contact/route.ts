import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.EMAIL_API_KEY;

    if (!apiKey) {
      console.error('EMAIL_API_KEY is missing in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Missing API key.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { firstName, email, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['m.masood211342@gmail.com'],
      subject: `${firstName} Visited Your Portfolio`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}