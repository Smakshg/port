import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'MERN Stack', category: 'Web' },
  { name: 'React & NodeJS', category: 'Web' },
  { name: 'Python & C++', category: 'Languages' },
  { name: 'AI & Machine Learning', category: 'AI' },
  { name: 'TensorFlow & Keras', category: 'AI' },
  { name: 'OpenCV & NLP', category: 'AI' },
  { name: 'Data Engineering', category: 'Data' },
  { name: 'Three.js / 3D', category: 'Web' },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '100px 0', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>
            <span className="text-gradient">Tech Core</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'var(--accent-secondary)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
