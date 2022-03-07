import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <Link to="/">HomePage</Link>
        <Link to="/projects">Projects</Link>

    </nav>
  )
}

export default NavBar