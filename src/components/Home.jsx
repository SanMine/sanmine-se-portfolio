import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Background from '../assets/Background.png';
import './Home.css';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "I'm a Software Engineering Student",
    "I'm an Aspiring Penetration Tester",
  ];

  useEffect(() => {
    const tick = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);





  // Scroll indicator animation
  const scrollIndicatorVariants = {
    bounce: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 2.5
      }
    }
  };

  return (
    <section className="home">
      <div className="hero-background" style={{ backgroundImage: `url(${Background})` }}>
        <div className="hero-overlay"></div>
        
        
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sai San Mine
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {currentText}<span className="cursor">|</span>
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          variants={scrollIndicatorVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, ...scrollIndicatorVariants.bounce }}
          transition={{ delay: 2.5 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          <div className="scroll-arrow">↓</div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;