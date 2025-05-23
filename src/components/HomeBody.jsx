import React from 'react';
import selfImg from '../assets/site-photos/me.jpg';
import '../styles/HomeBody.css';
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

export default function HomeBody() {
  const handleDownload = () => {
    const fileUrl = '/resume/Rocco_Vulpis_Resume.pdf'; // Replace with the actual file path in your public folder
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Rocco-Vulpis-Resume.pdf'; // Suggest a filename for download
    anchor.click();
  };

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
          <p className='desc-tag'>After earning my Bachelor's Degree in Computer Science, I created this website to highlight my
            skills and showcase the projects I've completed throughout school
            and in my free time.
          </p>
        </div>
        <div>
          <div className='home-links-container'>
            <h2>Socials</h2>
            <span className='social-span'>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/rocco-vulpis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin />
              </a>
              <a
                className="github"
                href="https://github.com/roccovulpis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            {/* Updated Button */}
            <button className='cv-btn' onClick={handleDownload}>
              <GoDownload className='dl-logo' />Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
