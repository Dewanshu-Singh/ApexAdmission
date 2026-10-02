import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "25+", label: "Years of Excellence" },
  { number: "100k+", label: "Global Alumni Network" },
  { number: "500+", label: "Expert Faculty Members" },
  { number: "100%", label: "Placement Assistance" },
  { number: "32", label: "Acre Lush Green Campus" }
];

const Statistics = () => {
  return (
    <section style={{ backgroundColor: '#20223b', padding: '4rem 0', color: 'white' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              style={{ padding: '1rem' }}
            >
              <h3 style={{ 
                fontSize: '3rem', 
                fontWeight: 700, 
                color: '#ffd700', 
                marginBottom: '0.5rem',
                fontFamily: 'Inter, sans-serif'
              }}>
                {stat.number}
              </h3>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.4 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
