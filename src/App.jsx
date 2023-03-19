import { useState } from "react";
import DiceRolls from "./components/DiceRoll/DiceRolls";
import HistoryList from "./components/HistoryList/HistoryList";
import RollController from "./components/RollController/RollController";

function App() {
  return (
    <div className="flex h-screen w-full flex-col justify-between gap-10 bg-stone-300">
      <div className="h-1/2 w-full">
        <DiceRolls />
        <RollController />
      </div>

      <HistoryList />
    </div>
  );
}

export default App;
