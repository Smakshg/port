import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaThLarge, FaUsers, FaCog, FaBell, FaSearch, FaChevronRight, FaArrowLeft } from 'react-icons/fa';

const DashboardSkeleton = ({ onBack }) => {
  const [timeRange, setTimeRange] = useState('Monthly');
  const [activities, setActivities] = useState([
    { id: 1, user: 'user_882', action: 'New subscription', time: '2 hours ago' },
    { id: 2, user: 'user_412', action: 'Refund requested', time: '5 hours ago' },
    { id: 3, user: 'user_109', action: 'New subscription', time: '1 day ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: `user_${Math.floor(Math.random() * 1000)}`,
        action: Math.random() > 0.5 ? 'New subscription' : 'Upgrade to Pro',
        time: 'Just now'
      };
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: isMobile ? 'column' : 'row', fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      {!isMobile && (
        <aside style={{ width: '280px', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '30px', display: 'flex', flexDirection: 'column' }}>
          <div 
            onClick={onBack}
            style={{ 
              marginBottom: '50px', fontWeight: 900, fontSize: '1.2rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '10px'
            }}
          >
            <div style={{ width: '32px', height: '32px', background: '#06b6d4', borderRadius: '8px' }}></div>
            HORIZON <span style={{ opacity: 0.4, fontSize: '0.8rem' }}>PRO</span>
          </div>

          <nav style={{ flex: 1 }}>
            {[
              { icon: <FaThLarge />, label: 'Dashboard', active: true },
              { icon: <FaUsers />, label: 'Team' },
              { icon: <FaBell />, label: 'Notifications' },
              { icon: <FaCog />, label: 'Settings' },
            ].map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px',
                borderRadius: '12px', marginBottom: '10px', cursor: 'pointer',
                background: item.active ? 'rgba(6,182,212,0.1)' : 'transparent',
                color: item.active ? '#06b6d4' : '#64748b'
              }}>
                {item.icon}
                <span style={{ fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </nav>

          <button 
            onClick={onBack}
            style={{ 
              background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none',
              padding: '12px', borderRadius: '12px', cursor: 'pointer', marginTop: 'auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}
          >
            <FaArrowLeft size={12}/> Exit Preview
          </button>
        </aside>
      )}

      {/* Main Content */}
      <main style={{ flex: 1, padding: isMobile ? '20px' : '40px', overflowY: 'auto', width: '100%' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Overview</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                {['Daily', 'Weekly', 'Monthly'].map(t => (
                    <button 
                        key={t}
                        onClick={() => setTimeRange(t)}
                        style={{ border: 'none', background: timeRange === t ? '#06b6d4' : '#111', color: '#fff', padding: '5px 15px', borderRadius: '5px', fontSize: '0.7rem', cursor: 'pointer', fontWeight: 700 }}
                    >
                        {t}
                    </button>
                ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {isMobile && (
              <button 
                onClick={onBack}
                style={{ background: '#222', border: 'none', color: '#fff', padding: '10px', borderRadius: '8px' }}>
                <FaArrowLeft />
              </button>
            )}
            <div style={{ background: '#111', padding: '10px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #222', maxWidth: '200px' }}>
              <FaSearch color="#444"/>
              <input style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%' }} placeholder="Search..."/>
            </div>
            <div style={{ width: '45px', height: '45px', flexShrink: 0, borderRadius: '12px', background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)' }}></div>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
          gap: '25px', 
          marginBottom: '40px' 
        }}>
          {[
            { label: 'Revenue', value: '$45,231', change: '+20.1%' },
            { label: 'Subscriptions', value: '+2350', change: '+180.1%' },
            { label: 'Sales', value: '+12,234', change: '+19%' },
            { label: 'Active Now', value: '573', change: '+201' },
          ].map((stat, i) => (
            <div key={i} className="glass" style={{ padding: '25px' }}>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '10px' }}>{stat.label}</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{stat.value}</h3>
              <p style={{ color: '#06b6d4', fontSize: '0.8rem', marginTop: '5px' }}>{stat.change} from last month</p>
            </div>
          ))}
        </div>

        {/* Action List */}
        <div className="glass" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <h3 style={{ fontWeight: 800 }}>Live Activity Feed</h3>
                <span style={{ color: '#06b6d4', cursor: 'pointer', fontSize: '0.9rem' }}>View All</span>
            </div>
            <div style={{ minHeight: '300px' }}>
              <AnimatePresence mode='popLayout'>
                {activities.map((item) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(6,182,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4' }}>
                              <FaUsers />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>{item.action} from {item.user}</p>
                                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.time}</p>
                            </div>
                        </div>
                        <FaChevronRight color="#444"/>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        </div>

      </main>
    </div>
  );
};

export default DashboardSkeleton;
