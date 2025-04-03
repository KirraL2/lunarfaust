import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text, speed = 30, delay = 0, startTyping = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    // Set up the initial delay if specified
    let delayTimer;
    if (delay > 0) {
      delayTimer = setTimeout(() => {
        setIsReady(true);
      }, delay);
    } else {
      setIsReady(true);
    }

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
    };
  }, [startTyping, delay]);

  useEffect(() => {
    if (!isReady || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, isReady]);

  return (
    <span className="typing-text">
      {displayedText}
      {isReady && currentIndex < text.length && (
        <span className="typing-cursor">|</span>
      )}
    </span>
  );
};

export default TypingAnimation;