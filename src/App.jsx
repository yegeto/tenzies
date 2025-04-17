import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice(10));

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

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
    setDice((prevDice) =>
      prevDice.map((die) => (die.isHeld ? die : generateAllNewDice(1)[0]))
    );
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
