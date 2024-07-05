import { api } from "../api/apiSlice";

const bookingSliceTag = api.enhanceEndpoints({
  addTagTypes: ["Booking"],
});

const bookingApiSlice = bookingSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getBooking: builder.query({
      query: (arg: { order_number: string }) =>
        `booking?order_number=${arg.order_number}`,
      providesTags: ["Booking"],
    }),
    getAllBooking: builder.query({
      query: () => `booking/all`,
      providesTags: ["Booking"],
    }),
    getAllBookingOfAnIndividualDay: builder.query({
      query: (arg: {
        date: string;
        package_id: string;
        Sub_Package_id: string;
      }) =>
        `booking/all-count?date=${arg.date}&package_id=${arg.package_id}&Sub_Package_id=${arg.Sub_Package_id}`,
      providesTags: ["Booking"],
      invalidatesTags: (toggleDate: boolean) => [
        { type: "Booking", toggleDate },
      ],
    }),
    getBookingDetailsByDate: builder.query({
      query: (arg: { date: string }) =>
        `booking/details-by-date?date=${arg.date}`,
      providesTags: ["Booking"],
    }),
    updateBooking: builder.mutation({
      query: (arg: { payload: any; orderId: string }) => ({
        url: `booking/${arg?.orderId}`,
        method: "PUT",
        body: arg.payload,
      }),
      invalidatesTags: ["Booking"],
    }),
    addBooking: builder.mutation({
      query: (data: any) => ({
        url: `booking`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    deleteBooking: builder.mutation({
      query: (id: string) => ({
        url: `booking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),

    getSingleBooking: builder.query({
      query: () => `booking/user`,
      providesTags: ["Booking"],
    }),
    cancelBooking: builder.mutation({
      query: (id: string) => ({
        url: `booking/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Booking"],
    }),
    requestChangeDate: builder.mutation({
      query: (data: any) => ({
        url: `booking/change-booking-date`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    getChangeDateRequest: builder.query({
      query: () => `booking/change-booking-date`,
      providesTags: ["Booking"],
    }),
    updateChangeDateRequestByAdmin: builder.mutation({
      query: (data: any) => ({
        method: "PATCH",
        url: `booking/change-booking-date/${data.id}`,
        body: data,
      }),
      providesTags: ["Booking"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetBookingQuery,
  useGetAllBookingOfAnIndividualDayQuery,
  useGetBookingDetailsByDateQuery,
  useUpdateBookingMutation,
  useAddBookingMutation,
  useGetAllBookingQuery,
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
  useCancelBookingMutation,
  useRequestChangeDateMutation,
  useGetChangeDateRequestQuery,
  useUpdateChangeDateRequestByAdminMutation,
} = bookingApiSlice;
