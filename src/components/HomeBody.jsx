import React from 'react'
import selfImg from '../assets/site-photos/me.jpg'
import '../styles/HomeBody.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function HomeBody() {
  return (
    <div className='home-body-container'>
      <div className='home-body-card'>
        <div className='home-img-container'>
          <img src={selfImg} alt="Me" />
        </div>
        <div className='home-desc-container'>
          <h1>Rocco Vulpis</h1>
          <h3>Software Developer</h3>
          <span><FaLocationDot /> New Jersey, USA</span>
          <p className='desc-tag'>I created this website to highlight my 
            skills and showcase the projects I've completed throughout school 
            and on my free time.
          </p>
        </div>
        <div>
          <div className='home-socials-container'>
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
