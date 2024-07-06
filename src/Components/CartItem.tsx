import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { ICartItem } from "@/types";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }: { item: ICartItem }) => {
  const dispatch = useAppDispatch();

  // increment
  const handleRemove = (id: string) => {
    dispatch(removeItem({ id: id }));
  };
  // increment
  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity({ id: id }));
  };

  // decrement
  const handleDecrement = (id: string, quantity: number) => {
    if (quantity === 1) {
      dispatch(removeItem({ id: id }));
    } else {
      dispatch(decrementQuantity({ id: id }));
    }
  };
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center w-2/3">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 rounded-md"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-500">Stock: {item.stock}</p>
        </div>
      </div>
      <div className="flex items-center mt-2  w-12">
        <button
          onClick={() => handleDecrement(item.id, item.quantity!)}
          className="text-white bg-primary p-2 rounded hover:bg-gray-800 transition"
        >
          <FaMinus />
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => handleIncrement(item.id)}
          disabled={item.quantity === item.stock}
          className="text-white bg-primary p-2 rounded hover:bg-gray-800 transition"
        >
          <FaPlus />
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-semibold">${item.price}</span>
        <button
          onClick={() => handleRemove(item.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
