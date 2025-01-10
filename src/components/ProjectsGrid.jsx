import React from 'react';
import ProjectCard from './ProjectCard';
import headlinersImg from '../assets/project-logos/headliners-home.png';
import splitzrImg from '../assets/project-logos/splitzr.png';
import a from '../assets/project-logos/jfreechart.jpg';
import '../styles/ProjectsGrid.css';

export default function ProjectsGrid() {
  return (
    <div className="projects-grid-section">
      <h1>My Projects</h1>
      <div className="projects-grid-container">
        <ProjectCard
          img={headlinersImg}
          title="Headliners"
          description="Appointment scheduling app built for a local barbershop"
          technologies="Flask, Bootstrap"
          githubLink="https://github.com/your-repo/headliners"
        />
        <ProjectCard
          img={splitzrImg}
          title="Splitzr"
          description="Bill-splitting app to simplify sharing expenses among friends"
          technologies="React, Node.js"
          githubLink="https://github.com/your-repo/splitzr"
        />
        <ProjectCard
          img={a}
          title="JFreeChart Analysis"
          description="Data visualization project using JFreeChart library"
          technologies="Java, JFreeChart"
        />
        <ProjectCard
          img={a}
          title="Another JFreeChart Project"
          description="Extended analysis using JFreeChart for visualizing trends"
          technologies="Java"
        />
        <ProjectCard
          img={headlinersImg}
          title="Portfolio"
          description="The site you are on right now"
          technologies="React, Tailwind CSS"
          githubLink="https://github.com/your-repo/portfolio"
        />
      </div>
    </div>
  );
}
