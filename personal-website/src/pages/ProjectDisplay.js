import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHub from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { useNavigate } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  const navigate = useNavigate();
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p className="description">{project.description}</p>
      <div
        className="githubLink"
        onClick={() => {
          navigate("/project/" + id);
        }}
      >
        <GitHub />
      </div>
    </div>
  );
}

export default ProjectDisplay;
