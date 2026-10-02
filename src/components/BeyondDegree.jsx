import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Trophy } from 'lucide-react';

const programs = [
  {
    icon: <ShieldCheck size={28} />,
    tag: 'MOTIVATIONAL SUPPORT',
    title: 'Armed Forces',
    desc: 'Specialized training & mentorship to prepare students for prestigious Armed Forces careers.'
  },
  {
    icon: <Target size={28} />,
    tag: 'UPSC & GPSC COACHING',
    title: 'Competitive Exams',
    desc: 'Dedicated coaching to crack civil service examinations with expert faculty guidance.'
  },
  {
    icon: <Trophy size={28} />,
    tag: 'IIT & NIT PREPARATION',
    title: 'GATE Examination',
    desc: 'Rigorous GATE coaching paving the way for higher studies at leading IITs and NITs.'
  }
];

const BeyondDegree = () => {
  return (
    <section className="container" style={{ padding: '6rem 0' }}>
      
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent-rust)' }}></div>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--accent-rust)', fontWeight: 600 }}>BEYOND A DEGREE</span>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', fontFamily: 'Playfair Display' }}>
          We shape your future, not just a career
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {programs.map((prog, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            style={{ 
              background: '#fdf1ec', 
              padding: '2.5rem', 
              borderRadius: '24px', 
              cursor: 'default'
            }}
          >
            <div style={{ 
              background: '#111827', 
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              {prog.icon}
            </div>
            
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-rust)', marginBottom: '0.5rem', display: 'block' }}>
              {prog.tag}
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '1rem', fontFamily: 'Playfair Display' }}>
              {prog.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              {prog.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default BeyondDegree;
