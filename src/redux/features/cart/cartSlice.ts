import { createSlice } from "@reduxjs/toolkit";

// Define TypeScript types for state and actions
interface CartItem {
  id: string;
  title: string;
  price: number | null;
  stock: number | null;
  quantity: number | null;
  thumbnail: string;
}

const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertCart: (state, { payload }) => {
      const item = state.find((item) => item.id === payload.id);
      if (
        item &&
        item.quantity !== null &&
        item.stock !== null &&
        item.quantity < item.stock
      ) {
        item.quantity += 1;
      } else {
        return (state = [...state, payload]);
      }
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.find((item) => item.id === payload.id);
      if (
        item &&
        item.quantity !== null &&
        item.stock !== null &&
        item.quantity < item.stock
      ) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.find((item) => item.id === payload.id);
      if (item && item.quantity !== null && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { insertCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
