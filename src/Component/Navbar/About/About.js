import './About.css'

import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src='image/about.png' alt='' className='about-img'/>
        <img src='image/play-icon.png' alt='' className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Anna University, located in Chennai, Tamil Nadu, is one of India's premier technical universities. Established in 1978, 
            it is known for offering a range of undergraduate, postgraduate, and doctoral programs in engineering, technology, 
            applied sciences, and management. </p>
        <p>The university operates under both campus and affiliated college systems, with hundreds of engineering colleges across 
            Tamil Nadu under its affiliation. Its main campus, known for its green environment, houses world-class research centers and 
            laboratories</p>
        <p> Anna University has a strong emphasis on research and innovation, making it a hub for aspiring engineers and scientists. 
            It also holds national and international rankings.</p>
      </div>
    </div>
  )
}

export default About
