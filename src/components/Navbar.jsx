import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: 'home' },
    { label: 'Company', href: 'about' },
    { label: 'Solutions', href: 'projects' },
    { label: 'Products', href: 'showcase' },
    { label: 'Connect', href: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="glass" style={{
        position: 'fixed',
        top: scrolled ? '10px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        maxWidth: '1200px',
        padding: '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1100,
        borderRadius: '50px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: scrolled ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(139, 92, 246, 0.3)' : 'none'
      }}>
        <div
          style={{ fontWeight: 800, fontSize: '1.4rem', fontFamily: 'Outfit, sans-serif', cursor: 'pointer', letterSpacing: '2px' }}
          onClick={() => { window.location.hash = 'home'; setIsOpen(false); }}
        >
          <span className="text-gradient">NEXSG</span>
        </div>

        {/* Desktop Menu */}
        <ul style={{ 
          display: 'none', 
          gap: '2.5rem', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0,
          fontSize: '0.95rem',
          fontWeight: 600,
          '@media (min-width: 768px)': { display: 'flex' }
        }} className="desktop-nav">
          {navItems.map(item => (
            <li key={item.href}>
              <a 
                href={`#${item.href}`} 
                style={{ 
                  color: currentView === item.href ? 'var(--accent-primary)' : 'var(--text-primary)', 
                  transition: 'color 0.3s',
                  position: 'relative'
                }}
              >
                {item.label}
                {currentView === item.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    style={{ position: 'absolute', bottom: '-5px', left: 0, right: 0, height: '2px', background: 'var(--accent-primary)', borderRadius: '2px' }} 
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div 
          onClick={toggleMenu}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px', 
            cursor: 'pointer',
            zIndex: 1200,
            padding: '5px'
          }}
          className="mobile-toggle"
        >
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} style={{ width: '25px', height: '2px', background: 'white', borderRadius: '2px' }} />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }} style={{ width: '25px', height: '2px', background: 'white', borderRadius: '2px' }} />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} style={{ width: '25px', height: '2px', background: 'white', borderRadius: '2px' }} />
        </div>

        <style>{`
          @media (min-width: 769px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={`#${item.href}`}
                className={`nav-link ${currentView === item.href ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
