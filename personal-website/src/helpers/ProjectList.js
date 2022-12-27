import robotArm from "../assets/robotarm.png";
import tmhack from "../assets/tmhack.png";
import moviereview from "../assets/moviereview.png";
import stitcher from "../assets/stitcher.png";
import card from "../assets/card.png";
import printer from "../assets/printer.png";

export const projectList = [
  {
    name: "Tournament Manager Hack",
    image: tmhack,
    description:
      "A full-stack web app to score matches, collect team stats, and run tournament for Mecha Mayhem, an international tournament I'm hosting",
    link: "https://github.com/JonZ21",
    inProgress: true,
  },
  {
    name: "Family Photo Stitcher",
    image: stitcher,
    skills: "OpenCV, ReactJS, Python, IFTTT",
    description:
      "To continue a family tradition, I'm making a web app that takes a photo from three different computers and stitches them together into one panoramic photo",
    inProgress: true,
    link: "https://github.com/JonZ21",
  },
  {
    name: "NFC LinkedIn Card",
    image: card,
    description: "",
    inProgress: true,
    link: "https://github.com/JonZ21",
  },
  {
    name: "6 Axis Robot Arm",
    image: robotArm,
    skills: "Solidworks, 3D Printing, Laser Cutting, Autocad",
    description:
      "Custom 3D Printed robot arm with laser cut acrylic base I made for fun and to learn about rapid protoyping. Includes single joystick control and autonomous reset functions",
    link: "https://github.com/JonZ21/6-Axis-Robot-Arm",
    inProgress: false,
  },
  {
    name: "LEGO EV3 Printer",
    image: printer,
    skills: "3D Printing, RobotC, OpenCV",
    description:
      "Custom image-to-paper printer that prints 15cm x 28cm images. OpenCV program converts photos into silhouttes and creates a print instruction file that the EV3 reads",
    link: "https://github.com/JonZ21/6-Axis-Robot-Arm",
    inProgress: false,
  },
  {
    name: "Basic Movie Reviewer",
    image: moviereview,
    skills: "ReactJS, MySql, ExpressJS, NodeJS",
    description:
      "Barebones movie reviewer app I made to learn about databases and full stack apps. Includes editing and deleting functionality",
    link: "https://github.com/JonZ21/Basic-Movie-Reviewer",
    inProgress: false,
  },
];
