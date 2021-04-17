import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({
  title,
  shortOverview,
  stack,
  description,
  image,
  liveDeployment,
  gitHubRepo,
}) => {
  const stackSentence = stack.join(', ');

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
          {title === 'Travel Tracker' && (
            <p className="projectDetails loginInfo">
              <em>Login Information: </em>
              <strong> username:</strong>
              traveler5
              <strong> password:</strong>
              traveler2020
            </p>
          )}
          <span className="gitHubLinks">
            <a
              href={liveDeployment}
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Live Deployment
            </a>
            <a
              href={gitHubRepo}
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Git Repository
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
export default Card;

Card.propTypes = {
  title: PropTypes.string,
  shortOverview: PropTypes.string,
  stack: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  liveDeployment: PropTypes.string,
  gitHubRepo: PropTypes.string,
};

Card.defaultProps = {
  title: PropTypes.string,
  shortOverview: PropTypes.string,
  stack: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  liveDeployment: PropTypes.string,
  gitHubRepo: PropTypes.string,
};
