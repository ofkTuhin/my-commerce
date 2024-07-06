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
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0  transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <div className="h-16">
            <a
              href="#"
              className="uppercase font-medium text-base mb-2 text-gray-800 hover:text-primary transition"
            >
              {item?.title}
            </a>
          </div>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">${item?.price}</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
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
