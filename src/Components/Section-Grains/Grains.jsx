import React from "react";

import style from "./Grains.module.css";

import grainsCardImg from "../../../public/images/фото (3).svg";
import basket from '../../../public/images/Buy.svg'

export const Grains = () => {
  const grainCards = [
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
      price: "1000 руб",
      button: "Подробнее",
      logoBasket: basket,
    },
    {
      CardImg: grainsCardImg,
      title: "Корм для птиц RIO Линька",
      discription: "для волнистых",
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
          {grainCards.map((card) => (
            <div className={style.card}>
              <img src={card.CardImg} alt="" />
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
