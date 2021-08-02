import React from "react";
import "./Projects.css";
import { Button } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "My Fellow",
    code: "https://github.com/pranjalvarshney/my-fellow",
    link: "https://myfellowapp.web.app/signin",
    description:
      "A university level Social - Educational web application which allows the students and teacher to exchange information, contribute, poll and establish communities",
  },
  {
    name: "Wrap n Go",
    code: "https://github.com/pranjalvarshney/shopping-mern",
    link: "https://wrap-n-go.web.app/",
    description:
      "An online e-commerce shopping site made using MERN stack with payment interface of stripe js and complete admin control",
  },
  {
    name: "CTF v1.0",
    code: "https://github.com/pranjalvarshney/CTFv1.0/",
    link: "https://sleepy-badlands-95391.herokuapp.com/",
    description:
      "I had organised an online ethical-hacking CTF(Capture the Flag) competition online which involves many hacking concepts for beginners.",
  },
  {
    name: "Tech Trivia",
    code: "https://github.com/pranjalvarshney/tech-trivia",
    link: "https://frontend-pranjalvarshney.vercel.app/",
    description:
      "An interactive quiz application for hosting an online competition built using reactjs and firebase. I had organized a live quiz event during the pandemic",
  },

  {
    name: "OTP - based Attendance App",
    code: "https://github.com/pranjalvarshney/attendance-api",
    link: "https://github.com/pranjalvarshney/attendance-api",
    description:
      "I developed backend APIs for an android OTP-based attendance app using node js",
  },
  {
    name: "MORTH App",
    code: "https://github.com/pranjalvarshney/Android_MORTH",
    link: "https://github.com/pranjalvarshney/Android_MORTH",
    description:
      "I had participated in Smart India Hackathon 2019 and build an app for Ministry of Road Transport and Highways to report updates of work done",
  },
];
export const Projects = () => {
  return (
    <div className="project container" id="projects">
      <h1 className="heading">My Projects</h1>
      <div className="projects-flex-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {projects.map((item, index) => {
            return <ProjectCard item={item} key={index} />;
          })}
          <Button
            size="small"
            href="https://www.github.com/pranjalvarshney"
            style={{ display: "flex" }}
          >
            Visit my github profile for more projects
          </Button>
        </div>
      </div>
    </div>
  );
};
