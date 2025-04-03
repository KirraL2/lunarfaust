import React, { useState, useRef, useEffect } from 'react';
import './AboutMe.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const AboutMe = () => {
  const aboutTexts = [
    "Hello! I'm Faust, a passionate Programmer with 0 years of experience in creating beautiful, functional, and user-centered digital experiences. I specialize in Gaming, and I love turning complex problems into simple, intuitive solutions.",
    "When I'm not coding, you can find me in Discord. I believe in continuous learning and staying updated with the latest industry trends to deliver the best results."
  ];

  const skills = ["React", "JavaScript", "HTML/CSS", "Node.js", "Responsive Design", "DeepSeek"];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/assets/avi.jpg" alt="Profile" className='floating-image'/>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">
            About Me
          </h2>
          <p className="about-text">
            <TypingAnimation 
              text={aboutTexts[0]} 
              speed={20} 
              startTyping={isVisible}
            />
          </p>
          <p className="about-text">
            <TypingAnimation 
              text={aboutTexts[1]} 
              speed={20} 
              delay={aboutTexts[0].length * 20 + 300} 
              startTyping={isVisible}
            />
          </p>
          <div className="skills-section">
            <h3 className="skills-title">My Skills</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;