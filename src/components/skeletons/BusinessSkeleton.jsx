import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaGlobe, FaHandshake, FaChartBar, FaArrowLeft, FaPhone, FaChevronRight } from 'react-icons/fa';

const BusinessSkeleton = ({ onBack }) => {
  const [activeService, setActiveService] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, icon: <FaGlobe />, title: 'Global Logistics', desc: 'Seamlessly connecting continents through our advanced shipping networks and real-time tracking systems.', longDesc: 'Our world-class logistics network spans over 120 countries, ensuring that your cargo reaches its destination safely and on time. We use AI-driven route optimization to reduce carbon footprint and costs.' },
    { id: 2, icon: <FaHandshake />, title: 'Strategic Consulting', desc: 'Expert guidance to navigate complex market dynamics and scale your business operations effectively.', longDesc: 'We partner with Fortune 500 companies to redesign their business models for the digital age. Our consulting team brings decades of experience in M&A, digital transformation, and leadership development.' },
    { id: 3, icon: <FaChartBar />, title: 'Market Analysis', desc: 'Data-driven insights that empower you to make informed decisions and stay ahead of the competition.', longDesc: 'Leverage our proprietary analytics engines to get real-time intelligence on consumer behavior and competitor movements. We provide custom reports that turn raw data into actionable growth strategies.' }
  ];


  return (
    <div style={{ background: '#f8fafc', color: '#1e293b', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Back Button */}
      <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000, 
          background: '#fff', color: '#1e293b', border: 'none',
          padding: '10px 20px', borderRadius: '30px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          fontWeight: 600
        }}
      >
        <FaArrowLeft /> Back to Showcase
      </button>

      {/* Top Bar */}
      <div style={{ background: '#1e293b', color: '#fff', padding: '10px 10%', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
        <span>Global Corporate Solutions</span>
        <span><FaPhone size={10}/> +1 (800) CORPORATE</span>
      </div>

      {/* Corporate Header */}
      <header style={{ padding: '20px 10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderBottom: '1px solid #e2e8f0', sticky: 'top' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 900, color: '#3b82f6', fontSize: '1.4rem' }}>
          <FaBuilding /> PULSE
        </div>
        <nav style={{ display: 'flex', gap: '30px', fontWeight: 600, fontSize: '0.9rem' }}>
          <span>Solutions</span>
          <span>Sectors</span>
          <span>Insights</span>
          <button style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer' }}>Portal Login</button>
        </nav>
      </header>

      {/* Main Hero */}
      <section style={{ padding: '80px 10%', display: 'flex', alignItems: 'center', gap: '50px', background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301") center/cover' }}>
        <div style={{ flex: 1 }}>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '30px', fontWeight: 800 }}
          >
            Driving the Future of <span style={{ color: '#3b82f6' }}>Global Industry</span>
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', maxWidth: '500px' }}>
            Transforming corporate landscapes through integrated solutions, sustainable practices, and elite market intelligence.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{ background: '#1e293b', color: '#fff', border: 'none', padding: '15px 30px', borderRadius: '5px', fontWeight: 700, cursor: 'pointer' }}>View Case Studies</button>
            <button style={{ border: '2px solid #3b82f6', color: '#3b82f6', background: 'transparent', padding: '15px 30px', borderRadius: '5px', fontWeight: 700, cursor: 'pointer' }}>Our Philosophy</button>
          </div>
        </div>
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
           style={{ flex: 1, height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        >
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2340" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="office"/>
        </motion.div>
      </section>

      {/* Interactive Services Section */}
      <section style={{ padding: '80px 10%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', fontWeight: 800 }}>Core Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              onHoverStart={() => setActiveService(idx)}
              onClick={() => setSelectedService(s)}
              style={{ 
                padding: '40px', background: activeService === idx ? '#3b82f6' : '#fff', 
                color: activeService === idx ? '#fff' : '#1e293b',
                borderRadius: '15px', border: '1px solid #e2e8f0', cursor: 'pointer',
                transition: 'background 0.4s, color 0.4s'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '20px', opacity: 0.9 }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: 700 }}>{s.title}</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{s.desc}</p>
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700 }}>
                Explore <FaChevronRight size={10}/>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Service Detail */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              style={{ background: '#fff', maxWidth: '600px', width: '100%', borderRadius: '20px', padding: '40px', position: 'relative' }}>
              <button 
                onClick={() => setSelectedService(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
              <div style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '20px' }}>{selectedService.icon}</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{selectedService.title}</h2>
              <p style={{ lineHeight: 1.8, color: '#64748b', fontSize: '1.1rem' }}>{selectedService.longDesc}</p>
              <button 
                onClick={() => setSelectedService(null)}
                style={{ marginTop: '30px', background: '#3b82f6', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '5px', fontWeight: 700, cursor: 'pointer' }}>Close Details</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Corporate Statistic Section */}
      <section style={{ background: '#1e293b', color: '#fff', padding: '60px 10%', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3b82f6' }}>25+</div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>YEARS IN INDUSTRY</p>
        </div>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3b82f6' }}>120</div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>GLOBAL OFFICES</p>
        </div>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3b82f6' }}>$4.2B</div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>ANNUAL REVENUE</p>
        </div>
      </section>
    </div>
  );
};

export default BusinessSkeleton;
