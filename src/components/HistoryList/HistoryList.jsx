import React, { useState } from "react";
import HistoryRecord from "./HistoryRecord";

const HistoryList = ({ history }) => {
  const [historyRecords, setHistoryRecords] = useState([]);

  return (
    <div className="flex h-full w-1/4 flex-col gap-4 border-l-4 border-slate-700 bg-slate-400 p-4">
      {history.map((record) => (
        <HistoryRecord
          value={record[0]}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default HistoryList;
