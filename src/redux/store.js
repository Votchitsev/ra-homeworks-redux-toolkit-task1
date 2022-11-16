import { configureStore } from "@reduxjs/toolkit";
import factsSlice from "./factsSlice";

export const store = configureStore({
  reducer: {
    factsReducer: factsSlice,
  },
});
