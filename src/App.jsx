import { useState } from "react";
import DiceRolls from "./components/DiceRoll/DiceRolls";
import HistoryList from "./components/HistoryList/HistoryList";
import RollController from "./components/RollController/RollController";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-stone-300 p-8">
      <div className="flex w-full flex-col items-center gap-6">
        <DiceRolls />
        <RollController />
      </div>

      <HistoryList />
    </div>
  );
}

export default App;
