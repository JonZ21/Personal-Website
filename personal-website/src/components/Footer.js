import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p className="copyright"> &copy; 2022 Jonathan Zhou</p>
    </div>
  );
}

export default Footer;
