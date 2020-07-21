import { combineReducers } from "redux";
// import courses from "./courseReducer";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  //   courses: courses,
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
