import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full-Stack Development',
      subcategories: [
        {
          subtitle: 'Frontend',
          skills: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
          subtitle: 'Backend',
          skills: ['Node.js', 'Java', 'Dart (Flutter)']
        },
        {
          subtitle: 'Database',
          skills: ['MySQL', 'MongoDB', 'Firebase']
        }
      ]
    },
    {
      title: 'Network & Security',
      skills: [
        'Networking',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Burp Suite',
        'Wireshark',
        'Kali Linux',
        'VMware'
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'GitHub',
        'Docker',
        'Postman',
        'Figma',
        'n8n'
      ]
    },
    {
      title: 'Languages',
      skills: [
        'English – Upper Intermediate',
        'Thai – Fluent',
        'Burmese – Fluent'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Problem-solving & analytical thinking',
        'Continuous learning mindset',
        'Collaboration & teamwork',
        'Adaptability to new tools and technologies'
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Explore my technical expertise and core competencies</p>
        </motion.div>

        <motion.div
          className="section-content skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skills-category"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h3 className="category-title">{category.title}</h3>
              
              {category.subcategories ? (
                <div className="subcategories">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <React.Fragment key={subIndex}>
                      <div className="subcategory">
                        <h4 className="subcategory-title">{subcategory.subtitle}</h4>
                        <div className="skills-list">
                          {subcategory.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="skill-badge"
                              variants={itemVariants}
                              whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      {subIndex < category.subcategories.length - 1 && <hr className="subcategory-divider" />}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-badge"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;