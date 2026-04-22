import React from 'react';

const Navbar = ({ setView, currentView }) => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
<<<<<<< HEAD
      width: '95%',
      maxWidth: '800px',
      padding: '0.8rem 1.5rem',
=======
      width: '90%',
      maxWidth: '800px',
      padding: '1rem 2rem',
>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
<<<<<<< HEAD
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



=======
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


>>>>>>> 77a4990a1fc837a665e0653c14dedd0e33febe06
    </nav>
  );
};

export default Navbar;

