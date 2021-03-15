import React from 'react'
import './NavBar.scss'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Pdf from "../documents/Kelsie Besinger Resume.pdf"

const NavBar = () => {
    return (
      <nav className="navbar">
        <HamburgerMenu />
        <div className="navContainerLeft">
          <ul className="navItems">
            <li className="navLinks">
              <a href="mailto:kelsiebesinger@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className="navLinks">
              <a href="https://github.com/kelsiebesingeryeh" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="navLinks">
              <a
                href={
                  "https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/"
                }
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
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
              <Link to={Pdf} target='_blank'>Resume
              </Link>
            </li>
            <li className="navLinks">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar
