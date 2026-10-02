import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#1c1311', color: 'white', padding: '5rem 0 2rem 0', marginTop: '2rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--accent-rust)', padding: '0.75rem', borderRadius: '12px', display: 'flex' }}>
                <GraduationCap size={24} color="white" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.1em', lineHeight: 1 }}>APEX</h3>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#d1d5db' }}>UNIVERSITY</span>
              </div>
            </div>
            
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px' }}>
              India's premier private university, redefining higher education through research, innovation, and a globally diverse campus.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { name: 'Instagram', path: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.049 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.902 4.902 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.53c.638-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
                { name: 'Facebook', path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' },
                { name: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'Linkedin', path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' },
                { name: 'Youtube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
              ].map((icon, i) => (
                <motion.a 
                  key={i} 
                  href="#"
                  whileHover={{ y: -3, color: 'var(--accent-rust)', borderColor: 'var(--accent-rust)' }}
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #374151',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    transition: 'all 0.3s'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Programs Col */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-rust)', marginBottom: '1.5rem' }}>
              PROGRAMS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Undergraduate', 'Postgraduate', 'Diploma', 'Doctoral', 'Scholarships'].map((link, i) => (
                <li key={i}>
                  <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-rust)'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#d1d5db'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* University Col */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-rust)', marginBottom: '1.5rem' }}>
              UNIVERSITY
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['About Apex', 'Campus Life', 'Placements', 'Research', 'Events'].map((link, i) => (
                <li key={i}>
                  <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-rust)'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#d1d5db'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-rust)', marginBottom: '1.5rem' }}>
              GET IN TOUCH
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent-rust)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  SP-II, RIICO Industrial Area, Delhi-Jaipur Hwy, Jaipur, Rajasthan 303002
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Phone size={20} color="var(--accent-rust)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                  1800-123-4567
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Mail size={20} color="var(--accent-rust)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                  admissions@apexuniversity.co.in
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#9ca3af', fontSize: '0.85rem' }}>
          <p style={{ margin: 0 }}>© 2026 Apex University. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
