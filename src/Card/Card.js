import React from 'react';
import './Card.scss';

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
          <img
            src={image}
            alt="travelTrackerScreenShot"
            className="projectImage"
          />
          <p className="projectDetails">{shortOverview}</p>
          <p className="projectDetails">
            <strong>Tech Stack:</strong> 
            {stackSentence}
          </p>
          <p className="projectDetails description">{description}</p>
          {title === "Travel Tracker" && (
            <p className="projectDetails loginInfo">
              <em>Login Information: </em>
              <strong> username:</strong> 
              traveler5
              <strong> password:</strong> 
              traveler2020
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
  );
}
export default Card;