import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';
import './About.css';
import profileImage from '../assets/about.png';
// Import from public folder for better static asset handling
const resumePdf = '/MyResume.pdf';
const transcriptPdf = '/Transcript.pdf';


const About = () => {
  const handleViewPDF = (pdfUrl, title) => {
    // Add timestamp cache-busting at click time for maximum freshness
    const cacheBustedUrl = `${pdfUrl}?t=${Date.now()}&v=3`;
    window.open(cacheBustedUrl, '_blank', 'noopener,noreferrer');
  };

  const personalDetails = [
    { icon: AcademicCapIcon, label: 'Degree', value: 'B.Eng. Software Engineering' },
    { icon: BuildingLibraryIcon, label: 'University', value: 'Mae Fah Luang University (MFU)' },
    { icon: CalendarIcon, label: 'Years', value: '2022 - 2026' },
    { icon: ChartBarIcon, label: 'GPA', value: '3.52' },
    { icon: EnvelopeIcon, label: 'Email', value: 'saisanmine.nov@gmail.com' },
    { icon: PhoneIcon, label: 'Phone', value: '+66-923-377-538' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        {/* About Me Section - Match Certifications main section structure */}
        <motion.div
          className="about-main-section"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know more about my background and expertise</p>
          </div>
          
          <motion.div
            className="about-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-me-card">
              <figure className="portrait-frame">
                <img 
                  src={profileImage}
                  alt="Sai San Mine portrait" 
                  loading="lazy"
                />
                <figcaption className="sr-only">Portrait photo of Sai San Mine</figcaption>
              </figure>
              
              <div className="about-content-text">
                <h3>Software Engineer</h3>
                <div className="bio-text">
                  <p>
                    I'm SAI SAN MINE (Frank), a fourth-year Software Engineering student at Mae Fah Luang University with a deep passion for creating real-world software solutions. My learning journey has led me through full-stack development using technologies like HTML, CSS, JavaScript, React, Node.js, Java, and Flutter, supported by databases such as MySQL, MongoDB, and Firebase.
                  </p>
                  <p>
                    I've worked on various academic and volunteer projects — from building automation tools to developing mobile and web applications — that strengthened my understanding of both front-end design and back-end logic. Along the way, I've explored tools like GitHub, Docker, and Postman, and applied project management principles based on the Software Development Life Cycle (SDLC).
                  </p>
                  <p>
                    Though I'm still growing as a developer, I take pride in being curious, adaptable, and eager to learn from every challenge. My goal is to become a professional Software Engineer who builds secure, reliable, and fantastic software that makes a positive impact on people's lives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section - Match Hackathons & Activities section structure exactly */}
        <motion.div
          className="education-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <h3>Education</h3>
            <p>Get to know more about my academic journey and credentials</p>
          </div>

          <motion.div
            className="education-grid"
            variants={containerVariants}
          >
            <div className="education-card">
              <div className="bg-white p-8 rounded-xl custom-shadow border">
                {/* Personal Details - Vertical List Container */}
                <div className="space-y-4">
                  {personalDetails.map((detail, index) => {
                    const IconComponent = detail.icon;
                    const isLast = index === personalDetails.length - 1;
                    
                    return (
                      <motion.div
                        key={index}
                        className={`flex justify-between items-center py-3 ${!isLast ? 'border-b border-stone-200' : ''}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {/* Left Side (Icon and Label) */}
                        <div className="flex items-center space-x-4">
                          <IconComponent className="w-5 h-5 text-zinc-500" />
                          <strong className="text-base font-medium text-zinc-600">{detail.label}</strong>
                        </div>
                        
                        {/* Right Side (The Value) */}
                        <span className="text-right font-medium text-base text-zinc-700">
                          {detail.value}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <div className="view-buttons-container">
                <motion.button
                  onClick={() => handleViewPDF(resumePdf, 'Resume')}
                  className="view-button btn-primary"
                  data-testid="view-resume-btn"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    transition: { 
                      type: "spring", 
                      stiffness: 400,
                      damping: 30,
                      duration: 0.1
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { 
                      type: "spring", 
                      stiffness: 600, 
                      damping: 25,
                      duration: 0.05
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  View Resume
                </motion.button>
                
                <motion.button
                  onClick={() => handleViewPDF(transcriptPdf, 'Transcript')}
                  className="view-button btn-secondary"
                  data-testid="view-transcript-btn"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    transition: { 
                      type: "spring", 
                      stiffness: 400,
                      damping: 30,
                      duration: 0.1
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { 
                      type: "spring", 
                      stiffness: 600, 
                      damping: 25,
                      duration: 0.05
                    }
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                >
                  View Transcript
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;