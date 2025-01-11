import React from 'react';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import '../styles/ProjectCard.css';

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
          <a href="">
            <button className="view-project-btn"><GoArrowUpRight /></button>
          </a>
          <a href={githubLink} target='_blank'>
            <button className="github"><FaGithub /></button>
          </a>
        </div>
      </div>
    </div>
  );
}
