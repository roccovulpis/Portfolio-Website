import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -60; 
            const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul className='middle-nav-links'>
                <li className='link'>
                    <a onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li className='link'>
                    <a onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className='link'>
                    <a onClick={() => scrollToSection('projects')}>Projects</a>
                </li>
            </ul>
        </nav>
    );
}
