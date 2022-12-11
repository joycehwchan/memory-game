// import React, { useState, useEffect } from "react";
import "./styles/App.css";
import randomCharacters from "./helpers/characters.js";

// Components
import Sidebar from "./components/Sidebar";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <div className="cardGrid">
          {randomCharacters().map((character) => (
            <Card
              key={character.id}
              character={character}
              // handleClick={handleClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
