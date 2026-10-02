import React from 'react';
import { motion } from 'framer-motion';

const MarksOfExcellence = () => {
  return (
    <section className="container" style={{ padding: '5rem 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#333', marginBottom: '0.25rem', fontFamily: 'Inter, sans-serif' }}>
          Is Your Future Secure With Us?
        </h2>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
          Well, These Marks of Excellence Speak For Us!
        </h3>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', width: '100%', flexWrap: 'nowrap' }}>
        {[
          { src: 'img1.png', alt: '61 Years of Excellence' },
          { src: 'img2.png', alt: 'Ranked 1 Emerging University' },
          { src: 'img3.png', alt: '6.00 Lakh+ CUET 2024' },
          { src: 'img4.png', alt: '4.50 Lakh+ CUET 2025' }
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            <img 
              src={`/${img.src}`} 
              alt={img.alt} 
              style={{ 
                width: '100%',
                maxHeight: '200px', 
                objectFit: 'contain'
              }} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MarksOfExcellence;
