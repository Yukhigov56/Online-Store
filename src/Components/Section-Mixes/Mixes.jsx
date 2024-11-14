import React from "react";
import style from "./Mixes.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeWeight } from "../../Redux/PriceSlice";

import { New } from "./New";
import basket from "../../../public/images/Buy.svg";
import mixesCardImg from "../../../public/images/фото (1).svg";


export const Mixes = () => {
  const { price, selectedWeight } = useSelector((state) => state.price);
  const dispatch = useDispatch();

  const mixes = [
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
      newCard: <New />,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
      newCard: <New />,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: price,
      button: "Подробнее",
      logoBasket: basket,
    },
  ];

  const handleWeigthChenge = (weight) => {
    dispatch(changeWeight(weight));
  };

  return (
    <div>
      <h3 className={style.titleMixes}>Готовые миксы</h3>

      <div className={style.mainContainer}>
        <div className={style.containerCard}>
          {mixes.map((card) => (
            <div className={style.card}>
              <img src={card.CardImg} alt="" />
              {card.newCard}
              <h1 className={style.cardTitle}>{card.title}</h1>
              <p className={style.cardParagraph}>{card.discription}</p>
              <p className={style.price}>{card.price}</p>
              <p className={style.paragraphSpan}>
                <span onClick={() => handleWeigthChenge("200г")}>200г</span>
                <span onClick={() => handleWeigthChenge("400г")}>400г</span>
                <span onClick={() => handleWeigthChenge("800г")}>800г</span>
                <span onClick={() => handleWeigthChenge("1кг")}>1кг</span>
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
