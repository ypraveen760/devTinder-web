import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    removeRequest: (state, action) => {
      const newArray = state.filter((req) => req._id !== action.payload);
      return newArray;
    },
    addRequest: (state, action) => action.payload,
  },
});
export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
