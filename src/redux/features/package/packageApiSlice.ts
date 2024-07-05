import { api } from "../api/apiSlice";

const packageSliceTag = api.enhanceEndpoints({
  addTagTypes: ["package", "block_date", "package_block_date"],
});

const packageApiSlice = packageSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getPackage: builder.query({
      query: () => `/package`,
      providesTags: ["package"],
    }),
    getActivePackage: builder.query({
      query: () => `/package/active`,
      providesTags: ["package"],
    }),
    getSinglePackage: builder.query({
      query: (id: string) => `/package/${id}`,
      providesTags: ["package"],
    }),
    addPackage: builder.mutation({
      query: (data: any) => ({
        url: `package`,
        method: "POST",
        body: {
          ...data,
          limit: Number(data.limit),
          price: Number(data.price),
          child_packages: data.child_packages.map((item: any) => {
            return {
              ...item,
              price: Number(item.price),
            };
          }),
        },
      }),
      invalidatesTags: ["package"],
    }),
    updatePackage: builder.mutation({
      query: (data: any) => ({
        url: `package/${data?.id}`,
        method: "PATCH",
        body: {
          ...data,
          limit: Number(data.limit),
          price: Number(data.price),
          // child_packages: data.child_packages.map((item: any) => {
          //   return {
          //     ...item,
          //     price: Number(item.price),
          //   };
          // }),
        },
      }),
      invalidatesTags: ["package"],
    }),
    deletePackage: builder.mutation({
      query: (id: string) => ({
        url: `package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["package"],
    }),
    // package block date

    addPackageBlockDAte: builder.mutation({
      query: (data: any) => ({
        url: `package/add-package-block-date`,
        method: "POST",
        body: data.data,
      }),
      invalidatesTags: ["package_block_date"],
    }),
    getPackageBlockDate: builder.query({
      query: () => `package/block/get-package-block-date`,
      providesTags: ["package_block_date"],
    }),
    deletePackageBlockDate: builder.mutation({
      query: (id: string) => ({
        url: `package/delete-package-block-date/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["package_block_date"],
    }),

    // block date
    addBlockDate: builder.mutation({
      query: (data: any) => ({
        url: `block-date`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["block_date"],
    }),
    getBlockDate: builder.query({
      query: () => `block-date`,
      providesTags: ["block_date"],
    }),

    // delete block date
    deleteBlockDate: builder.mutation({
      query: (id: string) => ({
        url: `block-date/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["block_date"],
    }),

    // delete block date
  }),

  overrideExisting: true,
});

export const {
  useGetPackageQuery,
  useGetSinglePackageQuery,
  useAddPackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
  useAddBlockDateMutation,
  useGetBlockDateQuery,
  useGetActivePackageQuery,
  useAddPackageBlockDAteMutation,
  useGetPackageBlockDateQuery,
  useDeletePackageBlockDateMutation,
  useDeleteBlockDateMutation,
} = packageApiSlice;
