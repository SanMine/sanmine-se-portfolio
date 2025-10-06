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
// Use public folder for both PDFs and images to avoid build issues
const ccnaPdf = '/CCNA_complete_cert.pdf';
const CCPdf = '/CC.pdf';
const JIWC = '/JIWC.pdf';
const BrightTalk = '/brightTalk.pdf';
const Ai = '/Ai.pdf';
const ccnaImage = '/ccnaImage.png';
const hackathonImage = '/hackathon.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Udemy",
      status: "completed",
      description: "Successfully completed the CCNA training course, gaining hands-on knowledge of networking fundamentals, IP addressing, subnetting, routing and switching concepts, network security, and troubleshooting techniques. This course provided a strong foundation for designing, configuring, and managing modern computer networks.",
      image: ccnaPdf,
      certificate: ccnaPdf
    },
    {
      title: "CC – Certified in Cybersecurity",
      issuer: "ISC2",
      status: "completed",
      description: "Completed the ISC2 Certified in Cybersecurity (CC) training program, covering essential cybersecurity concepts including security principles, network security, access control, risk management, and incident response. Currently preparing to take the official certification exam to validate knowledge and skills.",
      image: CCPdf,
      certificate: CCPdf
    },
      {
      title: "AI for ALL",
      issuer: "CBTU and Mahidol University",
      status: "completed",
      description: "Completed the AI for ALL program, gaining insight into the ethical use of artificial intelligence and its applications across diverse fields. The program included collaborative projects and real-world case studies, fostering practical skills in applying AI solutions responsibly.",
      image: Ai,
      certificate: Ai
    },
      {
      title: "Jr Penetration Tester",
      issuer: "TryHackMe",
      status: "in Progress",
      description: "Currently progressing through the TryHackMe Jr Penetration Tester learning path, developing core skills in ethical hacking, vulnerability assessment, and penetration testing. This program focuses on practical, hands-on labs covering web application security, network exploitation, and enterprise infrastructure assessments.",
      image: "/cert-network-security.png",
      certificate: null
    },
    {
      title: "Web-security",
      issuer: "Creatigon",
      status: "in Progress",
      description: "Engaged in the Creatigon Web-security program, building foundational expertise in ethical hacking, vulnerability assessment, and penetration testing. The curriculum emphasizes practical, hands-on labs covering web application security, network exploitation, and enterprise infrastructure testing.",
      image: "/cert-network-security.png",
      certificate: null
    }
  ];

  const participationCertifications = [
    {
      title: "Systems Security Certified Practitioner (SSCP) Info Session",
      issuer: "ISC2 BrightTalk",
      status: "completed",
      description: "Attended a live ISC2 BrightTalk briefing on the SSCP covering domain scope, exam blueprint, study resources, and career pathways. Clarified preparation strategy across access control, network security, incident response, risk, and operations.",
      image: BrightTalk,
      certificate: BrightTalk
    },
    {
      title: "Joint International Workshop and Competition 2025 on AI & Game",
      issuer: "JIWC",
      status: "completed",
      description: "Participating in lectures and hands-on labs on AI for games (search, heuristics, pathfinding, RL). Built and tested a playable agent/bot; collaborated with cross-university teams for the competition submission.",
      image: JIWC,
      certificate: JIWC
    },
    {
      title: "Software Engineering Hackathon 2024",
      issuer: "Mae Fah Luang University",
      status: "completed",
      description: "Mentored junior teams on software architecture, SDLC, and Business Model Canvas (BMC); supported health-focused web app design, prototyping, and demo preparation.",
      image: hackathonImage
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
      // Small delay to ensure modal is rendered before trying to load PDF
      setTimeout(() => {
        // Try to trigger PDF load in iframe
        const iframe = document.querySelector('.cert-preview iframe');
        if (iframe) {
          iframe.src = `${cert.certificate}#view=FitH&toolbar=0`;
        }
      }, 100);
    }
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <div className="certifications-container section" id="certifications">
      <div className="certifications-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and training in cybersecurity</p>
        </motion.div>

        <motion.div
          className="section-content certifications-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`certification-card ${cert.status.replace(/\s+/g, '-').toLowerCase()}`}
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
                  <span className={`status-badge ${cert.status.replace(/\s+/g, '-').toLowerCase()}`}>
                    {cert.status === 'completed' ? 'Completed' : 'IN PROGRESS'}
                  </span>
                </div>
              </div>

              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>

                {(cert.certificate || cert.image) && cert.status !== 'in Progress' && (
                  <div className="cert-actions">
                    <button
                      className="view-cert-btn"
                      onClick={() => {
                        if (cert.certificate) {
                          openCertificate(cert);
                        } else if (cert.image) {
                          window.open(cert.image, '_blank');
                        }
                      }}
                    >
                      <DocumentTextIcon className="icon" />
                      {cert.certificate ? 'View Certificate' : 'View Image'}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Participation Certifications Section */}
        <motion.div
          className="participation-certifications-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <h3>Hackathons & Activities</h3>
            <p>Evidence of practical participation and outcomes</p>
          </div>

          <motion.div
            className="certifications-grid"
            variants={containerVariants}
          >
            {participationCertifications.map((cert, index) => (
              <motion.div
                key={`participation-${index}`}
                className={`certification-card ${cert.status.replace(/\s+/g, '-').toLowerCase()}`}
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
                    <span className={`status-badge ${cert.status.replace(/\s+/g, '-').toLowerCase()}`}>
                      {cert.status === 'completed' ? 'Completed' : 'IN PROGRESS'}
                    </span>
                  </div>
                </div>

                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>

                  {(cert.certificate || cert.image) && (
                    <div className="cert-actions">
                      <button
                        className="view-cert-btn"
                        onClick={() => {
                          if (cert.certificate) {
                            openCertificate(cert);
                          } else if (cert.image) {
                            window.open(cert.image, '_blank');
                          }
                        }}
                      >
                        <DocumentTextIcon className="icon" />
                        {cert.certificate ? 'View Certificate' : 'View Image'}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                    <div className="pdf-preview-container">
                      <iframe
                        src={`${selectedCert.certificate}#view=FitH`}
                        title={`${selectedCert.title} Certificate`}
                        width="100%"
                        height="500"
                        style={{
                          border: 'none',
                          borderRadius: '8px',
                          backgroundColor: '#f5f5f5'
                        }}
                        onError={(e) => {
                          // If iframe fails, hide it and show fallback message
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <div 
                        className="pdf-fallback"
                        style={{
                          display: 'none',
                          textAlign: 'center',
                          padding: '60px 20px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '8px',
                          border: '2px dashed #dee2e6'
                        }}
                      >
                        <DocumentTextIcon style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: '#6c757d' }} />
                        <p style={{ color: '#6c757d', marginBottom: '16px' }}>
                          PDF preview not available in this browser.
                        </p>
                        <p style={{ color: '#495057', fontSize: '14px' }}>
                          Click "Open in New Tab" below to view the certificate.
                        </p>
                      </div>
                    </div>
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