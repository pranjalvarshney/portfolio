import { IconButton } from "@material-ui/core";
import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
const SocialIconBar = ({ horizontal }) => {
  return (
    <div
      className="link-logos-section"
      style={{ flexDirection: `${horizontal ? "row" : "column"}` }}
    >
      <div className="link-logo">
        <IconButton
          onClick={() => {
            window.open("https://github.com/pranjalvarshney");
          }}
        >
          <GitHubIcon className="logo-name" style={{ color: "white " }} />
        </IconButton>
      </div>
      <div className="link-logo">
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/pranjalvarshney/");
          }}
        >
          <LinkedInIcon className="logo-name" style={{ color: "white " }} />
        </IconButton>
      </div>
      <div className="link-logo">
        <IconButton
          onClick={() => {
            window.open("https://twitter.com/PranjalV25");
          }}
        >
          <TwitterIcon className="logo-name" style={{ color: "white " }} />
        </IconButton>
      </div>
      <div className="link-logo">
        <IconButton
          onClick={() => {
            window.open("https://www.instagram.com/iampranjalvarshney/");
          }}
        >
          <InstagramIcon className="logo-name" style={{ color: "white " }} />
        </IconButton>
      </div>
      <div className="link-logo">
        <IconButton
          onClick={() => {
            window.open("https://www.facebook.com/pranjal.varshney.169/");
          }}
        >
          <FacebookIcon className="logo-name" style={{ color: "white " }} />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialIconBar;
