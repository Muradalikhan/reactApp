import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createTour = createAsyncThunk(
  "tours/createTour",
  async ({ updatedTour, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createTour(updatedTour);
      toast.success("tour added successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTours = createAsyncThunk(
  "tours/getTours",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getTours();
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
    [getTours.pending]: (state, action) => {
      state.loading = true;
    },
    [getTours.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = action.payload;
    },
    [getTours.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const {} = TourSlice.actions;
export default TourSlice.reducer;
