import { BUY_CAKE } from "./cakeTypes";
const inittialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = inittialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
