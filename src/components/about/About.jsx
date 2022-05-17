import React from 'react';
import './about.css'

import ME from '../../assets/me-about.jpg'

import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    
    const time = '1+/-'
    return (
         <section id='about'>
             <h5>{t('about_me.title')}</h5>
             <h2>{t('about_me.subtitle')}</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon '/>
                            <h5>{t('about_me.experience')}</h5>
                            <small>{t('about_me.exp_time', {time})}</small>
                        </article>
                        {/* <article className='about__card'>
                            <FiUsers className='about__icon '/>
                            <h5>Clients</h5>
                            <small>200+ Worlwide</small>
                        </article> */}
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon '/>
                            <h5>{t('about_me.projects')}</h5>
                            <small>{t('about_me.projects_qtd')}</small>
                        </article>
                    </div>
                    <p>
                    {t('about_me.text')}
                    </p>
                   <a href="#contact" className='btn btn-primary'>{t('buttons.lets_talk')}</a> 
                </div>
            </div>

         </section>
     )
}

export default About