import React, { useState } from "react";
import "./Home.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-scroll";
import SocialIconBar from "./SocialIconBar";

export const Home = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  return (
    <div
      className="app wrapper"
      id="main"
      // style={{
      //   backgroundImage: `url(${"./home-wall.jpg"})`,
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPositionY: "center",
      //   opacity: "1",
      // }}
    >
      <div className="home">
        <div className="home-section-1">
          <div className="main-home-body">
            <p className="line-1">Hi There! I'm</p>

            <p className="line-1">
              <span> Pranjal Varshney</span>
            </p>
            <br />
            <p className="line-2">
              A student and developer who is passionate about building
              interactive applications on the web
            </p>
            <div className="btn-wrapper">
              <Link
                className="home-more-btn"
                onMouseEnter={() => setIsHover1(true)}
                onMouseLeave={() => setIsHover1(false)}
                to="projects"
              >
                View my work
                {!isHover1 ? (
                  <KeyboardArrowRightIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </Link>
              <button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1Evbdl176SbMQltP9d9k77WOeNY-tocpG/view?usp=sharing"
                  );
                }}
                className="resume-btn"
                onMouseEnter={() => setIsHover2(true)}
                onMouseLeave={() => setIsHover2(false)}
              >
                Résumé
                {!isHover2 ? (
                  <KeyboardArrowRightIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </button>
            </div>
          </div>
          <SocialIconBar horizontal={false} />
        </div>
      </div>
    </div>
  );
};
