import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'smakshgupta55@gmail.com',
      link: 'mailto:smakshgupta55@gmail.com',
      color: '#ea4335'
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+91 6006332447',
      link: 'https://wa.me/916006332447',
      color: '#25d366'
    },
    {
      id: 3,
      icon: <FaPhone />,
      title: 'Primary Call',
      value: '+91 6006332447',
      link: 'tel:+916006332447',
      color: '#34b7f1'
    },
    {
      id: 4,
      icon: <FaPhone />,
      title: 'Secondary Call',
      value: '+91 9086106797',
      link: 'tel:+919086106797',
      color: '#34b7f1'
    }
  ];

  return (
    <section style={{ padding: 'var(--section-padding) 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 8vw, 4rem)' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
            Start a <span className="text-gradient">Partnership.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 4vw, 1.2rem)', maxWidth: '600px', margin: '0 auto' }}>
            Have a vision for your enterprise? Reach out to our team of experts. We are ready to help you architect your next digital breakthrough.
          </p>
        </motion.div>


        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', width: '100%', maxWidth: '1200px' }}>
          {contactInfo.map((info) => (
            <motion.a 
              key={info.id}
              href={info.link}
              target={info.title === 'WhatsApp' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="glass"
              style={{ 
                padding: 'clamp(1.5rem, 5vw, 2.5rem)', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textDecoration: 'none', 
                color: '#fff',
                borderTop: `4px solid ${info.color}`
              }}
            >
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: info.color, marginBottom: '20px' }}>{info.icon}</div>
              <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '10px' }}>{info.title}</h3>
              <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', fontWeight: 600, wordBreak: 'break-word', textAlign: 'center' }}>{info.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Contact;
