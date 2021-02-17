import React from 'react'
import './Card.css'

const Card = ({
  title,
  shortOverview,
  stack,
  description,
  image,
  liveDeployment,
  gitHubRepo,
}) => {
   const returnStack = () => {
       const stackSentence = stack.join(", ");
       console.log(stackSentence);
       return stackSentence
    }
  return (
    <>
      <div className="cardContainer">
        <div className="projectTitleContainer">
          <p className="projectTitle">{title}</p>
        </div>
        <div className="projectDetailsCard">
          <img
            src={image}
            alt="travelTrackerScreenShot"
            className="projectImage"
          ></img>
          <p>{shortOverview}</p>
          <p>
            <strong>Tech Stack:</strong> {returnStack()}
          </p>
          <p>{description}</p>
          <span className="gitHubLinks">
            <p>{liveDeployment}</p>
            <p>{gitHubRepo}</p>
          </span>
        </div>
      </div>
    </>
  );
};
export default Card