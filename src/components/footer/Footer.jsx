import React from 'react'
import './footer.css'

import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>{t('footer.title')}</a>

      <ul className='permalinks'>
        <li><a href="#">{t('footer.nav.home')}</a></li>
        <li><a href="#about">{t('footer.nav.about')}</a></li>
        <li><a href="#experience">{t('footer.nav.experience')}</a></li>
        <li><a href="#portfolio">{t('footer.nav.portfolio')}</a></li>
        <li><a href="#contact">{t('footer.nav.contact')}</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://instagram.com/jgabriel44_" target='_blank'><FiInstagram /></a>
        <a href="https://linkedin.com/in/jgabrielsl/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/JGabriel-Sl" target='_blank'><FaGithub /></a>
      </div>
      
      <div className='footer__copyright'>
        <small>&copy; JGabriel. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer