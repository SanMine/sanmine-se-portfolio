import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsExperience from './components/ProjectsExperience';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import DecorativeDivider from './components/DecorativeDivider';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects-experience', 'services', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="main-content">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <DecorativeDivider />
        <section id="skills"><Skills /></section>
        <DecorativeDivider />
        <section id="projects-experience"><ProjectsExperience /></section>
        <DecorativeDivider />
        <section id="services"><Services /></section>
        <DecorativeDivider />
        <section id="certifications"><Certifications /></section>
        <DecorativeDivider />
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
