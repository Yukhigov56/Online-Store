import React from "react";
import style from "./Grains.module.css";

import { useDispatch, useSelector } from "react-redux";
import { chengeNewGrain, chengeNewTest } from "../../Redux/grainsSlice";

export const Grains = () => {
  const grains = useSelector((state) => state.grains.grains);
  const dispatch = useDispatch();

  const handleWeigthChenge = (weight, index) => {
    dispatch(chengeNewGrain({ weight, index }));
    dispatch(chengeNewTest({ weight, index }));
  };

  return (
    <div>
      <h3 className={style.titleMixes}>Зёрна</h3>

      <div className={style.mainContainer}>
        <div className={style.containerCard}>
          {grains.map((card, index) => (
            <div className={style.card}>
              <img src={card.CardImg} alt="" />
              <h1 className={style.cardTitle}>{card.title}</h1>
              <p className={style.cardParagraph}>{card.discription}</p>
              <p className={style.price}>{card.price}</p>
              <p className={style.paragraphSpan}>
                <span onClick={() => handleWeigthChenge("200г", index)}>
                  200г
                </span>
                <span onClick={() => handleWeigthChenge("400г", index)}>
                  400г
                </span>
                <span onClick={() => handleWeigthChenge("800г", index)}>
                  800г
                </span>
                <span onClick={() => handleWeigthChenge("1кг", index)}>
                  1кг
                </span>
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
