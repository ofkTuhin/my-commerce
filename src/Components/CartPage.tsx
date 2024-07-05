import { useAppSelector } from "@/redux/hook";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-16">
        <p>Your shopping cart is empty.</p>
      </div>
    );
  }

  const total = cartItems
    .reduce((acc, item) => acc + item.price! * item.quantity!, 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CartSummary total={total} />
      </div>
    </div>
  );
};

export default CartPage;
