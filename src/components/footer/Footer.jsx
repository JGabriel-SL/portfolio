import React from 'react'
import './footer.css'

import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>JGABRIEL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://instagram.com/jgabriel44_"><FiInstagram /></a>
      </div>
      
      <div className='footer__copyright'>
        <small>&copy; JGabriel. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer