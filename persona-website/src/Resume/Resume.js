import React from 'react'
import './Resume.css'
import envelope from '../assets/envelope.svg'
import phone from '../assets/phone.svg'
import mapMarker from '../assets/mapMarker.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'


const Resume = () => {
    return (
      <section className="resumeSection">
        <header>
          <h1 className="resumeName">KELSIE BESINGER</h1>
          <h3 className="resumeTitle">FRONTEND ENGINEER</h3>
        </header>
        <div className="resumeArea">
          <div className="columnOne">
            <article className="contactInfo">
              <h3 className="subheadings">CONTACT</h3>
              <div className='contactStyling'>
                <ul className='contactIcons'>
                    <li>
                    <img className="resumeIcons" src={phone} />
                    </li>
                    <li>
                    <img className="resumeIcons" src={envelope} />
                    </li>
                    <li>
                    <img className="resumeIcons" src={mapMarker} />
                    </li>
                    <li>
                    <img className="resumeIcons" src={linkedin} />
                    </li>
                    <li>
                    <img className="resumeIcons" src={github} />
                    </li>
                </ul>
                <ul className='contactText'>
                    <li>+1 646-246-7341</li>
                    <li>kelsiebesinger@gmail.com</li>
                    <li>Denver, CO</li>
                    <li>Kelsie Besinger Yeh</li>
                    <li>Kelsie Besinger Yeh</li>
                </ul>
              </div>
            </article>

            <article>
              <h3 className="subheadings">SKILLS</h3>
            </article>
            <article>
              <h3 className="subheadings">CERTIFICATIONS</h3>
            </article>
            <article>
              <h3 className="subheadings">EDUCATION</h3>
            </article>
          </div>
          <div className="columnTwo">
            <article>
              <h3 className="subheadings">OVERVIEW</h3>
            </article>
            <article>
              <h3 className="subheadings">PORTFOLIO</h3>
            </article>
            <article>
              <h3 className="subheadings">PROFESSIONAL EXPERIENCE</h3>
            </article>
          </div>
        </div>
      </section>
    );
}

export default Resume