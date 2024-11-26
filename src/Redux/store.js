import { combineReducers, configureStore } from "@reduxjs/toolkit";
import maixesReducer from "./PriceSlice";
import grainsReduser from "./grainsSlice";
import searchReducer from "./searchSlice";

const rootReduser = combineReducers({
  mixes: maixesReducer,
  grains: grainsReduser,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReduser,
});

export default store;
