import React from 'react'
import reactImg from '../assets/technology-logos/react.webp'
import '../styles/Footer.css'


export default function Footer() {
  return (

    <footer>
      <div className='footer-content-container'>
        <p>Made with React <img id="react-logo" src={reactImg} alt="React logo" /> and Vercel</p>
        <p>Created by <strong>Rocco Vulpis</strong> · © 2025</p>
      </div>
    </footer>


  )
}
