import { useState } from "react";
import HistoryList from "./components/HistoryList/HistoryList";
import Roller from "./components/Roller/Roller";

import getValue from "./utils/getRandomDiceValue";

function App() {
  const [rolls, setRolls] = useState([[getValue()]]);

  return (
    <div className="flex h-screen w-full justify-between gap-10 bg-stone-300">
      <Roller
        value={rolls[0]}
        rollDice={() => setRolls((current) => [[getValue()], ...current])}
      />
      <HistoryList history={rolls} />
    </div>
  );
}

export default App;
