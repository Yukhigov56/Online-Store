import React from "react";
import style from "./CotalogInput.module.css";

import { useNavigate } from "react-router-dom";

export const CatalogInput = () => {
  const navigate = useNavigate();


  const handlChengeValue = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "feed") {
      navigate('/feed')
    }
    if (value === "mixes") {
      navigate('/mixes')
    }
    if (value === "app") {
      navigate('/')
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.containerCatalog}>
        <ul className={style.list}>
          <li>
            <select className={style.select} onChange={handlChengeValue}>
              <option value={"app"}>Каталог</option>
              <option value={"mixes"}>Готовые миксы</option>
              <option value={"feed"}>Кормушки</option>
              <option>Отдельные виды кормов</option>
              <option>Готовые комплекты</option>
              <option>Аксессуары и другое</option>
            </select>
          </li>
          <li>О проекте</li>
          <li>Птицы</li>
          <li>Пожертвования</li>
        </ul>
      </div>

      <div className={style.blockInput}>
        <input className={style.input} type="text" placeholder="Поиск" />
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};
