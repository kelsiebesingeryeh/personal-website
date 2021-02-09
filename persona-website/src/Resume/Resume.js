import React from 'react'
import './Resume.css'

const Resume = () => {
    return (
      <section className="resumeSection">
        <header>
          <h1 className="resumeName">KELSIE BESINGER</h1>
          <h3 className="resumeTitle">FRONTEND ENGINEER</h3>
        </header>
        <div className="resumeArea">
          <div className="columnOne">
            <article>
              <h3 className="subheadings">CONTACT</h3>
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