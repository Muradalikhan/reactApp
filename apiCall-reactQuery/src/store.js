import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./config/userSlice";
import productReducer from "./config/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});
