import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",

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

  tagTypes: [""],

  endpoints: () => ({}),
});
