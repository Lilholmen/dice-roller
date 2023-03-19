import { useContext } from "react";
import DiceContext from "../../context/DiceContext";
import HistoryRecord from "./HistoryRecord";

const HistoryList = () => {
  const { rolls } = useContext(DiceContext);

  return (
    <div className="flex w-full flex-col flex-wrap gap-4 rounded-3xl bg-slate-400 p-6">
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
