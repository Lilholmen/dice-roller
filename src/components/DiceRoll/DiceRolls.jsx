import { useContext } from "react";
import DiceContext from "../../context/DiceContext";
import Dice from "../Dice/Dice";

const DiceRolls = () => {
  const { rolls } = useContext(DiceContext);

  return (
    <div className="flex w-min gap-8 rounded-2xl bg-slate-200 p-4 shadow-xl">
      {rolls[0].map((dice, i) => (
        <Dice
          key={i}
          value={dice}
          diceSize={4}
        />
      ))}
    </div>
  );
};

export default DiceRolls;
