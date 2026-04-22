import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { FaCode, FaRobot, FaDatabase } from 'react-icons/fa';
=======
import { FaGraduationCap, FaCode, FaRobot, FaDatabase } from 'react-icons/fa';
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06

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
<<<<<<< HEAD
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            <span className="text-gradient">Our Mission</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            At <strong style={{ color: 'var(--text-primary)' }}>NEXUS</strong>, we bridge the gap between complex challenges and elegant technology. We are a collective of engineers, designers, and visionaries dedicated to building high-performance systems that scale.
          </p>
=======
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
            <span className="text-gradient">About Me</span>
          </h2>
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          <motion.div
            className="glass"
<<<<<<< HEAD
            style={{ padding: '2.5rem' }}
=======
            style={{ padding: '2rem' }}
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <FaCode size={40} className="text-gradient" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Engineering Excellence</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We pride ourselves on clean, maintainable code architectures. From microservices to pixel-perfect frontends, we ensure every line of code serves a purpose and scales with your growth.
=======
            <FaGraduationCap size={40} className="text-gradient" style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Education</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Final-year student pursuing a <strong>Bachelors of Engineering in Information Technology</strong> at Amrutvahini College of Engineering (2021-2025). Connecting strong academic foundations to industry challenges.
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            </p>
          </motion.div>

          <motion.div
            className="glass"
<<<<<<< HEAD
            style={{ padding: '2.5rem' }}
=======
            style={{ padding: '2rem' }}
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <FaRobot size={40} style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>AI-First Approach</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Intelligence is baked into everything we build. We leverage large language models, computer vision, and predictive analytics to create software that doesn't just work—it thinks.
=======
            <FaRobot size={40} style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Experience</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              As an AI Intern at <strong>Personifwy</strong>, I developed machine learning models using Python for real-time applications, improving model accuracy and conducting detailed data preprocessing.
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            </p>
          </motion.div>

          <motion.div
            className="glass"
<<<<<<< HEAD
            style={{ padding: '2.5rem' }}
=======
            style={{ padding: '2rem' }}
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <FaDatabase size={40} style={{ color: '#06b6d4', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Data Integrity</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Data is the backbone of modern enterprise. We architect robust data pipelines and transformation layers that provide the clarity needed for making critical business decisions.
=======
            <FaCode size={40} style={{ color: '#61dafb', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Full Stack Experience</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              As a Full Stack Intern at <strong>Sumago Infotech</strong>, I built and deployed MERN stack web applications from scratch, focusing on efficient coding practices and responsive UI development.
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
