import React from "react";
import ProjectCard from "../../component/ProjectCard";
import classes from "./section4.module.css";

export default function Section4() {
  return (
    <div className={classes.section3}>
      <div className={classes.header}>
        <p>header</p>
        <p>headerasdasdddddddd</p>
      </div>
      <div className={classes.Content}>
        <ProjectCard />
      </div>
    </div>
  );
}
