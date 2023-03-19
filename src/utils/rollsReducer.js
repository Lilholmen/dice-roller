const getRandomDiceArray = (diceAmount) => {
  const diceArray = [];

  for (let i = 0; i < diceAmount; i++) {
    diceArray.push(Math.floor(Math.random() * 6 + 1));
  }

  return diceArray;
};

export const initateState = (initialDiceAmount) => {
  const initialRoll = getRandomDiceArray(initialDiceAmount);

  return [initialRoll];
};

export const reducer = (state, action) => {
  if (action.type === "ROLL") {
    return [getRandomDiceArray(action.diceAmount), ...state];
  }

  return state;
};
