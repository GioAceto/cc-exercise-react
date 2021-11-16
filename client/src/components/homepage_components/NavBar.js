import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/colby_logo.png';
import home from '../../assets/svg/home.svg';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={navBar ? 'nav-container active' : 'nav-container'}>
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
