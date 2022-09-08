import React from 'react'
import logo from '../../assets/blacklogo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__logo'>
        <img src={logo} alt="logo"  style={{width: 100}}/>
      </div>
      <div className='app__links'>
       <ul className='app__links__ul'>
   <Link className='link__home' to={'/'}><li className='app__link__noactive'>Home</li></Link>
       <li className='app__link__noactive'>About</li>
      <Link className='link__post' to={'/post'}><li className='app__link__active'>Posts</li></Link> 
       </ul>
      </div>
    </div>
  )
}

export default Navbar