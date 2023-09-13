import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  username: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { SET_ACTIVE_USER } = authSlice.actions;

export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUsername = (state) => state.auth.username;
export const selectEmail = (state) => state.auth.email;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
