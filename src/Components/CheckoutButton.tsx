"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton = ({ total }: { total: string }) => {
  const router = useRouter();

  const handler = async () => {
    try {
      const stripe = await asyncStripe;
      const res = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        body: JSON.stringify({
          amout: total,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const { sessionId } = await res.json();

      const { error } = await stripe!.redirectToCheckout({ sessionId });
      console.log(error);
      if (error) {
        router.push("/error");
      }
    } catch (err) {
      console.log(err);
      router.push("/error");
    }
  };

  return (
    <button
      onClick={handler}
      className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
