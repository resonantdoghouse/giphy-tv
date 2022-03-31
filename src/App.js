import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    getRandomGif();
  }, []);

  const getRandomGif = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?rating=g&api_key=${'CzT2T3MPsJggrpCiPFitxUC1Gxp7XAkp'}`
      )
      .then((response) => {
        setGif(response.data.data.images.original.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Giphy TV</h1>
      {gif && (
        <img
          onClick={getRandomGif}
          className="gif"
          src={gif}
          alt="giphy random"
        />
      )}
    </div>
  );
}

export default App;
