import React, { useRef } from "react";
import ProjectCard from "../../component/ProjectCard";
import classes from "./section4.module.css";

export default function Section4() {
  const myRef = useRef();

  var left = 0;

  const handleScroll = ({ target }) => {
    if (target.hasAttribute(myRef.scrollBack)) {
      left = left - 100;
      myRef.scrollTo({
        left: left - 100,
        behavior: "smooth",
      });
    } else {
      left = left + 100;
      myRef.scrollTo({
        left: left + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classes.section4}>
      <div className={classes.header}>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>below are my best projects</p>
      </div>
      <div className={classes.Content}>
        <div style={{ flex1: 0.1 }}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className={classes.Projects} style={{ flex1: 0.7 }} ref={myRef}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div style={{ flex1: 0.1 }}>
          <i className="fa fa-arrow-right" onClick={handleScroll}></i>
        </div>
      </div>
    </div>
  );
}
