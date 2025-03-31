import React from "react";
import './MyFavouriteGachaGames.css';

const gachaGames = [
    {
    name: "Genshin Impact",
    image: "public/assets/mizuki.jpg",
    },
  {
    name: "Arknights",
    image: "public/assets/skadi.jpg",
  },
  {
    name: "Honkai: Star Rail",
    image: "assets/cass.jpg",
  },
  
];

const GachaGamesSection = () => {
    return (
        <div className="gacha-container">
          <h2 className="gacha-title">My Favorite Games!</h2>
          <div className="gacha-grid">
            {gachaGames.map((game, index) => (
              <div className="gacha-card" key={index}>
                <img src={game.image} alt={game.name} className="gacha-image" />
                <div className="gacha-name">{game.name}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default GachaGamesSection;
