import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  BugAntIcon,
  EyeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments to identify and address potential vulnerabilities in your systems and networks.',
      features: ['Network vulnerability scanning', 'Web application security testing', 'Configuration review', 'Risk assessment and prioritization']
    },
    {
      icon: BugAntIcon,
      title: 'Penetration Testing',
      description: 'Ethical hacking services to test your security defenses and identify potential entry points for malicious actors.',
      features: ['External penetration testing', 'Internal network testing', 'Social engineering assessments', 'Detailed reporting with remediation steps']
    },
    {
      icon: EyeIcon,
      title: 'Security Monitoring',
      description: '24/7 monitoring and incident response services to detect and respond to security threats in real-time.',
      features: ['SIEM implementation and management', 'Threat hunting and analysis', 'Incident response planning', 'Security awareness training']
    },
    {
      icon: DocumentTextIcon,
      title: 'Compliance & Documentation',
      description: 'Ensuring your organization meets regulatory requirements and maintains proper security documentation.',
      features: ['Compliance gap analysis', 'Policy and procedure development', 'Audit preparation and support', 'Security framework implementation']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="services-container" id="services">
      <div className="services-content">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Services</h2>
          <p>Specialized cybersecurity services and secure development solutions</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="service-icon">
                  <IconComponent className="icon" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;