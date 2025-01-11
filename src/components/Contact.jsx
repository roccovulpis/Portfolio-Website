import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import '../styles/Contact.css'

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1>Contact Me</h1>
            <div className='contact-card'>
                <p><IoMailOutline className='mail-logo' />roccovulpis@gmail.com</p>
                <p><FaLocationDot className='location-logo' />New Jersey, USA</p>
            </div>
        </div>
    )
}
