import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  console.log("%cauthorReducer", "color: blue");
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      console.log("LOAD_AUTHORS_SUCCESS");
      console.log(action.authors);
      return action.authors;
    default:
      return state;
  }
}
