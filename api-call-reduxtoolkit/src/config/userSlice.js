import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: "Murad" },
  reducers: {
    getUser: (state, actions) => {
      state.value = actions.payload ? actions.payload : state.value;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
