import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counter";

// Combining all reducers here
export const rootReducer = combineReducers({
  counter: counterReducer,
});

// This creates a Redux store, and also automatically configure the Redux DevTools
// extension so that you can inspect the store while developing.
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
