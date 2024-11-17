import React from 'react'
import { Header } from '../Header/Header'
import { FooterNiz } from '../Footer/Footer-Niz/FooterNiz'
import { Feed } from '../Section-Feed/Feed'

export const SelectedFeed = () => {

  return (
    <div>
    <Header />
    <div style={{
      marginBottom: '25px'
    }}>
    <Feed />
    </div>

    <FooterNiz />
    </div>
  )
}
