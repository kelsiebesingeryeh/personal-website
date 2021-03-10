import React from 'react'
import './Card.scss'

const Card = ({
  title,
  shortOverview,
  stack,
  description,
  image,
  liveDeployment,
  gitHubRepo,
}) => {
  
const stackSentence = stack.join(", ");
     
  return (
    <>
      <div className="cardContainer">
        <p className="projectTitle">{title}</p>
        <div className="projectDetailsCard">
          <div className="imageContainer">
            <img
              src={image}
              alt="travelTrackerScreenShot"
              className="projectImage"
            ></img>
          </div>
          <p>{shortOverview}</p>
          <p>
            <strong>Tech Stack:</strong> {stackSentence}
          </p>
          <p>{description}</p>
          {title === "Travel Tracker" && (
            <p>
              <em>Login Information:</em>
              <br></br>
              <strong>username:</strong> traveler5<br></br>
              <strong> password:</strong> traveler2020
            </p>
          )}
          <span className="gitHubLinks">
            <a href={liveDeployment} className="projectLinks" target="_blank">
              Live Deployment
            </a>
            <a href={gitHubRepo} className="projectLinks" target="_blank">
              Git Repository
            </a>
          </span>
        </div>
      </div>
    </>
  )
}
export default Card