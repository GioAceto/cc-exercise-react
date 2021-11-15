import React from 'react'
import logo from '../assets/colby_logo.png'

const NavBar = () => {
  return (
    <div>
      <img src={logo} alt="Colby logo"></img>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Schedule</a></li>
        <li><a href='#'>Registration</a></li>
        <li><a href='#'>Share</a></li>
        <li><a href='#'>Galleries</a></li>
      </ul>
    </div>
  )
}

export default NavBar
