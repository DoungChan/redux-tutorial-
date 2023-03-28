import { BUY_ICECREAM } from "./iceCreamTypes";
const inittialState = {
  numOfIceCreams: 20,
};
console.log("iceCreamReducer.js: inittialState: ", inittialState);

const iceCreamReducer = (state = inittialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
