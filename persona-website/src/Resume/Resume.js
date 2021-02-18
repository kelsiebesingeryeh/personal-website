import React from 'react'
import './Resume.css'
import { contactData } from '../data/resumeData'
import { skillsData } from '../data/resumeData'

const Resume = () => {
  const contactItems = contactData.map(item => {
    return <li key={item.id}><img src={item.image} className='resumeIcons'/></li>
  })

  const techItems = skillsData.map((item) =>item.technical).join('').replace(/,/g, ", ")
  const testingItems = skillsData.map((item) => item.testing).join("").replace(/,/g, ", ")
  const toolItems = skillsData.map((item) => item.tools).join("").replace(/,/g, ", ");

    return (
      <section className="resumeSection">
        <div className="resumeContainer">
          <header>
            <h1 className="resumeName">KELSIE BESINGER</h1>
            <h3 className="resumeTitle">FRONTEND ENGINEER</h3>
          </header>
          <div className="resumeArea">
            <div className="columnOne">
              <article className="contactInfo">
                <h3 className="subheadings">CONTACT</h3>
                <div className="contactContainer">
                  <div className="contactContainerIcons">
                    <ul className="contactIcons">{contactItems}</ul>
                  </div>
                  <div className="contactContainerText">
                    <ul className="contactText">
                      <li>+1 646-246-7341</li>
                      <li>
                        <a
                          href="mailto:kelsiebesinger@gmail.com"
                          target="_blank"
                        >
                          kelsiebesinger@gmail.com
                        </a>
                      </li>
                      <li>Denver, CO</li>
                      <li>
                        <a href="https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/">
                          Kelsie Besinger Yeh
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/kelsiebesingeryeh">
                          Kelsie Besinger Yeh
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <article>
                <h3 className="subheadings">SKILLS</h3>
                <h4>//TECHNICAL</h4>
                <p className="skillsText">{techItems}</p>
                <h4>//TESTING & DEPLOYMENT</h4>
                <p className="skillsText">{testingItems}</p>
                <h4>//TOOLS</h4>
                <p className="skillsText">{toolItems}</p>
              </article>

              <article>
                <h3 className="subheadings">CERTIFICATIONS</h3>
                <p className="educationText">
                  <strong>Certified Scrum Master</strong>
                </p>
                <p className="educationText">Scrum Alliance</p>
                <p style={{ paddingTop: "5%" }} className="educationText">
                  <strong>Project Management Professional Certification</strong>
                </p>
                <p className="educationText">Project Management Institute</p>
              </article>

              <article>
                <h3 className="subheadings">EDUCATION</h3>
                <p className="educationText">
                  <strong>Front-End Engineering Student</strong>
                </p>
                <p className="educationText">
                  Turing School of Software & Design
                </p>
                <p className="educationText">April 2021</p>
                <p style={{ paddingTop: "5%" }} className="educationText">
                  <strong>Bachelor of Science, Business Adminstration</strong>
                </p>
                <p className="educationText">Old Dominion University</p>
              </article>

            </div>

            <div className="columnTwo">

              <article>
                <h3 className="subheadings">OVERVIEW</h3>
                <p style={{ fontSize: "0.85rem" }}>
                  I am a process-oriented thinker with over 8 years of
                  experience as an operations leader for some of the world’s
                  largest tech conferences. I am a well-rounded engineer who
                  offers a deep understanding about business from making
                  processes better on teams to ensuring workflows are seamless.
                  By applying my operational mindset along with my
                  problem-solving skills, I design clean and unique user
                  interfaces while architecting concise and maintainable code.
                </p>
              </article>

              <article className="portfolioSection">
                <h3 className="subheadings">PORTFOLIO</h3>
                <h4 className="projectTitleResume">Rancid Tomatillos</h4>
                <p style={{ margin: "0" }}>
                  <strong>GitHub</strong>
                </p>
                <ul className="jobBulletPoints">
                  <li>
                    Built a multi-page movie application that allows users to
                    search, select and view different movies using REST APIs
                  </li>
                  <li>
                    <strong>Stack:</strong> JavaScript, React, React Router,
                    SASS, REST APIs, Cypress, InVision
                  </li>
                </ul>
                <h4 className="projectTitleResume">Travel Tracker</h4>
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

              <article className="professionalExperienceSection">
                <h3 className="subheadings" style={{ paddingTop: "1%" }}>
                  PROFESSIONAL EXPERIENCE
                </h3>
                <h4 className="jobTitle">Director of Event Operations</h4>
                <span className="jobHistory">
                  <p className="companyNameCityName">
                    KnowIt Events, Denver, CO
                  </p>
                  <p className="year">2019 - 2020</p>
                </span>
                <ul className="jobBulletPoints">
                  <li>
                    Organized and produced a successful live-steam conference
                    for over 1,000 attendees at an early-stage startup
                  </li>
                </ul>
                <h4 className="jobTitle">Project Manager</h4>
                <span className="jobHistory">
                  <p className="companyNameCityName">HomeAdvisor, Denver, CO</p>
                  <p className="year">2019 - 2019</p>
                </span>
                <ul className="jobBulletPoints">
                  <li>
                    Managed the day-to-day aspects of various projects for sales
                    operations, including scope definition, resource allocation,
                    dependencies, and business outcomes
                  </li>
                  <li>
                    Collaborated with cross-functional stakeholders in product,
                    business intelligence and finance to roll out new features
                    for the internal CRM tool
                  </li>
                </ul>
                <h4 className="jobTitle">Director of Operations</h4>
                <span className="jobHistory">
                  <p className="companyNameCityName">Shoptalk, New York, NY</p>
                  <p className="year">2016 - 2019</p>
                </span>
                <ul className="jobBulletPoints">
                  <li>
                    Oversaw and executed one of the world's largest retail and
                    e-commerce conferences with over 9,000+ attendees
                  </li>
                  <li>
                    Launched various platforms including event registration
                    software and mobile application which achieved an 80%
                    attendee adoption rate
                  </li>
                </ul>
                <h4 className="jobTitle">Director of Operations</h4>
                <span className="jobHistory">
                  <p className="companyNameCityName">
                    Money20/20, New York, NY
                  </p>
                  <p className="year">2014 - 2016</p>
                </span>
                <ul className="jobBulletPoints">
                  <li>
                    As first employee of startup company acquired for over $100
                    million, oversaw all aspects of operations throughout growth
                    to becoming the world’s largest FinTech conference.
                  </li>
                  <li>
                    Organized the largest FinTech Hackathon in the world with
                    over 500 developers, which was voted top 5 Hackathons by
                    Tech Crunch
                  </li>
                  <li>
                    Implemented several API integrations with third-party
                    payment gateways which resulted in over $10 million in
                    revenue
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Resume