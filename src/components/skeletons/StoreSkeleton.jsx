import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaSearch, FaHeart, FaFilter, FaArrowLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StoreSkeleton = ({ onBack }) => {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(false);

  const products = [
    { id: 1, name: 'Minimalist Timepiece', price: 189, category: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999' },
    { id: 2, name: 'Azure Headphones', price: 299, category: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070' },
    { id: 3, name: 'Sleek Leather Bag', price: 450, category: 'Travel', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=2070' },
    { id: 4, name: 'Professional Camera', price: 1200, category: 'Nodal', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, name: 'Canvas Sneakers', price: 85, category: 'Footwear', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1964' },
    { id: 6, name: 'Smart Home Hub', price: 159, category: 'Tech', image: 'https://images.unsplash.com/photo-1558089687-f282ff96fde4?auto=format&fit=crop&q=80&w=1974' },
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = () => {
    setCartCount(c => c + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
       {/* Back Button */}
       <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000, 
          background: '#000', color: '#fff', border: 'none',
          padding: '10px 20px', borderRadius: '30px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001,
          fontWeight: 600
        }}
      >
        <FaArrowLeft /> Back to Showcase
      </button>

      {/* Luxury Promo Bar */}
      <div style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '8px', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 600 }}>
        FREE GLOBAL SHIPPING ON ORDERS OVER $500
      </div>

      {/* Store Header */}
      <header style={{ padding: '20px 5%', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 1000 }}>
        <div style={{ fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-2px' }}>INFINITE</div>
        
        <div style={{ display: 'flex', gap: '30px', fontWeight: 600, fontSize: '0.9rem' }}>
          <span>Shop All</span>
          <span>New Arrivals</span>
          <span>Collections</span>
        </div>

      <div style={{ display: 'flex', gap: '20px', fontSize: '1.2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f5', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>
          <FaSearch style={{ marginRight: '10px', opacity: 0.5 }}/>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none' }}
          />
        </div>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <FaShoppingCart />
          <motion.span 
            key={cartCount}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#e11d48', color: '#fff', fontSize: '0.7rem', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
            {cartCount}
          </motion.span>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{ position: 'fixed', bottom: '30px', right: '30px', background: '#000', color: '#fff', padding: '15px 30px', borderRadius: '8px', zIndex: 2000, display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <div style={{ background: '#10b981', width: '10px', height: '10px', borderRadius: '50%' }}></div>
            Item added to your cart!
          </motion.div>
        )}
      </AnimatePresence>
    </header>


      {/* Main Content Area */}
      <div style={{ display: 'flex', padding: '40px 5%', gap: '40px' }}>
        
        {/* Sidebar Filters */}
        <aside style={{ width: '250px' }}>
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}><FaFilter size={14}/> FILTERS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['All', 'Watches', 'Audio', 'Travel', 'Nodal', 'Footwear', 'Tech'].map(cat => (
              <div 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ 
                  cursor: 'pointer', 
                  fontWeight: activeCategory === cat ? 800 : 400,
                  color: activeCategory === cat ? '#000' : '#666',
                  fontSize: '0.9rem',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                {cat}
                {activeCategory === cat && <motion.div layoutId="dot" style={{ width: '6px', height: '6px', background: '#000', borderRadius: '50%', alignSelf: 'center' }}/>}
              </div>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200 }}>{activeCategory} Products</h2>
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Showing {filteredProducts.length} results</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '40px' }}>
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ position: 'relative', height: '350px', background: '#f9f9f9', overflow: 'hidden', borderRadius: '4px' }}>
                    <img 
                      src={product.image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
                      alt={product.name}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', padding: '10px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                      <FaHeart color="#eee" />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.5, letterSpacing: '1px' }}>{product.category}</span>
                      <div style={{ display: 'flex', gap: '2px' }}><FaStar size={10} color="#fbbf24"/><FaStar size={10} color="#fbbf24"/><FaStar size={10} color="#fbbf24"/><FaStar size={10} color="#fbbf24"/><FaStar size={10} color="#fbbf24"/></div>
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{product.name}</h3>
                    <p style={{ fontWeight: 900, marginTop: '10px' }}>${product.price}.00</p>
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      onClick={addToCart}
                      style={{ width: '100%', background: '#000', color: '#fff', border: 'none', padding: '12px', marginTop: '15px', cursor: 'pointer', fontWeight: 600 }}
                    >
                      ADD TO CART
                    </motion.button>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreSkeleton;
