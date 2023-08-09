//package import
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//api
export const loginUser = createAsyncThunk(
  "/user/loginUser",
  async ({ email, password }) => {
    console.log("password", password);
    console.log("email", email);
    const response = await axios.get(
      `http://localhost:3200/users?email=${email}&password=${password}`
    );
    console.log("Api", response.data);
    if (response.data.length && response.data[0].email === email) return email;
    return null;
  }
);

// reducer and action using redux toolkit
const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.email = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("action", action);
      state.email = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.email = null;
    });
  },
});

//export selector
export const selectUser = (state) => state.user;

export const { userLogout } = userSlice.actions;

// export reducer
export default userSlice.reducer;
