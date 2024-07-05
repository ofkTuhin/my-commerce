"use client";
import { useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";

const PaymentFailPage = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <FaTimesCircle className="text-red-600 text-6xl mb-4" />
      <h1 className="text-3xl font-bold text-red-800 mb-2">Payment Failed</h1>
      <p className="text-lg text-red-700 mb-4">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={() => push("/checkout")}
        className="bg-primary text-white py-2 px-4 rounded hover:bg-transparent hover:text-primary border border-primary transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default PaymentFailPage;
