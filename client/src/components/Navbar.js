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
          <li><Link to='/schedule' className='nav-link' href='#'>Schedule</Link></li>
          <li><Link to='/registration' className='nav-link' href='#'>Registration</Link></li>
          <li><Link to='/share' className='nav-link' href='#'>Share</Link></li>
          <li><Link to='/galleries' className='nav-link' href='#'>Galleries</Link></li>
          <li>
            <Link to='/'><img className='home-icon-link' src={home} alt="Home icon"></img></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
