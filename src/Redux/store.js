import { combineReducers, configureStore } from "@reduxjs/toolkit";
import maixesReducer from "./PriceSlice";
import grainsReduser from "./grainsSlice";

const rootReduser = combineReducers({
  mixes: maixesReducer,
  grains: grainsReduser,
});

const store = configureStore({
  reducer: rootReduser,
});

export default store;
