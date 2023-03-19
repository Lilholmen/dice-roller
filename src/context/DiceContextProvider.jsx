import { useReducer, useState } from "react";

import DiceContext from "./DiceContext";

import { reducer, initateState } from "../utils/rollsReducer";

const DiceContextProvider = ({ children }) => {
  const [rolls, dispatchRolls] = useReducer(reducer, 4, initateState);
  const [diceAmount, setDiceAmount] = useState(4);

  const roll = () => {
    dispatchRolls({ type: "ROLL", diceAmount });
  };

  const increaseDiceAmount = () => {
    if (diceAmount < 6) setDiceAmount((prev) => prev + 1);
  };

  const decreaseDiceAmount = () => {
    if (diceAmount > 1) setDiceAmount((prev) => prev - 1);
  };

  return (
    <DiceContext.Provider
      value={{
        rolls,
        rollDice: roll,
        increaseDiceAmount,
        decreaseDiceAmount,
        diceAmount,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;
