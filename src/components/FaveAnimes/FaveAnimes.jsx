import React, { useState } from 'react';
import './FaveAnimes.css';

const FaveAnimes = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(3); // Center position

  const animeList = [      
    {
      id: 1,
      title: "1. That Time I got Reincarnated as a Slime (TenSura)",
      image: "/assets/tensura.png",
      genre: ["Action, ", "Comedy, ", "Fantasy"],
      seasons: 3,
      description: `            Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.

            When Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities. He then stumbles upon the sealed Catastrophe-level monster "Storm Dragon" Veldora who had been sealed away for the past 300 years for devastating a town to ashes. Sympathetic to his predicament, Satoru befriends him, promising to assist in destroying the seal. In return, Veldora bestows upon him the name Rimuru Tempest to grant him divine protection.

            Now, liberated from the mundanities of his past life, Rimuru embarks on a fresh journey with a distinct goal in mind. As he grows accustomed to his new physique, his gooey antics ripple throughout the world, gradually altering his fate.`,
      favoriteCharacter: "Hinata Sakaguchi"
    },
    {
        id: 2,
        title: "2. The Apothecary Diaries",
        image: "/assets/knh.jpg",
        genre: ["Drama, ", "Mystery"],  // Fixed: Now an array
        seasons: 2,
        description: `          Maomao, an apothecary's daughter, has been plucked from her peaceful life and sold to the lowest echelons of the imperial court. Now merely a maid, Maomao settles into her new mundane life and hides her extensive knowledge of medicine in order to avoid any unwanted attention.
    
          Not long after Maomao's arrival, the emperor's infant children inexplicably begin to experience grave symptoms—almost as if a curse has been cast. The curious Maomao easily solves the mystery and, to remain out of the limelight, attempts to leave an anonymous tip. Unfortunately, the dashing and perceptive eunuch Jinshi sees through it and manages to single her out.
      
          In recognition of her talent, Maomao is promoted to lady-in-waiting for the emperor's favorite concubine, Gyokuyou. As Maomao continues to remedy the numerous ailments afflicting the imperial court, her pharmaceutical expertise quickly proves indispensable.`,
        favoriteCharacter: "Maomao"
      },
    {
        id: 3,
        title: "3. Fate/Zero",
        image: "/assets/fate.jpg",
        genre: ["Action, ", "Fantasy"],
        seasons: 2,
        description: `          With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

            Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.

            Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.`,
        favoriteCharacter: "Artoria Pendragon"
      },
      {
        id: 4,
        title: "4. Solo Leveling",
        image: "/assets/sl.png",
        genre: ["Action, ", "Adventure, ", "Fantasy"],
        seasons: 2,
        description: `          Humanity was caught at a precipice a decade ago when the first gates—portals linked with other dimensions that harbor monsters immune to conventional weaponry—emerged around the world. Alongside the appearance of the gates, various humans were transformed into hunters and bestowed superhuman abilities. Responsible for entering the gates and clearing the dungeons within, many hunters chose to form guilds to secure their livelihoods.

            Sung Jin-Woo is an E-rank hunter dubbed as the weakest hunter of all mankind. While exploring a supposedly safe dungeon, he and his party encounter an unusual tunnel leading to a deeper area. Enticed by the prospect of treasure, the group presses forward, only to be confronted with horrors beyond their imagination. Miraculously, Jin-Woo survives the incident and soon finds that he now has access to an interface visible only to him. This mysterious system promises him the power he has long dreamed of—but everything comes at a price.`,
        favoriteCharacter: "Cha Hae-In"
      },
    {
        id: 5,
        title: "5. Goblin Slayer",
        image: "/assets/gbsl.jpg",
        genre: ["Action, ", "Adventure, ", "Fantasy"],
        seasons: 2,
        description: `          Goblins are known for their ferocity, cunning, and rapid reproduction, but their reputation as the lowliest of monsters causes their threat to be overlooked. Raiding rural civilizations to kidnap females of other species for breeding, these vile creatures are free to continue their onslaught as adventurers turn a blind eye in favor of more rewarding assignments with larger bounties.

            To commemorate her first day as a Porcelain-ranked adventurer, the 15-year-old Priestess joins a band of young, enthusiastic rookies to investigate a tribe of goblins responsible for the disappearance of several village women. Unprepared and inexperienced, the group soon faces its inevitable demise from an ambush while exploring a cave. With no one else left standing, the terrified Priestess accepts her fate—until the Goblin Slayer unexpectedly appears to not only rescue her with little effort, but destroy the entire goblin nest.

            As a holder of the prestigious Silver rank, the Goblin Slayer allows her to accompany him as he assists the Adventurer's Guild in all goblin-related matters. Together with the Priestess, High Elf, Dwarf, and Lizardman, the armored warrior will not rest until every single goblin in the frontier lands has been eradicated for good.`,
        favoriteCharacter: "Priestess"
      },
      {
        id: 6,
        title: "6. Zenshuu.",
        image: "/assets/zenshuu.jpg",
        genre: ["Action, ", "Fantasy"],
        seasons: 1,
        description: `          After graduating from high school, Natsuko Hirose starts her career as an animator. Her talent quickly flourishes, and she makes her debut as a director in no time. Her first anime becomes a massive hit, sparking a social phenomenon and earning her recognition as an up-and-coming genius director. Her next project is set to be a romantic comedy movie themed around first love! However, having never been in love herself, Natsuko struggles to understand the concept of first love, and as a result, she's unable to create the storyboard, causing the movie production to come to a standstill. One day, she passes out while working on her storyboard and wakes up in the world of her favorite childhood anime movie "A Tale of Perishing."`,
        favoriteCharacter: "Hirose Natsuko"
      },
  ];

  const handlePrev = () => {
    setCurrentPosition(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPosition(prev => Math.min(animeList.length, prev + 1));
  };

  return (
    <section className="anime-section">
      <h2 className="section-title">My Top 6 Favourite Animes</h2>
      
      <div className="carousel-container">
        <button className="nav-button prev" onClick={handlePrev}>&lt;</button>
        
        <div className="carousel-track" style={{ '--position': currentPosition }}>
          {animeList.map((anime, index) => (
            <div 
              key={anime.id}
              className={`carousel-item ${currentPosition === index + 1 ? 'active' : ''}`}
              style={{ '--offset': index + 1 }}
              onClick={() => setSelectedAnime(anime)}
            >
              <div className="image-container">
                <img 
                  src={anime.image} 
                  alt={anime.title} 
                  loading="lazy"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-button next" onClick={handleNext}>&gt;</button>
      </div>

      {selectedAnime && (
        <div className="anime-modal" onClick={() => setSelectedAnime(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedAnime(null)}>
              &times;
            </button>
            <img 
              src={selectedAnime.image} 
              alt={selectedAnime.title} 
              className="modal-image"
            />
            <div className="modal-details">
              <h3>{selectedAnime.title}</h3>
              <div className="tags">
                <span className="tag">{selectedAnime.genre}</span>
                <span className="tag">{selectedAnime.seasons} Seasons</span>
              </div>
              <p>{selectedAnime.description}</p>
              <p className="favorite">
                <strong>Favorite Character:</strong> {selectedAnime.favoriteCharacter}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FaveAnimes;