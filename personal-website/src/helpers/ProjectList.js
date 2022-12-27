import robotArm from "../assets/robotarm.png";
import tmhack from "../assets/tmhack.png";
import moviereview from "../assets/moviereview.png";
import stitcher from "../assets/stitcher.png";
import card from "../assets/card.png";

export const projectList = [
  {
    name: "Tournament Manager Hack",
    image: tmhack,
    description: "",
    link: "https://github.com/JonZ21",
    inProgress: true,
  },
  {
    name: "Family Photo Stitcher",
    image: stitcher,
    skills: "OpenCV, ReactJS, Python, IFTTT",
    description: "",
    inProgress: false,
  },
  {
    name: "NFC LinkedIn Card",
    image: card,
    description: "",
    inProgress: true,
  },
  {
    name: "6 Axis Robot Arm",
    image: robotArm,
    skills: "Solidworks, 3D Printing, Laser Cutting, Autocad",
    description:
      "Custom 3D Printed robot arm with laser cut acrylic base I made for fun and to learn about rapid protoyping. Includes single joystick control and autonomous reset functions.",
    link: "https://github.com/JonZ21/6-Axis-Robot-Arm",
    inProgress: false,
  },
  {
    name: "Basic Movie Reviewer",
    image: moviereview,
    skills: "ReactJS, MySql, ExpressJS, NodeJS",
    description:
      "Barebones movie reviewer app I made to learn about databases and full stack apps. Includes editing and deleting functionality.",
    link: "https://github.com/JonZ21/Basic-Movie-Reviewer",
  },
];
