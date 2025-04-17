import { useState } from "react";

import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice(10));

  function generateAllNewDice(diceAmount) {
    const newDiceArray = [];
    for (let i = 0; i < diceAmount; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      newDiceArray.push(roll);
    }
    return newDiceArray;
  }

  function rollDice() {
    setDice(generateAllNewDice(10));
  }

  const diceElements = dice.map((number, index) => (
    <Die key={index} value={number} />
  ));

  return (
    <main>
      <section className="dice-container">{diceElements}</section>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
