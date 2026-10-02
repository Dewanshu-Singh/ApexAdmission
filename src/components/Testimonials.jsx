import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const students = [
  {
    name: 'Jayaa Singh Naruka',
    quote: 'By participating in the intra and inter-college competitions, I have improved on my leadership, Time management & Team skills. The well qualified faculty here makes the University what it is today, with their attitude of being ever-ready to help not only in classroom teachings but also integrating real life case studies while imparting their lectures.',
    img: '/jayaa Singh.webp',
    heading: 'Our Students Speak',
    theme: 'dark',
    align: 'right'
  },
  {
    name: 'Shivam Chaudhary',
    quote: 'Apex School of Law offered me an excellent learning environment that strengthened my academic base and professional outlook. The faculty’s dedication and student-centric approach made learning engaging and meaningful. The skills and confidence I gained here have helped me move forward in my career with clarity and purpose.',
    img: '/shivam.webp',
    heading: "What Do Our Student's Have to Say",
    theme: 'dark',
    align: 'left'
  },
  {
    name: '"Bhawana Kanwar"',
    quote: 'My journey at Apex University has been truly enriching and career-oriented. The BBA program provided me with strong fundamentals in management along with practical exposure through industry interactions and training. The faculty consistently encouraged critical thinking and professional growth, which helped me gain confidence and clarity in my career path. I am grateful to Apex University for shaping me into a competent professional ready for the corporate world.',
    img: '/BHAWANA.webp',
    heading: "What Do Our Student's Have to Say",
    theme: 'light',
    align: 'right'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % students.length);
    }, 5000); // Auto change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const student = students[currentIndex];
  const isDark = student.theme === 'dark';
  const isImgRight = student.align === 'right';

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        
        <div style={{ position: 'relative', minHeight: '450px', display: 'flex', alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                display: 'flex',
                flexDirection: isImgRight ? 'row' : 'row-reverse',
                background: isDark ? '#111827' : '#ffffff',
                color: isDark ? '#ffffff' : '#111827',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
                width: '100%',
                border: isDark ? 'none' : '1px solid var(--border-light)'
              }}
            >
              
              {/* Text Content */}
              <div style={{ flex: 1, padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '2rem',
                  flexDirection: isImgRight ? 'row' : 'row-reverse',
                  justifyContent: 'flex-start'
                }}>
                  {!isImgRight && <ArrowLeft color="#fbbf24" size={28} />}
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 300, color: isDark ? '#ffffff' : '#111827', margin: 0 }}>
                    {student.heading}
                  </h3>
                  {isImgRight && <ArrowRight color="#fbbf24" size={28} />}
                </div>

                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
                  {student.name}
                </h2>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7, 
                  fontStyle: 'italic', 
                  color: isDark ? '#e5e7eb' : '#374151',
                  fontWeight: 400
                }}>
                  {isDark && !isImgRight ? student.quote : `"${student.quote}"`}
                </p>
              </div>

              {/* Image Content */}
              <div style={{ flex: 1, position: 'relative', minHeight: '400px' }}>
                <img 
                  src={student.img} 
                  alt={student.name}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                />
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-2.5rem', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            display: 'flex', 
            gap: '0.5rem' 
          }}>
            {students.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: i === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === currentIndex ? 'var(--accent-rust)' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
