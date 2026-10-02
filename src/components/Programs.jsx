import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, Calculator, Monitor, Leaf, Dna, Scale, Pill, BookOpen, 
  Activity, Users, Library, Scissors, GraduationCap, Heart, Stethoscope,
  Smile, FlaskConical, BarChart3, Globe2, BookType, Landmark, Cpu, Brain,
  Tractor, Briefcase, Calculator as CalcIcon, History, Microscope, Languages,
  Microscope as ZooIcon, User, Laptop, PencilRuler, CalendarCheck, VenetianMask, PawPrint, Share2
} from 'lucide-react';

const programs = {
  undergraduate: [
    { title: "Engineering", icon: <Settings size={28} /> },
    { title: "Commerce & Management", icon: <Calculator size={28} /> },
    { title: "Computer & IT", icon: <Monitor size={28} /> },
    { title: "Agriculture", icon: <Leaf size={28} /> },
    { title: "Basic, Life & Applied Sciences", icon: <Dna size={28} /> },
    { title: "Law", icon: <Scale size={28} /> },
    { title: "Pharmaceutical Sciences", icon: <Pill size={28} /> },
    { title: "Humanities & Arts", icon: <BookOpen size={28} /> },
    { title: "Physiotherapy", icon: <Activity size={28} /> },
    { title: "Journalism & Mass Communication", icon: <Share2 size={28} /> },
    { title: "Library Sciences", icon: <Share2 size={28} /> },
    { title: "Fashion Design", icon: <Share2 size={28} /> },
    { title: "Special Education", icon: <VenetianMask size={28} /> },
    { title: "Nursing", icon: <User size={28} /> },
    { title: "Paramedical Sciences", icon: <Settings size={28} /> },
    { title: "Education", icon: <VenetianMask size={28} /> },
    { title: "Clinical Psychology", icon: <VenetianMask size={28} /> }
  ],
  postgraduate: [
    { title: "Engineering", icon: <Settings size={28} /> },
    { title: "Commerce & Management", icon: <Calculator size={28} /> },
    { title: "Computer & IT", icon: <Monitor size={28} /> },
    { title: "Agriculture", icon: <Leaf size={28} /> },
    { title: "Basic, Life & Applied Sciences", icon: <Dna size={28} /> },
    { title: "Law", icon: <Scale size={28} /> },
    { title: "Pharmaceutical Sciences", icon: <Pill size={28} /> },
    { title: "Humanities & Arts", icon: <BookOpen size={28} /> },
    { title: "Physiotherapy", icon: <Activity size={28} /> },
    { title: "Journalism & Mass Communication", icon: <Share2 size={28} /> },
    { title: "Library Sciences", icon: <Share2 size={28} /> },
    { title: "Fashion Design", icon: <Share2 size={28} /> },
    { title: "Education", icon: <VenetianMask size={28} /> },
    { title: "Special Education", icon: <VenetianMask size={28} /> },
    { title: "Naturopathy & Yogic Sciences", icon: <VenetianMask size={28} /> },
    { title: "Clinical Psychology", icon: <VenetianMask size={28} /> }
  ],
  diploma: [
    { title: "Computer & IT", icon: <Monitor size={28} /> },
    { title: "Pharmaceutical Sciences", icon: <Pill size={28} /> },
    { title: "Library Science", icon: <User size={28} /> },
    { title: "Naturopathy & Yogic Sciences", icon: <Laptop size={28} /> },
    { title: "Education", icon: <PencilRuler size={28} /> },
    { title: "Fashion Design", icon: <CalendarCheck size={28} /> },
    { title: "Paramedical Sciences", icon: <Settings size={28} /> },
    { title: "Special Education", icon: <VenetianMask size={28} /> },
    { title: "Veterinary Sciences", icon: <VenetianMask size={28} /> },
    { title: "Education", icon: <VenetianMask size={28} /> }
  ],
  doctoral: [
    { title: "Agriculture", icon: <Tractor size={28} /> },
    { title: "Botany", icon: <Leaf size={28} /> },
    { title: "Chemistry", icon: <FlaskConical size={28} /> },
    { title: "Commerce", icon: <CalcIcon size={28} /> },
    { title: "Computer Science", icon: <Monitor size={28} /> },
    { title: "Clinical Psychology", icon: <Brain size={28} /> },
    { title: "Economics", icon: <BarChart3 size={28} /> },
    { title: "Education", icon: <GraduationCap size={28} /> },
    { title: "Fashion Design", icon: <Scissors size={28} /> },
    { title: "Geography", icon: <Globe2 size={28} /> },
    { title: "Hindi", icon: <Languages size={28} /> },
    { title: "History", icon: <History size={28} /> },
    { title: "Law", icon: <Scale size={28} /> },
    { title: "Management", icon: <Briefcase size={28} /> },
    { title: "Mathematics", icon: <Calculator size={28} /> },
    { title: "Physics", icon: <Activity size={28} /> },
    { title: "Political Science", icon: <Landmark size={28} /> },
    { title: "Psychology", icon: <Brain size={28} /> },
    { title: "Sociology", icon: <Users size={28} /> },
    { title: "Pharmaceutical Sciences", icon: <Pill size={28} /> },
    { title: "Zoology", icon: <ZooIcon size={28} /> }
  ]
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  return (
    <section id="programs" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          
          {/* Left Heading */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 300, 
              color: '#374151', 
              lineHeight: 1.3,
              margin: 0
            }}>
              Here Are <span style={{ fontWeight: 800, color: '#000000' }}>Our 128+ Industry Centred Programs</span> To Choose From
            </h2>
          </div>

          {/* Right Tabs */}
          <div style={{ 
            display: 'flex', 
            border: '1px solid #d1d5db', 
            borderRadius: '12px',
            padding: '0'
          }}>
            {Object.keys(programs).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    position: 'relative',
                    padding: '1rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    textTransform: 'capitalize',
                    background: isActive ? '#111827' : 'transparent',
                    color: isActive ? '#ffffff' : '#1e3a8a',
                    border: 'none',
                    borderRadius: isActive ? '12px' : '0',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {tab}
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0',
                      height: '0',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid #111827'
                    }} />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '1rem'
            }}
          >
            {programs[activeTab].map((prog, idx) => {
              return (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '0.75rem',
                    padding: '1.5rem 1rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    minHeight: '120px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.backgroundColor = '#fef08a'; // Yellowish hover effect for ALL cards
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                >
                  <div style={{ color: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {prog.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 700, 
                    color: '#1e3a8a',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {prog.title}
                  </h3>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Programs;
