import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div id='sidebar-container'>
      <div id="name">
        <h1>G.J. Critchlow - Full Stack Web Developer</h1>
      </div>
      <div id="sidebar-nav"> 
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About me</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
      </div>
    </div>
  )
}

export default Header;