import React from 'react'
import './NavBar.css'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="iconsContainerLeft">
          <a href="mailto:kelsiebesinger@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/kelsiebesingeryeh">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <div className="navContainerRight">
          <ul className="navItems">
            <li className="navLinks">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navLinks">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="navLinks">
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li className="navLinks">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar