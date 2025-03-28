import React from 'react';
import './Introduction.css';

const AnimatedBackgroundSection = ({ id }) => {
  return (
    <section id={id} className="animated-bg-section">
      {/* Use forward slashes and public path */}
      <img 
        src="/public/assets/cassie.gif" 
        alt="background"
        className="bg-gif"
        onError={(e) => console.error('Failed to load GIF:', e.target.src)}
      />
      <div className="bg-gif-overlay"></div>
      <div className="animated-content">
        <h1 className="cool-title">Lunar.Faust</h1>
        <p className="cool-subtitle">Former Highschool Student (soon)</p>
      </div>
    </section>
  );
};

export default AnimatedBackgroundSection;