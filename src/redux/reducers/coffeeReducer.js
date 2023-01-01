import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState";

const coffeeReducer = (state = initialState.coffeeState, action) => {
  
  switch (action.type) {
    case actionTypes.GET_COFFEES:
      return { ...state, coffeesTable: action?.coffeesDB };
    default:
      return state
  }
  
};

export default coffeeReducer
