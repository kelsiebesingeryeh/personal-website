import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'

const Home = () => {
    return (
      <div className="content">
        <h1 className="h1Animation skateIn">Hey, I'm Kelsie</h1>
        <p className="aboutMe">
          I'm a Software Engineer relentlessly focused on building seamless
          frontend applications.
        </p>
      </div>
    );
}

export default Home