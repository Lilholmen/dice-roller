import React, { useContext } from "react";
import Dice from "../Dice/Dice";

const HistoryRecord = ({ value }) => {
  return (
    <div className="flex w-min gap-2 border-b border-slate-700 px-4 pb-2">
      {value.map((dice, i) => (
        <Dice
          key={i}
          value={dice}
          diceSize={1}
        />
      ))}
    </div>
  );
};

export default HistoryRecord;
