import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['542, Soi 3, Tha Sut', 'Amphoe Mueang Chiang Rai 57100', 'Thailand']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['saisanmine.contact@gmail.com', 'sai.mine@mfu.ac.th']
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+66 94 445 7245']
    }
  ];    const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SaiSanmine'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sai-san-mine'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/saisanmine'
    },
    {
      name: 'LINE',
      url: 'https://line.me/ti/p/saisanmine'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Let's discuss your cybersecurity needs and how I can help secure your digital assets
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Get In Touch</h3>
            <p className="contact-description">
              I'm always interested in discussing new opportunities in cybersecurity, 
              secure development, and collaborative projects. Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = info.link ? (
                  <a href={info.link} className="contact-link">
                    <div className="contact-item">
                      <div className="contact-icon" style={{ backgroundColor: info.color }}>
                        <IconComponent />
                      </div>
                      <div className="contact-text">
                        <h4>{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="contact-item">
                    <div className="contact-icon" style={{ backgroundColor: info.color }}>
                      <IconComponent />
                    </div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ backgroundColor: link.color }}
                      title={link.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-content">
                <FaMapMarkerAlt className="map-icon" />
                <p>Interactive Map Placeholder</p>
                <small>Chiang Rai, Thailand</small>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-header">
              <h3>Send Message</h3>
              <p>I'll get back to you within 24 hours</p>
            </div>

            {isSubmitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaCheckCircle />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's the subject of your message?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>
            Whether you need cybersecurity consultation, secure development, 
            or technical collaboration, I'm here to help bring your vision to life.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Schedule Call</button>
            <button className="btn btn-outline">View Portfolio</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;