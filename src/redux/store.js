import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user:userReducer
  },
});
