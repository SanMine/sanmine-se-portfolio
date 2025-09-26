import React from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  UserIcon,
  CpuChipIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { FaLine, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { 
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  CpuChipIcon as CpuChipIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  EnvelopeIcon as EnvelopeIconSolid
} from '@heroicons/react/24/solid';
import './Sidebar.css';
import Profile from '../assets/Profile.png';

const Sidebar = ({ activeSection, scrollToSection }) => {
  // Enhanced animation variants
  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Simplified, elegant animation variants

  const navItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + (i * 0.05),
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      color: "#f59e0b", /* amber-500 */
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  // Enhanced scroll function with smooth behavior
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: HomeIcon, solidIcon: HomeIconSolid },
    { id: 'about', label: 'About', icon: UserIcon, solidIcon: UserIconSolid },
    { id: 'skills', label: 'Skills', icon: CpuChipIcon, solidIcon: CpuChipIconSolid },
    { id: 'projects-experience', label: 'Projects', icon: BriefcaseIcon, solidIcon: BriefcaseIconSolid },
    { id: 'services', label: 'Services', icon: Cog6ToothIcon, solidIcon: Cog6ToothIconSolid },
    { id: 'certifications', label: 'Certifications', icon: AcademicCapIcon, solidIcon: AcademicCapIconSolid },
    { id: 'contact', label: 'Contact', icon: EnvelopeIcon, solidIcon: EnvelopeIconSolid }
  ];

  const contactLinks = [
    { icon: EnvelopeIcon, label: 'Email', href: 'mailto:saisanmine.nov@gmail.com' },
    { icon: PhoneIcon, label: 'Phone', href: 'tel:+66923377538' },
    { icon: FaLine, label: 'Line', href: 'https://line.me/ti/p/~saisanmine' },
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com/saisanmine' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/saisanmine' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/saisanmine' }
  ];

  return (
    <motion.aside 
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div 
          className="sidebar-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >

          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <img 
              src={Profile} 
              alt="Sai San Mine" 
              className="profile-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjNDI0MjQyIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03NSAxMDBDNTUuNSAxMDAgNDAgMTE1IDQwIDEzNUgxMTBDMTEwIDExNSA5NC41IDEwMCA3NSAxMDBaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=';
              }}
            />
          </motion.div>

          <div className="profile-text-container">
            <motion.h2 
              className="name"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                color: "#f59e0b", /* amber-500 */
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              Sai San Mine
            </motion.h2>
            
            <motion.p 
              className="title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Cybersecurity Engineer Trainee/Intern
            </motion.p>
          </div>
        </motion.div>
      <nav className="sidebar-nav">
        {navigationItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const IconComponent = isActive ? item.solidIcon : item.icon;
          return (
            <motion.button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleScrollToSection(item.id)}
              variants={navItemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                color: "#f59e0b",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <IconComponent className="nav-icon" />
              <span className={`nav-label ${isActive ? 'underlined' : ''}`}>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <motion.div 
        className="contact-icons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, staggerChildren: 0.1 }}
      >
        {contactLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: 1.3 + (index * 0.1) }
              }}
            >
              <IconComponent className="icon" />
            </motion.a>
          );
        })}
      </motion.div>


    </motion.aside>
  );
};

export default Sidebar;