import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
      <nav className="navContent">
        <ul className="navItems">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar