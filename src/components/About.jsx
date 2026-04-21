import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRobot, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
            <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          <motion.div
            className="glass"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap size={40} className="text-gradient" style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Education</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Final-year student pursuing a <strong>Bachelors of Engineering in Information Technology</strong> at Amrutvahini College of Engineering (2021-2025). Connecting strong academic foundations to industry challenges.
            </p>
          </motion.div>

          <motion.div
            className="glass"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaRobot size={40} style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Experience</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              As an AI Intern at <strong>Personifwy</strong>, I developed machine learning models using Python for real-time applications, improving model accuracy and conducting detailed data preprocessing.
            </p>
          </motion.div>

          <motion.div
            className="glass"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaCode size={40} style={{ color: '#61dafb', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Full Stack Experience</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              As a Full Stack Intern at <strong>Sumago Infotech</strong>, I built and deployed MERN stack web applications from scratch, focusing on efficient coding practices and responsive UI development.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
