import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Hi, I'm <span className="text-gradient">Smaksh Gupta</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 400, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Fullstack AI Engineer | Flutter Developer | Web Developer | Data Engineering Enthusiast
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <a href="#projects" className="btn btn-primary">View My Work</a>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
