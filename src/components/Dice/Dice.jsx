const DiceDot = () => {
  return <div className="h-8 w-8 rounded-full bg-stone-700"></div>;
};

const dotTemplates = [
  [],
  [4],
  [0, 8],
  [0, 4, 8],
  [0, 2, 6, 8],
  [0, 2, 4, 6, 8],
  [0, 2, 3, 5, 6, 8],
];

const Dice = ({ value }) => {
  if (!Number.isInteger(value) || value < 1 || value > 6)
    return <div>Incorrect dice value</div>;

  return (
    <div className="grid h-40 w-40 grid-cols-3 grid-rows-3 place-items-center rounded-xl border-2 border-stone-700 p-4">
      {Array(9)
        .fill(0)
        .map((_, index) =>
          dotTemplates[value].includes(index) ? (
            <DiceDot key={index} />
          ) : (
            <div key={index}></div>
          )
        )}
    </div>
  );
};

export default Dice;
