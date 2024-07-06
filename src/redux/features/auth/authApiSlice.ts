import Cookies from "js-cookie";
import { api } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          Cookies.set("token", result.data.token, { expires: 7 });
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              username: result.data.username,
            }),
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
