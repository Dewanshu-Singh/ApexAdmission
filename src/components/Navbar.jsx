import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Programs', 'Placements', 'Campus Life', 'Why Apex', 'Contact'];

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, left: 0, right: 0, 
        zIndex: 100, 
        background: scrolled ? 'transparent' : '#ffffff',
        transition: 'all 0.4s ease'
      }}>
        <nav 
          className="container"
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: scrolled ? '0.5rem 1.5rem' : '0.75rem 2rem',
            height: scrolled ? '70px' : '80px',
            background: '#ffffff',
            borderRadius: scrolled ? '100px' : '0',
            marginTop: scrolled ? '1rem' : '0',
            boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.4s ease',
            position: 'relative',
            zIndex: 101
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img 
              src="/logo2.png" 
              alt="Apex University" 
              style={{ 
                height: '100%',
                maxHeight: '50px', 
                objectFit: 'contain' 
              }} 
            />
          </div>

          {/* Desktop Links */}
          <div className="desktop-only" style={{ gap: '2.5rem', fontSize: '1rem', fontWeight: 500 }}>
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                style={{ color: 'var(--text-main)', transition: 'color 0.2s' }} 
                onMouseOver={e => e.target.style.color = 'var(--accent-rust)'} 
                onMouseOut={e => e.target.style.color = 'var(--text-main)'}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="desktop-only" style={{ alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-red)', fontWeight: 600, fontSize: '1.05rem' }}>
              <Phone size={20} />
              <span>1800-123-4567</span>
            </div>
            <button 
              style={{
                backgroundColor: 'var(--accent-rust)',
                color: 'white',
                padding: '0.7rem 1.8rem',
                borderRadius: '9999px',
                fontWeight: 500,
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={e => { e.target.style.backgroundColor = '#d14920'; e.target.style.transform = 'translateY(-1px)'; }}
              onMouseOut={e => { e.target.style.backgroundColor = 'var(--accent-rust)'; e.target.style.transform = 'translateY(0)'; }}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-main)', 
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none' // Will be overridden by .mobile-only CSS class
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '100vh',
              background: 'white',
              zIndex: 99,
              padding: '100px 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: 'var(--text-main)', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }} 
                >
                  {item}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto', paddingBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-red)', fontWeight: 600, fontSize: '1.2rem', justifyContent: 'center' }}>
                <Phone size={24} />
                <span>1800-123-4567</span>
              </div>
              <button 
                style={{
                  backgroundColor: 'var(--accent-rust)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
