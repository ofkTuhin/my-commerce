import { useAppSelector } from "@/redux/hook";
import CheckoutButton from "./CheckoutButton";
import InputField from "./InputField";
const CheckoutSummary = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const total = cartItems
    .reduce((acc, item) => acc + item.price! * item.quantity!, 0)
    .toFixed(2);
  return (
    <div className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {cartItems.map((item) => (
          <div className="flex justify-between" key={item.id}>
            <div className="w-2/3 ">
              <h5 className="text-gray-800 font-medium">{item.title}</h5>
            </div>
            <div className="w-10">
              <p className="text-gray-600">x{item.quantity}</p>
            </div>
            <p className="text-gray-800 font-medium">
              ${item.quantity! * item.price!}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>${total}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>${total}</p>
      </div>

      <div className="flex items-center mb-4 mt-2">
        <InputField
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlFor="aggrement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <a href="#" className="text-primary">
            terms & conditions
          </a>
        </label>
      </div>

      <CheckoutButton total={total} />
    </div>
  );
};

export default CheckoutSummary;
