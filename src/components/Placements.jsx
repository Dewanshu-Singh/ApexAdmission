import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Building, ArrowRight } from 'lucide-react';

const alumni = [
  { name: 'Aditi Mathur', company: 'Infosys', img: '/comp-1.png' },
  { name: 'Naman Joshi', company: 'Nagarro', img: '/comp-2.png' },
  { name: 'Ashok Sohlot', company: 'Oppo', img: '/comp-3.png' },
  { name: 'Aman Jain', company: 'Paytm', img: '/comp-4.webp' },
];

const Placements = () => {
  return (
    <section id="placements" className="container" style={{ padding: '6rem 0' }}>
      
      {/* Section Header */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent-rust)' }}></div>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--accent-rust)', fontWeight: 600 }}>PLACEMENTS</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>
          Your Impeccable Placement Opportunities <br />
          <span style={{ color: 'var(--accent-rust)', fontStyle: 'italic' }}>With Milestone Packages</span>
        </h2>
      </div>

      {/* Top 3-Column Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '5rem' }}>
        
        {/* Left Col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
          transition={{ duration: 0.4 }}
          style={{ padding: '2rem', background: '#f9fafb', borderRadius: '16px', border: '1px solid var(--border-light)', cursor: 'default' }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>We have</p>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-rust)', lineHeight: 1 }}>1000+ Recruiters</h3>
          </div>
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '0.5rem', lineHeight: 1.5 }}>
              Ready to Provide You with the Best Job Offers With upto
            </p>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-red)', lineHeight: 1 }}>36 Lakhs</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginTop: '0.25rem' }}>Highest Package</p>
          </div>
        </motion.div>

        {/* Center Col - Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.03, boxShadow: '0 30px 60px rgba(217, 119, 87, 0.4)' }}
          style={{ 
            padding: '3rem 2rem', 
            background: 'var(--accent-rust)', 
            borderRadius: '16px', 
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(217, 119, 87, 0.2)',
            cursor: 'default'
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3, fontFamily: 'Playfair Display' }}>
            Bridging Dreams & Careers
          </h3>
          <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.3)', margin: '1.5rem auto' }}></div>
          <p style={{ fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.5 }}>
            Where Your Success Begins with our placements
          </p>
        </motion.div>

        {/* Right Col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111827' }}>
            How We Help Get Hired By The Best?
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              'Career Development & Training',
              'Industry Collaborations for UpSkilling',
              'Campus Drives & Interview Training'
            ].map((text, i) => (
              <motion.div key={i} 
                whileHover={{ x: 8, borderColor: 'var(--accent-rust)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                transition={{ duration: 0.2 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: '8px',
                  background: 'white',
                  cursor: 'default'
              }}>
                <CheckCircle2 size={20} style={{ color: 'var(--accent-rust)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#374151' }}>{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Alumni Row */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 2fr', 
        gap: '4rem', 
        alignItems: 'center',
        background: '#fdf1ec',
        padding: '3rem',
        borderRadius: '24px'
      }}>
        
        {/* Left Text */}
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 300, color: '#111827', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            You Also Can Be Among
          </h3>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-rust)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Our Alumni Working With the World's Top Brands
          </h2>
          <button style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'white',
            color: 'var(--accent-rust)',
            border: '1px solid var(--accent-rust)',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-rust)'; e.currentTarget.style.color = 'white'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--accent-rust)'; }}
          >
            View All Placements <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Alumni Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {alumni.map((alum, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              style={{ 
                position: 'relative',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <img 
                src={alum.img} 
                alt={alum.name} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  objectFit: 'contain'
                }} 
              />
              <div style={{ padding: '0.75rem 0.25rem', background: '#111827', color: 'white', borderRadius: '0 0 12px 12px', marginTop: '-4px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, margin: 0 }}>{alum.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Placements;
