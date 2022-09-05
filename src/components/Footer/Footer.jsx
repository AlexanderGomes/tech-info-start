import React from 'react'
import logo from '../../assets/blacklogo.png'

import './Footer.css'


const Footer = () => {
  return (
    <div className='footer__main'>
    <div className='footer__content'>
     <div className='footer__img'>
      <img style={{width: 70}} src={logo} alt="logo" />
     </div>
     <div className='footer__text'>
     <p>Free Resources For All Web Developers.</p>
     <p>All Rights Reserved to Tech Info Star</p>
    </div>
     </div>
    </div>
  )
}

export default Footer