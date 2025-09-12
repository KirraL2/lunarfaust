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
          "/assets/wiki/Faust2.jpg"
        ],
        abilities: [
          { name: "Direct Shot", description: "This is MY goal!" }
        ],
        relationships: [
          { name: "Doge", id: 2, relation: "Sibling", status: "Rivals" },
          { name: "Brick", id: 3, relation: "Friends", status: "Happi" },
          { name: "AbysSsian", id: 4, relation: "Friends", status: "Happi" },
          { name: "Kimo", id: 5, relation: "Mother", status: "Considerable" },
          { name: "Gabby", id: 6, relation: "Habu", status: "Yippee" },
          { name: "Ryu", id: 7, relation: "Friends", status: "Happi" },
          { name: "Kuro", id: 8, relation: "Sibling", status: "Happi" }
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
      "/assets/wiki/doge.jpg",
      "/assets/wiki/doge2.png"
    ],
    abilities: [
      { name: "“HELP ME!”", description: "1st Secret Doge Technique" },
      { name: "“I'm Out!”", description: "2nd Secret Doge Technique" }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Sibling", status: "Rivals" }
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
      "/assets/wiki/Brick1.jpg",
      "/assets/wiki/Brick2.png",
      "/assets/wiki/Brick3.png"
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
      "/assets/wiki/abyss.png",
      "/assets/wiki/abyss2.png"
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
      "/assets/wiki/kimo.jpg",
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
  },
  6: {
    name: "Gabby The Kind",
    fullTitle: "The Wrought Iron Hero",
    aliases: ["Gabs", "“Gabibi” - Faust", "“Gabby” - Everyone", "“Gabberone” - Friends"],
    description: "Overworked salary man, met an auspicious set of people when trying to find a release.",
    images: [
      "/assets/wiki/gabs.png",
    ],
    abilities: [
      { name: "Trace On", description: "Creation." },
      { name: "Househusband", description: "Can and will clean." }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Wafu", status: "Yippee" }
    ],
    trivia: [
      "People die when they are killed."
    ]
  },
  7: {
    name: "Ryu",
    fullTitle: "The Writer",
    aliases: ["Ryuu", "Ryo"],
    description: "LP Creator",
    images: [
      "/assets/wiki/Ryu.jpg",
    ],
    abilities: [
      { name: "Zen", description: "Anything they write comes to reality." }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Friend", status: "Happee" }
    ],
    trivia: [
      "Writes peak until they don't"
    ]
  },
  8: {
    name: "Haru",
    fullTitle: "The Ponderer",
    aliases: ["Kuro - Faust", "Haru", "Yuki"],
    description: "Peacemaker/OG",
    images: [
      "/assets/wiki/kuro.jpg",
    ],
    abilities: [
      { name: "Shukai", description: "The full release of his zanpakuto." }
    ],
    relationships: [
      { name: "Faust", id: 1, relation: "Sibling", status: "Happee" }
    ],
    trivia: [
      "Likes Bleach"
    ]
  }
};

function CharacterPage() {
  const { id } = useParams();
  const character = characterDatabase[id];

  const characterAudio = {
    1: "/assets/sounds/faust-theme.mp3",
    4: "/assets/sounds/abyss-theme.mp3",
    6: "/assets/sounds/gab-theme.mp3"
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