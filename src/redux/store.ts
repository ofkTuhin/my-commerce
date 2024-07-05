import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApiSlice";
import authReducer from "./authSlice";
import { api } from "./features/api/apiSlice";
import bookingReducer from "./features/booking/bookingSlice";
import cartReducer from "./features/cart/cartSlice";

// import cartRducer from './features/cart/cartSlice';
// import productReducer from './features/product/productSlice';
// import userReducer from './features/user/userSlice';
// ...

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    booking: bookingReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
