import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import "../helpers/ProjectList";
import { projectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        {projectList.map((project, index) => {
          return (
            <ProjectItem
              id={index}
              name={project.name}
              image={project.image}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
