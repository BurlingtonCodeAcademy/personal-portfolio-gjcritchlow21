import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return(
    <div>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>Aboot</button>
      </Link>
      <Link to={'/portfolio'}>
        <button>Portfolio</button>
      </Link>
      <a href='https://fantasyfootballdraftboard.net/'>
        <button>External</button>
      </a>
    </div>
  )
}

export default Header;