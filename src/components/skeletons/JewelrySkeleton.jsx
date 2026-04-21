import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGem, FaHeart, FaShoppingBag, FaArrowLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const JewelrySkeleton = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);

  const collections = [
    { id: 1, name: 'The Eternal Pearl', price: 2400, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1974' },
    { id: 2, name: 'Sapphire Horizon', price: 4200, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=2070' },
    { id: 3, name: 'Golden Solstice', price: 1800, category: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=2070' },
    { id: 4, name: 'Diamond Cascade', price: 12500, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070' },
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      {/* Back Button */}
      <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000, 
          background: 'rgba(212, 175, 55, 0.2)', color: '#d4af37', border: '1px solid #d4af37',
          padding: '10px 20px', borderRadius: '0', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px'
        }}
      >
        <FaArrowLeft /> Return
      </button>

      {/* Header */}
      <header style={{ padding: '30px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 300, letterSpacing: '8px', color: '#d4af37' }}>LUMIÉRE</div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <FaHeart style={{ color: wishlist.length > 0 ? '#d4af37' : '#555' }} />
            {wishlist.length > 0 && <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#d4af37', color: '#000', fontSize: '0.6rem', padding: '2px 5px', borderRadius: '50%' }}>{wishlist.length}</span>}
          </div>
          <FaShoppingBag style={{ opacity: 0.7 }} />
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ height: '80vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=2070)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }}
        />
        <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: '#d4af37', letterSpacing: '10px', fontSize: '0.9rem', marginBottom: '20px' }}>ELEGANCE REDEFINED</motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '5rem', fontWeight: 200, letterSpacing: '-2px', marginBottom: '30px' }}>Crafting Eternal <br/> Memories</motion.h1>
          <motion.button 
            whileHover={{ scale: 1.05, background: '#d4af37', color: '#000' }}
            style={{ border: '1px solid #d4af37', background: 'transparent', color: '#d4af37', padding: '15px 40px', fontSize: '0.8rem', letterSpacing: '3px', cursor: 'pointer', transition: 'all 0.3s' }}>
            EXPLORE COLLECTIONS
          </motion.button>
        </div>
      </section>

      {/* Collections */}
      <section style={{ padding: '100px 10%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '10px' }}>Boutique</h2>
            <div style={{ width: '50px', height: '2px', background: '#d4af37' }}></div>
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            {['All', 'Necklaces', 'Rings', 'Bracelets'].map(cat => (
              <span 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ cursor: 'pointer', fontSize: '0.9rem', color: activeCategory === cat ? '#d4af37' : '#666', borderBottom: activeCategory === cat ? '1px solid #d4af37' : 'none', paddingBottom: '5px' }}>
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {collections.filter(c => activeCategory === 'All' || c.category === activeCategory).map(item => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -10 }}
              style={{ position: 'relative' }}
            >
              <div style={{ height: '400px', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div 
                  onClick={() => toggleWishlist(item.id)}
                  style={{ position: 'absolute', top: '20px', right: '20px', background: '#fff', color: wishlist.includes(item.id) ? '#d4af37' : '#ccc', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  <FaHeart />
                </div>
              </div>
              <h3 style={{ fontWeight: 300, fontSize: '1.2rem', marginBottom: '5px' }}>{item.name}</h3>
              <p style={{ color: '#d4af37', fontWeight: 600 }}>${item.price.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Piece */}
      <section style={{ background: '#111', padding: '120px 10%', display: 'flex', gap: '80px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '1px solid #d4af37', zIndex: 1 }}></div>
          <img src="https://images.unsplash.com/photo-1573408302185-91275f923984?auto=format&fit=crop&q=80&w=2075" alt="Featured" style={{ width: '100%', position: 'relative', zIndex: 2 }} />
        </div>
        <div style={{ flex: 1 }}>
          <FaStar style={{ color: '#d4af37', marginBottom: '20px' }} />
          <h2 style={{ fontSize: '3.5rem', fontWeight: 200, marginBottom: '30px' }}>The Aurora <br/> Solitaire</h2>
          <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '40px', fontSize: '1.1rem' }}>
            A masterpiece of light and precision. Hand-selected for its unrivaled clarity and brilliance, the Aurora Solitaire represents the pinnacle of our craftsmanship.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: '#555', letterSpacing: '2px' }}>PRICE</p>
              <p style={{ fontSize: '1.8rem', color: '#d4af37' }}>$18,500</p>
            </div>
            <button style={{ background: '#d4af37', color: '#000', border: 'none', padding: '18px 45px', fontWeight: 700, cursor: 'pointer' }}>
              PURCHASE PIECE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 5%', borderTop: '1px solid rgba(212, 175, 55, 0.1)', textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', color: '#d4af37', letterSpacing: '5px', marginBottom: '30px' }}>LUMIÉRE</div>
        <p style={{ color: '#444', fontSize: '0.8rem' }}>&copy; 2026 LUMIERE BOUTIQUE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default JewelrySkeleton;
