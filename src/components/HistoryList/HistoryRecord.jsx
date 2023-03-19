import React from "react";
import Dice from "../Dice/Dice";

const HistoryRecord = ({ value }) => {
  return (
    <div>
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
