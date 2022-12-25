import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hey, I'm Jon</h2>
        <div className="prompt">
          <p>A Mechatronics Engineering Student and Entrepreneur </p>
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
        <div className="seeMore">
          <Link to="/Projects">See more</Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java, Python, Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
