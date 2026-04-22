import React from 'react';
import { motion } from 'framer-motion';

const templates = [
  {
    id: 'saas',
    name: 'Quantum SaaS',
    description: 'A high-conversion landing page for modern software products. Features sharp gradients, dark mode, and feature highlights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    color: '#8b5cf6'
  },
  {
    id: 'studio',
    name: 'Canvas Studio',
    description: 'Minimalist and elegant layout designed for creative agencies and artists. Focuses on whitespace and bold typography.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2340',
    color: '#06b6d4'
  },
  {
    id: 'dashboard',
    name: 'Horizon Dashboard',
    description: 'A data-centric administration panel with glassmorphism, sidebar navigation, and modular information cards.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=2070',
    color: '#06b6d4'
  },
  {
    id: 'business',
    name: 'Corporate Pulse',
    description: 'A professional business profile layout with trust-building sections, service breakdowns, and team highlights.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    color: '#3b82f6'
  },
  {
    id: 'store',
    name: 'Infinite Store',
    description: 'A high-performance e-commerce skeleton featuring product grids, category filtering, and shopping flow visuals.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070',
    color: '#10b981'
  },
  {
    id: 'helix',
    name: 'Helix Showcase',
    description: 'An immersive 3D spiral carousel where cards revolve as you scroll. Premium visual storytelling for products or info collections.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    color: '#f59e0b'
  },
  {
    id: 'jewelry',
    name: 'Lumiere Jewelry',
    description: 'A luxury boutique experience featuring gold accents, elegant typography, and a "Diamond Focus" product showcase.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070',
    color: '#d4af37'
  }
];




const ShowcaseGallery = () => {
  return (
    <section style={{ padding: 'var(--section-padding) 0', minHeight: '100vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Template <span className="text-gradient">Skeletons</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Choose a foundation for your next project. These skeletons are pre-built archetypes used to showcase different UI possibilities to clients.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
          gap: '2.5rem' 
        }}>

          {templates.map((template, idx) => (
            <motion.div
              key={template.id}
              className="glass"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ padding: '1.5rem', overflow: 'hidden', cursor: 'pointer' }}
              whileHover={{ scale: 1.02, borderColor: template.color }}
              onClick={() => window.location.hash = template.id}
            >
              <div style={{ 
                height: '200px', 
                borderRadius: '12px', 
                marginBottom: '1.5rem', 
                overflow: 'hidden',
                background: `linear-gradient(45deg, #111, #222)`
              }}>
                <img 
                  src={template.image} 
                  alt={template.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{template.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {template.description}
              </p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', background: `linear-gradient(135deg, ${template.color}, #000)` }}
              >
                View Skeleton
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGallery;
