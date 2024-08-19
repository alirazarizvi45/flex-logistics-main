import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../ReducerSlices/user/userSlice";
import tripInfoReducer from "../ReducerSlices/tripInfo/tripInfoSlice";
import nearbyDriversReducer from "../ReducerSlices/nearbyDrivers/nearbyDriversSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    tripInfo: tripInfoReducer,
    nearbyDrivers: nearbyDriversReducer,
  },
});
