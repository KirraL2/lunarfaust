import React, { useState, useRef, useEffect } from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './Navbar.css';

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const FIXED_VOLUME = 0.15;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = FIXED_VOLUME;

    const tryPlay = () => {
      if (!isMuted) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(e => {
            console.error("Playback failed:", e);
            setIsMuted(true);
          });
      }
    };

    const handleFirstInteraction = () => {
      document.removeEventListener('click', handleFirstInteraction);
      tryPlay();
    };

    audio.addEventListener('canplay', tryPlay);
    document.addEventListener('click', handleFirstInteraction);

    return () => {
      audio.removeEventListener('canplay', tryPlay);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      const newMutedState = !isMuted;
      audio.muted = newMutedState;
      setIsMuted(newMutedState);

      if (!newMutedState && !isPlaying) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error("Playback failed:", e));
      }
    }
  };

  return (
    <nav className="navbar">
      <audio ref={audioRef} src="/music/background.mp3" loop muted={isMuted} preload="auto" />
      
      <div className="navbar-content">
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#games">Fave Stuff</a></li>
        </ul>
        <div className="music-player-container">
          <MusicPlayer isMuted={isMuted} toggleMute={toggleMute} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
