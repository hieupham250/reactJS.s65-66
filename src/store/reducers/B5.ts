const initialRandom: number[] = [];

const reducerRandom = (state = initialRandom, action: any) => {
  switch (action.type) {
    case "RANDOM":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducerRandom;
