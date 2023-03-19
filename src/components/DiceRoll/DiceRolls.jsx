import { useContext } from "react";
import DiceContext from "../../context/DiceContext";
import Dice from "../Dice/Dice";

const DiceRolls = () => {
  const { rolls } = useContext(DiceContext);

  return (
    <div className="flex w-full items-center justify-center gap-10">
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
