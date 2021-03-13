import React, { useRef } from 'react'
import './HamburgerMenu.scss'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link} from 'react-router-dom'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { HamburgerHook } from './HamburgerHook'

    const HamburgerMenu = () => {
        const hamburgerMenuRef = useRef(null)
        const [isActive, setIsActive] = HamburgerHook(hamburgerMenuRef, false)
        const onClick = () => setIsActive(!isActive)

        
        return (
          <div className="hamburgerContainer">
            <FontAwesomeIcon
              icon={faBars}
              onClick={onClick}
              className="hamburgerTrigger"
            />
            <nav
              ref={hamburgerMenuRef}
              className={`hamburger ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <Link to="/" onClick={onClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={onClick}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/resume" onClick={onClick}>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={onClick}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="mailto:kelsiebesinger@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} onClick={onClick} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kelsiebesingeryeh"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} onClick={onClick} />
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/"
                    }
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} onClick={onClick} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        );
    }


      
export default HamburgerMenu