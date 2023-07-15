import React from 'react'
import Logo from '../assets/png/Logo.png';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <a href='/'><img src={Logo} alt="Logo"/></a>
        </div>
        <div className='rightSide'>
          <ul>
            <li><a href='/Home'>Home</a></li>
            <li><a href='/News'>News</a></li>
            <li><a href='/Our Bees'>Our Bees</a></li>
            <li><a href='/Products'>Products</a></li>
            <li><a href='/About'>About</a></li>
          </ul>          
        </div>
        <a href='/About'>Contact Us</a>
    </div>
  )
}

export default Navbar