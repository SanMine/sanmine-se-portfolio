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
import Profile from '../assets/Profile.png';
import Resume from '../pdf/Resume.pdf';
import Transcript from '../pdf/Transcript.pdf';

const About = () => {
  const handleViewPDF = (pdfUrl, title) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const personalDetails = [
    { icon: AcademicCapIcon, label: 'Degree', value: 'B.Sc. Software Engineering' },
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

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p className="about-subtitle">Get to know more about my background and expertise</p>
        </motion.div>

        {/* Photo and Bio Section */}
        <div className="about-main">
          <motion.div
            className="photo-bio-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="photo-container">
              <div className="profile-photo">
                <img src={Profile} alt="Sai San Mine" />
              </div>
            </div>
            
            <div className="bio-container">
              <h3>Cybersecurity Engineer Trainee/Intern</h3>
              <div className="bio-text">
                <p>
                  I am a dedicated Software Engineering student at Mae Fah Luang University 
                  with a strong passion for cybersecurity. 
                  While my academic journey began in software engineering and web development, 
                  I have discovered my true calling in securing systems, networks, and applications.
                  I have built a solid foundation in web development, 
                    databases, and security tools, which gives me a unique perspective on building and defending modern systems. 
                    I recently completed the CCNA course on Udemy (certificate of completion) 
                    and am currently preparing for the ISC2 Certified in Cybersecurity (CC) exam.
                </p>
                <p>
               To further expand my skills, 
               I am actively studying Junior Penetration Tester and SOC Level 1 learning paths on TryHackMe, 
               with plans to take advanced courses in Incident Response and Digital Forensics through Coursera.
                By blending my background in software engineering with my growing expertise in cybersecurity, 
                 I aim to become a skilled Cybersecurity Engineer who can design, 
                 build, and protect secure systems in today's ever-evolving threat landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Education</h3>
            {/* Main Card Container */}
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
                      transition={{ delay: 0.6 + index * 0.1 }}
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
                onClick={() => handleViewPDF(Resume, 'Resume')}
                className="btn btn-primary view-button"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 12px 35px rgba(25, 118, 210, 0.4)",
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                View Resume
              </motion.button>
              
              <motion.button
                onClick={() => handleViewPDF(Transcript, 'Transcript')}
                className="btn btn-secondary view-button"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 12px 35px rgba(38, 222, 129, 0.4)",
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                View Transcript
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;