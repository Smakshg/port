import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaChartLine, FaArrowLeft } from 'react-icons/fa';

const SaaSSkeleton = ({ onBack }) => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', position: 'relative' }}>
      {/* Back Button */}
      <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000, 
          background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none',
          padding: '10px 20px', borderRadius: '30px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}
      >
        <FaArrowLeft /> Back to Showcase
      </button>

      {/* Hero Section */}
      <section style={{ 
        padding: '150px 20px 100px', textAlign: 'center', 
        background: 'radial-gradient(circle at top, #1e1b4b 0%, #000 70%)'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ 
            background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
            padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            V2.0 Launch
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900, marginTop: '20px', lineHeight: 1.1 }}>
            Innovate at the <br/>
            <span style={{ color: '#8b5cf6' }}>Speed of Thought</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '20px auto', color: '#94a3b8', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
            The ultimate SaaS foundation for developers who want to scale their applications without the boilerplate.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ padding: '15px 30px', borderRadius: '10px', background: '#8b5cf6', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Get Started</button>
            <button style={{ padding: '15px 30px', borderRadius: '10px', background: 'transparent', color: '#fff', border: '1px solid #334155', fontWeight: 700, cursor: 'pointer' }}>Watch Demo</button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Pricing */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '40px' }}>Simple, <span style={{ color: '#06b6d4' }}>Transparent</span> Pricing</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '50px', flexWrap: 'wrap' }}>
            <span style={{ opacity: isYearly ? 0.5 : 1 }}>Monthly</span>
            <div 
              onClick={() => setIsYearly(!isYearly)}
              style={{ width: '60px', height: '30px', background: '#8b5cf6', borderRadius: '15px', position: 'relative', cursor: 'pointer', padding: '5px' }}>
              <motion.div 
                animate={{ x: isYearly ? 30 : 0 }}
                style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}
              />
            </div>
            <span style={{ opacity: isYearly ? 1 : 0.5 }}>Yearly <span style={{ fontSize: '0.7rem', background: '#06b6d4', padding: '2px 8px', borderRadius: '10px' }}>20% OFF</span></span>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
            gap: '30px',
            justifyContent: 'center'
          }}>
            {['Basic', 'Pro', 'Enterprise'].map((plan, idx) => (
              <motion.div 
                key={plan}
                whileHover={{ y: -10 }}
                style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', textAlign: 'left' }}
              >
                <h3 style={{ fontSize: '1.2rem', color: '#94a3b8' }}>{plan}</h3>
                <div style={{ margin: '20px 0', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                  <span style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: 800 }}>${isYearly ? (idx + 1) * 79 : (idx + 1) * 99}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>
                    <span>/mo</span>
                    {isYearly && <span style={{ fontSize: '0.6rem', color: '#06b6d4' }}>Billed annually</span>}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', marginBottom: '30px' }}>
                  <li>✓ Unlimited Projects</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Advanced Security</li>
                </ul>
                <button style={{ width: '100%', padding: '12px', borderRadius: '10px', background: idx === 1 ? '#8b5cf6' : 'transparent', color: '#fff', border: idx === 1 ? 'none' : '1px solid #334155', cursor: 'pointer', fontWeight: 600 }}>
                  Choose {plan}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
            {[
              { icon: <FaRocket />, title: 'Lightning Fast', desc: 'Optimized build processes for instant deployment.' },
              { icon: <FaShieldAlt />, title: 'Secure by Default', desc: 'Enterprise-grade encryption for all your data.' },
              { icon: <FaChartLine />, title: 'Advanced Analytics', desc: 'Real-time insights into your application performance.' },
            ].map((f, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                style={{ 
                  padding: 'clamp(1.5rem, 5vw, 2.5rem)', borderRadius: '20px', background: '#0f172a',
                  border: '1px solid #1e293b'
                }}
              >
                <div style={{ fontSize: '2.5rem', color: '#8b5cf6', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{f.title}</h3>
                <p style={{ color: '#94a3b8' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Skeleton Footer */}
      <footer style={{ padding: '100px 20px', textAlign: 'center', borderTop: '1px solid #1e293b' }}>
        <p style={{ color: '#475569' }}>© 2026 Quantum Tech. Built with Precision.</p>
      </footer>
    </div>
  );
};

export default SaaSSkeleton;
