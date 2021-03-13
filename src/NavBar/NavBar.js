import React from 'react'
import './NavBar.scss'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'


const NavBar = () => {
    return (
      <nav className="navbar">
        <HamburgerMenu />
         <div className="iconsContainerLeft">
           <a href="mailto:kelsiebesinger@gmail.com" target="_blank">
             <FontAwesomeIcon icon={faEnvelope} />
         </a>
           <a href="https://github.com/kelsiebesingeryeh" target="_blank">
             <FontAwesomeIcon icon={faGithub} />
           </a>
           <a
            href={"https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/"}
            target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <div className="navContainerRight">
          <ul className="navItems">
            <li className="navLinks">
              <Link to="/">Home</Link>
            </li>
            <li className="navLinks">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="navLinks">
              <Link to="/resume">Resume</Link>
            </li>
            <li className="navLinks">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar