import React from 'react';
import '../styles/ProjectCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ img, title, description, technologies, githubLink }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/project'); // Redirects to the project page
  };

  const stopPropagation = (event) => {
    event.stopPropagation(); // Prevents the event from propagating to the card click handler
  };

  return (
    <div className="project-container" onClick={handleCardClick}>
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
          <Link
            className="view-project-btn"
            to="/project"
            onClick={stopPropagation}
          >
            <GoArrowUpRight />
          </Link>

          {/* GitHub Link */}
          <a
            href={githubLink}
            className="github"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation} 
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
