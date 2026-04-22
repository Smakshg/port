import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaArrowLeft, FaInfoCircle, FaStar, FaGlobe, FaLayerGroup } from 'react-icons/fa';

const items = [
  { id: 1, title: 'Quantum Computing', desc: 'Processing data at the atomic level for unprecedented power.', icon: <FaStar />, color: '#8b5cf6' },
  { id: 2, title: 'Neural Networks', desc: 'Mimicking the human brain to solve complex patterns.', icon: <FaGlobe />, color: '#06b6d4' },
  { id: 3, title: 'Cloud Infrastructure', desc: 'Elastic resources that scale with your global ambition.', icon: <FaLayerGroup />, color: '#10b981' },
  { id: 4, title: 'Cyber Security', desc: 'Fortifying the web with next-gen encryption protocols.', icon: <FaInfoCircle />, color: '#f43f5e' },
  { id: 5, title: 'Space Exploration', desc: 'Pushing the boundaries of human knowledge in the void.', icon: <FaStar />, color: '#f59e0b' },
  { id: 6, title: 'Clean Energy', desc: 'Renewable solutions for a sustainable planetary future.', icon: <FaGlobe />, color: '#x2dd63' },
  { id: 7, title: 'Autonomous AI', desc: 'Systems that learn, adapt, and evolve independently.', icon: <FaArrowLeft />, color: '#3b82f6' },
  { id: 8, title: 'Genetic Design', desc: 'Rewriting the code of life for health and longevity.', icon: <FaLayerGroup />, color: '#ec4899' },
];

const HelixSkeleton = ({ onBack }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isMobile = window.innerWidth < 768;
  const cardHeight = isMobile ? 250 : 400;

  // Sync Rotation: Rotate based on the number of items
  const rotation = useTransform(smoothProgress, [0, 1], [0, -((items.length - 1) / items.length) * 360]);

  // Sync Vertical Travel: Shift the whole spiral up so each card hits the center
  const verticalTravel = useTransform(smoothProgress, [0, 1], [0, -((items.length - 1) * cardHeight)]);

  
  return (
    <div ref={containerRef} style={{ height: '800vh', background: '#050505', color: '#fff', position: 'relative' }}>
      {/* Back Button */}
      <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 1000, 
          background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none',
          padding: '10px 20px', borderRadius: '30px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(10px)'
        }}
      >
        <FaArrowLeft /> Back to Showcase
      </button>

      {/* Persistent Background Title */}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, textAlign: 'center', pointerEvents: 'none' }}>
        <h1 style={{ fontSize: '15vw', fontWeight: 900, opacity: 0.03, letterSpacing: '20px' }}>SPIRAL</h1>
      </div>

      {/* Sticky Spiral Scene */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', perspective: isMobile ? '1200px' : '2000px' }}>
        <motion.div 
          style={{ 
            transformStyle: 'preserve-3d',
            rotateY: rotation,
            y: verticalTravel, // The vertical scrolling motion
            width: '1px', height: '1px', 
            position: 'relative'
          }}
        >
          {items.map((item, i) => {
            // Distribute points in a cylinder
            const angle = (i / items.length) * (Math.PI * 2);
            const radius = isMobile ? 300 : 700; 
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            
            // i=0 starts at y=0 (center of screen)
            const y = i * cardHeight; 

            return (
              <HelixCard 
                key={item.id} 
                item={item} 
                x={x} 
                y={y} 
                z={z} 
                angle={angle}
                rotation={rotation}
              />
            );
          })}
        </motion.div>
      </div>

      <div style={{ position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.3, fontSize: '0.7rem', letterSpacing: '8px' }}>
        DRIVE THROUGH THE SPIRAL
      </div>
    </div>
  );
};

const HelixCard = ({ item, x, y, z, angle, rotation }) => {
  const angleDeg = (angle * 180) / Math.PI;
  
  // Calculate how close this card is to the "front" (center)
  // We handle the wrapping logic manually to ensure a smooth 0-1 range
  const opacity = useTransform(rotation, (r) => {
    const currentAngle = (angleDeg + r) % 360;
    // Normalize to -180 to 180
    const normalized = currentAngle > 180 ? currentAngle - 360 : (currentAngle < -180 ? currentAngle + 360 : currentAngle);
    // Highest opacity at 0, fades at -90 and 90
    const distance = Math.abs(normalized);
    if (distance > 90) return 0.1;
    return 1 - (distance / 90) * 0.8;
  });

  const scale = useTransform(opacity, [0.1, 1], [0.8, 1.1]);

  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: isMobile ? '280px' : '450px', 
        height: isMobile ? '200px' : '300px',
        transformStyle: 'preserve-3d',
        translateX: x,
        translateY: y,
        translateZ: z,
        rotateY: angleDeg, 
        x: '-50%',
        y: '-50%',
        opacity: opacity,
        scale: scale,
      }}
      whileHover={{ scale: 1.15, filter: 'brightness(1.5)', zIndex: 100 }}
    >

      <div 
        className="glass" 
        style={{ 
          width: '100%', 
          height: '100%', 
          padding: isMobile ? '20px' : '40px', 
          borderLeft: `${isMobile ? '6px' : '10px'} solid ${item.color}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: `0 30px 60px -12px rgba(0,0,0,0.9), 0 0 40px ${item.color}22`,
          background: 'rgba(10,10,10,0.8)',
          backfaceVisibility: 'hidden',
          borderRadius: isMobile ? '12px' : '20px'
        }}
      >
        <div style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', color: item.color, marginBottom: isMobile ? '10px' : '20px' }}>{item.icon}</div>
        <h3 style={{ fontSize: isMobile ? '1.2rem' : '2.2rem', fontWeight: 900, marginBottom: isMobile ? '5px' : '15px', color: '#fff', letterSpacing: '-1px' }}>{item.title}</h3>
        <p style={{ fontSize: isMobile ? '0.8rem' : '1.2rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
      </div>
    </motion.div>
  );
};



export default HelixSkeleton;
