import React, { useRef } from 'react';
import './HamburgerMenu.scss';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { HamburgerHook } from './HamburgerHook';
import Pdf from '../documents/Kelsie Besinger Resume.pdf';

const HamburgerMenu = () => {
  const hamburgerMenuRef = useRef(null);
  const [isActive, setIsActive] = HamburgerHook(hamburgerMenuRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="hamburgerContainer">
      <FontAwesomeIcon
        icon={faBars}
        onClick={onClick}
        className="hamburgerTrigger"
      />
      <nav
        ref={hamburgerMenuRef}
        className={`hamburger ${isActive ? 'active' : 'inactive'}`}
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
            <Link to={Pdf} target="_blank" rel="noreferrer">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClick}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="mailto:kelsiebesinger@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} onClick={onClick} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kelsiebesingeryeh"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} onClick={onClick} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} onClick={onClick} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
