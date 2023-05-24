import React from 'react'
import './header-home-page.style.scss'
import Button from '../button/button.component'
import headerImage from '../../images-application/header-image.jpg'

const HeaderHomePage = () => {
  return (
    <div className="header-home-page-wrapper">
      <div className="left-side">
        <h1>ПОЛИВНИ СИСТЕМИ </h1>
        <h1>ВТОРА УПОТРЕБА</h1>
        <h1>ОТ НИДЕРЛАНДИЯ</h1>
        <Button id='header-button' buttonType={''}>Контакт</Button>
      </div>
      <div className="right-side">
        <img src={headerImage} alt="поливна макара" />
      </div>
    </div>
  )
}
export default HeaderHomePage