import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWeight: "200г",
  price: 1000,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    changeWeight: (state, action) => {
      // state.selectedWeight = action.payload;
      if (action.payload === "200г") {
        state.price = "1000 руб";
      } else if (action.payload === "400г") {
        state.price = "2000 руб";
      } else if (action.payload === "800г") {
        state.price = "8000 руб";
      } else if (action.payload === "1кг") {
        state.price = "5000 руб";
      }
    },
  },
});

export const { changeWeight } = priceSlice.actions;
export default priceSlice.reducer;
