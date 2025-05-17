import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { amount, name, description } = await req.json();

    if (!amount || amount < 5000) {
      return NextResponse.json({ error: 'Мінімальна сума — 50 грн' }, { status: 400 });
    }

    const headersList = headers();
    const origin = (await headersList).get('origin');

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            unit_amount: amount,
            currency: 'uah',
            product_data: {
              name,
              description,
              images: [`${origin}/direct-help.png`],
            }
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/donate/success`,
      cancel_url: `${origin}/donate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const error = err as { message?: string; statusCode?: number };

    return NextResponse.json(
      { error: error.message || 'Помилка при створенні сесії' },
      { status: error.statusCode || 500 }
    );
  }
};
