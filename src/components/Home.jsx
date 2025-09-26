import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Background from '../assets/Background.png';
import './Home.css';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "I'm a Cybersecurity Engineer Trainee",
    "I'm a Software Engineering Student",
    "I'm passionate about Security",
    "I'm learning Network Security"
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

  // Floating background elements animation variants
  const floatingVariants = {
    float1: {
      y: [-10, 10, -10],
      x: [0, 5, 0],
      rotate: [0, 360],
      scale: [1, 1.1, 1, 1.2, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      y: [10, -10, 10],
      x: [5, -5, 5],
      rotate: [0, -360],
      scale: [1.2, 1, 1.1, 1, 1.2],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float3: {
      y: [0, 15, 0],
      x: [-3, 3, -3],
      rotate: [0, 180, 360],
      scale: [1, 1.3, 1],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Skill badges with stagger animation
  const skillBadges = ['React', 'Node.js', 'Cybersecurity', 'Python', 'Networking'];
  
  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + (i * 0.1),
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  };

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
        
        {/* Floating Background Elements */}
        <motion.div 
          className="floating-element floating-1"
          variants={floatingVariants}
          animate="float1"
        />
        <motion.div 
          className="floating-element floating-2"
          variants={floatingVariants}
          animate="float2"
        />
        <motion.div 
          className="floating-element floating-3"
          variants={floatingVariants}
          animate="float3"
        />
        
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
            Aspiring cybersecurity engineer with a foundation in software engineering. 
            Currently learning network security, penetration testing, 
            and secure application development while pursuing CCNA certification 
            and hands-on experience with security tools.
          </motion.p>

          {/* Skill Badges */}
          <motion.div 
            className="skill-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {skillBadges.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-badge"
                custom={index}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
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