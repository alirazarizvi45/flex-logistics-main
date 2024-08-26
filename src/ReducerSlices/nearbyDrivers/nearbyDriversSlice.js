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
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    lastUpdated: null,
  },
  reducers: {
    updatedDriverLocation: (state, action) => {
      const { driverId, driverName, vehicleImage, latitude, longitude } =
        action.payload;
      const driverIndex = state.nearbyDrivers.findIndex(
        (driver) => driver.driverId === driverId
      );
      if (driverIndex !== -1) {
        state.nearbyDrivers[driverIndex] = {
          ...state.nearbyDrivers[driverIndex],
          driverName,
          vehicleImage,
          location: {
            latitude,
            longitude,
          },
        };
      }
    },
    removeDrivers: (state, action) => {
      state.nearbyDrivers = state.nearbyDrivers.filter(
        (driver) => driver.userId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNearbyDriversAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getNearbyDriversAsync.fulfilled, (state, action) => {
        console.log("Nearby drivers received:", action.payload);
        state.status = "succeeded";
        state.nearbyDrivers = action.payload; // Set the list of nearby drivers
        state.lastUpdated = new Date().toISOString();
        state.error = null;
      })
      .addCase(getNearbyDriversAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch nearby drivers";
      });
  },
});

export const { updatedDriverLocation, removeDrivers } =
  nearbyDriversSlice.actions;

export default nearbyDriversSlice.reducer;
