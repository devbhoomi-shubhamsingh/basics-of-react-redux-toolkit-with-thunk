import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += action.payload;
    },
    decrementCounter: (state, action) => {
      state.counter -= action.payload;
    },
  },
  //   extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
