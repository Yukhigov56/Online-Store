import React from 'react'

import { Header } from '../Header/Header'
import { FooterNiz } from '../Footer/Footer-Niz/FooterNiz'
import { Mixes } from '../Section-Mixes/Mixes'
export const SelectedMixes = () => {
  return (
    <div >
        <Header />
        <Mixes/>
        <FooterNiz />
    </div>
  )
}
