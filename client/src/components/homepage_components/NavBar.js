import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/colby_logo.png';
import home from '../../assets/svg/home.svg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavBar(!sidebar)
    } else {
      setNavBar(sidebar)
    }
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={navBar ? 'navbar active' : 'navbar'}>
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
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='close'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='nav-text'><Link to='/' className='nav-link' href='#'>Home</Link></li>
            <li className='nav-text'><Link to='/schedule' className='nav-link' href='#'>Schedule</Link></li>
            <li className='nav-text'><Link to='/registration' className='nav-link' href='#'>Registration</Link></li>
            <li className='nav-text'><Link to='/share' className='nav-link' href='#'>Share</Link></li>
            <li className='nav-text'><Link to='/galleries' className='nav-link' href='#'>Galleries</Link></li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar