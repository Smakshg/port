import React from 'react';

const Navbar = ({ setView, currentView }) => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '95%',
      maxWidth: '800px',
      padding: '0.8rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      borderRadius: '50px',
      flexWrap: 'wrap',
      gap: '10px'
    }}>

      <div
        style={{ fontWeight: 800, fontSize: '1.4rem', fontFamily: 'Outfit, sans-serif', cursor: 'pointer', letterSpacing: '2px' }}
        onClick={() => window.location.hash = 'home'}
      >
        <span className="text-gradient">NEXUS</span>
      </div>
      <ul style={{ 
        display: 'flex', 
        gap: 'clamp(1rem, 3vw, 2rem)', 
        listStyle: 'none', 
        margin: 0, 
        padding: 0,
        fontSize: '0.95rem',
        fontWeight: 500,
        overflowX: 'auto',
        maxWidth: '100%'
      }}>
        <li><a href="#home" style={{ color: currentView === 'home' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Services</a></li>
        <li><a href="#about" style={{ color: currentView === 'about' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Company</a></li>
        <li><a href="#projects" style={{ color: currentView === 'projects' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Solutions</a></li>
        <li><a href="#showcase" style={{ color: currentView === 'showcase' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Products</a></li>
        <li><a href="#contact" style={{ color: currentView === 'contact' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Connect</a></li>
      </ul>



    </nav>
  );
};

export default Navbar;

