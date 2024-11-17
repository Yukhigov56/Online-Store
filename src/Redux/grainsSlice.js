import { createSlice } from "@reduxjs/toolkit";

import grainsCardImg from "../images/фото (3).svg";
import basket from "../images/Buy.svg";

const initialState = {
  grains: [
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "0",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "0",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "0",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "0",
      button: "Подробнее",
      logoBasket: basket,
    },
  ],
};

const grainsSlice = createSlice({
  name: "grains",
  initialState,
  reducers: {
    chengeNewGrain: (state, action) => {
      state.grains = state.grains.map((item, index) => {
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
    chengeNewTest: (state, action) => {
      state.grains = state.grains.map((item, index) => {
        let discription;
        if (action.payload.weight === "200г") {
          discription = "200г";
        } else if (action.payload.weight === "400г") {
          discription = "400г";
        } else if (action.payload.weight === "800г") {
          discription = "800г";
        } else if (action.payload.weight === "1кг") {
          discription = "1 кг";
        }
        if (action.payload.index === index) {
          return {
            ...item,
            discription,
          };
        }
        return item;
      });
    },
  },
});

export const { chengeNewGrain, chengeNewTest } = grainsSlice.actions;
export default grainsSlice.reducer;
