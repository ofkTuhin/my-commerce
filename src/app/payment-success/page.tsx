"use client";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
const PaymentSuccessPage = () => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <FaCheckCircle className="text-green-600 text-6xl mb-4" />
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Payment Successful!
      </h1>
      <p className="text-lg text-green-700 mb-4">
        Thank you for your purchase.
      </p>
      <button
        onClick={() => push("/")}
        className="bg-primary text-white py-2 px-4 rounded hover:bg-transparent hover:text-primary border border-primary transition"
      >
        Back to Shop
      </button>
    </div>
  );
};

export default PaymentSuccessPage;
