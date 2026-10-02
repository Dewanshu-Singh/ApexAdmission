import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarksOfExcellence from './components/MarksOfExcellence';
import HiringPartners from './components/HiringPartners';
import Placements from './components/Placements';
import Statistics from './components/Statistics';
import Programs from './components/Programs';
import WhyApex from './components/WhyApex';
import Facilities from './components/Facilities';
import BeyondDegree from './components/BeyondDegree';
import Testimonials from './components/Testimonials';
import CampusLife from './components/CampusLife';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <MarksOfExcellence />
        <HiringPartners />
        <Placements />
        <Statistics />
        <Programs />
        <WhyApex />
        <Facilities />
        <BeyondDegree />
        <Testimonials />
        <CampusLife />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
