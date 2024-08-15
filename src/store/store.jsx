import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../ReducerSlices/user/userSlice";
import tripInfoReducer from "../ReducerSlices/tripInfo/tripInfoSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    tripInfo: tripInfoReducer,
  },
});
