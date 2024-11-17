import React from "react";
import style from "./Catalog.module.css";

import imgCardOne from "../../images/фото.svg";
import CatalogImgTwo from '../../images/Rectangle 369.svg'
import CatalogImgThree from '../../images/Rectangle 369 (1).svg'
 
export const SectionCatalog = () => {
  const catalog = [
    {
      img: imgCardOne,
      title: "Каталог",
      button: 'Подробнее'
    },
    {
      img: CatalogImgTwo,
      title: "Готовые миксы",
      button: 'Подробнее'
    },
    {
      img: CatalogImgThree,
      title: "Отдельные виды кормов",
      button: 'Подробнее'
    },
  ];

  return (
    <div>
      <h3 className={style.titleCatalog}>Каталог</h3>
    <div className={style.mainContainer}>
      <div className={style.containerCard}>
        {catalog.map((card) => (
          <div className={style.card}>
            <img src={card.img} alt="" />
            <h1 className={style.titleCard}>{card.title}</h1>
            <button className={style.btnCard}>{card.button}</button>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};
