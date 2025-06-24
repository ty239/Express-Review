import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import GifCard from "./GifCard";
import "./style.css";

const GIPHY_API_KEY = "hW5oKVSAa6CP0bxPglU1RKjIxHY3N5ky";

const App = () => {
  const [gifs, setGifs] = useState([]);

  const trendingGifs = async () => {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=10&rating=g`
    );
    setGifs(response.data.data);
  };

  useEffect(() => {
    trendingGifs();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Hello World</h1>
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
