import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToElement(id), 100);
        } else {
            scrollToElement(id);
        }
    };

    const scrollToElement = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -60; 
            const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul className="middle-nav-links">
                <li className="link">
                    <a onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li className="link">
                    <a onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className="link">
                    <a onClick={() => scrollToSection('projects')}>Projects</a>
                </li>
                <li className="link" id='contact-link'>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
