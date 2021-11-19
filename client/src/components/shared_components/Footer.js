import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/colby_logo.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <img className='footer-logo' src={logo} alt="Colby logo"></img>
        <ul className='footer-links-container'>
          <li><Link to='/' className='footer-link' href='#'>Home</Link></li>
          <li><Link to='/schedule' className='footer-link' href='#'>Schedule</Link></li>
          <li><Link to='/registration' className='footer-link' href='#'>Registration</Link></li>
          <li><Link to='/share' className='footer-link' href='#'>Share</Link></li>
          <li><Link to='/galleries' className='footer-link' href='#'>Galleries</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer