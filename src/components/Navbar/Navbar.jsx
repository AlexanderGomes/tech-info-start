import React from 'react'
import logo from '../../assets/blacklogo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__logo'>
        <img src={logo} alt="logo"  style={{width: 100}}/>
      </div>
      <div className='app__links'>
       <ul className='app__links__ul'>
       <li className='app__link__noactive'>Home</li>
       <li className='app__link__noactive'>About</li>
       <li className='app__link__active'>Posts</li>
       </ul>
      </div>
    </div>
  )
}

export default Navbar