import React from 'react';
import './Introduction.css';

const AnimatedBackgroundSection = ({ id }) => {
  return (
    <section id={id} className="animated-bg-section">
      <div className="bg-gif-overlay"></div>
      <div className="animated-content">
        <h1 className="cool-title">Lunar.Faust</h1>
        <p className="cool-subtitle">Former Highschool Student</p>
      </div>
    </section>
  );
};

export default AnimatedBackgroundSection;