import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import AboutMe from './components/AboutMe/AboutMe';
import AnimatedBackgroundSection from './components/Introduction/Introduction1';
import './App.css';
import GachaGamesSection from './components/MyFavouriteGachaGames/MyFavouriteGachaGames';

function App() {
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
    <div className='container'>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        muted={isMuted}
        preload="auto"
      />
      
      <div className="top-bar">
        <Navbar />
        <MusicPlayer isMuted={isMuted} toggleMute={toggleMute} />
      </div>
      
      <AnimatedBackgroundSection id="introduction" />
      <AboutMe id="about" />
      <GachaGamesSection id="gacha"/>
    </div>
  );
}

export default App;