import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/colby_logo.png'
import home from '../assets/home.svg'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <img className='logo' src={logo} alt="Colby logo"></img>
        <ul className='nav-links-container'>
          <li><Link to='/' className='nav-link' href='#'>Home</Link></li>
          <li><a className='nav-link' href='#'>Schedule</a></li>
          <li><a className='nav-link' href='#'>Registration</a></li>
          <li><a className='nav-link' href='#'>Share</a></li>
          <li><a className='nav-link' href='#'>Galleries</a></li>
          <li>
            <a href='#'><img className='home-icon-link' src={home} alt="Home icon"></img></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
