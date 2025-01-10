import React from 'react'
import ProjectCard from './ProjectCard'
import headlinersImg from '../assets/project-logos/headliners-home.png'
import splitzrImg from '../assets/project-logos/splitzr.png'
import a from '../assets/project-logos/jfreechart.jpg'
import '../styles/ProjectsGrid.css'

export default function ProjectsGrid() {
  return (
    <div className='projects-grid-section'>
      <h1>My Projects</h1>
      <div className='projects-grid-container'>
        <ProjectCard
          img={headlinersImg}
          title='Headliners'
          description='lorem'
        />
        <ProjectCard
          img={splitzrImg}
        />
        <ProjectCard
          img={a}
        />
        <ProjectCard
          img={a}
        />
        <ProjectCard
          img={headlinersImg}
        />
      </div>
    </div>
  )
}
