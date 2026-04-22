import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const StudioSkeleton = ({ onBack }) => {
  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
       {/* Back Button */}
       <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000, 
          background: 'rgba(0,0,0,0.05)', color: '#000', border: 'none',
          padding: '10px 20px', borderRadius: '30px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600
        }}
      >
        <FaArrowLeft /> Back to Showcase
      </button>

      {/* Modern Minimal Header */}
<<<<<<< HEAD
      <header style={{ padding: window.innerWidth < 768 ? '30px 5%' : '40px 10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>CANVAS STUDIO</div>
        <div style={{ display: 'flex', gap: window.innerWidth < 768 ? '20px' : '40px', fontWeight: 600, fontSize: '0.8rem' }}>
=======
      <header style={{ padding: '40px 10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>CANVAS STUDIO</div>
        <div style={{ display: 'flex', gap: '40px', fontWeight: 600, fontSize: '0.9rem' }}>
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
          <span>WORK</span>
          <span>SERVICES</span>
          <span>CONTACT</span>
        </div>
      </header>

      {/* Visual Hero */}
<<<<<<< HEAD
      <main style={{ padding: window.innerWidth < 768 ? '100px 5% 50px' : '100px 10%' }}>
=======
      <main style={{ padding: '100px 10%' }}>
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
        >
<<<<<<< HEAD
          <h1 style={{ fontSize: 'clamp(3rem, 15vw, 10vw)', lineHeight: 0.9, fontWeight: 900, marginBottom: '60px' }}>
=======
          <h1 style={{ fontSize: '10vw', lineHeight: 0.9, fontWeight: 900, marginBottom: '60px' }}>
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            PURE <br/> CREATIVE
          </h1>
        </motion.div>

<<<<<<< HEAD
        <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', gap: '40px' }}>
=======
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            style={{ flex: 7 }}
=======
            style={{ gridColumn: 'span 7' }}
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
          >
            <motion.div 
              whileHover="hover"
              style={{ width: '100%', height: '500px', background: '#f0f0f0', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
            >
                <motion.img 
                  variants={{ hover: { scale: 1.1 } }}
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  alt="architecture"
                />
                <motion.div 
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                >
                  <span style={{ border: '1px solid #fff', padding: '10px 20px', borderRadius: '40px', fontWeight: 700 }}>VIEW PROJECT</span>
                </motion.div>
            </motion.div>
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>VILLA MONA</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '2px' }}>ARCHITECTURE / 2024</div>
            </div>
          </motion.div>


          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
<<<<<<< HEAD
             style={{ flex: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: window.innerWidth < 768 ? '0' : '50px' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Helping brands stand out in a digital noise.</h3>
=======
             style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '50px' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Helping brands stand out in a digital noise.</h3>
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
            <p style={{ lineHeight: 1.8, opacity: 0.7 }}>
                We believe in the power of simplicity. Every pixel should serve a purpose, every animation should tell a story. We don't just build websites; we craft digital experiences.
            </p>
            <div style={{ marginTop: '40px', borderBottom: '2px solid #000', width: 'fit-content', fontWeight: 900, cursor: 'pointer' }}>
                LEARN MORE
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default StudioSkeleton;
