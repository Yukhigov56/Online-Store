import React from "react";

import style from "./Feed.module.css";
import feedImg from "../../../public/images/фото (4).svg";

export const Feed = () => {
  const FeedCards = [
    {
      CardImg: feedImg,
      title: 'Комплект-агро "Избушка на курьих ножках"',
      discription: "кормушка малая",
      price: "1000 руб",
      button: "Подробнее",
    },
    {
      CardImg: feedImg,
      title: 'Комплект-агро "Избушка на курьих ножках"',
      discription: "кормушка малая",
      price: "1000 руб",
      button: "Подробнее",
    },
    {
      CardImg: feedImg,
      title: 'Комплект-агро "Избушка на курьих ножках"',
      discription: "кормушка малая",
      price: "1000 руб",
      button: "Подробнее",
    },
    {
      CardImg: feedImg,
      title: 'Комплект-агро "Избушка на курьих ножках"',
      discription: "кормушка малая",
      price: "1000 руб",
      button: "Подробнее",
    },
  ];

  return (
    <div>
      <h3 className={style.titleMixes}>Кормушки</h3>
      <div className={style.mainContainer}>
        <div className={style.containerCard}>
          {FeedCards.map((card) => (
            <div className={style.card}>
              <img src={card.CardImg} alt="" />
              {card.newCard}
              <h1 className={style.cardTitle}>{card.title}</h1>
              <p className={style.cardParagraph}>{card.discription}</p>
              <p className={style.price}>{card.price}</p>
              <div className={style.blockBtn}>
                <button className={style.btnCard}>{card.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
