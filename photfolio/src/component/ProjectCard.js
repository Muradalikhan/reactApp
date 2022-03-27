import React from "react";
import "./ProjectCard.css";
import img from "../images/project.jpg";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-img-wrapper">
        <img src={img} alt="img" className="project-img" />
        <h3 className="project-title">Project Title</h3>
      </div>
      <a className="project-btn">Demo</a>
      <a className="project-btn">Source</a>
    </div>
  );
};

export default ProjectCard;
