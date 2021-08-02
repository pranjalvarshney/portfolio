import { Button, Card, Typography } from "@material-ui/core";
import React from "react";
import "./Contact.css";
import SocialIconBar from "./SocialIconBar";

export const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1 className="heading">Contact Me</h1>
        {/* <h4 className="tag-contact">Have a question or want to work together?</h4> */}
        {/* <form>
        <div className="form-group">
          <input className="input-control" placeholder="Enter name" />
          <input className="input-control" placeholder="Enter email" />
          <textarea
            className="input-control"
            placeholder="Enter your message"
          />
          <button className="btn-submit">Submit</button>
        </div>
      </form> */}
        <Card
          variant="outlined"
          style={{
            background: "#00000000",
            borderColor: "#fff",
            margin: "20px 0",
            maxWidth: "300px",
            padding: "20px ",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography>
            Have a question or want to work together or if you like my work and
            want to hire me
          </Typography>
          <br />
          <Button variant="contained" href="mailto:pranjal25varshney@gmail.com">
            Hire me!
          </Button>
        </Card>
        <SocialIconBar horizontal="yes" />
      </div>
    </>
  );
};
