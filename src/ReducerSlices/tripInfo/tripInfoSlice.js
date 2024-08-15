import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../constants/axiosInstance";

export const saveTripRequestAsync = createAsyncThunk(
  "trip/saveTripRequest",
  async (tripDetails) => {
    const response = await axiosInstance.post(
      "/save-trip-request",
      tripDetails
    );
    return response.data;
  }
);
export const getTripRequestAsync = createAsyncThunk(
  "trip/getTripRequest",
  async (tripId) => {
    const response = await axiosInstance.get(`/get-trip-request/${tripId}`);
    return response.data;
  }
);
const tripSlice = createSlice({
  name: "trip",
  initialState: { tripInfo: {}, status: "idle", error: null },
  reducers: {
    setTripInfo: (state, action) => {
      state.tripInfo = action.payload;
    },
    updateTripStatus: (state, action) => {
      state.tripInfo.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveTripRequestAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveTripRequestAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tripInfo = action.payload;
      })
      .addCase(saveTripRequestAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getTripRequestAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTripRequestAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tripInfo = action.payload;
      })
      .addCase(getTripRequestAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setTripInfo, updateTripStatus } = tripSlice.actions;
export default tripSlice.reducer;
