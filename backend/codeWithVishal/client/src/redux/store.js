import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
