import React from 'react';
import HomeBody from '../components/HomeBody';
import SkillGrid from '../components/SkillGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <section id="home">
        <HomeBody />
      </section>
      <section id="about">
        <SkillGrid />
      </section>
      <section id="projects">
        <ProjectsGrid />
      </section>
      <section id="contact">
        <Contact />
      </section>
        <Footer />
    </div>
  );
}
