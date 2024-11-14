import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./PriceSlice";

const store = configureStore({
  reducer: {
    price: priceReducer,
  },
});

export default store;
