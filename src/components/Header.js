import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div
          className="avatar-header"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          <IconButton>
            <Avatar src="profile-pic.png" />
          </IconButton>
          <h6>Pranjal Varshney</h6>
        </div>
        <ul className="header-list">
          <li className="header-li">
            <Link
              to="main"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          {/* <li className='header-li'>
            <Link
              to='blogs'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              Blogs
            </Link>
          </li> */}
          <li className="header-li">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
