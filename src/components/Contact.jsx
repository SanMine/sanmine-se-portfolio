import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
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
  const [submitError, setSubmitError] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xmseWWr5kU87XRzB-';
    emailjs.init(publicKey);
    console.log('EmailJS initialized with public key:', publicKey.substring(0, 5) + '...');
  }, []);

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['542, Soi 3, Tha Sut', 'Amphoe Mueang Chiang Rai 57100', 'Chang Wat Chiang Rai', 'Thailand']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['saisanmine.nov@gmail.com', '6531503177@lamduan.mfu.ac.th']
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+66-923-377-538']
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SanMine?tab=overview&from=2024-12-01&to=2024-12-31'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-san-mine-8054ba259/'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/176j5X36ER/?mibextid=wwXIfr'
    },
    {
      name: 'LINE',
      url: 'https://line.me/ti/p/gpeVlqEiAB'
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
    setSubmitError('');
    
    // EmailJS configuration - Correct service and template IDs
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hsdecxb';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_q9osgu5';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xmseWWr5kU87XRzB-';
    
    const templateParams = {
      name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    // Debug log to check configuration
    console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey.substring(0, 5) + '...' });
    console.log('Template Params:', templateParams);
    
    try {
      console.log('Attempting to send email with EmailJS...');
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS Success:', result);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      setIsSubmitting(false);
      
      // More specific error messages
      let errorMessage = 'Failed to send message. ';
      if (error.status === 422) {
        errorMessage += 'Template configuration error. Check template variables.';
      } else if (error.status === 400) {
        errorMessage += `Invalid request (400). Service ID: ${serviceId}, Template ID: ${templateId}`;
      } else if (error.status === 401) {
        errorMessage += 'Unauthorized. Check your public key.';
      } else if (error.status === 404) {
        errorMessage += 'Service or template not found. Check your IDs.';
      } else if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else {
        errorMessage += `Unknown error (Status: ${error.status || 'N/A'})`;
      }
      
      setSubmitError(errorMessage);
      
      // Clear error message after 15 seconds for debugging
      setTimeout(() => {
        setSubmitError('');
      }, 15000);
    }
  };

  return (
    <div className="contact-container section" id="contact">
      <div className="contact-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's discuss your cybersecurity needs and how I can help secure your digital assets</p>
        </motion.div>

        <div className="section-content contact-main">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Get In Touch</h3>
            <p className="contact-description">
              I'm always interested in discussing new opportunities in cybersecurity, 
              secure development, and collaborative projects. 
              Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="contact-icon">
                      <IconComponent className="icon" />
                    </div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircleIcon className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <>
                {submitError && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExclamationTriangleIcon className="error-icon" />
                    <p>{submitError}</p>
                  </motion.div>
                )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
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
                    placeholder="Brief subject of your message"
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
                      <PaperAirplaneIcon className="icon" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <motion.div
        className="copyright-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p>© 2025 SAI SAN MINE. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default Contact;