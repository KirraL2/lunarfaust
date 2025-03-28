import React from 'react';
import './about.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            {/* Replace with your actual image */}
            <img src="/assets/avi.png" alt="Profile" className='floating-image'/>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hello! I'm Faust, a passionate Programmer with 0 years of experience 
            in creating beautiful, functional, and user-centered digital experiences. 
            I specialize in Gaming, and I love turning complex 
            problems into simple, intuitive solutions.
          </p>
          <p className="about-text">
            When I'm not coding or designing, you can find me in Discord. 
            I believe in continuous learning and staying updated with the latest 
            industry trends to deliver the best results.
          </p>
          <div className="skills-section">
            <h3 className="skills-title">My Skills</h3>
            <ul className="skills-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>Responsive Design</li>
              <li>DeepSeek Brotha</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;