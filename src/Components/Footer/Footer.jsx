import style from "./Footer.module.css";

import iPhone from "../../images/iPhone 12 Pro.svg";
import { FooterNiz } from "./Footer-Niz/FooterNiz";

export const Footer = () => {
  return (
    <div>
      <div className={style.mainFooter}>
        <div className={style.containerFooter}>
          <div className={style.leftBlock}>
            <h1 className={style.titleFooter}>Пожертвуйте на благо проекта</h1>

            <div className={style.blockInput}>
              <div>
                <label>
                  <input className={style.inputCheckbox} type="checkbox" />
                  <span className={style.spanFooter}>Единоразовая выплата</span>
                </label>
              </div>
              <div>
                <label>
                  <input className={style.inputCheckbox} type="checkbox" />
                  <span className={style.spanFooter}>Ежемесячные выплаты</span>
                </label>
              </div>
            </div>
            <div className={style.blockInputBtn}>
              <input
                className={style.inputFooter}
                placeholder="Введите сумму"
              />
              <button className={style.btnFooter}>Пожертвовать</button>
            </div>
          </div>

          <div className={style.rigthBlock}>
            <img className={style.iPhoneFoot} src={iPhone} alt="" />
          </div>
        </div>
      </div>
      <FooterNiz />
    </div>
  );
};
