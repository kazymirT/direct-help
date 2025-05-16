import { generatePartnersEmail } from '@/lib/mailer/emailTemplates';
import { transporter } from '@/lib/mailer/mailer';
import { getPartnersSchema } from '@/lib/validateSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const schema = getPartnersSchema((key: string) => key);

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Validation error' }, { status: 400 });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_SEND_FROM,
      to: process.env.EMAIL_SEND_TO,
      subject: "Новий запит від партнерів",
      text: JSON.stringify(parsed.data, null, 2),
      html: generatePartnersEmail(parsed.data),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Send error", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
