import { Typography } from "@material-ui/core";
import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content-wrapper">
        <div className="about-image-wrapper">
          <img
            src="./profile-pic.png"
            alt="Profile - Pranjal Varshney"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h1>About me</h1>
          <br />
          <Typography variant="caption" style={{ fontSize: "16px" }}>
            I'm a computer science final year student currently pursing my
            engineering from Gautam Buddha University, India. I'm passionate
            about learning and building web apps. I like programming and
            learning about new technologies. Apart from these stuff i like
            playing chess, badminton and table tennis.
          </Typography>
          <div className="about-more-details">
            <p style={{ fontWeight: "500", fontSize: "16px" }}>
              Skills :{"  "}
              <span style={{ color: "grey" }}>
                HTML | CSS | Javascript | Reactjs | Nodejs | React Native |
                Flutter | Python | C++ | MongoDB | MySQL | Git
              </span>
            </p>
            <p style={{ fontWeight: "500", fontSize: "16px" }}>
              Languages :{" "}
              <span style={{ color: "grey" }}> English | Hindi | French</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
