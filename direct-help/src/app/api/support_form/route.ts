import { generateSupportEmail } from '@/lib/mailer/emailTemplates';
import { transporter } from '@/lib/mailer/mailer';
import { getSupportSchema } from '@/lib/validateSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const schema = getSupportSchema((key: string) => key);

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Validation error' }, { status: 400 });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_SEND_FROM,
      to: process.env.EMAIL_SEND_TO,
      subject: "Нова запит на допомогу",
      text: JSON.stringify(parsed.data, null, 2),
      html: generateSupportEmail(parsed.data),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Send error", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
