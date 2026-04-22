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
    <section style={{ padding: '150px 5%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px' }}>Start a <span className="text-gradient">Partnership.</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Have a vision for your enterprise? Reach out to our team of experts. We are ready to help you architect your next digital breakthrough.
        </p>
      </motion.div>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', maxWidth: '1200px' }}>
        {contactInfo.map((info) => (
          <motion.a 
            key={info.id}
            href={info.link}
            target={info.title === 'WhatsApp' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass"
            style={{ 
              padding: '40px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textDecoration: 'none', 
              color: '#fff',
              borderTop: `4px solid ${info.color}`
            }}
          >
            <div style={{ fontSize: '3rem', color: info.color, marginBottom: '20px' }}>{info.icon}</div>
            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '10px' }}>{info.title}</h3>
            <p style={{ fontSize: '1.3rem', fontWeight: 600 }}>{info.value}</p>
          </motion.a>
        ))}
      </div>

      <div style={{ paddingBottom: '100px' }}></div>
    </section>
  );
};


export default Contact;
