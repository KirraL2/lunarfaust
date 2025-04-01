import React, { useState } from "react";
import "./MyFavouriteGachaGames.css";

const gachaGames = [
  {
    name: "Genshin Impact",
    image: "/assets/mizuki.jpg",
    developer: "miHoYo",
    release: "2020",
    genre: "Action RPG",
    description: "Open-world anime-style adventure game with gacha mechanics"
  },
  {
    name: "Arknights",
    image: "/assets/skadi.jpg",
    developer: "Hypergryph",
    release: "2019",
    genre: "Tower Defense",
    description: "Strategic tower defense game with war criminals"
  },
  {
    name: "Honkai: Star Rail",
    image: "/assets/cass.jpg",
    developer: "miHoYo",
    release: "2023",
    genre: "Turn-based RPG",
    description: "Space fantasy RPG with turn-based combat"
  },
  {
    name: "Zenless Zone Zero",
    image: "/assets/miyabi.jpeg",
    developer: "miHoYo",
    release: "2024",
    genre: "Action RPG",
    description: "Urban fantasy action game with rogue-like elements"
  },
  {
    name: "Wuthering Waves",
    image: "/assets/carlotta.jpg",
    developer: "Kuro Games",
    release: "2024",
    genre: "Action RPG",
    description: "Open-world action game with parkour and combat"
  },
  {
    name: "Limbus Company",
    image: "/assets/ishy.png",
    developer: "Project Moon",
    release: "2023",
    genre: "Adventure VN",
    description: "Indie gacha strategy video game with lobotomy"
  },
  {
    name: "Valorant",
    image: "/assets/iso.jpeg",
    developer: "Riot Games",
    release: "2020",
    genre: "Tactical FPS",
    description: "Character-based tactical shooter with unique abilities"
  },
];

const GachaGamesSection = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="gacha-container">
      <h2 className="gacha-title">My Favorite Games!</h2>
      <h6>P.S; All the images below this are interactable.</h6>
      <div className="gacha-grid">
        {gachaGames.map((game, index) => (
          <div
            key={index}
            className="gacha-card"
            onClick={() => setSelectedGame(game)}
          >
            <div className="gacha-image-container">
              <img 
                src={game.image} 
                alt={game.name} 
                className="gacha-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error("Image failed to load:", game.image);
                }}
              />
              <div className="overlay">
                <span className="game-hover-name">{game.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="game-modal" onClick={() => setSelectedGame(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedGame(null)}
            >
              ×
            </button>
            <img 
              src={selectedGame.image} 
              alt={selectedGame.name} 
              className="modal-image"
            />
            <h3>{selectedGame.name}</h3>
            <div className="modal-details">
              <p><strong>Developer:</strong> {selectedGame.developer}</p>
              <p><strong>Released:</strong> {selectedGame.release}</p>
              <p><strong>Genre:</strong> {selectedGame.genre}</p>
              <p>{selectedGame.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GachaGamesSection;
