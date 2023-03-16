import React from "react";
import Dice from "../Dice/Dice";

const HistoryRecord = ({ value }) => {
  return (
    <div>
      <Dice value={value} />
    </div>
  );
};

export default HistoryRecord;
