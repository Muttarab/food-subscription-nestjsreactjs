import { createSlice } from "@reduxjs/toolkit";
const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    currentPayment: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    paymentStart: (state) => {
      state.isFetching = true;
    },
    paymentSuccess: (state, action) => {
      state.isFetching = false;
      state.currentPayment = action.payload;
      state.error=false;
    },
    paymentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentPayment=null;
    },
  },
});

export const { paymentStart, paymentSuccess, paymentFailure} = paymentSlice.actions;
export default paymentSlice.reducer;