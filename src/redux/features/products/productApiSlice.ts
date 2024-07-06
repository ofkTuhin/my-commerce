import { api } from "../api/apiSlice";

const productsSliceTag = api.enhanceEndpoints({
  addTagTypes: ["Products"],
});

const productsApiSlice = productsSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getProducts: builder.query({
      query: (arg: { order: string }) =>
        arg.order ? `products?sortBy=title&order=${arg.order}` : "products",
      providesTags: ["Products"],
    }),
    getSearchProducts: builder.query({
      query: (arg: { search: string; order: string }) =>
        arg.order
          ? `products/search?q=${arg.search}&sortBy=title&order=${arg.order}`
          : `products/search?q=${arg.search}`,
      providesTags: ["Products"],
    }),
    getSingleChildProducts: builder.query({
      query: (arg: { package_id: string; order: string }) =>
        arg.order
          ? `products/child-guest-products?package_id=${arg.package_id}&sortBy=title&order=${arg.order}`
          : "",
      providesTags: ["Products"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetProductsQuery,
  useGetSearchProductsQuery,
  useGetSingleChildProductsQuery,
} = productsApiSlice;
