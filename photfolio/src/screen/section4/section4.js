import React from "react";
import ProjectCard from "../../component/ProjectCard";
import classes from "./section4.module.css";

export default function Section4() {
  return (
    <div className={classes.section4}>
      <div className={classes.header}>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>below are my best projects</p>
      </div>
      <div className={classes.Content}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
