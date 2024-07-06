"use client";

import FilterLayout from "@/Components/FilterLayout";
import ProductCart from "@/Components/ProductCart";
import { useGetSearchProductsQuery } from "@/redux/features/products/productApiSlice";
import { ICartItem } from "@/types";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const order = useSearchParams().get("order");
  const search = useSearchParams().get("search");
  const { currentData, isLoading } = useGetSearchProductsQuery({
    search: search,
    order: order,
  }) as any;
  const { products } = currentData || {};
  if (isLoading) {
    <div>Loding...</div>;
  }
  return (
    <>
      <section className="section pt-14">
        <div className="container pb-16">
          <FilterLayout />
          <div className="row lg:row-cols-5 md:row-cols-3 sm:row-cols-2">
            {products?.map((item: ICartItem) => (
              <ProductCart item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
