import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice(10));

  function generateAllNewDice(diceAmount) {
    const newDiceArray = [];
    for (let i = 0; i < diceAmount; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      newDiceArray.push({
        value: roll,
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDiceArray;
  }

  function rollDice() {
    setDice(generateAllNewDice(10));
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        }
        return die;
      })
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      clickFunction={() => holdDice(dieObj.id)}
    />
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
