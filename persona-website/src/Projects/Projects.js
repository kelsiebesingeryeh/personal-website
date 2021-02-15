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
        id={project.id}
        key={project.id}
        shortOverview={project.shortOverview}
        stack={project.stack}
        description={project.description}
      />
    )
  })
}

  render() {
    return (
      <div className="projectContainer">
        {this.projectsToDisplay()}
      </div>
    )
  }
}

export default Projects;
