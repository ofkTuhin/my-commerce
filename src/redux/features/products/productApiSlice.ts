import { api } from "../api/apiSlice";

const productsSliceTag = api.enhanceEndpoints({
  addTagTypes: ["Products"],
});

const productsApiSlice = productsSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getProducts: builder.query({
      query: (arg: { sort: string; order: string }) =>
        arg.sort
          ? `products?sortBy=${arg.sort}&order=${arg.order}`
          : "products",
      providesTags: ["Products"],
    }),
    getSingleAdultProducts: builder.query({
      query: (arg: {
        package_id: string;
        start_point_id: string;
        end_point_id: string;
        guest_id: string;
      }) =>
        `products/adult-guest-products?package_id=${arg.package_id}&start_point_id=${arg.start_point_id}&end_point_id=${arg.end_point_id}&guest_id=${arg.guest_id}`,
      providesTags: ["Products"],
    }),
    getSingleChildProducts: builder.query({
      query: (arg: {
        package_id: string;
        start_point_id: string;
        end_point_id: string;
        guest_id: string;
      }) =>
        `products/child-guest-products?package_id=${arg.package_id}&start_point_id=${arg.start_point_id}&end_point_id=${arg.end_point_id}&guest_id=${arg.guest_id}`,
      providesTags: ["Products"],
    }),
    addProducts: builder.mutation({
      query: (data: any) => ({
        url: `products`,
        method: "POST",
        body: {
          ...data,
          products: Number(data.products),
        },
      }),
      invalidatesTags: ["Products"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetProductsQuery,
  useAddProductsMutation,
  useGetSingleAdultProductsQuery,
  useGetSingleChildProductsQuery,
} = productsApiSlice;
