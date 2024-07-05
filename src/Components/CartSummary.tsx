import Link from "next/link";

const CartSummary = ({ total }: { total: string }) => {
  return (
    <div className="p-4 border-t">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-semibold">${total}</span>
      </div>
      <Link
        href="/checkout"
        className="w-full block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
