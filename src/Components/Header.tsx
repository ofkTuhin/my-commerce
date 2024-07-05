"use client";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const cartItems = useAppSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h2>My Commerce</h2>{" "}
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="cart"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FaShoppingBag />
            </div>

            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              {cartItems?.length}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
