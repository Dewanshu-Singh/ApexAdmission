import React from 'react';
import { motion } from 'framer-motion';

const labs = [
  {
    title: 'Chemistry Lab',
    img: '/chemistry.webp'
  },
  {
    title: 'Forensic Lab',
    img: '/forensic.webp'
  },
  {
    title: 'Moot Court',
    img: '/moot-court.webp'
  },
  {
    title: 'Computer Lab',
    img: '/computer.webp'
  }
];

const Facilities = () => {
  return (
    <section className="container" style={{ padding: '6rem 0' }}>
      
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent-rust)' }}></div>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--accent-rust)', fontWeight: 600 }}>SKILL TRAINING FACILITIES</span>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', fontFamily: 'Playfair Display' }}>
          Elevating you with premier training labs
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {labs.map((lab, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            style={{ 
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden',
              height: '400px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <motion.img 
              src={lab.img} 
              alt={lab.title} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Facilities;
