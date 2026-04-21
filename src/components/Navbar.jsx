import React from 'react';

const Navbar = ({ setView, currentView }) => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '800px',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      borderRadius: '50px'
    }}>
      <div
        style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'Outfit, sans-serif', cursor: 'pointer' }}
        onClick={() => window.location.hash = 'home'}
      >
        <span className="text-gradient">SG</span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ color: currentView === 'home' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Home</a></li>
        <li><a href="#about" style={{ color: currentView === 'about' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>About</a></li>
        <li><a href="#projects" style={{ color: currentView === 'projects' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Projects</a></li>
        <li><a href="#showcase" style={{ color: currentView === 'showcase' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Templates</a></li>
        <li><a href="#contact" style={{ color: currentView === 'contact' ? 'var(--accent-primary)' : 'var(--text-primary)', transition: 'color 0.3s' }}>Contact</a></li>
      </ul>


    </nav>
  );
};

export default Navbar;

