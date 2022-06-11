import React from "react";
import "./ProjectCard.css";
import img from "../images/project.jpg";

const ProjectCard = ({ item }) => {
  const { img, title, demoLink, sourceLink, technologies } = item;
  return (
    <div className="project-card">
      <img src={img} alt="img" className="project-img" />
      <h3 className="project-title">{title}</h3>
      <a className="project-btn" href={demoLink} target="_blank">
        Demo
      </a>
      <a className="project-btn" href="#">
        Source
      </a>
      <div className="project-technology">
        {technologies?.map((item, index) => (
          <img src={item} alt="img" />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
