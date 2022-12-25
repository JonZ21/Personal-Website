import React from "react";
import ProjectItem from "../components/ProjectItem";
import robotArm from "../assets/robotArm.jpg";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <ProjectItem name="6 Axis Robot Arm" image={robotArm} />
      </div>
    </div>
  );
}

export default Projects;
