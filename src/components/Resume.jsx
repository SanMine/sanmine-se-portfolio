import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaDownload, FaTimes } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Mae Fah Luang University (MFU)',
      period: '2022 - 2026',
      gpa: '3.52',
      description: 'Comprehensive program covering software development, database management, web technologies, and cybersecurity fundamentals.',
      highlights: ['Database Design & Management', 'Web Development', 'Software Engineering Principles', 'Network Security Basics']
    }
  ];

  const experience = [
    {
      title: 'Academic Workflow Automation',
      type: 'Personal Project',
      period: '2024',
      description: 'Developed automated systems to streamline academic processes and improve efficiency.',
      technologies: ['Python', 'APIs', 'Automation Tools'],
      achievements: ['Reduced manual work by 60%', 'Improved data accuracy', 'Enhanced workflow efficiency']
    },
    {
      title: 'AI Assistant Chatbot',
      type: 'Development Project',
      period: '2024',
      description: 'Built an intelligent chatbot using modern AI technologies for enhanced user interaction.',
      technologies: ['Node.js', 'AI/ML APIs', 'JavaScript', 'Database'],
      achievements: ['Natural language processing', 'Context-aware responses', 'User-friendly interface']
    },
    {
      title: 'Oonjai Volunteer Platform',
      type: 'Community Project',
      period: '2023',
      description: 'Contributed to a volunteer management platform connecting volunteers with community service opportunities.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      achievements: ['User registration system', 'Event management features', 'Community engagement tools']
    },
    {
      title: 'Lumiq Dormitory Management Platform',
      type: 'Web Application',
      period: '2023',
      description: 'Developed a comprehensive dormitory management system for student accommodation.',
      technologies: ['Full-stack Development', 'Database Design', 'User Authentication'],
      achievements: ['Booking system', 'Payment integration', 'Admin dashboard']
    }
  ];

  const certifications = [
    {
      name: 'CCNA (Cisco Certified Network Associate)',
      issuer: 'Cisco',
      status: 'In Progress',
      period: '2024 - Present',
      description: 'Comprehensive networking certification covering routing, switching, and network security.',
      pdfUrl: '/certificates/ccna-progress.pdf'
    },
    {
      name: 'Web Security Fundamentals',
      issuer: 'Udemy',
      status: 'Completed',
      period: '2024',
      description: 'Comprehensive course covering web application security, OWASP Top 10, and security testing.',
      pdfUrl: '/certificates/web-security-udemy.pdf'
    },
    {
      name: 'Automation & APIs',
      issuer: 'Creatigon',
      status: 'Completed',
      period: '2024',
      description: 'Advanced training in automation tools, API development, and integration techniques.',
      pdfUrl: '/certificates/automation-apis-creatigon.pdf'
    }
  ];

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="resume">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="resume-content">
          <motion.div
            className="resume-summary"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Professional Summary</h3>
            <p>
              Dedicated Software Engineering student with a strong foundation in web development 
              and a growing expertise in cybersecurity. Currently pursuing CCNA certification 
              and expanding knowledge in network security, penetration testing, and secure 
              application development. Passionate about creating secure, efficient solutions 
              and automating complex workflows.
            </p>
            <div className="resume-stats">
              <div className="stat-item">
                <span className="stat-number">3.52</span>
                <span className="stat-label">Current GPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </motion.div>

          <div className="resume-timeline">
            <motion.div
              className="timeline-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3><FaGraduationCap /> Education</h3>
              <div className="timeline">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{item.degree}</h4>
                        <span className="timeline-period">{item.period}</span>
                      </div>
                      <h5>{item.institution}</h5>
                      <p className="gpa">GPA: {item.gpa}</p>
                      <p>{item.description}</p>
                      <div className="highlights">
                        {item.highlights.map((highlight, idx) => (
                          <span key={idx} className="highlight-tag">{highlight}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="timeline-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3><FaBriefcase /> Projects & Experience</h3>
              <div className="timeline">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{item.title}</h4>
                        <span className="timeline-period">{item.period}</span>
                      </div>
                      <h5>{item.type}</h5>
                      <p>{item.description}</p>
                      <div className="technologies">
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <ul className="achievements">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="timeline-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3><FaCertificate /> Certifications</h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certification-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => openCertificate(cert)}
                  >
                    <div className="cert-header">
                      <h4>{cert.name}</h4>
                      <span className={`cert-status ${cert.status.toLowerCase().replace(' ', '')}`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-period">{cert.period}</p>
                    <p className="cert-description">{cert.description}</p>
                    <button className="view-cert-btn">
                      <FaDownload /> View Certificate
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="download-cv"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="btn btn-primary">
            <FaDownload /> Download Full CV
          </button>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div
              className="certificate-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeCertificate}>
                <FaTimes />
              </button>
              <h3>{selectedCertificate.name}</h3>
              <p>This is a placeholder for the certificate PDF viewer.</p>
              <p>In production, this would display the actual certificate PDF.</p>
              <div className="cert-details">
                <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
                <p><strong>Period:</strong> {selectedCertificate.period}</p>
                <p><strong>Status:</strong> {selectedCertificate.status}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;