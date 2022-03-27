import React from "react";
import "./ProjectCard.css";
import img from "../images/project.jpg";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src={img} alt="img" className="project-img" />
      <h3 className="project-title">Project Title</h3>
      <a className="project-btn">Demo</a>
      <a className="project-btn">Source</a>
    </div>
  );
};

export default ProjectCard;
