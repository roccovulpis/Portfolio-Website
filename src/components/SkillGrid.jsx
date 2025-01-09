import React from 'react'
import SkillCard from './SkillCard';
import reactImg from '../assets/technology-logos/react.webp'
import javaImg from '../assets/technology-logos/java.svg'
import pythonImg from '../assets/technology-logos/python.webp'
import bootstrapImg from '../assets/technology-logos/bootstrap.png'

import '../styles/SkillGrid.css'

export default function SkillGrid() {
  return (
    <>
      <h1>Technologies </h1>
      <div className='skill-grid'>
      <SkillCard 
        img={reactImg}
        name='React'
        desc='JavaScript Library'
        imgBgColor ="rgba(97, 218, 251, 0.2)" 
      />
      <SkillCard 
        img={javaImg}
        name='Java'
        desc='Language'
        imgBgColor ="hsl(0, 0.00%, 90.20%)"
      />
      <SkillCard 
        img={pythonImg}
        name='Python'
        desc='Language'
        imgBgColor ="rgba(53, 114, 165, 0.2)"
      />
      <SkillCard 
        img={bootstrapImg}
        name='Bootstrap'
        desc='CSS Library'
        imgBgColor = "rgba(138, 43, 226, 0.2)"
      />
      <SkillCard 
        img={reactImg}
        name='React'
        desc=''
      />
    </div>
    </>
    
  )
}
