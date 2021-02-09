import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <nav className="navContent">
        <ul className="navItems">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar