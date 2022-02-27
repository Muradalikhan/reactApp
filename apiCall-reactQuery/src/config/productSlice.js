import { createSlice } from "@reduxjs/toolkit";

const productList = [
  { name: "phone", id: 1 },
  { name: "tablet", id: 2 },
  { name: "laptop", id: 3 },
  { name: "led", id: 4 },
  { name: "mike", id: 5 },
  { name: "bags", id: 6 },
  { name: "handfree", id: 7 },
  { name: "cabel", id: 8 },
  { name: "T.V", id: 9 },
  { name: "headphone", id: 10 },
];

export const productSlice = createSlice({
  name: "product",
  initialState: { value: productList },
  reducers: {
    getProducts: (state, actions) => {
      state.value = state.value;
    },
    addProducts: (state, actions) => {
      state.value = [...state.value, actions.payload];
    },
  },
});

export const { getProducts, addProducts } = productSlice.actions;

export default productSlice.reducer;
