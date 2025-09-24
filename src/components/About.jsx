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

const About = () => {
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
            animate={{ opacity: 1, y: 0 }}
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
                </p>
                <p>
                    I have built a solid foundation in web development, 
                    databases, and security tools, which gives me a unique perspective on building and defending modern systems. 
                    I recently completed the CCNA course on Udemy (certificate of completion) 
                    and am currently preparing for the ISC2 Certified in Cybersecurity (CC) exam.
                </p>
                <p>
               To further expand my skills, 
               I am actively studying Junior Penetration Tester and SOC Level 1 learning paths on TryHackMe, 
               with plans to take advanced courses in Incident Response and Digital Forensics through Coursera.
                </p>
                <p>
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
            animate={{ opacity: 1, y: 0 }}
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
            
            <motion.a
              href={Resume}
              className="btn btn-primary download-resume"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;