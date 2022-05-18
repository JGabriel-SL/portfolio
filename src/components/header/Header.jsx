import React from 'react'
import './header.css'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Translate from './Translate'
import ME from '../../assets/me2.png'

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header>
       <div className="container header__container">
            <h5>{t('header.hello')}</h5>
            <h1>João Gabriel</h1>
            <h5 className="text-light">{t('header.career')}</h5>
            <CTA />
            <HeaderSocials />
            <Translate />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll__down'>{t('header.scroll')}</a>
        </div> 
    </header>
  )
}

export default Header