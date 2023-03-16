import React, { useState } from "react";
import Dice from "../Dice/Dice";

const Roller = ({ value, rollDice }) => {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center gap-10">
      <div>
        <Dice value={value[0]} />
      </div>

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

export default Roller;
