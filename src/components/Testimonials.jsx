import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Professor of Computer Science',
      company: 'Mae Fah Luang University',
      image: '/placeholder-testimonial1.jpg',
      rating: 5,
      content: 'Sai San Mine has consistently demonstrated exceptional understanding of cybersecurity principles and secure coding practices. His work on academic automation projects shows remarkable attention to detail and security considerations.',
      highlights: ['Exceptional Security Knowledge', 'Attention to Detail', 'Academic Excellence']
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Senior Security Analyst',
      company: 'CyberSafe Solutions',
      image: '/placeholder-testimonial2.jpg',
      rating: 5,
      content: 'Working with Sai San Mine on security assessments has been impressive. His analytical approach to identifying vulnerabilities and proposing practical solutions demonstrates strong potential in the cybersecurity field.',
      highlights: ['Analytical Thinking', 'Practical Solutions', 'Security Assessment Skills']
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      position: 'Project Manager',
      company: 'Tech Innovation Hub',
      image: '/placeholder-testimonial3.jpg',
      rating: 5,
      content: 'Sai San Mine\'s contribution to our volunteer platform project was outstanding. He implemented secure authentication systems and followed best practices for data protection. His code quality and security awareness are exemplary.',
      highlights: ['Secure Development', 'Code Quality', 'Best Practices']
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Testimonials</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            What colleagues and mentors say about my work and dedication
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-highlights">
                  {testimonial.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjNDI0MjQyIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjE1IiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik00MCA1MEMyNSA1MCAyMCA1NSAyMCA2NUg2MEM2MCA1NSA1NSA1MCA0MCA1MFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==';
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5⭐</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </motion.div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Work With Me</h3>
          <p>
            Ready to collaborate on your next cybersecurity project or secure development initiative? 
            Let's discuss how I can contribute to your team's success.
          </p>
          <button className="btn btn-primary">Start a Project</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;