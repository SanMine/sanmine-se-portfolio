import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  BugAntIcon,
  EyeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: BugAntIcon,
      title: 'Penetration Testing (Student/Trainee Level)',
      description: 'I assist in identifying and validating common vulnerabilities in websites and applications, such as XSS, SQLi, and CSRF, using industry-standard tools like Burp Suite and OWASP ZAP.',
      features: [
        'Web Application Security Testing – Detect flaws in web apps.',
        'Network Scanning & Enumeration – Discover open ports and services safely with Nmap.',
        'Vulnerability Assessment – Run and analyze vulnerability scans with reporting.'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Full-Stack for Secure Software Development',
      description: 'I build and secure end-to-end applications with frontend (React, HTML/CSS), backend (Node.js, Express), and database (MySQL, Firebase). My focus is on applying OWASP Top 10 secure coding principles so projects are both functional and protected.',
      features: [
        'Frontend + Backend + DB integration',
        'Secure coding practices',
        'Deployment on Vercel / Railway'
      ]
    },
    {
      icon: DocumentTextIcon,
      title: 'Project Design, SDLC & Methodology',
      description: 'I design projects following structured Software Development Life Cycle (SDLC) models and methodologies (Agile, Waterfall, Scrum) to ensure quality, scalability, and maintainability. This helps teams plan, develop, and deliver software securely and efficiently.',
      features: [
        'SDLC Documentation – Requirements, ERD, Data Flow, and Architecture Diagrams.',
        'Methodologies – Agile, Scrum, Waterfall (depending on project needs).',
        'Team Collaboration – Clear role definitions, deliverables, and reporting.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="services-container section" id="services">
      <div className="services-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Specialized cybersecurity services and secure development solutions</p>
        </motion.div>

        <motion.div 
          className="section-content services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="service-icon">
                  <IconComponent className="icon" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;