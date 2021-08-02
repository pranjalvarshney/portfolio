import React from "react";
import {
  Card,
  CardActions,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";

const ProjectCard = ({ item }) => {
  return (
    <Card
      variant="outlined"
      style={{
        margin: "10px",
        width: "320px",
        height: "180px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="body1">
          <b>{item.name}</b>
        </Typography>
        <Typography
          variant="caption"
          style={{ fontSize: "13px" }}
          component="p"
        >
          {item.description}
        </Typography>
      </CardContent>

      <CardActions
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Button size="small" href={item.link}>
          Project Link
        </Button>
        <Button size="small" href={item.code}>
          Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
