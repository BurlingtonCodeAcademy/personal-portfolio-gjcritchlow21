import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className='header-container'>
      <div id="name">
        <h1>G.J. Critchlow | Full Stack Web Developer</h1>
      </div>
      <div id="page-nav"> 
        <Link id="head-links" to={'/'}>Home</Link>
        <p> | </p>
        <Link id="head-links" to={'/portfolio'}>Portfolio/Links</Link>
        <p> | </p>
        <Link id="head-links" to={'/about'}>About Me</Link>
        
      </div>
    </div>
  )
}

export default Header;