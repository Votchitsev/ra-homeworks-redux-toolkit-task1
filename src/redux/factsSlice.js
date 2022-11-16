import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facts: []
}

export const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    get: (state, action) => {
      state.facts.slice(0, action);
    }
  }
})

export default factsSlice.reducer;

export const { get } = factsSlice.actions;
