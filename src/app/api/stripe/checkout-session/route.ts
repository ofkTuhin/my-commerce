import config from "@/config/config.json";
import { ICartItem } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const { base_url } = config.site;

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ??
    process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ??
    "",
  {
    apiVersion: "2024-06-20",
  },
);

export async function POST(req: NextRequest, res: any) {
  const body = await req.json();
  console.log({ body });
  try {
    const date = new Date().toISOString();
    // res.status(200);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: body?.products.map((product: ICartItem) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            images: [product.thumbnail], // Use product name from the request body
          },
          unit_amount: Math.ceil(product.price! * 100), // Use product amount from the request body
        },
        quantity: product.quantity, // Use product quantity from the request body
      })),
      mode: "payment",
      cancel_url: `${base_url}`,
      success_url: `${base_url}/payment-success`,
    });

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { error: "Error checkout session" },
      { status: 500 },
    );
  }
}
