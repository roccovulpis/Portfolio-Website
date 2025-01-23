import React from 'react';
import '../styles/ProjectCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({
  img,
  title,
  description,
  technologies,
  siteLink,
  githubLink,
  isInProgress,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/project');
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="project-container" onClick={handleCardClick}>
      {/* Diagonal Banner */}
      {isInProgress && <div className="project-banner">Work in Progress</div>}

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
          {siteLink && (
            <Link
              className="view-live-project-btn"
              to={siteLink}
              onClick={stopPropagation}
              target="_blank"
            >
              Demo
            </Link>
          )}
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
