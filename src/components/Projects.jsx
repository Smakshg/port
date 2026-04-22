import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaRobot, FaPlatformProvider, FaHospital, FaUtensils, FaGraduationCap, FaTools, FaLightbulb, FaCogs, FaChevronRight } from 'react-icons/fa';

const coreSolutions = [
  {
    icon: <FaRocket />,
    title: 'Startup Launch Solution',
    desc: 'Turn your idea into a live product in weeks with our agile MVP development.',
    bullets: ['Rapid MVP Development', 'Strategic UI/UX Design', 'Scalable Full-stack Architecture'],
    cta: 'Launch Your Idea',
    color: '#8b5cf6'
  },
  {
    icon: <FaChartLine />,
    title: 'Business Growth Solution',
    desc: 'Scale your business with smart tech upgrades and performance optimization.',
    bullets: ['Website & App Optimization', 'Workflow Automation Tools', 'Performance Monitoring'],
    cta: 'Scale Your Business',
    color: '#06b6d4'
  },
  {
    icon: <FaRobot />,
    title: 'AI Automation Solution',
    desc: 'Reduce manual work and gain insights with AI-powered systems.',
    bullets: ['Intelligent Chatbots', 'Recommendation Engines', 'Predictive Data Insights'],
    cta: 'Automate Now',
    color: '#10b981'
  },
  {
    icon: <FaPlatformProvider />,
    title: 'Service Platform Solution',
    desc: 'Build robust service aggregators like Zomato or Urban Company.',
    bullets: ['Seamless Booking Systems', 'Integrated Payment Gateways', 'Provider/User Dashboards'],
    cta: 'Build Your Platform',
    color: '#f59e0b'
  }
];

const industrySolutions = [
  { icon: <FaHospital />, name: 'Healthcare', feature: 'Appointment Systems' },
  { icon: <FaUtensils />, name: 'Food', feature: 'Ordering & Delivery' },
  { icon: <FaGraduationCap />, name: 'Education', feature: 'Learning Platforms' },
  { icon: <FaTools />, name: 'Local Services', feature: 'Booking Platforms' }
];

const steps = [
  { icon: <FaLightbulb />, title: 'Understand', desc: 'We deep dive into your vision and target users.' },
  { icon: <FaCogs />, title: 'Design & Develop', desc: 'We build high-performance, scalable systems.' },
  { icon: <FaRocket />, title: 'Launch & Scale', desc: 'We deploy and help you grow your product.' }
];

const Solutions = () => {
  return (
    <section id="projects" style={{ padding: 'var(--section-padding) 0', minHeight: '100vh' }}>
      <div className="container">
        {/* 1. Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 10vw, 6rem)' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Smart Tech <span className="text-gradient">Solutions</span> <br />
            to Grow Your Business
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: 'clamp(1rem, 4vw, 1.25rem)', lineHeight: 1.6 }}>
            We help startups and established businesses build scalable digital products using modern technology and AI-first thinking.
          </p>
        </motion.div>

        {/* 2. Core Solutions Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
          gap: '2rem',
          marginBottom: '6rem'
        }}>
          {coreSolutions.map((sol, idx) => (
            <motion.div
              key={idx}
              className="glass"
              style={{
                padding: '2.5rem',
                borderTop: `4px solid ${sol.color}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div style={{ fontSize: '2.5rem', color: sol.color, marginBottom: '1.5rem' }}>{sol.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800 }}>{sol.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{sol.desc}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                {sol.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: sol.color }} />
                    {b}
                  </li>
                ))}
              </ul>

              <button className="btn btn-outline" style={{ width: '100%', borderColor: sol.color, color: '#fff' }}>
                {sol.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* 3. Industry Solutions */}
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, marginBottom: '3rem' }}>
            Solutions for <span className="text-gradient">Every Industry</span>
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
            gap: '1.5rem' 
          }}>
            {industrySolutions.map((ind, idx) => (
              <motion.div
                key={idx}
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '2rem', 
                  borderRadius: '15px', 
                  textAlign: 'center',
                  border: '1px solid var(--glass-border)'
                }}
                whileHover={{ background: 'rgba(255,255,255,0.08)', scale: 1.05 }}
              >
                <div style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{ind.icon}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{ind.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{ind.feature}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. How It Works */}
        <div style={{ marginBottom: '6rem', padding: '4rem 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
          <h3 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, marginBottom: '4rem' }}>How It Works</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ maxWidth: '300px', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem', color: 'var(--accent-primary)' }}>
                  {step.icon}
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.8rem' }}>Step {idx + 1}: {step.title}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="desktop-only" style={{ position: 'absolute', top: '40px', right: '-40px', color: 'var(--glass-border)' }}>
                    <FaChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. Why Choose NEXSG / CTA */}
        <motion.div
          className="glass"
          style={{ padding: '4rem', textAlign: 'center', borderRadius: '30px', background: 'linear-gradient(45deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Have an idea? Let's build it.</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join forward-thinking companies that leverage our scalable systems and modern tech stack to dominate their markets.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }} onClick={() => window.location.hash = 'contact'}>
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
