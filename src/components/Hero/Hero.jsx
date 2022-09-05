import React from 'react'
import './Hero.css'
import gift from '../../assets/Nerd.gif'

const Hero = () => {
  return (
    <div className='hero__main'>
    <div className='hero__text'>
     <h1>The  <span className='hero__span__1'>Best</span> Place For Programmers To <span className='hero__span__1'>Learn.</span></h1>
     <p className='hero__small__text'>Road Maps, Books, Tutorials and Much More.</p>
    </div>
    <div className='hero__img'>
        <img className='hero__img__img' src={gift} alt="" />
    </div>
    </div>
  )
}

export default Hero
