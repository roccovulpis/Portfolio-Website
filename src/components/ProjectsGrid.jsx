import React from 'react';
import ProjectCard from './ProjectCard';
import headlinersImg from '../assets/project-logos/headliners-home.png';
import splitzrImg from '../assets/project-logos/splitzr.png';
import a from '../assets/project-logos/jfreechart.jpg';
import montyImg from '../assets/project-logos/monty-hall.png';
import calcImg from '../assets/project-logos/calculator.png';
import portImg from '../assets/project-logos/portfolio-site.png';
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
          githubLink="https://github.com/roccovulpis/Headliners"
        />
        <ProjectCard
          img={splitzrImg}
          title="Splitzr"
          description="Bill-splitting app to simplify sharing expenses among friends"
          technologies="React, CSS"
          githubLink="https://github.com/roccovulpis/Splitzr"
        />
        <ProjectCard
          img={a}
          title="Plotter Salter Smoother"
          description="Data visualization project using JFreeChart library"
          technologies="Java, JFreeChart"
          githubLink="https://github.com/roccovulpis/Probability-and-Applied-Stats-Project-2.1/tree/main/PlottingSaltingSmoothing"
        />
        <ProjectCard
          img={montyImg}
          title="Monty Hall Simulation"
          description="Simulation of the Monty Hall problem"
          technologies="Java"
          githubLink="https://github.com/roccovulpis/prob-and-applied-stats/tree/main/JavaProjects/MontyHallProgram"
        />
        <ProjectCard
          img={calcImg}
          title="Calculator"
          description="Calculator with basic functionalities"
          technologies="HTML, CSS, JavaScript"
          githubLink="https://github.com/roccovulpis/Digital-Calculator"
        />
        <ProjectCard
          img={portImg}
          title="Portfolio"
          description="The site you are on right now"
          technologies="React, CSS, Vercel"
          githubLink="https://github.com/roccovulpis/Portfolio-Website"
        />
      </div>
    </div>
  );
}
