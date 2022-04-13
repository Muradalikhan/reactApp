import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice.js";
import TourReducer from "./features/tourSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    tour: TourReducer,
  },
});

export default store;
