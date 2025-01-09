import React from 'react'
import selfImg from '../assets/me.jpg'
import '../styles/Homebody.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function HomeBody() {
  return (
    <div className='body-container'>
      <div className='body-card'>
        <div className='img-container'>
          <img src={selfImg} alt="Me" />
        </div>
        <div className='desc-container'>
          <h1>Rocco Vulpis</h1>
          <h2>Software Developer</h2>
          <span><FaLocationDot /> New Jersey, USA</span>
          <p className='desc-tag'>I created this website to highlight my 
            skills and showcase the projects I've completed throughout school 
            and on my personal time.
          </p>
        </div>
        <div>
          <div className='socials-container'>
            <h2>Socials</h2>
            <span className='social-span'>
              <button><CiLinkedin /></button>
              <button><FaGithub /></button>
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}
