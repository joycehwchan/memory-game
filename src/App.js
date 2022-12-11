import React, { useState, useEffect } from "react";
import "./styles/App.css";
import randomCharacters from "./helpers/characters.js";

// Components
import Sidebar from "./components/Sidebar";
import { Card } from "./components/Card";
import { Instruction } from "./components/Instruction";

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [guessed, setGuessed] = useState([]);

  const reset = () => {
    setScore(0);
    setGuessed([]);
  };

  const handleClick = (character) => {
    if (guessed.includes(character)) {
      reset();
      return;
    }
    setGuessed(guessed.concat(character));
    setScore(score + 1);
    if (score >= best) {
      setBest(best + 1);
    }
  };

  // Player wins when all 24 characters are guessed
  useEffect(() => {
    if (score === 24) {
      reset();
      alert("すごい！あなたの勝ちだ！");
    }
  }, [score]);

  // Save best score in localStorage whenever 'best' updates
  useEffect(() => {
    localStorage.setItem("Best", best);
  }, [best]);

  // Get best score from localStorage on component mount
  useEffect(() => {
    const storedBest = parseFloat(localStorage.getItem("Best"));
    if (storedBest) {
      setBest(storedBest);
    }
  }, []);

  return (
    <div className="app">
      <Sidebar score={score} best={best} />
      <main>
        <div className="cardGrid">
          {randomCharacters().map((character) => (
            <Card
              key={character.id}
              character={character}
              handleClick={handleClick}
            />
          ))}
        </div>
      </main>
      <Instruction />
    </div>
  );
};

export default App;
