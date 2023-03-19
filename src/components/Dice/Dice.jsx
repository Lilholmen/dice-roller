import DiceFace from "./DiceFace";

const DiceContainer = ({ diceSize, children }) => {
  if (diceSize === 4)
    return (
      <div className="h-40 w-40 rounded-3xl border-4 border-stone-700 p-4">
        {children}
      </div>
    );
  if (diceSize === 2)
    return (
      <div className="h-20 w-20 rounded-xl border-2 border-stone-700 p-2">
        {children}
      </div>
    );

  return (
    <div className="h-10 w-10 rounded-md border border-stone-700 p-1">
      {children}
    </div>
  );
};

const Dice = ({ value, diceSize }) => {
  if (!Number.isInteger(value) || value < 1 || value > 6)
    return <div>Incorrect dice value</div>;

  return (
    <DiceContainer diceSize={diceSize}>
      <DiceFace
        value={value}
        dotSize={diceSize}
      />
    </DiceContainer>
  );
};

export default Dice;
