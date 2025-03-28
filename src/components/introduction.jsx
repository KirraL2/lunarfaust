import React from 'react';
import './introduction.css';

const AnimatedBackgroundSection = () => {
  return (
    <section className="animated-bg-section">
      <div className="bg-gif-overlay"></div>
      <div className="animated-content">
        <h1 className="cool-title">Lunar.Faust</h1>
        <p className="cool-subtitle">Former Highschool Student (soon)</p>
      </div>
    </section>
  );
};

export default AnimatedBackgroundSection;