import React from 'react'
import style from './Header.module.css'
import { CatalogInput } from './Catalog-Input/CatalogInput'

export const Header = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingTop: '33px',
      paddingBottom: '30px'
    }}>
      <div style={{
        width: '1350px'
      }}>
      <div className={style.containerHead}>
        <div><img src="../../images/лого.png" alt="" /></div>
        <div className={style.rightCol}>
        <div><p> <i class="fas fa-phone"></i>   8920 999 43 50</p></div>
        <div className={style.blockBasket}><img src="../../images/Buy.svg" alt="" /></div>
        </div>
      </div>
        <CatalogInput />
      </div>
    </div>
  )
}
