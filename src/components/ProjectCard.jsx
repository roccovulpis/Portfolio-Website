import React from 'react';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import '../styles/ProjectCard.css';

export default function ProjectCard({ img, title, description, technologies }) {
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
        {technologies && (
          <p className="project-technologies">
            <strong>Technologies:</strong> {technologies}
          </p>
        )}
      </div>
      <div className='project-btns'>
        <button><GoArrowUpRight /></button>
        <button><FaGithub /></button>
      </div>
    </div>
  );
}
