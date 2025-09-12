import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WikiStyles.css';

function Wikisth() {
  const allCharacters = [
    {
      id: 1,
      name: "Faust",
      image: "/assets/wiki/Faust2.jpg",
      shortDesc: "The Egoist",
      category: "ME!"
    },
    {
      id: 6,
      name: "Gabby",
      image: "/assets/wiki/gabs.png",
      shortDesc: "Wrought Iron",
      category: "The GABS Section"
    },
    {
      id: 2,
      name: "Doge",
      image: "/assets/wiki/doge.jpg",
      shortDesc: "My IRL Friend !",
      category: "Friends"
    },
    {
      id: 3,
      name: "Brick || Kyriaki",
      image: "/assets/wiki/Brick1.jpg",
      shortDesc: "Bwicc",
      category: "Friends"
    },
    {
      id: 4,
      name: "AbysSsian",
      image: "/assets/wiki/abyss.png",
      shortDesc: "Website Contributor",
      category: "Friends"
    },
    {
      id: 5,
      name: "Kimo",
      image: "/assets/wiki/kimo.jpg",
      shortDesc: "The Mother",
      category: "Friends"
    },
    {
      id: 7,
      name: "Ryu",
      image: "/assets/wiki/Ryu.jpg",
      shortDesc: "The Writer",
      category: "Friends"
    },
    {
      id: 8,
      name: "Haru",
      image: "/assets/wiki/kuro.jpg",
      shortDesc: "The Ponderer",
      category: "Friends"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter characters based on search term
  const filteredCharacters = allCharacters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered characters by category
  const charactersByCategory = filteredCharacters.reduce((acc, character) => {
    if (!acc[character.category]) {
      acc[character.category] = [];
    }
    acc[character.category].push(character);
    return acc;
  }, {});

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission reload
    // Filtering happens automatically through state change
  };

  return (
    <div className="wiki-front-page">
      <header className="wiki-header">
        <div className="wiki-logo">
          <h1>Faust's Friends! (WIP)</h1>
          <p>(Mostly RP friends but shh)</p>
        </div>
        <form className="search-box" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search the wiki..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main className="wiki-main-content">
        <section className="welcome-banner">
          <div className="welcome-text">
            <h2>Welcome to my personal Wiki-like page!!</h2>
            <p>Explore everything about me and my friends!</p>
          </div>
          <div className="wiki-stats">
            <div className="stat-item">
              <span className="stat-number">{allCharacters.length}</span>
              <span className="stat-label">Characters</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">A lot</span>
              <span className="stat-label">Discord-verse</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">My Personal OCs</span>
            </div>
          </div>
        </section>

        {filteredCharacters.length === 0 && searchTerm ? (
          <div className="no-results-message">
            <h3>No characters found matching "{searchTerm}"</h3>
            <button onClick={() => setSearchTerm('')}>Clear search</button>
          </div>
        ) : (
          <>
            {Object.entries(charactersByCategory).map(([category, characters]) => (
              <section key={category} className="character-section">
                <h2 className="section-title">{category}</h2>
                {characters.length > 0 ? (
                  <div className="character-grid">
                    {characters.map(character => (
                      <Link to={`/character/${character.id}`} key={character.id} className="character-card">
                        <div className="character-image-container">
                          <img src={character.image} alt={character.name} className="character-image" />
                        </div>
                        <div className="character-info">
                          <h3 className="character-name">{character.name}</h3>
                          <p className="character-desc">{character.shortDesc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="no-results">No characters found in this category</p>
                )}
              </section>
            ))}

            <section className="recent-updates">
              <h2 className="section-title">Recent Updates</h2>
              <ul className="update-list">
                <li>Updated Faust profile, added Gabs, Ryu, and Kuro(Haru) (September 12, 2025)</li>
                <li>Added Faust, Doge, AbysSsian, Kimo and Brick (April 15, 2025)</li>
                <li>Started Developing the Wiki-like webpage (April 15, 2025)</li>
              </ul>
            </section>
          </>
        )}
      </main>

      <footer className="wiki-footer">
        <p>© {new Date().getFullYear()} Made by Lunar.Faust!</p>
        <div className="footer-links">
        </div>
      </footer>
    </div>
  );
}

export default Wikisth;