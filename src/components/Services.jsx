import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom machine learning models and AI integrations to automate your business processes and derive actionable insights.',
    icon: '🤖'
  },
  {
    title: 'Web Engineering',
    description: 'High-performance, scalable web applications built with modern frameworks and robust backend architectures.',
    icon: '💻'
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.',
    icon: '📱'
  },
  {
    title: 'Data Engineering',
    description: 'Architecting scalable data pipelines and processing systems to power your data-driven decision making.',
    icon: '📊'
  },
  {
    title: '3D & Immersive Web',
    description: 'Interactive 3D environments and immersive web experiences using Three.js and WebGL technology.',
    icon: '🕶️'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Secure and scalable cloud deployments ensuring your applications are always available and performant.',
    icon: '☁️'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: 'var(--section-padding) 0', minHeight: '80vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Our <span className="text-gradient">Specializations</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            We leverage cutting-edge technologies to build future-ready solutions for ambitious organizations.
          </p>
        </motion.div>

        <div className="responsive-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{
                y: -10,
                borderColor: 'var(--accent-primary)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {service.description}
              </p>
              
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                fontSize: '8rem', 
                opacity: 0.03, 
                pointerEvents: 'none' 
              }}>
                {service.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
