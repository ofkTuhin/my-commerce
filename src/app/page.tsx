"use client";

import FilterLayout from "@/Components/FilterLayout";
import ProductCart from "@/Components/ProductCart";
import { insertCart } from "@/redux/features/cart/cartSlice";
import { useGetProductsQuery } from "@/redux/features/products/productApiSlice";
import { useAppDispatch } from "@/redux/hook";
import { ICartItem } from "@/types";
import { useSearchParams } from "next/navigation";

const Home = () => {
  const order = useSearchParams().get("order");
  const dispatch = useAppDispatch();
  const { currentData, isLoading } = useGetProductsQuery({
    order: order,
  }) as any;

  const { products } = currentData || {};
  if (isLoading) {
    <div>Loding...</div>;
  }

  const addToCart = (product: any) => {
    dispatch(
      insertCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
        stock: product.stock,
      }),
    );
  };

  return (
    <>
      <section className="section pt-14">
        <div className="container pb-16">
          <FilterLayout />
          <div className="row lg:row-cols-5 md:row-cols-3 sm:row-cols-2">
            {products?.map((item: ICartItem) => <ProductCart item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
