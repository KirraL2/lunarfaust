// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import AboutMe from '../components/AboutMe/AboutMe';
import AnimatedBackgroundSection from '../components/Introduction/Introduction1';
import GachaGamesSection from '../components/MyFavouriteGachaGames/MyFavouriteGachaGames';
import FaveAnimes from '../components/FaveAnimes/FaveAnimes';

function Home() {
  return (
    <div className='container'>
      <div className="top-bar">
        <Navbar />
      </div>

      <AnimatedBackgroundSection id="introduction" />
      <AboutMe id="about" />
      <div id="games">
        <GachaGamesSection />
        <FaveAnimes />
      </div>
    </div>
  );
}

export default Home;