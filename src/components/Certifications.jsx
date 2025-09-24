import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ShieldCheckIcon, 
  DocumentTextIcon,
  XMarkIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "In Progress",
      status: "in-progress",
      description: "Industry-standard certification covering cybersecurity fundamentals, risk management, and network security.",
      skills: ["Network Security", "Risk Management", "Cryptography", "Identity Management"],
      badge: "/cert-security-plus.png",
      certificate: null
    },
    {
      title: "Ethical Hacking Fundamentals",
      issuer: "Cybrary",
      date: "March 2024",
      status: "completed",
      description: "Comprehensive course covering ethical hacking methodologies, penetration testing, and vulnerability assessment.",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering", "Web Application Security"],
      badge: "/cert-ethical-hacking.png",
      certificate: "/cert-ethical-hacking.pdf"
    },
    {
      title: "Network Security Essentials",
      issuer: "Cisco Networking Academy",
      date: "February 2024",
      status: "completed",
      description: "Foundational knowledge in network security principles, firewalls, VPNs, and intrusion detection systems.",
      skills: ["Firewall Configuration", "VPN Setup", "IDS/IPS", "Network Monitoring"],
      badge: "/cert-network-security.png",
      certificate: "/cert-network-security.pdf"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "January 2024",
      status: "completed",
      description: "Overview of cybersecurity landscape, common threats, and basic security practices.",
      skills: ["Threat Analysis", "Security Awareness", "Digital Forensics", "Incident Response"],
      badge: "/cert-intro-cybersecurity.png",
      certificate: "/cert-intro-cybersecurity.pdf"
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

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const openCertificate = (cert) => {
    if (cert.certificate) {
      setSelectedCert(cert);
    }
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <div className="certifications-container" id="certifications">
      <div className="certifications-content">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Certifications</h2>
          <p>Professional certifications and training in cybersecurity</p>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`certification-card ${cert.status}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  {cert.status === 'completed' ? (
                    <AcademicCapIcon className="icon completed" />
                  ) : (
                    <ShieldCheckIcon className="icon in-progress" />
                  )}
                </div>
                <div className="cert-status">
                  <span className={`status-badge ${cert.status}`}>
                    {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>

              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>

                {cert.certificate && (
                  <div className="cert-actions">
                    <button
                      className="view-cert-btn"
                      onClick={() => openCertificate(cert)}
                    >
                      <DocumentTextIcon className="icon" />
                      View Certificate
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="cert-modal-overlay"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeCertificate}
            >
              <motion.div
                className="cert-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>{selectedCert.title}</h3>
                  <button className="close-btn" onClick={closeCertificate}>
                    <XMarkIcon className="icon" />
                  </button>
                </div>
                <div className="modal-content">
                  <div className="cert-preview">
                    <iframe
                      src={selectedCert.certificate}
                      title={`${selectedCert.title} Certificate`}
                      width="100%"
                      height="500"
                    />
                  </div>
                  <div className="modal-actions">
                    <a
                      href={selectedCert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <EyeIcon className="icon" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Certifications;