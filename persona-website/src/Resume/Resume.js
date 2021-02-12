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
              <div className="contactStyling">
                <ul className="contactIcons">
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
                <ul className="contactText">
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
              <h4>//TECHNICAL</h4>
              <p className="skillsText">
                JavaScript, HTML, CSS/SASS, React/Redux, Node.js/Express,
                Git/GitHub, Data Structures, REST
              </p>
              <h4>//TESTING & DEPLOYMENT</h4>
              <p className="skillsText">Mocha/Chai, Cypress, Postman, Heroku</p>
              <h4>//TOOLS</h4>
              <p className="skillsText">
                Jira/Confluence, Google, InVision, GitHub Project, Agile
                Methodologies
              </p>
            </article>

            <article>
              <h3 className="subheadings">CERTIFICATIONS</h3>
              <p style={{ fontWeight: "bold" }} className="educationText">
                Certified Scrum Master
              </p>
              <p className="educationText">Scrum Alliance</p>
              <p
                style={{ fontWeight: "bold", paddingTop: "5%" }}
                className="educationText"
              >
                Project Management Professional Certification
              </p>
              <p className="educationText">Project Management Institute</p>
            </article>
            <article>
              <h3 className="subheadings">EDUCATION</h3>
              <p style={{ fontWeight: "bold" }} className="educationText">
                Front-End Engineering Student
              </p>
              <p className="educationText">
                Turing School of Software & Design
              </p>
              <p className="educationText">April 2021</p>
              <p
                style={{ fontWeight: "bold", paddingTop: "5%" }}
                className="educationText"
              >
                Bachelor of Science, Business Adminstration
              </p>
              <p className="educationText">Old Dominion University</p>
            </article>
          </div>
          <div className="columnTwo">
            <article>
              <h3 className="subheadings">OVERVIEW</h3>
              <p style={{ fontSize: "0.85rem" }}>
                I am a process-oriented thinker with over 8 years of experience
                as an operations leader for some of the world’s largest tech
                conferences. I am a well-rounded engineer who offers a deep
                understanding about business from making processes better on
                teams to ensuring workflows are seamless. By applying my
                operational mindset along with my problem-solving skills, I
                design clean and unique user interfaces while architecting
                concise and maintainable code.
              </p>
            </article>
            <article>
              <h3 className="subheadings">PORTFOLIO</h3>
              <h4 className="projectTitle">Rancid Tomatillos</h4>
              <p style={{ margin: "0" }}>
                <strong>GitHub</strong>
              </p>
              <ul className="jobBulletPoints">
                <li>
                  Built a multi-page movie application that allows users to
                  search, select and view different movies using REST APIs
                </li>
                <li>
                  <strong>Stack:</strong> JavaScript, React, SASS, REST APIs,
                  Cypress, InVision
                </li>
              </ul>
              <h4 className="projectTitle">Travel Tracker</h4>
              <strong>GitHub</strong>
              <ul className="jobBulletPoints">
                <li>
                  Developed a travel tracking application that allows users to
                  manage, track and book different trips using REST APIs
                </li>
                <li>
                  <strong>Stack:</strong> JavaScript, HTML, SASS, REST APIs,
                  Webpack, Mocha/Chai, InVision
                </li>
              </ul>
            </article>

            <article>
              <h3 className="subheadings" style={{ paddingTop: "1%" }}>
                PROFESSIONAL EXPERIENCE
              </h3>
              <h4 className="jobTitle">Director of Event Operations</h4>
              <span className="jobHistory">
                <p className="companyNameCityName">KnowIt Events, Denver, CO</p>
                <p className="year">2019 - 2020</p>
              </span>
              <p>
                An early-stage startup focused on building a new event around
                intellectual property which led to a successful live-stream
                conference with over 1,000 attendees.
              </p>
              <h4 className="jobTitle">Project Manager</h4>
              <span className="jobHistory">
                <p className="companyNameCityName">HomeAdvisor, Denver, CO</p>
                <p className="year">2019 - 2019</p>
              </span>
              <p>
                Managed the day-to-day aspects of various projects for sales
                operations, including scope definition, resource allocation,
                dependencies, and business outcomes. Collaborated with
                cross-functional stakeholders in product, business intelligence
                and finance to roll out new features for the internal CRM tool.
              </p>
              <h4 className="jobTitle">Director of Operations</h4>
              <span className="jobHistory">
                <p className="companyNameCityName">Shoptalk, New York, NY</p>
                <p className="year">2016 - 2019</p>
              </span>
              <p>
                Oversaw and executed four industry events in the U.S. and
                overseas including a successful European event launch. Grew
                conference from 2,000 attendees to over 8,500 attendees in less
                than 3 years to becoming the world’s largest retail and
                e-commerce conference.{" "}
              </p>
              <ul className="jobBulletPoints">
                <li>
                  Oversaw launch of platforms including event registration
                  software and mobile application which achieved an 80% attendee
                  adoption rate.
                </li>
              </ul>
              <h4 className="jobTitle">Director of Operations</h4>
              <span className="jobHistory">
                <p className="companyNameCityName">Money20/20, New York, NY</p>
                <p className="year">2014 - 2016</p>
              </span>
              <p>
                As first employee of startup company acquired for over $100
                million, oversaw all aspects of operations throughout growth to
                exponential increase in event attendance from 2,000 attendees to
                over 10,000 attendees at world’s largest FinTech conference.
              </p>
              <ul className="jobBulletPoints">
                <li>
                  Organized the largest FinTech Hackathon in the world with over
                  500 developers, which was voted top 5 Hackathons in the world
                  by Tech Crunch
                </li>
                <li>
                  Implemented several API integrations with third-party payment
                  gateways which resulted in over $10 million in revenue
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    );
}

export default Resume