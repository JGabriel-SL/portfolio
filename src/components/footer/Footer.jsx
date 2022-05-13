import React from 'react'
import './footer.css'

import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

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