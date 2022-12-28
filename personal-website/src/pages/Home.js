import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import "../styles/Home.css";
import "../styles/Projects.css";

//Images for Current Projects
import stitcher from "../assets/stitcher.png";
import tmHack from "../assets/tmhack.png";
import card from "../assets/card.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hey, I'm Jon!</h2>
        <div className="prompt">
          <p>Mechatronics Student and Robotics Entrepreneur </p>
          <a href="https://www.linkedin.com/in/jonathanzhou21/">
            <LinkedInIcon />
          </a>
          <a href="mailto:jonathan.zhou@uwaterloo.ca">
            <EmailIcon />
          </a>

          <a href="https://github.com/JonZ21">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="currentProjects">
        <h1>Currently Working On</h1>
        <div className="projectList">
          <ProjectItem name="VEX Robotics TM Hack" image={tmHack} id={0} />
          <ProjectItem name="Family Photo Stitcher" image={stitcher} id={1} />
          <ProjectItem name="NFC LinkedIN Card" image={card} id={2} />
        </div>
        <div className="seeMore">
          <Link
            to="/Projects"
            useEffect
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
