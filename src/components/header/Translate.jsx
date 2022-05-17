import React from 'react'
import './header.css'

import { useTranslation } from 'react-i18next';

const Translate = () => {
  const { t, i18n } = useTranslation();

  const handleTranslate = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="container__translate">
        <button className="btn container__translate-btn" onClick={() => handleTranslate('en')}>
            EN
        </button>
        <button className="btn container__translate-btn" onClick={() => handleTranslate('pt')}>
            PT
        </button>
    </div>
  )
}

export default Translate