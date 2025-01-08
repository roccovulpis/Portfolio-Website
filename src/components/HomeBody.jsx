import React from 'react'
import selfImg from '../assets/me.jpg'
import '../styles/Homebody.css'

export default function HomeBody() {
  return (
    <div>
      <div className='img-container'>
        <img src={selfImg} alt="Me" />
      </div>
      <h1>Hi, I'm Rocco</h1>
      <p>This is my portfolio</p>
      <button>Check Out My Work</button>

    </div>
  )
}
