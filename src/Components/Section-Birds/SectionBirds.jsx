import React from "react";

import style from "./SectionBirds.module.css";
import CardBirds from '../../../public/images/фото (2).svg'

export const SectionBirds = () => {
  const cardBirds = [
    {
        img: CardBirds,
        title: 'Домовый воробей',
        discription: 68,
        button: 'Подробнее'
    },
    {
        img: CardBirds,
        title: 'Домовый воробей',
        discription: 68,
        button: 'Подробнее'
    },
    {
        img: CardBirds,
        title: 'Домовый воробей',
        discription: 68,
        button: 'Подробнее'
    },
    {
        img: CardBirds,
        title: 'Домовый воробей',
        discription: 68,
        button: 'Подробнее'
    },
  ];

  return (
    <div>
      <h1 className={style.titleBirds}>Виды птиц</h1>
      <div className={style.mainContainer}>
        <div className={style.containerCard}>
          {cardBirds.map((card) => (
            <div className={style.card}>
              <img src={card.img} alt="" />
              <h1 className={style.titleCard}>{card.title}</h1>
              <p className={style.paragraphNum}>{card.discription}</p>
              <button className={style.btnCard}>{card.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
