import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import headlinersImg from '../assets/project-logos/headliners-home.png';
import splitzrImg from '../assets/project-logos/splitzr.png';
import a from '../assets/project-logos/jfreechart.jpg';
import montyImg from '../assets/project-logos/monty-hall.png';
import calcImg from '../assets/project-logos/calculator.png';
import portImg from '../assets/project-logos/portfolio-site.png';
import weighImg from '../assets/project-logos/weighin.png';
import teaImg from '../assets/project-logos/tea.png';
import '../styles/ProjectsGrid.css';

export default function ProjectsGrid() {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  return (
    <div className="projects-grid-section">
      <h1>My Projects</h1>
      <div className="projects-grid-container">
        <ProjectCard
          img={headlinersImg}
          title="Headliners"
          description="Appointment scheduling website built for a local barbershop"
          technologies="Flask, Bootstrap, SQLite, Vercel"
          siteLink="https://headliners-two.vercel.app/"
          githubLink="https://github.com/roccovulpis/Headliners"
        />
        <ProjectCard
          img={splitzrImg}
          title="Splitzr"
          description="Bill-splitting app to simplify sharing expenses among friends"
          technologies="React, CSS, Express.js, MongoDB, Vercel"
          siteLink="https://splitzr.vercel.app/"
          githubLink="https://github.com/roccovulpis/Splitzr"
          isInProgress={true}
        />
        <ProjectCard
          img={weighImg}
          title="Weekly Weigh In"
          description="Website that allows users to log their weights, set goals, and collaborate or compete with friends"
          technologies="Flask, Bootstrap, SQLite"
          siteLink="https://rvulpis.pythonanywhere.com/"
          githubLink=" https://github.com/roccovulpis/Weekly-Weigh-In"
          isInProgress={true}
        />
        {showMore && (
          <>
            <ProjectCard
              img={teaImg}
              title="Tea Cozy"
              description="Tea shop website"
              technologies="HTML, CSS"
              siteLink="https://roccovulpis.github.io/Tea-Shop-Project/"
              githubLink="https://github.com/roccovulpis/Tea-Shop-Project"
            />
            <ProjectCard
              img={calcImg}
              title="Calculator"
              description="Calculator with basic functionalities"
              technologies="HTML, CSS, JavaScript"
              siteLink="https://digital-calculator-lilac.vercel.app/"
              githubLink="https://github.com/roccovulpis/Digital-Calculator"
            />
            <ProjectCard
              img={portImg}
              title="Portfolio"
              description="The site you are on right now"
              technologies="React, CSS, Vercel"
              siteLink="https://roccovulpis.com/"
              githubLink="https://github.com/roccovulpis/Portfolio-Website"
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
              description="Simulation of the Monty Hall problem based on 10,000 runs"
              technologies="Java"
              githubLink="https://github.com/roccovulpis/prob-and-applied-stats/tree/main/JavaProjects/MontyHallProgram"
            />
          </>
        )}
      </div>
      <button className='show-btn' onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
