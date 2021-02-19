import React, { Component } from "react";
import Card from "../Card/Card"
import './Projects.css'
import projectData from '../data/projectData'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: projectData
    }
  }
  
  projectsToDisplay = () => {
  return this.state.projects.map(project => {
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
  })
}

  render() {
    return (
      <>
      <h1 className='projectTitlePage'>Projects</h1>
        <div className="projectContainer">
          {this.projectsToDisplay()}
          </div>
          </>
    );
  }
}

export default Projects;
