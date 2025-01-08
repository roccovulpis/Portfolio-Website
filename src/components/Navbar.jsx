import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul className='nav-brand'>
                <li className='link'><a href="/">Rocco Vulpis</a></li>
            </ul>
            <ul className='middle-nav-links'>
                <li className='link'><a href="/">Home</a></li>
                <li className='link'><a href="/">About</a></li>
                <li className='link'><a href="/projects.html">Projects</a></li>
            </ul>
            <ul className='contact-nav-link'>
                <li className='link'><a href="/">Contact Me</a></li>
            </ul>
        </nav>
    );
}
