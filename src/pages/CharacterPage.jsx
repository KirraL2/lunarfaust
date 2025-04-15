import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './WikiStyles.css';

// Sample data - replace with your actual content
const characterDatabase = {
    1: {
        name: "Faust",
        fullTitle: "“I, AM ME!” - This Egoistic girl is very confident in herself.",
        aliases: ["lunar - Me"],
        description: "She's sometimes rational, sometimes loses it, sometimes smart and sometimes really good at games.",
        images: [
          "/public/assets/wiki/Faust.png"
        ],
        abilities: [
          { name: "Direct Shot", description: "This is MY goal!" }
        ],
        relationships: [
          { name: "Doge", id: 2, relation: "Brother", status: "Rivals" },
          { name: "Brick", id: 3, relation: "Friends", status: "Happi" },
          { name: "AbysSsian", id: 4, relation: "Friends", status: "Happi" }
        ],
        trivia: [
          "She might be the Seer."
        ]
      },
  2: {
    name: "Doge",
    fullTitle: "He's a very funny and sometimes auti-",
    aliases: ["Dog - Kuro", "STUPID DOG - Shinko", "STOP THROWI- - Me"],
    description: "Faust's very own IRL friend and a genuinely funny doge.",
    images: [
      "https://cdn.discordapp.com/attachments/672014333609377837/1361637194430681348/21a9ba5970036c4981a9981949060c61.jpg?ex=67ff7af5&is=67fe2975&hm=3ec3745aee25c537de2496b0ef7e76448a7e7984d89de6ebb9a9d508c0cb43d3&",
      "https://cdn.discordapp.com/attachments/672014333609377837/1361635619616460800/Screenshot_2025-04-15_173321.png?ex=67ff797d&is=67fe27fd&hm=fcbd695c98694171ab0e6d596a0208d0db93b5030e34267ca69fc9b9b59f8400&"
    ],
    abilities: [
      { name: "“HELP ME!”", description: "1st Secret Doge Technique" },
      { name: "“I'm Out!”", description: "2nd Secret Doge Technique" }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Sister", status: "Rivals" }
    ],
    trivia: [
      "He's 19 but he sounds like an anime girl"
    ]
  },
  3: {
    name: "Brick || Kyriaki",
    fullTitle: "Hunter of Bricks.",
    aliases: ["“Brick” - Everyone", "Hunter", "Bricc"],
    description: "𝓑𝓡𝓘𝓒𝓚 // Likes Sunday",
    images: [
      "/public/assets/wiki/Brick1.jpg",
      "/public/assets/wiki/Brick2.png",
      "/public/assets/wiki/Brick3.png"
    ],
    abilities: [
      { name: "“Bless you.”", description: "Advances the buffed character forward." }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Friends", status: "Happi" },
      { name: "Doge", id: 2, relation: "Friends", status: "Happi !" }
    ],
    trivia: [
      "10th Grader Wanker"
    ]
  },
  4: {
    name: "AbysSsian",
    fullTitle: "s̵̡̖̼̲͙̲̞͔̦͈͔̼̺͍̪̺͔̭̈́̐u̸̧̢̞̜̝̗̣̜̘̠͙͇̗̠͈̰̗̗͙̭͆̒̍̓̽̇̆̄̋̌̉̇̀̏̾̚̚͠p̷̪͍͇̥̮̭͍̱̙̦͗́͜ ̶̢̡̯̣͓͍͍̰̳͇͓͙̭̭̏g̴̨̗̤̤̺̲͇͔̅͌̿͊̽̈͠͠͝͠ą̷͓̥̩̠̖̼͔̮̭͎̱̮̤̉͌͑̋̄̀͂̿̕͜͝m̶̧̙͕̥̣̥͇͖̗͓͎͉͍̳̝̞̩̬͍̮͍̯̾̿̌̆̇̑͜e̶̡̛͙̞̠̭͖̫̱̋̇̓̓̾̎̾̏̈́̑́̐̋̒͋̈́̈́̉̚͘͜͜r̶̨̼͍̻͉̥̘̺͖͉͙̟̲̗̬͗̇̐͒̀̂̑̓̀̒̄͛̕͜͝͝s̵̡̮͕̞̤̣͍̯̙̆̓͊̓͗̔̇̈́͋́̓̈́̓̋͂",
    aliases: ["Abyss"],
    description: "Gamer, Artist, Graphic Designer and Programmer.",
    images: [
      "/public/assets/wiki/abyss.png",
      "/public/assets/wiki/abyss2.png"
    ],
    abilities: [
      { name: "Dark Abyssal Forces", description: "PsychoTelekinesis basically" }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Friends", status: "Contributor" }
    ],
    trivia: [
      "Sometimes is a gyal."
    ]
  },
  5: {
    name: "Kimo",
    fullTitle: "Le Mom",
    aliases: ["Kimomo", "“Mother” - Faust"],
    description: "Nephis Mom",
    images: [
      "/public/assets/wiki/kimo.jpg",
    ],
    abilities: [
      { name: "Sorcery of Names", description: "Shaping." }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Daughter", status: "Considerable" }
    ],
    trivia: [
      "MOM"
    ]
  }
};

function CharacterPage() {
  const { id } = useParams();
  const character = characterDatabase[id];

  const characterAudio = {
    1: "/public/assets/sounds/faust-theme.mp3",
    4: "/public/assets/sounds/abyss-theme.mp3"
  };

  if (!character) {
    return (
      <div className="character-not-found">
        <h2>Character not found</h2>
        <Link to="/Wikisth" className="back-button">Return to Wiki Home</Link>
      </div>
    );
  }

  return (
    <div className="character-page">
      <header className="character-header">
        <nav className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <Link to="/Wikisth">Wiki</Link> &gt; <span>{character.name}</span>
        </nav>
        <h1>{character.name}</h1>
        <h2>{character.fullTitle}</h2>
      </header>

      <div className="character-layout">
        <aside className="character-sidebar">
          <div className="character-portrait">
            <img src={character.images[0]} alt={character.name} />
          </div>
          
          <div className="quick-facts">
            <h3>Quick Facts</h3>
            <div className="fact-group">
              <h4>Aliases</h4>
              <ul>
                {character.aliases.map((alias, index) => (
                  <li key={index}>{alias}</li>
                ))}
              </ul>
            </div>

            <div className="fact-group">
              <h4>Abilities</h4>
              <ul>
                {character.abilities.map((ability, index) => (
                  <li key={index}>
                    <strong>{ability.name}:</strong> {ability.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="audio-player-section">
            <h3>Theme Music</h3> <h6>(Music may be loud lower volume-)</h6>
            {characterAudio[id] ? (
              <audio controls className="character-audio">
                <source src={characterAudio[id]} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : (
              <p className="no-audio">No theme music available</p>
            )}
          </div>
        </aside>

        <main className="character-main">
          <section className="character-bio">
            <h2>Biography</h2>
            <p>{character.description}</p>
          </section>

          <section className="character-relationships">
            <h2>Relationships</h2>
            <table>
  <thead>
    <tr>
      <th>Character</th>
      <th>Relation</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {character.relationships.map((rel, index) => (
      <tr key={index}>
        <td>
          <Link to={`/character/${rel.id}`} className="relationship-link">
            {rel.name}
          </Link>
        </td>
        <td>{rel.relation}</td>
        <td>{rel.status}</td>
      </tr>
    ))}
  </tbody>
</table>
          </section>

          <section className="character-gallery">
            <h2>Gallery</h2> <h6><i>(P.S; open image in new tab for full img)</i></h6>
            <div className="gallery-grid">
              {character.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${character.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {character.trivia && (
            <section className="character-trivia">
              <h2>Trivia</h2>
              <ul>
                {character.trivia.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>

      <footer className="character-footer">
        <p>Last edited: {new Date().toLocaleDateString()}</p>
        <Link to="/Wikisth" className="back-button">Back to Wiki</Link>
      </footer>
    </div>
  );
}

export default CharacterPage;