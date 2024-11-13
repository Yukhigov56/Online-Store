import React from 'react'

import style from './FooterNiz.module.css'

export const FooterNiz = () => {
  return (
    <div className={style.nizFooter}>
      <div className={style.containerFooter}>
        <ul className={style.list}>
          <li>Оплата</li>
          <li>Доставка</li>
        </ul>

        <div className={style.blockLogo}>
          <div><i class="fab fa-vk" style={{fontSize:'24px', color: 'white'}}></i></div>
          <div><i class="fab fa-instagram" style={{fontSize: '24px', color: 'white'}}></i></div>
        </div>

        <div className={style.phoneNumber}><p> <i class="fas fa-phone" style={{color: 'white'}}></i> 8920 999 43 50</p></div>
      </div>
    </div>
  )
}
