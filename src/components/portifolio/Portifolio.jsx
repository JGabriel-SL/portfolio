import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.png';


const data = [
  {
    id: 1,
    image: IMG1,
    title: '',
    github: '',
    demo: ''
  }
]

const Portifolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Subnautica Website</h3>
          <span>Website based in one of my favorite game called 'Subnautica'</span>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com/JGabriel-SL" class="btn"target='_blank'>Github</a> */}
            {/* <a href="https://github.com" class="btn btn-primary">Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>LittleVerse</h3>
          <span>For show about the constellations and signs, I made a website layout.</span>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" class="btn"target='_blank'>Github</a> */}
            {/* <a href="https://github.com" class="btn btn-primary">Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>ReservaTech</h3>
          <span>A web layout for an app that can reserve technological equipment</span>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" class="btn"target='_blank'>Github</a> */}
            {/* <a href="https://github.com" class="btn btn-primary">Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>TODO</h3>
          <span>A simple TODO layout app with a light theme and dark mode theme</span>
          <div className='portfolio__item-cta'>
            {/* <a href="https://github.com" class="btn"target='_blank'>Github</a> */}
            {/* <a href="https://github.com" class="btn btn-primary">Github</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifolio