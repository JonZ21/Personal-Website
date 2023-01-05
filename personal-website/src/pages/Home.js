import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Projects.css";

//Images for Current Projects
import mmlogo from "../assets/mmlogo.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={mmlogo} alt="logo" className="hero" />
        <h2>Mecha Mayhem Official App</h2>
        <div className="prompt"></div>
      </div>
      <div className="currentProjects">
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
