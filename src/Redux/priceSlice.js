import { createSlice } from "@reduxjs/toolkit";
import mixesCardImg from "../images/фото (1).svg";
import basket from "../images/Buy.svg";

const initialState = {
  mixes: [
    {
      CardImg: mixesCardImg,
      title: "PADOVAN",
      discription: "Корм для птиц",
      price: "0",
      isNew: false,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: " ROSSO",
      discription: "Корм для птиц",
      price: "0",
      isNew: true,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "0",
      isNew: true,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "0",
      isNew: false,
      button: "Подробнее",
      logoBasket: basket,
    },
  ],
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    chengeNewMixes: (state, action) => {
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

export const { changeWeight, chengeNewMixes } = priceSlice.actions;
export default priceSlice.reducer;
