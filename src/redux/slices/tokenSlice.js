import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    toggleToken: (state) => {
      state.token = state.token === false ? true : false;
    },
  },
});

export const { toggleToken } = tokenSlice.actions;
export default tokenSlice.reducer;