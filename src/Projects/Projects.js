import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Projects.scss';
import projectData from '../data/projectData';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const projectsToDisplay = () => {
    return projects.map((project) => {
      return (
        <Card
          title={project.title}
          image={project.image}
          id={project.id}
          key={project.id}
          shortOverview={project.shortOverview}
          stack={project.stack}
          description={project.description}
          gitHubRepo={project.gitHubRepo}
          liveDeployment={project.liveDeployment}
        />
      );
    });
  };

  return (
    <>
      <h1 className="projectTitlePage">Projects</h1>
      <div className="projectContainer">
        {projectsToDisplay()}
      </div>
    </>
  );
};

export default Projects;
