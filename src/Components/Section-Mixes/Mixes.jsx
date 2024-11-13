import React from "react";
import style from "./Mixes.module.css";

import { New } from "./New";

import basket from "../../../public/images/Buy.svg";
import mixesCardImg from "../../../public/images/фото (1).svg";

export const Mixes = () => {
  const mixes = [
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
      newCard: <New />,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
      newCard: <New />,
    },
    {
      CardImg: mixesCardImg,
      title: "PADOVAN OVAMIX GOLD ROSSO",
      discription: "Корм для птиц",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
    },
  ];

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
                <span>200г</span> <span>400г</span> <span>8000г</span>{" "}
                <span>1кг</span>
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
