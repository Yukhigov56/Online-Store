import React from "react";

import { useDispatch, useSelector } from "react-redux";

import style from "./Grains.module.css";
import { changeWeight } from "../../Redux/PriceSlice";

import grainsCardImg from "../../../public/images/фото (3).svg";
import basket from "../../../public/images/Buy.svg";

export const Grains = () => {
  const { price, selectedWeight } = useSelector((state) => state.price);
  const dispatch = useDispatch();

  const grainCards = [
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
  ];

  const handleWeigthChenge = (gramma) => {
    dispatch(changeWeight(gramma))
  }

  return (
    <div>
      <h3 className={style.titleMixes}>Зёрна</h3>

      <div className={style.mainContainer}>
        <div className={style.containerCard}>
          {grainCards.map((card) => (
            <div className={style.card}>
              <img src={card.CardImg} alt="" />
              <h1 className={style.cardTitle}>{card.title}</h1>
              <p className={style.cardParagraph}>{card.discription}</p>
              <p className={style.price}>{card.price}</p>
              <p className={style.paragraphSpan}>
                <span onClick={() => dispatch(handleWeigthChenge('200г'))}>200г</span>
                 <span onClick={() => dispatch(handleWeigthChenge('400г'))}>400г</span>
                  <span onClick={() => dispatch(handleWeigthChenge('800г'))}>800г</span>
                <span onClick={() => dispatch(handleWeigthChenge('1кг'))}>1кг</span>
              </p>
              <div className={style.blockBtn}>
                <button className={style.btnCard}>{card.button}</button>
                <button className={style.btnBasket}>
                  <img src={card.logoBasket} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
