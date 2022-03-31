import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [gif, setGif] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Giphy TV</h1>
    </div>
  );
}

export default App;
