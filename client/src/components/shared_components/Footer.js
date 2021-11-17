import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/colby_logo.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <img className='logo' src={logo} alt="Colby logo"></img>
        <ul className='nav-links-container'>
          <li><Link to='/' className='nav-link' href='#'>Home</Link></li>
          <li><Link to='/schedule' className='nav-link' href='#'>Schedule</Link></li>
          <li><Link to='/registration' className='nav-link' href='#'>Registration</Link></li>
          <li><Link to='/share' className='nav-link' href='#'>Share</Link></li>
          <li><Link to='/galleries' className='nav-link' href='#'>Galleries</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer