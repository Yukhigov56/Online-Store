import { createSlice } from "@reduxjs/toolkit";

import mixesCardImg from "../../public/images/фото (1).svg";
import basket from "../../public/images/Buy.svg";

const initialState = {
  mixes: [
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "6551",
      isNew: true,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "651",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "1000",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "515",
      button: "Подробнее",
      logoBasket: basket,
    },
  ],
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
        state.price = "4000 руб";
      } else if (action.payload === "1кг") {
        state.price = "5000 руб";
      }
    },
    chengeNew: (state, action) => {
      state.mixes = state.mixes.map((item, index) => {
        let price;
        if (action.payload.weight === "200г") {
          price = "1000 руб";
        } else if (action.payload.weight === "400г") {
          price = "2000 руб";
        } else if (action.payload.weight === "800г") {
          price = "4000 руб";
        } else if (action.payload.weight === "1кг") {
          price = "5000 руб";
        }
        if (action.payload.index === index) {
          return {
            ...item,
            price,
          };
        }
        return item;
      });
    },
  },
});

export const { changeWeight, chengeNew } = priceSlice.actions;
export default priceSlice.reducer;
