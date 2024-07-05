import config from "@/config/config.json";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const { base_url } = config.site;

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? "",
  {
    apiVersion: "2024-06-20",
  },
);

export default async function POST(req: NextRequest) {
  const { method, body } = req as any;

  try {
    const date = new Date().toISOString();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "INV-" + date,
            },
            unit_amount: body?.amount * 100 || 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      cancel_url: `${base_url}`,
      success_url: `${base_url}/success`,
    });

    NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err) {
    NextResponse.json({ error: "Error checkout session" }, { status: 500 });
  }
}
