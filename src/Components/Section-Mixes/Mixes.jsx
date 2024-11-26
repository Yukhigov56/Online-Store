import React from "react";
import style from "./Mixes.module.css";

import { useDispatch, useSelector } from "react-redux";
import { chengeNewMixes } from "../../Redux/PriceSlice";

import { New } from "./New";

export const Mixes = () => {
  const mixes = useSelector((state) => state.mixes.mixes);
  const searchTerm = useSelector((state) => state.search.setSearch)
  const dispatch = useDispatch();

  const handleWeigthChenge = (test, index) => {
    dispatch(chengeNewMixes({ weight:test, index }));
  };


  const filteredMixes = mixes.filter((card) =>
  card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  card.discription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3 className={style.titleMixes}>Готовые миксы</h3>

      <div className={style.mainContainer}>
        <div className={style.containerCard}>
      
          {filteredMixes.map((card, index) => (
            <div className={style.card} key={index}>
              <img src={card.CardImg} alt="" />
              {card.isNew && <New />}
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
