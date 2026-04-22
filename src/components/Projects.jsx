import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mask Detection Using Computer Vision',
    description: 'Developed a system to detect mask presence on faces in live scenarios achieving high accuracy.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    link: '#'
  },
  {
    title: 'Scam Detection',
    description: 'Created a system to identify scam messages using natural language processing algorithms.',
    tags: ['NLP', 'Machine Learning', 'Python'],
    link: '#'
  },
  {
    title: 'Vision Transfer Model',
    description: 'Built a vision transfer model using the CIFAR10 dataset, demonstrating applicability to various computer vision tasks.',
    tags: ['TensorFlow', 'Keras', 'Deep Learning'],
    link: '#'
  },
  {
    title: 'Portfolio Builder',
    description: 'Developed an online portfolio builder with an enhanced user interface and integrated backend functionalities.',
    tags: ['MERN Stack', 'MongoDB', 'React', 'NodeJS'],
    link: '#'
  },
  {
    title: 'Parkinson\'s Disease Detection',
    description: 'Developed a model for detecting Parkinson\'s disease using Machine Learning algorithms and Explainable AI (EXAI).',
    tags: ['EXAI', 'Machine Learning', 'AI'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 0', minHeight: '100vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Enterprise <span className="text-gradient">Solutions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Discover how we've helped our partners overcome technological hurdles through innovative engineering and strategic thinking.
          </p>
        </motion.div>


        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="glass"
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
            >
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{proj.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {proj.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', backgroundColor: 'var(--glass-bg)', borderRadius: '4px', border: '1px solid var(--glass-border)', color: 'var(--accent-secondary)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a href={proj.link} className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
