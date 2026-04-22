import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 'clamp(80px, 15vw, 120px)', paddingBottom: '40px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.2rem', 
            borderRadius: '50px', 
            background: 'var(--glass-bg)', 
            border: '1px solid var(--glass-border)',
            fontSize: 'clamp(0.7rem, 3vw, 0.9rem)',
            fontWeight: 600,
            color: 'var(--accent-secondary)',
            marginBottom: 'clamp(1rem, 5vw, 2rem)'
          }}>
            NEXT-GEN DIGITAL SOLUTIONS
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 10vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Architecting the Future of <br className="desktop-only" />
            <span className="text-gradient">Intelligent Systems</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--text-secondary)', fontWeight: 400, maxWidth: '700px', margin: '0 auto clamp(1.5rem, 6vw, 2.5rem)', lineHeight: 1.6 }}>
            Empowering businesses through cutting-edge AI engineering, bespoke software development, and transformative data architectures.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#services" className="btn btn-primary" style={{ flex: '1 1 auto', maxWidth: '250px' }}>Our Solutions</a>
          <a href="#contact" className="btn btn-outline" style={{ flex: '1 1 auto', maxWidth: '250px' }}>Consult Our Experts</a>
        </motion.div>

        <style>{`
          @media (max-width: 600px) {
            .desktop-only { display: none; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
