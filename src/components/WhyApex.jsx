import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Users, Globe, BookOpen, Briefcase } from 'lucide-react';

const features = [
  { icon: <Trophy size={24} />, title: "36 LPA Highest Package", desc: "Record breaking placements in top companies." },
  { icon: <Users size={24} />, title: "1000+ Recruiters", desc: "Massive network of hiring partners globally." },
  { icon: <Globe size={24} />, title: "Global Exposure", desc: "International tie-ups and exchange programs." },
  { icon: <GraduationCap size={24} />, title: "Expert Faculty", desc: "Learn from industry veterans and PhD holders." },
  { icon: <BookOpen size={24} />, title: "Modern Curriculum", desc: "Updated syllabus matching industry standards." },
  { icon: <Briefcase size={24} />, title: "100% Placement Support", desc: "Dedicated placement cell for your career." }
];

const WhyApex = () => {
  return (
    <section id="why-apex" style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose <span style={{ color: 'var(--accent-rust)' }}>Apex?</span></h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
            We provide a holistic environment that nurtures talent, encourages innovation, and ensures you are ready for the global stage.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '2rem'
        }}>
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ 
                width: '50px', height: '50px', 
                backgroundColor: '#fff0ec', 
                borderRadius: '12px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-rust)',
                marginBottom: '1.5rem'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{feat.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyApex;
