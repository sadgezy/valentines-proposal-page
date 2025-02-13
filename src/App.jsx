import { useState } from "react";
import "./App.css";

function App() {
  const [yesSize, setYesSize] = useState(16);
  const [noClicks, setNoClicks] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Please? 🥺",
    "Pretty please? 😣",
    "For me, bebe? 🥰",
    "I’ll be the happiest person ever! 💕",
    "Don't break my heart 💔",
    "One last chance? 😭",
    "You’re my only Valentine! 💖",
  ];

  const gifsList = [
    "https://media.tenor.com/Rc052UsJUlIAAAAi/mochi-cat.gif",
    "https://media1.tenor.com/m/zRPXgiYCMIgAAAAd/love-you.gif",
    "https://media1.tenor.com/m/qpOiEqPT0o0AAAAd/hug.gif",
    "https://media.tenor.com/WLgX7t7MIhIAAAAj/pout-skillsmb.gif"
  ];
  
  const handleNoClick = () => {
    setYesSize((prev) => prev + 10);
    setNoClicks((prev) => prev + 1);

    // Cycle through messages
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);

    // Add a random GIF from gifsList
    const randomGif = gifsList[Math.floor(Math.random() * gifsList.length)];
    setGifs((prevGifs) => [...prevGifs, randomGif]);
  };

  const handleYesClick = () => {
    document.body.innerHTML = "<h1>YAY! 🎉❤️</h1><p>Best decision ever!</p>";
  };

  return (
    <div className="container">
      <div class="tenor-gif-embed" data-postid="7952242942163821023" data-share-method="host" data-aspect-ratio="1" data-width="30%"><a href="https://tenor.com/view/cat-oiiaoiia-cat-cat-spinning-gif-7952242942163821023">Cat Oiiaoiia Cat Spinning Sticker</a>from <a href="https://tenor.com/search/cat+oiiaoiia-stickers">Cat Oiiaoiia Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      <h1>Will you be my Valentine? ❤️</h1>
      <p className="begging-text">{messages[messageIndex]}</p>
      <button
        className="yes-btn"
        style={{ fontSize: `${yesSize}px` }}
        onClick={handleYesClick}
      >
        Yes
      </button>
      {noClicks < 7 && (
        <button className="no-btn" onClick={handleNoClick}>
          No
        </button>
      )}
      <div className="gif-container">
        {gifs.map((gif, index) => (
          <img key={index} src={gif} alt="Cute reaction" />
        ))}
      </div>
    </div>
  );
}

export default App;
