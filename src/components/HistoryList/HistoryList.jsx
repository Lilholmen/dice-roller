import { useContext } from "react";
import DiceContext from "../../context/DiceContext";
import HistoryRecord from "./HistoryRecord";

const HistoryList = () => {
  const { rolls } = useContext(DiceContext);

  return (
    <div className="flex h-1/2 w-full flex-col gap-4 border-t-4 border-slate-700 bg-slate-400 p-4">
      {rolls.map((record) => (
        <HistoryRecord
          value={record}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default HistoryList;
