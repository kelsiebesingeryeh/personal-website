import React from 'react'
import './About.css'
import headshot from '../assets//headshot/headshot.png'

const About = () => {
    return (
      <section className="aboutMe">
          <div className='firstColumn'>
            <img className='headShot' src={headshot} />
          </div>
          <div className='secondColumn'>
            <h2>About Me</h2>
            <p className='aboutOverview'>
            I am a process-oriented thinker with over 8 years of experience as an
            operations leader for some of the world’s largest tech conferences. I
            am a well-rounded engineer who offers a lot of understanding about
            business from making processes better on teams to ensuring workflows
            are seamless. By applying my operational mindset along with my
            problem-solving skills, I design clean and unique user interfaces
            while architecting concise and maintainable code.
            </p>
          </div>
      </section>
    );
}

export default About