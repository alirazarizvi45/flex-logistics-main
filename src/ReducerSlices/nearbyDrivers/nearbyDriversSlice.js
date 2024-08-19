import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getNearbyDriversAsync = createAsyncThunk(
  "nearbyDrivers/getNearbyDrivers",
  async ({ riderLocation, socket }, { rejectWithValue }) => {
    try {
      if (!socket) throw new Error("Socket not available");

      return new Promise((resolve, reject) => {
        socket.emit("getNearbyDrivers", { riderLocation }, (nearbyDrivers) => {
          if (nearbyDrivers && nearbyDrivers.length > 0) {
            resolve(nearbyDrivers);
          } else {
            reject(new Error("No nearby drivers found"));
          }
        });
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const nearbyDriversSlice = createSlice({
  name: "nearbyDrivers",
  initialState: {
    nearbyDrivers: [],
    status: "idle",
    error: null,
    lastUpdated: null,
  },
  reducers: {
    setNearbyDrivers: (state, action) => {
      state.nearbyDrivers = action.payload;
      state.lastUpdated = new Date().toISOString();
    },
    clearNearbyDrivers: (state) => {
      state.nearbyDrivers = [];
      state.lastUpdated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNearbyDriversAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getNearbyDriversAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nearbyDrivers = action.payload;
        state.lastUpdated = new Date().toISOString();
        state.error = null;
      })
      .addCase(getNearbyDriversAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch nearby drivers";
      });
  },
});

export const { setNearbyDrivers, clearNearbyDrivers } =
  nearbyDriversSlice.actions;

export default nearbyDriversSlice.reducer;
