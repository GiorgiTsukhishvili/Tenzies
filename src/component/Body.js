import React, { useEffect, useState } from "react";
import uuid from "../../node_modules/uuid/dist/v4";
import Die from "./Die";
import Header from "./Header";
import Confetti from "react-confetti";
import "./Body.css";

function Body() {
  const [dice, setDice] = useState(newDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);

  useEffect(() => {
    const firstValue = dice[0].value;
    if (
      dice.filter((die) => die.isHeld === true).length === dice.length &&
      dice.filter((die) => die.value === firstValue).length === dice.length
    ) {
      setTenzies(true);
    }
  }, [dice]);

  function newDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: uuid(),
      });
    }

    return newDice;
  }

  function rollDice() {
    setDice(
      dice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.floor(Math.random() * 6 + 1) };
      })
    );

    setRolls(rolls + 1);
  }

  function hold(id) {
    setDice(
      dice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceRolls = dice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        diceState={die.isHeld}
        isHolding={hold}
        id={die.id}
      />
    );
  });

  function newGame() {
    setTenzies(false);
    setDice(newDice());
    setRolls(0);
  }

  return (
    <div className="main">
      <h1 className="score">Rolls: {rolls}</h1>
      {tenzies && <Confetti />}
      <Header />
      <div className="dice-container">{diceRolls}</div>
      <button className="roll-dice" onClick={tenzies ? newGame : rollDice}>
        {tenzies ? "Play Again" : "Roll"}
      </button>
    </div>
  );
}

export default Body;
