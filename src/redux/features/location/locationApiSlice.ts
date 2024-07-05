import { api } from "../api/apiSlice";
// import { IStartLocation } from "./location.type";

const locationSliceTag = api.enhanceEndpoints({
  addTagTypes: ["StartLocation", "EndLocation", "Location"],
});

const locationApiSlice = locationSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getStartLocation: builder.query({
      query: () => `location/list-start-locations`,
      providesTags: ["StartLocation"],
    }),
    // start location api
    addStartLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/create-start-location`,
        method: "POST",
        body: {
          name: data.name,
          child_locations: data.child_locations,
        },
      }),
      invalidatesTags: ["StartLocation", "Location"],
    }),
    updateStartLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/update-start-location/${data.id}`,
        method: "PATCH",
        body: {
          name: data.name,
        },
      }),
      invalidatesTags: ["StartLocation", "Location"],
    }),
    deleteStartLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/delete-start-location/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["StartLocation", "Location"],
    }),
    // end location api
    getEndLocation: builder.query({
      query: () => `/location/list-end-locations`,
      providesTags: ["EndLocation"],
    }),
    addEndLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/create-end-location`,
        method: "POST",
        body: {
          name: data.name,
          child_locations: data.child_locations,
        },
      }),
      invalidatesTags: ["EndLocation"],
    }),

    updateEndLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/update-end-location/${data.id}`,
        method: "PATCH",
        body: {
          name: data.name,
        },
      }),
      invalidatesTags: ["EndLocation"],
    }),

    deleteEndLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/delete-end-location/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EndLocation"],
    }),
    // location api
    getPickupLocation: builder.query({
      query: () => `/location/list-of-locations`,
      providesTags: ["Location"],
    }),
    addPickupLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/create-location`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Location"],
    }),

    updatePickupLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/update-location/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["StartLocation", "Location"],
    }),

    deletePickupLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/delete-location/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Location", "StartLocation"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetStartLocationQuery,
  useAddStartLocationMutation,
  useGetEndLocationQuery,
  useAddEndLocationMutation,
  useGetPickupLocationQuery,
  useAddPickupLocationMutation,
  useUpdatePickupLocationMutation,
  useDeletePickupLocationMutation,
  useUpdateStartLocationMutation,
  useDeleteStartLocationMutation,
  useUpdateEndLocationMutation,
  useDeleteEndLocationMutation,
} = locationApiSlice;
