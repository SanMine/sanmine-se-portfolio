import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaShieldAlt, FaRobot, FaUsers } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Academic Workflow Automation',
      category: 'automation',
      image: '/placeholder-project1.jpg',
      description: 'Automated system to streamline academic processes and improve efficiency.',
      fullDescription: 'Developed a comprehensive automation system that streamlines various academic processes including data entry, report generation, and workflow management. The system reduced manual work by 60% and significantly improved data accuracy.',
      technologies: ['Python', 'APIs', 'Automation Tools', 'Database'],
      features: ['Process Automation', 'Data Integration', 'Report Generation', 'Error Handling'],
      githubUrl: 'https://github.com/saisanmine/academic-automation',
      liveUrl: 'https://academic-automation.demo.com',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'AI Assistant Chatbot',
      category: 'ai',
      image: '/placeholder-project2.jpg',
      description: 'Intelligent chatbot with natural language processing capabilities.',
      fullDescription: 'Built an advanced AI-powered chatbot that can understand context, provide intelligent responses, and assist users with various queries. Implemented using modern AI/ML technologies with a focus on user experience.',
      technologies: ['Node.js', 'AI/ML APIs', 'JavaScript', 'MongoDB', 'Express.js'],
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Learning Capabilities'],
      githubUrl: 'https://github.com/saisanmine/ai-chatbot',
      liveUrl: 'https://ai-chatbot.demo.com',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Oonjai Volunteer Platform',
      category: 'web',
      image: '/placeholder-project3.jpg',
      description: 'Community platform connecting volunteers with service opportunities.',
      fullDescription: 'Contributed to a comprehensive volunteer management platform that connects volunteers with community service opportunities. Features include user registration, event management, and community engagement tools.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
      features: ['User Management', 'Event Scheduling', 'Community Features', 'Real-time Updates'],
      githubUrl: 'https://github.com/saisanmine/oonjai-platform',
      liveUrl: 'https://oonjai.demo.com',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Lumiq Dormitory Management',
      category: 'web',
      image: '/placeholder-project4.jpg',
      description: 'Comprehensive dormitory management system for student accommodation.',
      fullDescription: 'Developed a full-featured dormitory management system that handles room bookings, payment processing, maintenance requests, and administrative tasks. The system improved operational efficiency by 40%.',
      technologies: ['Full-stack Development', 'Payment Gateway', 'Database Design', 'Admin Dashboard'],
      features: ['Booking System', 'Payment Integration', 'Maintenance Tracking', 'Admin Panel'],
      githubUrl: 'https://github.com/saisanmine/lumiq-dormitory',
      liveUrl: 'https://lumiq.demo.com',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Network Security Scanner',
      category: 'security',
      image: '/placeholder-project5.jpg',
      description: 'Security tool for network vulnerability assessment.',
      fullDescription: 'Developed a network security scanner that identifies vulnerabilities, performs port scanning, and generates comprehensive security reports. Built as part of cybersecurity training with focus on ethical hacking practices.',
      technologies: ['Python', 'Nmap', 'Security Libraries', 'Report Generation'],
      features: ['Port Scanning', 'Vulnerability Detection', 'Report Generation', 'Network Mapping'],
      githubUrl: 'https://github.com/saisanmine/network-scanner',
      liveUrl: '#',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Web Security Testing Suite',
      category: 'security',
      image: '/placeholder-project6.jpg',
      description: 'Automated web application security testing tools.',
      fullDescription: 'Created a suite of tools for automated web application security testing, including SQL injection detection, XSS vulnerability scanning, and security header analysis. Implements OWASP Top 10 security standards.',
      technologies: ['Python', 'Burp Suite', 'Security Testing', 'OWASP'],
      features: ['SQL Injection Testing', 'XSS Detection', 'Security Headers Check', 'OWASP Compliance'],
      githubUrl: 'https://github.com/saisanmine/web-security-suite',
      liveUrl: '#',
      status: 'In Progress'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'web', label: 'Web Development', icon: FaCode },
    { id: 'security', label: 'Cybersecurity', icon: FaShieldAlt },
    { id: 'ai', label: 'AI & Automation', icon: FaRobot },
    { id: 'automation', label: 'Automation', icon: FaUsers }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Showcasing my journey in software development and cybersecurity
          </p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <IconComponent />
                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project)}
              >
                <div className="project-image">
                  <img 
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNDI0MjQyIi8+CjxyZWN0IHg9IjE1MCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-status">
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '')}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="project-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeProject}>
                <FaTimes />
              </button>
              
              <div className="modal-header">
                <div className="modal-image">
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNDI0MjQyIi8+CjxyZWN0IHg9IjE1MCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K`;
                    }}
                  />
                </div>
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <span className={`status-badge ${selectedProject.status.toLowerCase().replace(' ', '')}`}>
                    {selectedProject.status}
                  </span>
                  <p className="modal-description">{selectedProject.fullDescription}</p>
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;