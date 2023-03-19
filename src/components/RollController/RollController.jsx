import React, { useContext } from "react";
import DiceContext from "../../context/DiceContext";
import ControlButton from "./ControlButton";

const RollController = () => {
  const { rollDice, increaseDiceAmount, decreaseDiceAmount, diceAmount } =
    useContext(DiceContext);

  return (
    <div className="flex items-center gap-16 text-5xl">
      <ControlButton action={rollDice}>Roll</ControlButton>x{diceAmount}
      <ControlButton action={increaseDiceAmount}>+</ControlButton>
      <ControlButton action={decreaseDiceAmount}>-</ControlButton>
    </div>
  );
};

export default RollController;
