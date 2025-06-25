import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title"></h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
