import { insertCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { ICartItem } from "@/types";

const ProductCart = ({ item }: { item: ICartItem }) => {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(
      insertCart({
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        quantity: 1,
        stock: item.stock,
      }),
    );
  };
  return (
    <div className="col mb-6" key={item.title}>
      <div className="bg-white shadow rounded overflow-hidden  ">
        <div className="relative">
          <img src={item?.thumbnail} alt="product 1" className="w-full" />
        </div>
        <div className="pt-4 pb-3 px-4">
          <div className="h-16">
            <h4 className="uppercase font-medium text-base mb-2 text-gray-800 hover:text-primary transition">
              {item?.title}
            </h4>
          </div>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">${item?.price}</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div className="flex items-center">
            <span className="text-light text-sm">Stock</span>

            <div className="text-xs text-gray-500 ml-3">({item?.stock})</div>
          </div>
        </div>
        <button
          onClick={addToCart}
          className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
