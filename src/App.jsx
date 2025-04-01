import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import AnimatedBackgroundSection from './components/Introduction/Introduction1';
import './App.css';
import GachaGamesSection from './components/MyFavouriteGachaGames/MyFavouriteGachaGames';
import FaveAnimes from './components/FaveAnimes/FaveAnimes';

function App() {
  return (
    <div className='container'>
      <div className="top-bar">
        <Navbar /> {/* Navbar now handles music */}
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

export default App;
