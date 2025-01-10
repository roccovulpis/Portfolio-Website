import React from 'react'
import '../styles/ProjectCard.css'

export default function ProjectCard(props) {
  return (
    <div className='project-container'>
      <div className='project-img-container'>
        <img src={props.img} alt="Project Photo" />
      </div>
      <div className='project-description-container'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.technologies}</p>
      </div>
    </div>
  )
}
