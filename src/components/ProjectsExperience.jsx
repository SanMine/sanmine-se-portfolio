import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, CodeBracketIcon, BriefcaseIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import './ProjectsExperience.css';

const ProjectsExperience = () => {
  const projects = [
    {
      title: "Secure Web Application",
      description: "Full-stack web application with security-first approach, implementing OAuth 2.0, input validation, and SQL injection prevention.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Network Security Scanner",
      description: "Python-based network vulnerability scanner that identifies open ports, services, and potential security weaknesses.",
      image: "/project2.jpg",
      technologies: ["Python", "Nmap", "Socket", "Threading"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Incident Response Dashboard",
      description: "Real-time cybersecurity incident monitoring dashboard with automated threat detection and response capabilities.",
      image: "/project3.jpg",
      technologies: ["React", "D3.js", "Python", "Flask"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "SecureTech Solutions",
      period: "June 2024 - Present",
      description: "Assist in vulnerability assessments, penetration testing, and security incident response. Gained hands-on experience with security tools and frameworks.",
      responsibilities: [
        "Conducted vulnerability scans using Nessus and OpenVAS",
        "Assisted in penetration testing engagements",
        "Documented security findings and remediation steps",
        "Participated in incident response procedures"
      ]
    },
    {
      title: "IT Support Trainee",
      company: "University IT Department",
      period: "January 2024 - May 2024",
      description: "Provided technical support to students and faculty while learning about network security and system administration.",
      responsibilities: [
        "Troubleshot hardware and software issues",
        "Assisted with network configuration and maintenance",
        "Learned about Active Directory and user management",
        "Supported cybersecurity awareness initiatives"
      ]
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
          animate="visible"
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
                whileHover={{ y: -5 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveLink} className="project-link">
                        <EyeIcon className="icon" />
                      </a>
                      <a href={project.codeLink} className="project-link">
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

        {/* Experience Section */}
        <motion.div
          className="experience-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="section-header">
            <h2>Experience</h2>
            <p>Professional experience in cybersecurity and IT support</p>
          </div>

          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
              >
                <div className="experience-icon">
                  <BriefcaseIcon className="icon" />
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3>{experience.title}</h3>
                    <div className="experience-meta">
                      <span className="company">{experience.company}</span>
                      <span className="period">
                        <CalendarDaysIcon className="calendar-icon" />
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  <p className="experience-description">{experience.description}</p>
                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
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