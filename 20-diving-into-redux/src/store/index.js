import { createStore } from "redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter++;
    },
    reset: (state) => {
      state = initState;
    },
    incrementByFive: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
