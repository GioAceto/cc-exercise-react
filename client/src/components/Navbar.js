import React from 'react'
import logo from '../assets/colby_logo.png'
import home from '../assets/home.svg'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <img className='logo' src={logo} alt="Colby logo"></img>
        <ul className='nav-links-container'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Schedule</a></li>
          <li><a href='#'>Registration</a></li>
          <li><a href='#'>Share</a></li>
          <li><a href='#'>Galleries</a></li>
          <li>
            <a href='#'><img className='home-icon-link' src={home} alt="Home icon"></img></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
