import React, { useState } from "react";
import Dice from "../Dice/Dice";

const randomValue = () => {
  return Math.round(Math.random() * 5 + 1);
};

const Roller = () => {
  const [diceValue, setDiceValue] = useState(() => randomValue());

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Dice value={diceValue} />
      </div>

      <button
        className="rounded-xl border-4 border-emerald-800 bg-emerald-500 text-3xl hover:border-emerald-300 hover:bg-emerald-700"
        onClick={() => setDiceValue(randomValue())}
        type="button"
      >
        Roll
      </button>
    </div>
  );
};

export default Roller;
