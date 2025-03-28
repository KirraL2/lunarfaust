// components/MusicPlayer.jsx
import React from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ isMuted, toggleMute }) => {
  return (
    <div className="music-player">
      <button 
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        className={`music-toggle ${isMuted ? 'muted' : ''}`}
      >
        <span className="music-icon">
          {isMuted ? '🔇' : '🔊'}
        </span>
        <span className="music-label">
          {isMuted ? '' : ''}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;