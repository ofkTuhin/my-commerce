import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Import RootState from your store configuration

// Define TypeScript types for the user details response
interface UserDetails {
  id: string;
  name: string;
  email: string;
  // Add other relevant user fields
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL
        : // "http://localhost:5000/api/v1/",
          process.env.NEXT_PUBLIC_API_URL,
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers) => {
      // Initialize accessToken from local storage
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        // include accessToken in req header
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query<UserDetails, void>({
      query: () => ({
        url: "auth/user",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetUserDetailsQuery } = authApi;
