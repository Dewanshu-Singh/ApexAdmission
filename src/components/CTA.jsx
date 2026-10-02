import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const stats = [
  { value: '15K+', label: 'Students' },
  { value: '175+', label: 'Awards' },
  { value: '128+', label: 'Programs' },
  { value: '1000+', label: 'Recruiters' }
];

const CTA = () => {
  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      
      <div style={{
        background: 'linear-gradient(135deg, #5c2018 0%, #300f0c 100%)',
        borderRadius: '32px',
        padding: '4rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative pattern */}
        <div style={{
          position: 'absolute',
          top: '2rem', right: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: '8px',
          opacity: 0.1
        }}>
          {[...Array(60)].map((_, i) => (
            <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></div>
          ))}
        </div>

        {/* Left Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent-rust)' }}></div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#fca5a5', fontWeight: 600 }}>YOUR JOURNEY STARTS HERE</span>
          </div>

          <h2 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 800, 
            color: 'white', 
            lineHeight: 1.1, 
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display' 
          }}>
            A quality student <br /> deserves <span style={{ color: '#fca5a5', fontStyle: 'italic' }}>a</span> <br /> quality university.
          </h2>

          <p style={{ color: '#e5e7eb', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '400px' }}>
            Join 15,000+ students who chose Apex. 175+ awards. 1000+ recruiters. One future — yours.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: 'var(--accent-rust)', 
                color: 'white', 
                border: 'none',
                padding: '0.875rem 1.75rem', 
                borderRadius: '9999px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              Apply Now <ArrowRight size={18} />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: 'transparent', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.875rem 1.75rem', 
                borderRadius: '9999px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            >
              <Phone size={18} /> Talk to Counsellor
            </motion.button>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '1rem',
          position: 'relative',
          zIndex: 1 
        }}>
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)' }}
              style={{ 
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s'
              }}
            >
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem', lineHeight: 1 }}>
                {stat.value}
              </h3>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', margin: 0 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default CTA;
