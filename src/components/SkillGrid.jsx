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
import sqlImg from '../assets/technology-logos/sql.webp'
import cSharpImg from '../assets/technology-logos/c-sharp.webp'
import octaveImg from '../assets/technology-logos/octave.png'
import nextImg from '../assets/technology-logos/next.png'

import '../styles/SkillGrid.css'

export default function SkillGrid() {
  return (
    <>
      <h1>Technologies </h1>
      <div className='skill-grid'>
      <SkillCard 
        img={nextImg}
        name='Next.js'
        desc='React Framework'
        link="https://nextjs.org"
        imgBgColor ="hsl(0, 0.00%, 90.20%)" 
      />
      <SkillCard 
        img={reactImg}
        name='React'
        desc='JavaScript Library'
        link="https://react.dev/"
        imgBgColor ="rgba(97, 218, 251, 0.2)" 
      />
      <SkillCard 
        img={htmlImg}
        name='HTML'
        desc='Markup Language'
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        imgBgColor ="rgba(227, 76, 38, 0.4)"
      />
      <SkillCard 
        img={cssImg}
        name='CSS'
        desc='Styling'
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        imgBgColor ='rgba(38, 77, 228, 0.4)'
      />
      <SkillCard 
        img={jsImg}
        name='JavaScript'
        desc='Programming Language'
        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        imgBgColor ='rgba(247, 223, 30, 0.2)'
      />
      <SkillCard 
        img={javaImg}
        name='Java'
        desc='Programming Language'
        link="https://docs.oracle.com/en/java/"
        imgBgColor ="hsl(0, 0.00%, 90.20%)"
      />
      <SkillCard 
        img={pythonImg}
        name='Python'
        desc='Programming Language'
        link="https://www.python.org/"
        imgBgColor ="rgba(53, 114, 165, 0.2)"
      />
      <SkillCard 
        img={cSharpImg}
        name='C#'
        desc='Programming Language'
        link="https://learn.microsoft.com/en-us/dotnet/csharp/"
        imgBgColor ='rgba(166, 89, 185, 0.44)'
      />
      <SkillCard 
        img={sqlImg}
        name='SQL'
        desc='Programming Language'
        link="https://www.mysql.com/"
        imgBgColor ="rgba(70, 130, 180, 0.2)"
      />
      <SkillCard 
        img={bootstrapImg}
        name='Bootstrap'
        desc='CSS Library'
        link="https://getbootstrap.com/"
        imgBgColor = "rgba(138, 43, 226, 0.2)"
      />
      <SkillCard 
        img={flaskImg}
        name='Flask'
        desc='Backend Framework'
        link="https://flask.palletsprojects.com/en/stable/"
        imgBgColor ="hsl(0, 0.00%, 90.20%)"
      />
      {/* <SkillCard 
        img={octaveImg}
        name='GNU Octave'
        desc='Scientific Programming Language'
        link="https://octave.org/"
        imgBgColor ='rgba(0, 122, 204, 0.2)'
      /> */}
      <SkillCard 
        img={gitImg}
        name='Git'
        desc='Version Control'
        link="https://git-scm.com/"
        imgBgColor ='rgba(240, 80, 50, 0.2)'
      />
    </div>
    </>
    
  )
}
