import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-padding) 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1.5rem', textAlign: 'center' }}>
            <span className="text-gradient">Our Mission</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto clamp(2rem, 8vw, 4rem)', textAlign: 'center', fontSize: 'clamp(1rem, 4vw, 1.1rem)', lineHeight: 1.8 }}>
            At <strong style={{ color: 'var(--text-primary)' }}>NEXSG</strong>, we bridge the gap between complex challenges and elegant technology. We are a collective of engineers, designers, and visionaries dedicated to building high-performance systems that scale.
          </p>
        </motion.div>

        <div className="responsive-grid">

          <motion.div
            className="glass"
            style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaCode size={35} className="text-gradient" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Engineering Excellence</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We pride ourselves on clean, maintainable code architectures. From microservices to pixel-perfect frontends, we ensure every line of code serves a purpose and scales with your growth.
            </p>
          </motion.div>

          <motion.div
            className="glass"
            style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaRobot size={35} style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>AI-First Approach</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Intelligence is baked into everything we build. We leverage large language models, computer vision, and predictive analytics to create software that doesn't just work—it thinks.
            </p>
          </motion.div>

          <motion.div
            className="glass"
            style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaDatabase size={35} style={{ color: '#06b6d4', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Data Integrity</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Data is the backbone of modern enterprise. We architect robust data pipelines and transformation layers that provide the clarity needed for making critical business decisions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
