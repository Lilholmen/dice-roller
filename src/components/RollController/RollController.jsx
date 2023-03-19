import React, { useContext } from "react";
import DiceContext from "../../context/DiceContext";

const RollController = () => {
  const { rollDice } = useContext(DiceContext);

  return (
    <div>
      <button
        className="rounded-xl border-4 border-emerald-800 bg-emerald-500 text-3xl hover:border-emerald-300 hover:bg-emerald-700"
        onClick={rollDice}
        type="button"
      >
        Roll
      </button>
    </div>
  );
};

export default RollController;
