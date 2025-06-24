import React from "react";
import "./style.css";

const GifCard = ({ gif }) => {
  return (
    <div className="gif-card">
      <img src={gif.images.original.url} alt={gif.title} />
    </div>
  );
};

export default GifCard;
