import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/1084-2.webp', label: 'Academic Excellence' },
  { src: '/1084-n1.webp', label: 'Student Life' },
  { src: '/1084-n2.jpg.jpeg', label: 'Sports Complex' },
  { src: '/1084_4.webp', label: 'Cultural Events' },
  { src: '/724-2_1.webp', label: 'Library & Labs' },
  { src: '/724_2.webp', label: 'Hostel Life' },
  { src: '/726-2_6.webp', label: 'Classrooms' },
  { src: '/726_6.webp', label: 'Convocation' }
];

const CampusLife = () => {
  return (
    <section id="campus-life" style={{ padding: '6rem 0', backgroundColor: '#f9fafb', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent-rust)' }}></div>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--accent-rust)', fontWeight: 600 }}>GALLERY</span>
            <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent-rust)' }}></div>
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: '#111827' }}>
            Experience <span style={{ color: 'var(--accent-rust)' }}>Campus Life</span>
          </h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            A vibrant environment designed to foster learning, creativity, and lifelong friendships. Step into the world of Apex.
          </p>
        </div>

        {/* Uniform Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.25rem',
          padding: '0.5rem'
        }}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 0.97, y: -5 }}
              style={{
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                cursor: 'pointer'
              }}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampusLife;
