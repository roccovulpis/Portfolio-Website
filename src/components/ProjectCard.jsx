import React from 'react';
import '../styles/ProjectCard.css';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ img, title, description, technologies, githubLink }) {
  return (
    <div className="project-container">
      {/* Image Section */}
      <div className="project-img-container">
        <img src={img} alt={title || 'Project Image'} loading="lazy" />
      </div>

      {/* Description Section */}
      <div className="project-description-container">
        {title && <h2 className="project-title">{title}</h2>}
        {description && <p className="project-description">{description}</p>}
      </div>

      {/* Footer Section */}
      <div className="project-footer">
        {technologies && (
          <p className="project-technologies">
            <strong>Technologies:</strong> {technologies}
          </p>
        )}
        <div className="project-btns">
          {/* View Project Button */}
          <a href="" className="view-project-btn" target="_blank" rel="noopener noreferrer">
            <GoArrowUpRight />
          </a>
          {/* GitHub Link */}
          <a href={githubLink} className="github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
