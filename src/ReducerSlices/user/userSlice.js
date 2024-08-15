import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getLoggedInUser } from "../../ReducerApis/getLoggedinUser";
import axiosInstance from "../../constants/axiosInstance";

export const getLoggedInUserAsync = createAsyncThunk(
  "user/getLoggedInUser",
  async () => {
    const user = await getLoggedInUser();
    return user;
  }
);
export const getUserAsync = createAsyncThunk("user/getUser", async () => {
  const user = await getLoggedInUser();
  return user;
});

export const getUserByIdAsync = createAsyncThunk(
  "user/getUserById",
  async (userId) => {
    const response = await axiosInstance.get(`/get-user-by-id/${userId}`);
    return response.data;
  }
);
export const addUser = createAction("user/addUser");

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    role: "",
    status: "idle",
    error: null,
    userDetails: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoggedInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLoggedInUserAsync.fulfilled, (state, action) => {
        console.log("Fulfilled payload:", action.payload);
        state.status = "succeeded";
        state.user = action.payload?.user ?? {};
        state.role = action.payload?.role ?? "";
        // Add any other logic you had in the duplicate case here
      })
      .addCase(getLoggedInUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload?.user ?? {};
        state.role = action.payload?.role ?? "";
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserByIdAsync.fulfilled, (state, action) => {
        state.userDetails = action.payload?.user ?? {};
        console.log("User details fetched:", action.payload);
      })

      .addCase(getUserByIdAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
