const DiceDot = ({ dotSize }) => {
  if (dotSize === 4)
    return <div className="h-8 w-8 rounded-full bg-stone-700"></div>;
  if (dotSize === 2)
    return <div className="h-4 w-4 rounded-full bg-stone-700"></div>;
  return <div className="h-2 w-2 rounded-full bg-stone-700"></div>;
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

const DiceFace = ({ value, dotSize }) => {
  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-3 place-items-center">
      {Array(9)
        .fill(0)
        .map((_, index) =>
          dotTemplates[value].includes(index) ? (
            <DiceDot
              key={index}
              dotSize={dotSize}
            />
          ) : (
            <div key={index}></div>
          )
        )}
    </div>
  );
};

export default DiceFace;
