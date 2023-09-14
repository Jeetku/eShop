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
      //   console.log(action.payload);
      state.isLoggedIn = true;
      //   state.email = action.payload.email;
      //   state.username = action.payload.username;
      //   state.userID = action.payload.userID;
      // ?or we can do like this destructuring as well
      const { email, username, userID } = action.payload;
      state.email = email;
      state.username = username;
      state.userID = userID;
    },
    REMOVE_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = false;

      state.email = null;
      state.username = null;
      state.userID = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUsername = (state) => state.auth.username;
export const selectEmail = (state) => state.auth.email;
export const selectUserID = (state) => state.auth.use;

export default authSlice.reducer;
