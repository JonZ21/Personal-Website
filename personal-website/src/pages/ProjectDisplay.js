import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHub from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="project">
      <h1>
        {project.name} {project.inProgress ? "(in progress)" : ""}
      </h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p className="description">{project.description}</p>
      <a className="githubLink" href={project.link}>
        <GitHub />
      </a>
    </div>
  );
}

export default ProjectDisplay;
