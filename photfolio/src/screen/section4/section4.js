import React, { useRef } from "react";
import ProjectCard from "../../component/ProjectCard";
import classes from "./section4.module.css";

export default function Section4() {
  const myRef = useRef();

  var left = 0;

  const handleScrollRight = () => {
    left = left + 500;
    myRef.current.scrollTo({
      left: left,
      behavior: "smooth",
    });
  };
  const handleScrollLeft = () => {
    if (left > 0) {
      left = left - 500;
      myRef.current.scrollTo({
        left: left,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classes.section4} id="sec-4">
      <div className={classes.header}>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>below are my best projects</p>
      </div>
      <div className={classes.Content}>
        <div style={{ flex1: 0.1 }} onClick={handleScrollLeft}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className={classes.Projects} style={{ flex1: 0.7 }} ref={myRef}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div style={{ flex1: 0.1 }} onClick={handleScrollRight}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
