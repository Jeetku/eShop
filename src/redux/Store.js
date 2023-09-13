import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
