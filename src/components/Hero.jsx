import React from 'react';
import { Sparkles, Trophy, ArrowRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url(/heroimg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: 0 }}></div>
      {/* Dark Gradient Overlay for better text visibility */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }}></div>
      
      <section id="hero-section" className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 0', display: 'flex', gap: '4rem', alignItems: 'center', width: '100%' }}>
      {/* Left Column */}
      <div style={{ flex: 1 }} className="animate-fade-in">
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          border: '1px solid rgba(255,255,255,0.3)', 
          padding: '0.25rem 1rem', 
          borderRadius: '9999px',
          fontSize: '0.85rem',
          color: 'var(--accent-rust)',
          fontWeight: 600,
          marginBottom: '2rem',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
          <Sparkles size={14} />
          <span>ADMISSIONS 2025-26 OPEN</span>
        </div>

        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
          Shape a <span style={{ color: 'var(--accent-rust)', fontStyle: 'italic', position: 'relative' }}>
            brilliant
            <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '12px' }} viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,8 C30,12 70,12 100,2" stroke="var(--accent-rust)" strokeWidth="3" fill="none" />
            </svg>
          </span> <br /> future at Apex.
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.6 }}>
          India's premier private university in Jaipur — 128+ industry-centred programs, 1000+ recruiters, and lifetime of distinctive learning. Join 15,000+ dreamers building bold careers.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Start your application <ArrowRight size={16} />
          </button>
          <button className="btn-outline">Explore programs</button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '3rem' }}>
          {[
            { value: '15K+', label: 'Dreams Fulfilled' },
            { value: '1000+', label: 'Recruiters' },
            { value: '₹36L', label: 'Highest Package' },
            { value: '128+', label: 'Programs' }
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '2rem', fontFamily: 'Playfair Display', fontWeight: 700, color: 'var(--accent-red)', marginBottom: '0.25rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Form) */}
      <motion.div 
        className="hero-form-container"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: '0 0 420px', position: 'relative', maxWidth: '100%' }}
      >
        <div className="hero-popup-left" style={{ 
          position: 'absolute', 
          top: '-20px', 
          left: '-40px', 
          background: 'white', 
          padding: '0.75rem 1rem', 
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 10
        }}>
          <div style={{ background: '#fdf1ec', padding: '0.5rem', borderRadius: '50%', color: 'var(--accent-rust)' }}>
            <Trophy size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Highest package</div>
            <div style={{ fontWeight: 700, color: 'var(--accent-red)' }}>₹36 LPA</div>
          </div>
        </div>

        <div style={{ 
          background: 'white', 
          borderRadius: '24px', 
          padding: '2.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'var(--accent-red)', color: 'white', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Award size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Register for Admissions</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Get expert counselling · Scholarship up to 100%</p>
            </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Full Name *</label>
              <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Email</label>
                <input type="email" placeholder="you@email.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Mobile *</label>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--border-light)', borderRight: 'none', borderRadius: '8px 0 0 8px', background: '#f9f9f9', color: 'var(--text-light)' }}>+91</div>
                  <input type="tel" placeholder="10-digit number" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', border: '1px solid var(--border-light)', outline: 'none' }} />
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Discipline Interested In</label>
              <select style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', appearance: 'none', background: 'white' }}>
                <option value="">Choose a discipline</option>
                <option value="engineering">Engineering & Technology</option>
                <option value="management">Commerce & Management</option>
              </select>
            </div>

            <button type="button" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
              Get Free Counselling <ArrowRight size={16} />
            </button>
          </form>

          <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><Award size={12} /> 450+ students enrolled in last 7 days</span>
          </div>

          <div className="hero-popup-right" style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            right: '-20px', 
            background: 'white', 
            padding: '0.75rem 1.25rem', 
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{ background: '#fdf1ec', padding: '0.4rem', borderRadius: '50%', color: 'var(--accent-rust)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>Rated by alumni</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>4.8 / 5.0</div>
            </div>
          </div>
        </div>
      </motion.div>
      </section>
    </div>
  );
};

export default Hero;
