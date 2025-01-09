import React from 'react'
import SkillCard from './SkillCard';
import reactImg from '../assets/technology-logos/react.webp'
import javaImg from '../assets/technology-logos/java.svg'
import pythonImg from '../assets/technology-logos/python.webp'
import bootstrapImg from '../assets/technology-logos/bootstrap.png'
import flaskImg from '../assets/technology-logos/flask.png'
import gitImg from '../assets/technology-logos/git.webp'
import jsImg from '../assets/technology-logos/js.webp'
import htmlImg from '../assets/technology-logos/html5.webp'
import cssImg from '../assets/technology-logos/css.webp'
import sqlImg from '../assets/technology-logos/sql.png'
import octaveImg from '../assets/technology-logos/octave.png'

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
        img={htmlImg}
        name='HTML'
        desc='Markup Language'
        imgBgColor ="rgba(227, 76, 38, 0.4)"
      />
      <SkillCard 
        img={cssImg}
        name='CSS'
        desc='Styling'
        imgBgColor ='rgba(38, 77, 228, 0.4)'
      />
      <SkillCard 
        img={jsImg}
        name='JavaScript'
        desc='Programming Language'
        imgBgColor ='rgba(247, 223, 30, 0.2)'
      />
      <SkillCard 
        img={javaImg}
        name='Java'
        desc='Programming Language'
        imgBgColor ="hsl(0, 0.00%, 90.20%)"
      />
      <SkillCard 
        img={pythonImg}
        name='Python'
        desc='Programming Language'
        imgBgColor ="rgba(53, 114, 165, 0.2)"
      />
      <SkillCard 
        img={sqlImg}
        name='SQL'
        desc='Programming Language'
        imgBgColor ="rgba(70, 130, 180, 0.2)"
      />
      <SkillCard 
        img={bootstrapImg}
        name='Bootstrap'
        desc='CSS Library'
        imgBgColor = "rgba(138, 43, 226, 0.2)"
      />
      <SkillCard 
        img={flaskImg}
        name='Flask'
        desc='Backend Framework'
        imgBgColor ="hsl(0, 0.00%, 90.20%)"
      />
      <SkillCard 
        img={octaveImg}
        name='GNU Octave'
        desc='Scientific Programming Language'
        imgBgColor ='rgba(0, 122, 204, 0.2)'
      />
    </div>
    </>
    
  )
}
