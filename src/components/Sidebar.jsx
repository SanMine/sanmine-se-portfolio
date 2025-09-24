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
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className="sidebar-header">
        <div className="profile-image">
            <img 
            src={Profile} 
            alt="Sai San Mine" 
            onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjNDI0MjQyIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03NSAxMDBDNTUuNSAxMDAgNDAgMTE1IDQwIDEzNUgxMTBDMTEwIDExNSA5NC41IDEwMCA3NSAxMDBaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=';
            }}
            />
        </div>
        <h2 className="name">Sai San Mine</h2>
        <p className="title">Cybersecurity Engineer Trainee/Intern</p>
        </div>
      <nav className="sidebar-nav">
        {navigationItems.map((item) => {
          const isActive = activeSection === item.id;
          const IconComponent = isActive ? item.solidIcon : item.icon;
          return (
            <motion.button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconComponent className="nav-icon" />
              <span className={`nav-label ${isActive ? 'underlined' : ''}`}>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="contact-icons">
        {contactLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <IconComponent className="icon" />
            </a>
          );
        })}
      </div>


    </motion.aside>
  );
};

export default Sidebar;