import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'IMG_1218.PNG', 'IMG_1219.PNG', 'IMG_1220.PNG', 'IMG_1221.PNG', 'IMG_1222.PNG',
  'IMG_1223.JPG.jpeg', 'IMG_1224.PNG', 'IMG_1225.PNG', 'IMG_1226.PNG', 'IMG_1227.JPG.jpeg',
  'IMG_1228.JPG.jpeg', 'IMG_1229.PNG', 'IMG_1230.PNG', 'IMG_1231.JPG.jpeg', 'IMG_1232.PNG',
  'IMG_1233.JPG.jpeg', 'IMG_1234.JPG.jpeg', 'IMG_1235.PNG', 'IMG_1236.JPG.jpeg', 'IMG_1237.PNG',
  'IMG_1238.PNG', 'IMG_1239.JPG.jpeg', 'IMG_1240.JPG.jpeg', 'IMG_1241.PNG', 'IMG_1242.PNG',
  'IMG_1243.PNG', 'IMG_1244.PNG', 'IMG_1245.PNG', 'IMG_1246.PNG', 'IMG_1247.PNG'
];

const HiringPartners = () => {
  return (
    <section style={{ backgroundColor: '#20223b', padding: '5rem 0', color: '#ffffff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'inline-block' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 400, margin: 0, letterSpacing: '-0.01em', fontFamily: 'Inter, sans-serif', color: 'white' }}>
              Hiring Partners
            </h2>
            <div style={{ width: '50%', height: '4px', backgroundColor: '#ffd700', marginTop: '0.5rem' }}></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
            gap: '1.5rem',
            width: '100%'
          }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: '16/9',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={`/${logo}`} 
                alt={`Partner ${idx + 1}`} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain'
                }} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HiringPartners;
