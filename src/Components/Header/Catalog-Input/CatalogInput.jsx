import React from "react";
import style from "./CotalogInput.module.css";

export const CatalogInput = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.containerCatalog}>
        <ul className={style.list}>
          <li>
            <select className={style.select}>
              <option selected>Каталог</option>
              <option>Готовые миксы</option>
              <option>Отдельные виды кормов</option>
              <option>Кормушки</option>
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
        <input
        className={style.input}
        type="text"
        placeholder="Поиск"
        />
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};
