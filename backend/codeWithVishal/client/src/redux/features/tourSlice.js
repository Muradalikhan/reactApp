import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createTour = createAsyncThunk(
  "tours/createTour",
  async ({ updatedTour, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.tour(updatedTour);
      toast.success("tour added successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const TourSlice = createSlice({
  name: "tour",
  initialState: {
    tour: {},
    tours: [],
    userTour: [],
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [createTour.pending]: (state, action) => {
      state.loading = true;
    },
    [createTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = [action.payload];
    },
    [createTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const {} = TourSlice.actions;
export default TourSlice.reducer;
