import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import './ProjectsExperience.css';
import n8nImage from '../assets/n8n.png';
import n8nPdf from '../pdf/n8n_work_flows.pdf';
import oonjaiImage from '../assets/Oonjai_logo.png';
import oonjaiPdf from '../pdf/Oonjai.pdf';

const ProjectsExperience = () => {
  const projects = [
    {
    title: "OWASP Juice Shop Security Lab",
    description: "Hands-on penetration testing practice project using the intentionally vulnerable OWASP Juice Shop application. Explored OWASP Top 10 vulnerabilities such as SQL Injection, XSS, and Insecure Authentication. Documented findings in a professional-style security report with remediation recommendations.",
    image: "", 
    technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "OWASP Top 10"],
    liveLink: "#",
    codeLink: "#" 
    },
    {
      title: "AI Assistant Chatbot",
      description: "Automated academic workflows: email handling, event scheduling, and PDF signing. Reduced manual tasks for professors and ensured student requests weren't missed. Applied workflow automation tools in a real-world academic setting.",
      image: n8nImage,
      technologies: ["n8n", "Telegram Bot API", "Google Calendar API", "Gmail API", "DeepSeek API", "PDF Automation"],
      liveLink: n8nPdf,
      codeLink: "https://github.com/SanMine/AI-Assistant-Chatbot"
    },
    {
      title: "Oonjai",
      description: "Volunteer project in collaboration with the School of Applied Medicine. Designed and implemented a rule-based recommendation engine to analyze user inputs and map them to personalized health suggestions. Built interactive dashboards and developed secure user profiles.",
      image: oonjaiImage,
      technologies: ["Dart (Flutter)", "Firebase"],
      liveLink: oonjaiPdf,
      codeLink: "https://github.com/SanMine/Oonjai_app"
    },
    {
      title: "Lumiq – Smart Dormitory Booking & Living Platform",
      description: "No-code management system built with Google Sheets and n8n automation. Developed a full-stack platform for room booking, online payments, and intelligent roommate matching. Implemented online deposits, digital contracts, and multilingual support.",
      image: n8nImage,
      technologies: ["HTML", "Tailwind CSS", "Javascript", "Node.js", "MySQL", "n8n"],
      liveLink: "#",
      codeLink: "https://github.com/SanMine/Lumiq"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="projects-experience-container" id="projects">
      <div className="projects-experience-content">
        {/* Projects Section */}
        <motion.div
          className="projects-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <h2>Projects</h2>
            <p>Cybersecurity and development projects showcasing my technical skills</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveLink} 
                        className="project-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (project.liveLink.endsWith('.pdf')) {
                            e.preventDefault();
                            window.open(project.liveLink, '_blank');
                          }
                        }}
                      >
                        <EyeIcon className="icon" />
                      </a>
                      <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <CodeBracketIcon className="icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default ProjectsExperience;