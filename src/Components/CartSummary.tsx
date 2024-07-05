const CartSummary = ({ total }) => {
  return (
    <div className="p-4 border-t">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-semibold">${total}</span>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
